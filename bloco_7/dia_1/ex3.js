const click = document.getElementById('click');
let total = 0;

click.addEventListener('click', () => {    
    total = total + 1;

    const paragraph = document.getElementById('paragraph');
    paragraph.innerText = `Total de cliques = ${total}`;
});