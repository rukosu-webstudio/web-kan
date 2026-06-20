import { actions, isInputError } from "astro:actions";
import Toastify from "toastify-js";

const form = document.getElementById("contact-form") as HTMLFormElement;
const submit = document.getElementById("submit") as HTMLButtonElement;

const showToast = (message: string, _type: "success" | "error") => {
  Toastify({
    text: message,
    duration: 5000,
    close: true,
    gravity: "bottom",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "#000000",
      color: "#ffffff",
      borderRadius: "0px",
      fontSize: "14px",
      fontFamily: "var(--font-mozilla), sans-serif",
      textTransform: "uppercase",
    },
  }).showToast();
};

if (form) {
  console.log("Contact form found, initializing listener");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    submit.disabled = true;
    submit.textContent = "Enviando...";

    const formData = new FormData(form);
    const { data, error } = await actions.contact(formData);
    console.log("Action response:", { data, error });

    submit.disabled = false;
    submit.textContent = "Enviar";

    if (data?.status) {
      showToast("Formulario enviado correctamente", "success");
      form.reset();
      return;
    }

    if (error && isInputError(error)) {
      for (const [field, messages] of Object.entries(error.fields)) {
        console.error(`${field}: ${(messages as string[]).join(", ")}`);
      }
      showToast("Errores de validación, revisa los campos", "error");
    } else {
      console.error("Error desconocido:", error);
      showToast("Error al enviar el formulario. Inténtalo de nuevo", "error");
    }
  });
}
