function recoger() {
    let pe = parseFloat(document.getElementById("1").value);
    let al = parseFloat(document.getElementById("2").value);
    let imc = pe / (al**2);
    imc = imc.toFixed(3);
    document.getElementById("res").innerHTML = "SU IMC ES: " + imc
}