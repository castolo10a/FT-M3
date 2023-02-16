const levelOne = (a, b) => {
    return a + b; 
};

const levelTwo = (letras) => {
    if(letras.length < 2){
        return letras;
    }
    if(letras.length === 2){
        return letras[0];
    }
    if(letras.length > 2){
        const newConst = [];
        for(let i = 0; i < letras.length; i+=2){
            newConst.push(letras[i]);
        }
        return newConst.join("");
    }
};

const levelThree = (a, b) => {
    const newArr = a.concat(b);
    return newArr.sort();
};

const levelFour = (num) => {
    const suma = num.toString().split("")
    // console.log(suma); ['1', '7', '2', '9']
    const numbers = suma.map(number => Number(number))
    // console.log(numbers); [1, 7, 2, 9]
    const sumar = numbers.reduce((acc, num) => acc + num)
    // console.log(sumar); 19
    const reverse = sumar.toString().split('').reverse().join('')
    // console.log(reverse); 91

    return sumar * reverse === num;
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };


console.log(levelFour(1729));