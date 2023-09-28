function carregar(){
    var img = window.document.getElementById('img')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = 'Boa tarde, agora são '+hora+' aproveite o dia!'
    if (hora >= 0 && hora < 6) {
        img.src = 'madrugada.png'
        document.body.style.background = '#d44d2d'
    }
    else if (hora >= 7 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#76b5c5'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#2679a5'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = '#151513'
    }
}
