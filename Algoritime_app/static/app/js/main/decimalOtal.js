const $btnConvt = document.getElementById('convBinDec'),
    $spanResultado = document.getElementById('resultado'),
    $spanResultado2 = document.getElementById('resultado2'),
    $ContentNumerosDerecha = document.getElementById("Ordenados"),
    $PontenciasDos = document.getElementById("PonteciasDos"),
    /* $ContenIndicaPotencia = document.getElementById("PonteciasNum"), */
    $ContentMultiplicacion = document.getElementById("Multiplicacion"),
    $ContentResultado = document.getElementById("Resultados"),
    $BtnMostrarResultados = document.getElementById("MostrarResultados"),
    $NoMostrar = document.getElementById("noMostrar"),
    $BtnCerrarVtn = document.getElementById("CerrarVentana"),
    $Ventana = document.querySelector(".VentanaEmergente"),
    $TextoVentana = document.getElementById("MensajeVentana"),
    valoresAceptados = /^[0-9]+$/;


function Convertir(Decimal) {
    $ContentNumerosDerecha.textContent = "";
    $PontenciasDos.textContent = "";
    /* $ContenIndicaPotencia.textContent = ""; */
    $ContentMultiplicacion.textContent = "";
    $ContentResultado.textContent = "";

    let multiplicando = 9999,
        i = 0,
        total = Decimal,
        numeros = [],
        divisiones = [],
        multiplicaciones = [],
        sobrantes = [];
        
    while (multiplicando > 0) {
        numeros.push(total);
        let division = Math.trunc(total / 8);
        divisiones.push(division);
        multiplicando = division;
        let resultadoMultp = 8 * multiplicando;
        multiplicaciones.push(resultadoMultp);
        let sobrante = total - resultadoMultp;
        sobrantes.push(sobrante);
        total = division;
    }



    numeros.forEach(el => {
        const p = document.createElement("p"),
            p2 = document.createElement("p"),
            p3 = document.createElement("p"),
            p4 = document.createElement("p");
        p.innerText = `${el}÷8 = ${divisiones[i]}`;
        p2.innerText = `${divisiones[i]}x8 = ${multiplicaciones[i]}`;
        p3.innerText = `${el}-${multiplicaciones[i]} = ${sobrantes[i]}`;
        p4.innerText = `${sobrantes[i]}`;
        $ContentNumerosDerecha.appendChild(p);
        $PontenciasDos.appendChild(p2);
        $ContentMultiplicacion.appendChild(p3);
        $ContentResultado.appendChild(p4);
        i++;
    });
        let Octal = sobrantes.reverse().join("");
        $spanResultado.innerText = `"${Octal}"`;
        $spanResultado2.innerText = `"${Octal}"`;
    
    
}

document.addEventListener("submit", (e) => {
    e.preventDefault();
    Validaciones();
});

function Validaciones() {
    /* Rescatamos valor */
    let $Binario = document.getElementById('InputBinario').value;
    /* Eliminamos espacios en blanco */
    let Binario = $Binario.trim();
    /* Validamos si estaa vacio */
    if (Binario.length <= 0) {
        $TextoVentana.innerText = "No puedes ingresar espacios";
        $Ventana.classList.add("activo");
        document.getElementById('InputBinario').value = "";
    }
    /* Validos si son números */
    else {
        if (Binario.match(valoresAceptados)) {
            /* Pasamos el valor a la función para convertirlo a binario */
            
            Convertir(parseInt(Binario));
        }
        else {
            document.getElementById('InputBinario').value = "";
            $TextoVentana.innerText = "Solo puedes ingresar números enteros";
            $Ventana.classList.add("activo");
        }
    }
}

/* VALIDACIONES */
$btnConvt.addEventListener("click", (e) => {
    Validaciones();
});

$BtnMostrarResultados.addEventListener("click", (e) => {
    let varResult = document.getElementById("resultado").textContent,
        Procedimiento = document.querySelector(".procedimiento");
    
    varResult = varResult.trim();
    if (varResult.length <=0) {
        $TextoVentana.innerText = "Aún no existen procedimientos";
        $Ventana.classList.add("activo");
    }
    else {
        Procedimiento.style.cssText = "overflow-y: scroll; overflow-x: auto;";
        $NoMostrar.classList.remove("activo");
    }
});


$BtnCerrarVtn.addEventListener("click", (e) => {
    $Ventana.classList.remove("activo");
});




function ConvertirExp(Decimal) {
    /* Iniciamos el contador alto para que entre en bucle */
    let multiplicando = 9999,
        /* totamos el valor decimal para la 1ra vuelta */
        total = Decimal;

    while (multiplicando > 0) {
        
        console.log("-----");
        console.log("Numero: " + total)
        /* hacemos división, numero entre 8  */
        let division = Math.trunc(total / 8);
        console.log(`División: ${total} / 8 = ${division}`);

        /* Guardamos la división en un let para el condicional del bucle */
        multiplicando = division;
        
        /* Multiplicamos la división por 8 */
        let resultadoMultp = 8 * multiplicando;
        console.log(`Multiplicación: ${multiplicando} * 8 = ${resultadoMultp}`);

        /* Del numero inicial le restamos la multiplicación */
        let sobrante = total - resultadoMultp;

        console.log(`Sobrante: ${total} - ${resultadoMultp} = ${sobrante}`);

        /* Actualizamos el numero para las siguientes vueltas */
        total = division;
    }

}
