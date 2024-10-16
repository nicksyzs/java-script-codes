function ex1() {
    const a = [];
    somat = 0;

    for (i = 0; i <= 9; i++) {
        a[i] = parseFloat(prompt(`Digite o ${i + 1}º do elemento array`));
        somat += a[i];
    }
    alert(`Soma dos elementos ${somat}`)
}

function ex2() {
    const a = [];
    const b = [];
    for (i = 0; i <= 9; i++) {
        a[i] = parseFloat(prompt(`Digite o ${i + 1}º do elemento array`));
        if (a[i] % 2 == 0) {
            b.push(a[i])
        }
    }
    alert(b);
}