const sum=(a,b)=>{
    return a+b
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen=function(valueInDollar){
    let valueInYen=valueInDollar*146.26;
    return valueInYen;
}

const fromYenToPound=function(valueInYen){
    let valueInPound=valueInYen*.005;
    return valueInPound;
}

console.log(sum(7,3))


module.exports={sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};