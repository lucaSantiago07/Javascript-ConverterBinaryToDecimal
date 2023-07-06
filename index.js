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

console.log(binary(12))


function converterBinaryToDecimal (num) {
    let x = 0
    let decimal = 0
    for (let i = num.length-1;i>=0;i--){
        decimal += parseInt(num[i])*Math.pow(2,x)
        x++
    }
    return decimal
}
    console.log (converterBinaryToDecimal(binary(5)))
