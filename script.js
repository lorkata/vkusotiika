document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Прекратява изпращането на формата

    // Получаваме стойностите на всички полета
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;
    const phone = document.getElementById('phone').value;

    // Валидиране на данните (основна проверка)
    if (!name || !email || !food || !quantity || !phone) {
        alert("Моля, попълнете всички полета!");
        return;
    }

    // Показваме съобщение след успешно изпълнена поръчка
    alert(`Вашата поръчка е приета успешно!\n\nДетайли за поръчката:\nИме: ${name}\nИмейл: ${email}\nТелефон: ${phone}\nЯстие: ${food}\nКоличество: ${quantity}`);
});
