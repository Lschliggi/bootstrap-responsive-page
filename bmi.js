document.getElementById("bmi-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
});

function berechneBMI() {
  var gewicht = document.getElementById('gewicht').value;
  var groesse = document.getElementById('groesse').value;
  var ergebnis = document.getElementById('ergebnis');

if(isNaN(gewicht) || isNaN(groesse) || gewicht <= 0   || groesse <= 0){
    ergebnis.innerHTML = "Bitte geben Sie gültige Werte ein!";
    return;
}

var bmi = gewicht / (groesse * groesse);
bmi = bmi.toFixed(2);

if (bmi < 18.5) {
    ergebnis.innerHTML = "Sie haben mit einem BMI von " + bmi + " Untergewicht";
    ergebnis.style = "color: red";
} else if (bmi < 25) {
    ergebnis.innerHTML = "Sie haben mit einem BMI von " + bmi + " Normalgewicht";
    ergebnis.style = "color: green";
}
else if (bmi < 30) {
    ergebnis.innerHTML = "Sie haben mit einem BMI von " + bmi + " Übergewicht";
    ergebnis.style = "color: yellow";
}
else {
    ergebnis.innerHTML = "Sie haben mit einem BMI von " + bmi + " Adipositas";
    ergebnis.style = "color: red";

}
}