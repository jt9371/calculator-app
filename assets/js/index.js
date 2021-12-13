var separador = document.getElementById("bill");

separador.addEventListener(
  "keyup",
  (e) => {
    var entrada = e.target.value.split(".").join("");
    entrada = entrada.split("").reverse();

    var salida = [];
    var aux = "";

    var paginador = Math.ceil(entrada.length / 3);

    for (let i = 0; i < paginador; i++) {
      for (let j = 0; j < 3; j++) {
        ("123 4");
        if (entrada[j + i * 3] != undefined) {
          aux += entrada[j + i * 3];
        }
      }
      salida.push(aux);
      aux = "";

      e.target.value = salida.join(".").split("").reverse().join("");
      console.log(e);
    }
  },
  false
);

document.querySelector("#numberOfPeople").addEventListener("keyup", () => {
  const n1 = parseInt(document.querySelector("#bill").value);
  const n2 = parseFloat(document.querySelector("#porcentaje").value);
  const n3 = parseInt(document.querySelector("#numberOfPeople").value);
  let r;
  let t;
  r = (n1 * n2) / n3;
  t = (n1 * n2 + n1) / n3;
  document.querySelector("#r2").innerHTML = "$" + r.toFixed(2);
  document.querySelector("#r3").innerHTML = "$" + t.toFixed(2);
});

function borrarCampos() {
  location.reload();
}

/* function check() {
    if (document.getElementById('bill').value === null || document.getElementById('bill').value.length == 0) {
        document.getElementById('errorname').innerHTML = "Can't be Zero";
    }
} */
