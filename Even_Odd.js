document.getElementById("check").addEventListener("click", function () {
    number = document.getElementById("user_input").value;
    result = document.getElementById("result");
    if (isNaN(number) || number === "") {
      result.textContent = "Invalid Value";
    } else {
      if (number % 2 == 0) {
        result.textContent = `${number} is Even`;
      } else {
        result.textContent = `${number} is Odd`;
      }
    }
  });