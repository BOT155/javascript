let num = [1, 2, 9, 4, 11, 10, 7,6, 3]
num.push(8)
num.sort()
console.log(num)
console.log(`O vetor tem: ${num.length} posições.`)
console.log(`O primeiro valor do vetor é: ${num[0]}.`)
let pos = num.indexOf(7)//Para pesquisar dentro de um vetor, basta colocar o conteúdo dentro da chave que deseja busca.
console.log(`O valor 7 está na posição: ${pos}`)