function orderWhatsApp(name, price, image) {
  let phone = "9779862238571";

  let message = `Hello SS Fancy Store 👋
I want to order:

🛍️ Product: ${name}
💰 Price: ${price}
🖼️ Image: ${image}

📍 Location: Pokhara`;

  let url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  window.location.href = url;
}
