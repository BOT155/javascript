function menuShow() {
    letmenuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    }
    else
    {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}
function calculateTotal() {
    var quantity = document.getElementById("quantity").value;
    var totalPrice = 20;
    var total = quantity * totalPrice;

    document.getElementById("total").value = "R$" + total.toFixed(2);
}
function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var chatMessages = document.getElementById("chatMessages");

    var userMessage = messageInput.value;
    if (userMessage.trim() === "") return;
    chatMessages.innerHTML += "<div><strong>Você:</strong> " + userMessage + "</div>";
    setTimeout(function () {
        chatMessages.innerHTML += "<div><strong>Atendente:</strong> Obrigado por entrar em contato!</div>";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
    messageInput.value = "";
}