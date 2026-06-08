document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let message = document.getElementById("message").value;

    let phone = "201555291925";

    let text = `🟢 طلب جديد:

👤 الاسم: ${name}
🪑 المنتج: ${product}
💬 الاستفسار: ${message}`;

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);

    window.location.href = url;
});