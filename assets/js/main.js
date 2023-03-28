const form  = document.querySelector('#formulario')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let altura_selector = event.target.querySelector('#altura').value
    let peso_selector = event.target.querySelector('#peso').value

    const altura_float = parseFloat(altura_selector.replace(",", "."))
    const peso_float = parseFloat(peso_selector.replace(",", "."))

    let imc = () => (peso_float / Math.pow(altura_float, 2)).toFixed(2)

    validInput(altura_selector) && validInput(peso_selector) ? setResult(`Seu IMC é: ${imc()}`) : setResult("Altura ou Peso inválidos", classe = "error")
    
}) 

const criaP = (msg, classe) => {
    const p = document.createElement('P');
    p.classList.add(classe);
    p.innerHTML = msg;
    return p;
};

const validInput = (input) => !isNaN(parseFloat(input));

function setResult(msg, classe = "success") {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    resultado.appendChild(criaP(msg, classe))
};

