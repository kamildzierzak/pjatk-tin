function toggleInfo(infoId) {
  const infoElement = document.getElementById(infoId);
  infoElement.classList.toggle("hidden");
}

const dataProcessingLabel = document.getElementById("dataProcessingInfoView");
dataProcessingLabel.addEventListener("click", () => {
  toggleInfo("dataProcessingInfo");
});

function onSubmit(event) {
  if (!validateForm(event)) {
    console.log("Form validation failed");
  } else {
    printFormData(event);
  }
}

function showErrorUnderInput(inputElement, errorElement, errorMessage) {
  inputElement.classList.add("border-red-500");
  errorElement.innerText = errorMessage;
  errorElement.classList.remove("hidden");
}

function hideErrorUnderInput(inputElement, errorElement) {
  inputElement.classList.remove("border-red-500");
  errorElement.classList.add("hidden");
}

function showErrorBeforeSubmitButton(errorElement, errorMessage) {
  errorElement.parentElement.classList.remove("hidden");
  errorElement.innerText = errorMessage;
  errorElement.classList.remove("hidden");
}

function hideErrorBeforeSubmitButton(errorElement) {
  errorElement.classList.add("hidden");
  errorElement.parentElement.classList.add("hidden");
}

function validateForm(event) {
  let isValid = true;

  const contactForm = document.getElementById("contact-form");
  const name = contactForm.name;
  const email = contactForm.email;
  const message = contactForm.message;
  const dataProcessing = contactForm.dataProcessing;

  const nameError = document.getElementById("nameError");
  const nameErrorBeforeSubmitButton = document.getElementById(
    "nameErrorBeforeSubmitButton"
  );
  const emailError = document.getElementById("emailError");
  const emailErrorBeforeSubmitButton = document.getElementById(
    "emailErrorBeforeSubmitButton"
  );
  const messageError = document.getElementById("messageError");
  const messageErrorBeforeSubmitButton = document.getElementById(
    "messageErrorBeforeSubmitButton"
  );
  const dataProcessingError = document.getElementById("dataProcessingError");
  const dataProcessingErrorBeforeSubmitButton = document.getElementById(
    "dataProcessingErrorBeforeSubmitButton"
  );

  if (name.value === "") {
    const nameErrorText = "Imię i nazwisko jest wymagane";
    showErrorUnderInput(name, nameError, nameErrorText);
    showErrorBeforeSubmitButton(nameErrorBeforeSubmitButton, nameErrorText);
    isValid = false;
  } else {
    hideErrorUnderInput(name, nameError);
    hideErrorBeforeSubmitButton(nameErrorBeforeSubmitButton);
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value === "") {
    const emailErrorText = "Email jest wymagany";
    showErrorUnderInput(email, emailError, emailErrorText);
    showErrorBeforeSubmitButton(emailErrorBeforeSubmitButton, emailErrorText);
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    const emailErrorText = "Niepoprawny format adresu email";
    showErrorUnderInput(email, emailError, emailErrorText);
    showErrorBeforeSubmitButton(emailErrorBeforeSubmitButton, emailErrorText);
    isValid = false;
  } else {
    hideErrorUnderInput(email, emailError);
    hideErrorBeforeSubmitButton(emailErrorBeforeSubmitButton);
  }

  if (message.value === "") {
    const messageText = "Wiadomość jest wymagana";
    showErrorUnderInput(message, messageError, messageText);
    showErrorBeforeSubmitButton(messageErrorBeforeSubmitButton, messageText);
    isValid = false;
  } else if (message.value.length < 10) {
    const messageText = "Wiadomość musi mieć co najmniej 10 znaków";
    showErrorUnderInput(message, messageError, messageText);
    showErrorBeforeSubmitButton(messageErrorBeforeSubmitButton, messageText);
    isValid = false;
  } else if (message.value.length > 500) {
    const messageText = "Wiadomość może mieć maksymalnie 500 znaków";
    showErrorUnderInput(message, messageError, messageText);
    showErrorBeforeSubmitButton(messageErrorBeforeSubmitButton, messageText);
    isValid = false;
  } else {
    hideErrorUnderInput(message, messageError);
    hideErrorBeforeSubmitButton(messageErrorBeforeSubmitButton);
  }

  if (!dataProcessing.checked) {
    const dataProcessingErrorText =
      "Zgoda na przetwarzanie danych jest wymagana";
    showErrorUnderInput(
      dataProcessing,
      dataProcessingError,
      dataProcessingErrorText
    );
    showErrorBeforeSubmitButton(
      dataProcessingErrorBeforeSubmitButton,
      dataProcessingErrorText
    );
    isValid = false;
  } else {
    hideErrorUnderInput(dataProcessing, dataProcessingError);
    hideErrorBeforeSubmitButton(dataProcessingErrorBeforeSubmitButton);
  }

  if (!isValid) {
    event.preventDefault();
  }

  return isValid;
}

function printFormData(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  const dataProcessing = event.target.dataProcessing.checked;

  const sendedData = document.getElementById("sendedData");

  sendedData.innerText = `Imię i nazwisko: ${name}\nEmail: ${email}\nWiadomość: ${message}\nZgoda na przetwarzanie danych: ${
    dataProcessing ? "Tak" : "Nie"
  }`;
}

function showErrorUnderField(
  element,
  errorMessage,
  errorMessageElement,
  inputElement
) {
  errorMessageElement.innerText = errorMessage;
  errorMessageElement.classList.remove("hidden");
  inputElement.classList.add("border-red-500");
  element.classList.remove("hidden");
}
