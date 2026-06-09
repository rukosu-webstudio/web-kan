!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e.SENTRY_RELEASE={id:"fc0a3215185208421c8509241fe46789d2fcc797"};var n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dc276765-97e1-4724-9ed4-f9e972cf5a19",e._sentryDebugIdIdentifier="sentry-dbid-dc276765-97e1-4724-9ed4-f9e972cf5a19");}catch(e){}}();import { parsePhoneNumberFromString } from 'libphonenumber-js';

const name = "";
const description = "";
const site = "";
const openGraph = "/og.png";
const lang = "es";
const contact = {"tel":{"ext":0,"number":0},"whatsapp":{"ext":0,"number":0},"email":""};
const address = {"location":"Guatemala, Guatemala"};
const googleTagManager = {"id":"GTM-XXXXXXX"};
const social = {"facebook":"","instagram":""};
const settings = {"emailSender":"noreply@correo.com","bccEmail":["monitoreo@correo.com"],"resendToCompany":false};
const BUSINESS = {
  name,
  description,
  site,
  openGraph,
  lang,
  contact,
  address,
  googleTagManager,
  social,
  settings,
};

const DATA_BUSINESS = BUSINESS;
const phoneNumber = `+${DATA_BUSINESS.contact.tel.ext}${DATA_BUSINESS.contact.tel.number}`;
const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, {
  defaultCountry: "GT",
  defaultCallingCode: "502",
  extract: true
});
const BUSINESS_CONFIG = {
  ...DATA_BUSINESS,
  phone: {
    formatted: parsedPhoneNumber?.formatInternational(),
    ext: DATA_BUSINESS.contact.tel.ext,
    number: DATA_BUSINESS.contact.tel.number,
    country: parsedPhoneNumber?.country,
    link: `tel:${parsedPhoneNumber?.number}`
  },
  whatsapp: {
    formatted: parsedPhoneNumber?.formatInternational(),
    ext: DATA_BUSINESS.contact.whatsapp?.ext,
    number: DATA_BUSINESS.contact.whatsapp?.number,
    country: parsedPhoneNumber?.country,
    link: (message) => `https://wa.me/${DATA_BUSINESS.contact.whatsapp?.ext}${DATA_BUSINESS.contact.whatsapp?.number}?text=${message}`
  },
  email: {
    address: DATA_BUSINESS.contact.email,
    link: `mailto:${DATA_BUSINESS.contact.email}`
  },
  social: {
    facebook: DATA_BUSINESS.social?.facebook ?? null,
    instagram: DATA_BUSINESS.social?.instagram ?? null,
    tiktok: DATA_BUSINESS.social?.tiktok ?? null,
    youtube: DATA_BUSINESS.social?.youtube ?? null,
    linkedin: DATA_BUSINESS.social?.linkedin ?? null,
    twitter: DATA_BUSINESS.social?.twitter ?? null
  }
};

export { BUSINESS_CONFIG as B };
