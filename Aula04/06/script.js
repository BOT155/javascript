function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) 
    {
        window.alert('Erro, verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked)
        {
            genero = 'Homem'
            if (idade >= 0 && idade < 10)
            {
                //criança
                img.setAttribute('src', 'img1.jpg')
            }
            else if (idade >= 11 && idade < 21)
            {
                //jovem
                img.setAttribute('src', 'img2.jpg')
            }
            else if (idade < 50)
            {
                //adulto
                img.setAttribute('src', 'img3.jpg')
            }
            else
            {
                //idoso
                img.setAttribute('src', 'img5.jpg')
            }
            res.style.textAlign = 'center'
            res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos<br>'
            res.appendChild(img)
            
        }
        else
        {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10)
            {
                //criança
                img.setAttribute('src', 'img11.jpg')
            }
            else if (idade >= 11 && idade < 21)
            {
                //jovem
                img.setAttribute('src', 'img10.jpg')
            }
            else if (idade < 50)
            {
                //adulto
                img.setAttribute('src', 'img9.jpg')
            }
            else
            {
                //idoso
                img.setAttribute('src', 'img8.jpg')
            }
            res.style.textAlign = 'center'
            res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos<br>'
            res.appendChild(img)
        }
        
    }
    
    }
