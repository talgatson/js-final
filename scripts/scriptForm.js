const searchForm = document.getElementById("searchForm");
const nameInput = document.getElementById("username");
const cityInput = document.getElementById("city");
const buttons = document.querySelectorAll(".choose");

const minLength = 3;

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const searchDateInput = document.getElementById("searchDate").value;

  if (!email.includes("@")) {
    alert("Некорректный формат email");
    return;
  }
  const name = nameInput.value;

  if (name.length < minLength) {
    nameInput.classList.add("invalid");
    alert(`Имя должно содержать минимум ${minLength} символа`);
    return;
  } else {
    nameInput.classList.remove("invalid");
  }
  if (searchDateInput === "") {
    alert("Выберите дату");
    return;
  }
  if (cityInput.value === "") {
    alert("Выберите город");
    return;
  }
  alert(
    `Спасибо, ${name}! Мы подберём для вас лучшие туры по городу ${cityInput.value}. Проверьте свою почту (${email}), скоро мы пришлём подробности и предложения. ✈️🌍`
  );
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      `Поздравляем! Ваш идеальный тур выбран. Проверьте почту, которую вы указали — скоро мы отправим все детали и шаги для оформления. Путешествие по Казахстану начинается здесь!`
    );
  });
});
