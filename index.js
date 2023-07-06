//Function to converter decimalToBinary
var binary = (num) => {
    let number = num
    let binary = ''
    for (let i = 2;number>=i;) {
        let rest = number%i
        number = parseInt(number/i)
        binary += rest
        if (number<i) {
            binary += number
        }
    }
    let binaryum = ''

for (let i = binary.length-1;i>=0;i--) {
    binaryum += binary[i]
}
binary = null
    return binaryum
}
console.log(binary(101))

//Function to converter binary to Decimal
//you can use converterBinaryToDecimal(binary(101)) or converterBinaryToDecimal('1100101') and program show you the same answer
function converterBinaryToDecimal (num) {
    let x = 0
    let decimal = 0
    for (let i = num.length-1;i>=0;i--){
        decimal += parseInt(num[i])*Math.pow(2,x)
        x++
    }
    return decimal
}
    console.log (converterBinaryToDecimal('1100101'))
