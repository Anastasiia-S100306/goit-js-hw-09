const form = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

// 🔹 Завантаження даних
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData = parsedData;

  form.elements.email.value = parsedData.email || "";
  form.elements.message.value = parsedData.message || "";
}

// 🔹 Ввід (input)
form.addEventListener("input", event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 🔹 Сабміт
form.addEventListener("submit", event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  // очищення
  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData = {
    email: "",
    message: "",
  };
});