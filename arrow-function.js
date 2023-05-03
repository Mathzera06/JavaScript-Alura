function apresentarArrow (nome) { return `meu nome é ${nome}`;} 
const soma = (num1, num2) => num1 + num2;
//console.log(nome('matheus'))
console.log(soma(1, 1))

const somaNumerosPequenos = (numero1, numero2) => {
    if (numero1 > 10 || numero2 > 2) {
        return "somente números de 1 a 9"
    }else{
        return numero1 + numero2
    }
}

console.log(somaNumerosPequenos(1, 3))