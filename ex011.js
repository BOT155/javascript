var agora = Date ()
var hora = 3
console.log('Agora são exatamente ' + hora)
if (hora > 12 && hora < 18) {
    console.log('Boa tarde, agora são exatamente:' + hora)
}
else if (hora > 18 && hora < 24)
{
    console.log('Boa noite, agora são exatamente:' + hora)
}
else
{
    console.log('Bom dia, agora são exatamente:' + hora)
}