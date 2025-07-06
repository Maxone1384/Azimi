// تابع تولید کد امنیتی
function generateCaptcha(length = 5) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// نمایش کد امنیتی در صفحه
function setCaptcha() {
  const captchaEl = document.querySelector('.captcha-code');
  captchaEl.textContent = generateCaptcha();
}

// بررسی فرم هنگام کلیک روی دکمه
function validateForm() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const captchaInput = document.getElementById('captcha-input').value.trim();
  const realCaptcha = document.querySelector('.captcha-code').textContent;

  if (!username && !password && !captchaInput) {
    alert('⚠️ لطفاً تمام فیلدها را پر کنید.');
    return;
  }

  if (captchaInput.toUpperCase() !== realCaptcha.toUpperCase()) {
    alert('❌ کد امنیتی اشتباه است!');
    setCaptcha(); // تولید مجدد کد امنیتی
    return;
  }

  alert('✅ ورود موفقیت‌آمیز بود!');
}

// اجرای کدها پس از بارگذاری صفحه
window.addEventListener('load', () => {
  setCaptcha();

  const button = document.querySelector('.submit-btn');
  button.addEventListener('click', validateForm);
});
