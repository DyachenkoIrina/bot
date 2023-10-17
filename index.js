const addBtn = document.querySelector("#add_btn");
const input = document.querySelector("#input");
const bot = document.querySelector("#bot");

function askAQuestion() {
  const session = document.createElement("div");
  const question = document.createElement("p");
  const answer = document.createElement("p");

  session.className = "session";
  question.className = "question";
  answer.className = "answer";

  question.innerText = input.value;
  question.innerText =
    question.innerText.charAt(0).toUpperCase() + question.innerText.slice(1);
  answer.innerText = getAnswer(question.innerText, arr);

  bot.append(session);
  session.append(question, answer);
}

const arr = [
  "Привет!",
  "Спасибо, всё прекрасно.",
  "Даже не знаю, что ответить!",
  "А ты сделал бот-чат?",
  "Желаю хорошего дня!",
  "Обращайся.",
];

function getAnswer(question, arr) {
  let answer = "";

  if (
    question.includes("Привет") ||
    question.includes("Добрый") ||
    question.includes("Доброе") ||
    question.includes("Здравствуй") ||
    question.includes("Hi") ||
    question.includes("Hello") ||
    question.includes("Хай")
  ) {
    return (answer = arr[0]);
  } else if (
    question.includes("How are you") ||
    question.includes("Как дела") ||
    question.includes("Как ты") ||
    question.includes("Как настроение")
  ) {
    return (answer = arr[1]);
  } else if (
    question.includes("чем заняться") ||
    question.includes("занятие") ||
    question.includes("делаешь") ||
    question.includes("погулять") ||
    question.includes("сделать")
  ) {
    return (answer = arr[3]);
  } else if (
    question.includes("Пока") ||
    question.includes("До свидания") ||
    question.includes("Бай") ||
    question.includes("Спокойной") ||
    question.includes("Чао")
  ) {
    return (answer = arr[4]);
  } else if (
    question.includes("Спасибо") ||
    question.includes("Благодарю") ||
    question.includes("помог")
  ) {
    return (answer = arr[5]);
  } else {
    return (answer = arr[2]);
  }
}

addBtn.addEventListener("click", () => {
  askAQuestion();
  input.value = "";
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    askAQuestion();
    input.value = "";
  }
});
