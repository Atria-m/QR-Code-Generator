const generateBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qr-code");
const qrInput = document.querySelector("form input");
const qrImage = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    return alert("لطفا یک متن یا آدرس وارد بکنید!");
  }
  generateBtn.innerHTML="در حال دریافت QR Code"
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImage.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
      generateBtn.innerHTML="تولید QR Code"
  });
});

qrInput.addEventListener("keyup",()=>{
    if (!qrInput.value) {
        qrCodeBox.classList.add("hidden");
    }
})

qrInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    generateBtn.click();
  }
});

const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  toggleBtn.textContent = html.classList.contains("dark") ? "☀️" : "🌙";
});

