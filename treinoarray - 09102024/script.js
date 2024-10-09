function ex1() {
    const nomesA = ["Alex", "José", "Maria"];
    const nomesB = ["Nicolas", "José", "Maria"];
    const nomesC = nomesA.concat(nomesB);
    alert(nomesC)
}

function ex2() {
    const nomes = ["Alex", "José", "Maria", "Eduardo", "Isabella", "Mariana"]
    const nomesB = nomes.slice(nomes.length / 2);
    alert(nomesB)
}

function ex3() {
    const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const copiaValores = valores.reverse();
    alert(copiaValores)

}