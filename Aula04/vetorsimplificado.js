let val = [7, 5, 9, 4, 9, 5, 2]
val.push(1)
val.sort()
console.log(val)
for (let pos in val)
{
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}