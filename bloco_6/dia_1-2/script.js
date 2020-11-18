let selectEstados = document.getElementById('estados');
let estados = ["--","AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

for(let i = 0; i < estados.length; i += 1){
    let sigla = document.createElement('option');
    sigla.innerText = estados[i];

    selectEstados.appendChild(sigla);
}

let name = document.getElementById('name');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');
let endereco = document.getElementById('endereco');
let cidade = document.getElementById('cidade');
let resumo = document.getElementById('resumo');
let cargo = document.getElementById('cargo');


function createDiv(event) {
    console.log("ola");

    event.preventDefault();

    let div = document.createElement('p');
    div.innerText = "olá!"
    
    let compilado = document.getElementById('compilado');
    compilado.appendChild(div);

}

let send = document.getElementById('send');

send.addEventListener('click', createDiv)






// const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
// const main = document.querySelector('main');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const cpf = document.querySelector('#cpf');
// const address = document.querySelector('#address');
// const city = document.querySelector('#city');
// const stateComboBox = document.querySelector('#state');
// const office = document.querySelector('#office');

// // https://stackoverflow.com/questions/15148659/how-can-i-use-queryselector-on-to-pick-an-input-element-by-name - Alex Cheuk;

// // const immobile = document.querySelector('input[name="immobile"]');
// const send = document.querySelector('#send');
// const clear = document.querySelector('#clear')

// window.onload = function () {
//   for (let index = 0; index < states.length; index += 1) {
//     const newStateOption = document.createElement('option');
//     newStateOption.innerText = states[index];
//     stateComboBox.appendChild(newStateOption);
//   }
// };

// function styleNewDiv(newDiv) {
//   newDiv.style.backgroundColor = 'gray';
//   newDiv.style.borderRadius = '5px';
//   newDiv.style.color = 'white';
//   newDiv.style.fontFamily = 'monospace';
//   newDiv.style.padding = '10px';
//   newDiv.style.textAlign = 'justify';
// }

// send.addEventListener('click', function (event) {
//   event.preventDefault();
//   const newDiv = document.createElement('div');

//   // https://www.w3schools.com/jsref/met_element_setattribute.asp;

//   newDiv.setAttribute('id', 'curriculum');
//   newDiv.innerText = `Olá ${name.value} portador/portadora do CPF:${cpf.value} infelizmente ainda não estamos contratando na cidade ${city.value} do estado ${state.value} para o cargo de ${office.value}. Salvamos os seus dados para futuras contratações, entraremos em contato pelo email: ${email.value}`;
//   main.appendChild(newDiv);
//   styleNewDiv(newDiv);
// });

// clear.addEventListener('click', function () {
//   const removeThisDiv = document.querySelector('#curriculum');
//   main.removeChild(removeThisDiv);
// });