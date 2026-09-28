import emailjs from '@emailjs/browser';

/**
 * Environment configuration for EmailJS
 * Kept secure via Vite environment variables (never exposes private access tokens)
 */
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
};

/**
 * Checks if the primary EmailJS environment variables are configured
 * @returns {boolean}
 */
export const isEmailConfigured = () => {
  return Boolean(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey
  );
};

/**
 * Sends customer enquiry email to Sastha's Gmail using EmailJS sendForm.
 * Automatically sends thank you auto-reply if autoReplyTemplateId is provided.
 *
 * @param {HTMLFormElement} formElement - HTML form DOM element
 * @returns {Promise<{status: number, text: string}>}
 */
export const sendCustomerEnquiry = async (formElement) => {
  if (!formElement) {
    throw new Error('Form element is required');
  }

  if (!isEmailConfigured()) {
    console.error(
      '[EmailJS Service] Missing environment variables. Please check that VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are set in your .env file.'
    );
    throw new Error('EmailJS environment variables are not configured');
  }

  // 1. Send the customer enquiry to Sastha's Gmail
  const primaryResult = await emailjs.sendForm(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    formElement,
    EMAILJS_CONFIG.publicKey
  );

  // 2. Automatically send a THANK YOU email to the customer if an auto-reply template is configured
  // (Note: EmailJS also supports auto-reply directly in the EmailJS dashboard linked to the primary template)
  if (EMAILJS_CONFIG.autoReplyTemplateId) {
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.autoReplyTemplateId,
        formElement,
        EMAILJS_CONFIG.publicKey
      );
    } catch (autoReplyError) {
      // Primary enquiry was already received; log auto-reply error without breaking user feedback
      console.warn('[EmailJS Service] Thank you auto-reply email failed to send:', autoReplyError);
    }
  }

  return primaryResult;
};

export default {
  sendCustomerEnquiry,
  isEmailConfigured,
  EMAILJS_CONFIG,
};
