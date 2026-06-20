import { ActionError, defineAction } from "astro:actions";
import { render } from "@react-email/render";
import { captureException } from "@sentry/astro";
import { z } from "astro/zod";
import { Resend } from "resend";
import {
  EmailContact,
  type IFormContactData,
} from "@/components/email-template";
import { BUSINESS_CONFIG } from "@/config/business";
import { truncate } from "@/lib/truncate";

interface IEmailData {
  email: string;
  message?: string | null;
  name: string;
  phone: string;
}

const BCC_EMAIL = Array.isArray(BUSINESS_CONFIG.settings?.bccEmail)
  ? BUSINESS_CONFIG.settings?.bccEmail
  : [];
const EMAIL_SENDER =
  import.meta.env.EMAIL_SENDER || BUSINESS_CONFIG.settings?.emailSender;
const RESEND_KEY =
  import.meta.env.RESEND_API_TOKEN || import.meta.env.RESEND_API_KEY;

console.log("Email Config Check:", {
  hasResendKey: !!RESEND_KEY,
  sender: EMAIL_SENDER,
  mode: import.meta.env.MODE,
});

const resend = new Resend(RESEND_KEY || "re_xxxxxxxxxxxxxxxxxxxxxxxxxxx");

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      name: z
        .string({
          message: "El nombre es requerido",
        })
        .min(3, {
          message: "El nombre debe tener al menos 3 caracteres",
        }),

      email: z.email("El correo electrónico no es válido."),

      phone: z
        .string({
          message: "El número de teléfono es requerido",
        })
        .min(8, {
          message: "El número de teléfono debe tener exactamente 8 caracteres",
        })
        .max(8, {
          message: "El número de teléfono debe tener exactamente 8 caracteres",
        })
        .regex(/^\d+$/, { message: "Solo se permiten números" }),

      message: z
        .string({
          message: "Mensaje no valido",
        })
        .max(300, {
          message: "El mensaje no puede exceder los 300 caracteres",
        })
        .nullable(),
    }),

    handler: async (contact: IEmailData) => {
      try {
        const { name, message, email, phone } = contact;

        if (!EMAIL_SENDER) {
          console.error(
            "CRITICAL: EMAIL_SENDER is not defined in .env or business.json"
          );
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Configuración de remitente faltante",
          });
        }

        const DATA_STRUCTURE: IFormContactData[] = [
          { name: "Nombre", value: name },
          { name: "Correo Electronico", value: email },
          { name: "Teléfono", value: phone },
          { name: "Mensaje", value: message },
        ];

        const preview: string = message
          ? truncate(message, 30)
          : "Datos del formulario de contacto";
        const isDev = import.meta.env.MODE === "development";
        const bcc = isDev
          ? []
          : BUSINESS_CONFIG.settings?.resendToCompany
            ? [...BCC_EMAIL, BUSINESS_CONFIG.contact.email.trim()]
            : [...BCC_EMAIL];

        console.log(
          `Sending email from: ${EMAIL_SENDER} to: ${contact.email.trim()}`
        );

        const resResend = await resend.emails.send({
          from: `${BUSINESS_CONFIG.name} <${EMAIL_SENDER}>`,
          to: contact.email.trim(),
          bcc,
          replyTo: BUSINESS_CONFIG.contact.email.trim(),
          subject: `Formulario de contacto - ${BUSINESS_CONFIG.name}`,
          html: await render(
            EmailContact({
              preview,
              business: {
                contactEmail: BUSINESS_CONFIG.contact.email.trim(),
                name: BUSINESS_CONFIG.name,
                website: BUSINESS_CONFIG.site,
                social: {
                  facebook: BUSINESS_CONFIG.social?.facebook,
                  instagram: BUSINESS_CONFIG.social?.instagram,
                  tiktok: BUSINESS_CONFIG.social?.tiktok,
                  whatsapp: BUSINESS_CONFIG.contact?.whatsapp
                    ? `https://wa.me/${BUSINESS_CONFIG.contact.whatsapp.ext}${BUSINESS_CONFIG.contact.whatsapp.number}`
                    : undefined,
                },
              },
              logo: {
                src:
                  (BUSINESS_CONFIG as { logoEmail?: string }).logoEmail || "",
                width: 150,
              },
              data: DATA_STRUCTURE,
            })
          ),
        });

        if (resResend.error) {
          console.error("Resend API Error:", resResend.error);
          captureException(resResend.error, {
            level: "error",
            extra: { contact },
          });
          throw new ActionError({
            code: "BAD_REQUEST",
            message:
              resResend.error.message ||
              "Error al enviar el correo electrónico",
          });
        }

        return { status: true, message: "Correo enviado exitosamente" };
      } catch (error) {
        console.error("Action Contact Error:", error);
        if (error instanceof ActionError) {
          throw error;
        }

        captureException(error, { level: "error", extra: { contact } });
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Error al enviar el correo electrónico",
        });
      }
    },
  }),
};
