/**
 * CSS classes
 */
const INPUT_ERROR_BORDER = "border-red-500";

/**
 * Platforms
 */
const WHATSAPP_PLATFORM = "whatsapp";
const FACEBOOK_PLATFORM = "facebook";
const INSTAGRAM_PLATFORM = "instagram";

/**
 * API urls
 */
const WHATSAPP_BASE_URL = "https://web.whatsapp.com/send/";

/**
 * @var {any}
 */
const platforms = {
  [WHATSAPP_PLATFORM]: sendWhatsAppMessage,
  [FACEBOOK_PLATFORM]: sendFacebookMessage,
  [INSTAGRAM_PLATFORM]: sendInstagramMessage,
};

/**
 * @returns {void}
 */
function sendMessage() {
  let platformInput = document.querySelector("#platform");
  const platform = platformInput.value;

  if (platform) {
    platforms[platform]();
  } else {
    swal({
      title: "Select the platform",
      text: "You have to select the platform to send your message",
      icon: "error",
      button: "Return",
    });
  }
}

/**
 * @returns {void}
 */
function sendWhatsAppMessage() {
  let phoneNumberInputError = document.querySelector("#phone_number_error");
  let phoneNumberInput = document.querySelector("#phone_number");
  const phoneNumber = phoneNumberInput.value;

  let messageInput = document.querySelector("#message");
  const message = messageInput.value;

  if (phoneNumber) {
    phoneNumberInput.classList.remove(INPUT_ERROR_BORDER);
    phoneNumberInputError.classList.add("hidden");

    const url = `${WHATSAPP_BASE_URL}?phone=${phoneNumber}&text=${message}`;

    window.open(url, "_blank");
  } else {
    phoneNumberInput.classList.add(INPUT_ERROR_BORDER);
    phoneNumberInputError.classList.remove("hidden");

    swal({
      title: "Type the number",
      text: "You have to type the phone number to send your message",
      icon: "error",
      button: "Return",
    });
  }
}

/**
 * @returns {void}
 */
function sendFacebookMessage() {
  swal({
    title: "Not implemented yet",
    icon: "error",
  });
}

/**
 * @returns {void}
 */
function sendInstagramMessage() {
  swal({
    title: "Not implemented yet",
    icon: "error",
  });
}
