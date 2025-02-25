let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

reset.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    switch (active) {
      case "long":
        minCount = 14;
        break;
      case "short":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
  })
);

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-focus");
  });
};

focusButton.addEventListener("click", () => {
  removeFocus();
  focusButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 24;
  count = 59
  time.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener("click", () => {
  active = "short";
  removeFocus();
  shortBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 4;
  count = 59;
  time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
  active = "long";
  removeFocus();
  longBreakButton.classList.add("btn-focus");
  pauseTimer();
  minCount = 14;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});

pause.addEventListener(
  "click",
  (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startBtn.classList.remove("hide");
    pause.classList.remove("show");
    reset.classList.remove("show");
  })
);

startBtn.addEventListener("click", () => {
  reset.classList.add("show");
  pause.classList.add("show");
  startBtn.classList.add("hide");
  startBtn.classList.remove("show");
  if (paused) {
    paused = false;
    time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
          alert("time up");

        }
      }
    }, 1000);
  }
});


//to do list

document.addEventListener("DOMContentLoaded", function () {
  let listContainer = document.getElementById("list-cont");
  let inputBox = document.getElementById("input-box");
  let addButton = document.querySelector(".row button");

  // Function to add a new task
  function addTask() {
      let taskText = inputBox.value.trim();

      if (taskText === "") {
          alert("Please enter a task!");
          return;
      }

      // Create a new list item
      let li = document.createElement("li");
      li.textContent = taskText;

      // Add event listener to toggle 'checked' class
      li.addEventListener("click", function () {
          this.classList.toggle("checked");
      });

      // Create delete button
      let deleteBtn = document.createElement("span");
      deleteBtn.textContent = "❌";
      deleteBtn.style.marginLeft = "15px";
      deleteBtn.style.cursor = "pointer";

      // Remove task when delete button is clicked
      deleteBtn.addEventListener("click", function () {
          li.remove();
      });

      // Append delete button to the list item
      li.appendChild(deleteBtn);

      // Add the task to the list
      listContainer.appendChild(li);

      // Clear input box
      inputBox.value = "";
  }

  // Attach event listener to the Add button
  addButton.addEventListener("click", addTask);

  // Allow pressing "Enter" to add task
  inputBox.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
          addTask();
      }
  });

  // Toggle checked class when clicking an existing task
  listContainer.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
          e.target.classList.toggle("checked");
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.getElementById('list-cont');

  listContainer.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
          event.target.classList.toggle('cheked');
      }
  });
});
