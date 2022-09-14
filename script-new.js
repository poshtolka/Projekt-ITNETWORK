class Pojistenec {
    constructor(jmeno, prijmeni, telefon, vek) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.telefon = telefon;
        this.vek = vek;
    }

    toString() {
        return `<tr><td>${this.jmeno + " " + this.prijmeni}</td><td>${this.telefon}</td><td>${this.vek}</td></tr>`;
    }
}

var pojistenci = [];

function pridejPojistence() {
    
    var jmenoElem = document.getElementById("jmeno");
    var prijmeniElem = document.getElementById("prijmeni");
    var telefonElem = document.getElementById("telefon");
    var vekElem = document.getElementById("vek");
    validuj(jmenoElem,prijmeniElem,telefonElem, vekElem);
        var novyPojistenec = new Pojistenec(
            jmenoElem.value,
            prijmeniElem.value,
            telefonElem.value,
            vekElem.value
        );

        pojistenci.push(novyPojistenec);
                
        prekresliTabulku();
                
        jmenoElem.value = "";
        prijmeniElem.value = "";
        telefonElem.value = "";
        vekElem.value = ""; 
    } 
    

function prekresliTabulku() {
    var teloTabulky = document.getElementById("teloTabulky");
    var obsahTabulky = "";

    pojistenci.forEach(function(pojistenec) {
        
        obsahTabulky += pojistenec.toString();
    });

    teloTabulky.innerHTML = obsahTabulky;
    
    
}

function validuj(jmeno, prijmeni, telefon, vek){
    if (jmeno.value == ""){
        document.getElementById("validnijmeno").innerHTML = "nebylo ulozeno jmeno";
    }
   
   
    //dopis pro kaydoz input

}


// Disable form submissions if there are invalid fields
// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Get the forms we want to add validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();
