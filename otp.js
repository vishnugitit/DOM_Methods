otp = document.getElementById("screen");
function otp_Generate() {
  a = Math.floor(Math.random() * 10000);
  if (a < 1000) {
    a += 1000;
  }
  otp.value = a;
}