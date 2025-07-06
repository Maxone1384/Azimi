window.addEventListener('load', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    const requiredFields = [
      { id: 'carName', label: 'نام خودرو' },
      { id: 'brand', label: 'برند خودرو' },
      { id: 'year', label: 'سال تولید' },
      { id: 'price', label: 'قیمت' },
      { id: 'kilometer', label: 'کارکرد' },
    ];

    let hasError = false;
    let errorMessage = '';

    requiredFields.forEach(field => {
      const value = document.getElementById(field.id).value.trim();
      if (value === '') {
        hasError = true;
        errorMessage += - ${field.label} را وارد کنید\n;
      }
    });

    if (hasError) {
      e.preventDefault(); // جلوگیری از ارسال فرم
      alert('لطفاً موارد زیر را تکمیل کنید:\n\n' + errorMessage);
    }
  });
});
