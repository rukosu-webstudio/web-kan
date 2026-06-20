import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export interface IFormContactData {
  colSpan?: "full" | "normal";
  name: string;
  showEmpty?: boolean;
  value: string | number | null | undefined;
}

export interface IEmailTemplate {
  business: {
    name: string;
    website: string;
    contactEmail: string;
  };
  data: IFormContactData[];
  lang?: "es" | "en";
  logo: {
    src: string;
    width?: number;
    alt?: string;
    className?: string;
  };
  preview: string;
  subtitle?: string | null;
  title?: string;
}

const translations = {
  es: {
    consultant: "Un consultor se pondrá en contacto con usted en breve.",
    moreInfo: "Para más información, contacta a:",
    poweredBy: "Powered by",
    socialLinks: {
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      helpCenter: "Centro de ayuda",
    },
    contactUs: "Contacta a nosotros si tienes alguna pregunta.",
    copyright: "Todos los derechos reservados.",
  },
  en: {
    consultant: "A consultant will contact you shortly.",
    moreInfo: "For more information, contact:",
    poweredBy: "Powered by",
    socialLinks: {
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
      helpCenter: "Help Center",
    },
    contactUs: "Contact us if you have any questions.",
    copyright: "All rights reserved.",
  },
};

const PUBLIC_PATH_REGEX = /^(\/)?public/;

export const EmailContact = ({
  preview,
  title,
  subtitle,
  logo,
  business,
  data,
  lang = "es",
}: IEmailTemplate) => {
  const t = translations[lang];

  // Resolves paths like "/public/images/logo.png" to absolute URLs for email clients
  const getAbsoluteUrl = (path: string, siteUrl: string) => {
    if (!path) {
      return "";
    }
    if (path.startsWith("http")) {
      return path;
    }
    const cleanPath = path.replace(PUBLIC_PATH_REGEX, "");
    const base = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
    const relative = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
    return `${base}${relative}`;
  };

  const logoSrc = getAbsoluteUrl(logo.src, business.website);

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body
          className="bg-[#f6f6f6] py-10"
          style={{
            fontFamily:
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
          }}
        >
          <Container className="mx-auto w-[480px] rounded-none border border-[#e0e0e0] bg-white">
            {/* Header: Brand Banner */}
            <Section className="w-full border-[#ff8d28] border-b-[3px] bg-black py-8 text-center">
              {logoSrc && (
                <Link className="mx-auto inline-block" href={business.website}>
                  <Img
                    alt={logo?.alt ?? business.name}
                    className="mx-auto block h-auto"
                    src={logoSrc}
                    style={{
                      maxWidth: `${logo?.width ?? 130}px`,
                      width: `${logo?.width ?? 130}px`,
                    }}
                  />
                </Link>
              )}
            </Section>

            {/* Email Title & Subtitle */}
            <Section className="px-8 pt-8 pb-4">
              <Text className="m-0 text-left font-bold text-[20px] text-black uppercase tracking-wider">
                {title}
              </Text>
              {subtitle && (
                <Text className="mt-2 text-[#666666] text-[14px] leading-[22px]">
                  {subtitle}
                </Text>
              )}
            </Section>

            {/* Form Fields Card */}
            <Section className="px-8 pb-6">
              <Section className="rounded-none border border-[#e0e0e0] bg-[#fdfdfd] p-[20px]">
                {data.map((input) => {
                  if (!(input?.showEmpty || input?.value)) {
                    return null;
                  }

                  if (input.colSpan === "full") {
                    return (
                      <Section className="mb-[16px] last:mb-0" key={input.name}>
                        <Text className="m-0 font-semibold text-[#888888] text-[11px] uppercase tracking-wider">
                          {input.name}
                        </Text>
                        <Text className="mt-[4px] font-medium text-[14px] text-black leading-relaxed">
                          {input.value}
                        </Text>
                      </Section>
                    );
                  }

                  return (
                    <Section
                      className="border-[#eaeaea] border-b py-[10px] first:pt-0 last:border-b-0 last:pb-0"
                      key={input.name}
                    >
                      <Row>
                        <Column className="w-[40%] align-middle font-semibold text-[#888888] text-[11px] uppercase tracking-wider">
                          {input.name}:
                        </Column>
                        <Column className="w-[60%] text-right align-middle font-medium text-[14px] text-black">
                          {input.value ?? ""}
                        </Column>
                      </Row>
                    </Section>
                  );
                })}
              </Section>
            </Section>

            {/* Next Steps Info */}
            <Section className="px-8 pb-8">
              <Text className="m-0 text-[#444444] text-[14px] leading-relaxed">
                {t.consultant}
              </Text>
              <Text className="mt-3 text-[#888888] text-[13px] leading-relaxed">
                {t.moreInfo}{" "}
                <Link
                  className="font-semibold text-[#ff8d28] no-underline hover:underline"
                  href={`mailto:${business.contactEmail}`}
                >
                  {business.contactEmail}
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Section className="w-full border-[#222222] border-t bg-[#111111] p-8 text-center">
              {/* Social Links */}
              <Row className="mx-auto mb-4 w-fit">
                <Column className="px-2">
                  <Link
                    className="text-[#888888] text-[11px] uppercase tracking-widest no-underline hover:text-[#ff8d28]"
                    href={business.website}
                  >
                    {t.socialLinks.instagram}
                  </Link>
                </Column>
                <Column className="px-2 text-[#444444] text-[11px]">|</Column>
                <Column className="px-2">
                  <Link
                    className="text-[#888888] text-[11px] uppercase tracking-widest no-underline hover:text-[#ff8d28]"
                    href={business.website}
                  >
                    {t.socialLinks.whatsapp}
                  </Link>
                </Column>
                <Column className="px-2 text-[#444444] text-[11px]">|</Column>
                <Column className="px-2">
                  <Link
                    className="text-[#888888] text-[11px] uppercase tracking-widest no-underline hover:text-[#ff8d28]"
                    href={business.website}
                  >
                    {t.socialLinks.facebook}
                  </Link>
                </Column>
              </Row>

              <Text className="m-0 text-[#666666] text-[11px] leading-relaxed">
                {t.contactUs}
              </Text>
              <Text className="mt-2 text-[#666666] text-[11px] leading-relaxed">
                © {new Date().getFullYear()} {business.name.toUpperCase()}.{" "}
                {t.copyright}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailContact;
