function fillProduct(productName){
    document.getElementById("product").value = productName;

    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let message = document.getElementById("message").value;

    let phone = "201505243520";

    let text = `🟢 طلب جديد:

👤 الاسم: ${name}
🪑 المنتج: ${product}
💬 الاستفسار: ${message}`;

    window.location.href =
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
});
