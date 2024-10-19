const inputField = document.querySelector("#inputField");
const notifyButton = document.querySelector("#notifyButton");
const invalidParagraph = document.querySelector("#invalidParagraph");
inputField.addEventListener("input", (e) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const inputFieldValue = inputField.value;
  if (screen.width <= "768") {
    if (!regex.test(inputFieldValue) && inputFieldValue.length) {
      inputField.classList.remove("border-[hsl(223_87%_63%/0.5)]");
      inputField.classList.add("border-[hsl(354_100%_66%)]");
      invalidParagraph.classList.remove("hidden");
      notifyButton.classList.add("bg-[hsl(223_87%_63%/0.5)]");
      notifyButton.classList.add("hover:bg-[hsl(223_87%_63%/0.5)]");
      notifyButton.disabled = true;
      document.querySelector("#pb").classList.add("mb-[30px]");
    } else {
      inputField.classList.add("border-[hsl(223_87%_63%/0.5)]");
      inputField.classList.remove("border-[hsl(354_100%_66%)]");
      invalidParagraph.classList.add("hidden");
      notifyButton.disabled = false;
      notifyButton.classList.remove("bg-[hsl(223_87%_63%/0.5)]");
      notifyButton.classList.add("hover:bg-[hsl(223_87%_63%/0.5)]");
      document.querySelector("#pb").classList.remove("mb-[30px]");
    }
  } else {
    if (!regex.test(inputFieldValue) && inputFieldValue.length) {
      inputField.classList.remove("border-[hsl(223_87%_63%/0.5)]");
      inputField.classList.add("border-[hsl(354_100%_66%)]");
      invalidParagraph.classList.remove("hidden");
      notifyButton.classList.add("bg-[hsl(223_87%_63%/0.5)]");
      notifyButton.classList.add("hover:bg-[hsl(223_87%_63%/0.5)]");
      notifyButton.disabled = true;
      document.querySelector("#pb").classList.remove("mb-[30px]");
    } else {
      inputField.classList.add("border-[hsl(223_87%_63%/0.5)]");
      inputField.classList.remove("border-[hsl(354_100%_66%)]");
      invalidParagraph.classList.add("hidden");
      notifyButton.disabled = false;
      notifyButton.classList.remove("bg-[hsl(223_87%_63%/0.5)]");
      notifyButton.classList.add("hover:bg-[hsl(223_87%_63%/0.5)]");
      document.querySelector("#pb").classList.remove("mb-[30px]");
    }
  }
});
notifyButton.addEventListener("click", () => {
  if (inputField.value.length) {
    alert("Submitted!");
    inputField.value = "";
  }
});
