var number = 34
var binaru = ''

for (let i = 2; number>=i;) {
    
    let rest = number%i
    number = parseInt(number/i)
    binaru += rest
    if (number<i) {
        binaru += number
    }
    
}
var binary = ''

for (let i = binaru.length-1;i>=0;i--) {
    binary += binaru[i]
    
}
binaru = null
console.log (binary)
var x = 0
var Decimal = 0
for (let i = binary.length-1;i>=0;i--){
    Decimal += parseInt(binary[i])*Math.pow(2,x)
    x++
}

console.log (Decimal)