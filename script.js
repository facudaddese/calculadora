const agregar = (valor) => {
    document.getElementById('rta').value += valor;
}

const borrar = () => {
    document.getElementById('rta').value = ' ';
}

const calcular = () => {
    const valor = document.getElementById('rta').value;
    const rta = eval(valor);
    document.getElementById('rta').value = rta;
}