/* Horas */
hora = prompt("Insira um horario (um número de 1 até 12)")
if (hora <= 12 && hora > 0) {
    alert("Horario válido")
}
else {
    hora = prompt("insira um horário válido (um número de 1 até 12)")
}

/* Minutos */
minuto = prompt("Insira um minuto(um número de 0 até 59)")
if (minuto <= 59) {
    alert("minuto válido")
}
else {
    minuto = prompt("insira um minuto válido (um número de 0 até 59)")
}

/* Segundos */
segundo = prompt("Insira um segundo(um número de 0 até 59)")
if (segundo <= 59) {
    alert("segundo válido")
}
else {
    segundo = prompt("insira um segundo válido (um número de 0 até 59)")
}

/* Modos */
modo = prompt("Insira um modo de 1 até 3")

if (modo == 1) {
    let valor = ((((hora * 30) + (minuto / 2) + (segundo / 120)) - ((minuto * 6) + (segundo / 10)) | 0))
    document.writeln("O resultado da conta é " + valor)
    if (valor < 0) {
        document.write("ou seja, " + valor * -1 + "°")
    }
}
else if (modo == 2) {
    let valor = ((((hora * 30) + (minuto / 2) + (segundo / 120)) - ((segundo * 6)) | 0))
    document.writeln("O resultado da conta é" + valor + "°")
    if (valor < 0) {
        document.write("ou seja, " + valor * -1 + "°")
    }
}
else if (modo == 3) {
    let valor = (((minuto * 6) + (segundo / 10) - (segundo * 6) | 0))
    document.writeln("O resultado é " + valor)
    if (valor < 0) {
        document.write("ou seja, " + valor * -1 + "°")
    }
}
else if (modo != 1 || modo != 2 || modo != 3) {
    alert("Existe apenas o modo 1, modo 2 e modo 3. Insira apenas números. Números possíveis: 1, 2 ou 3. ")
}
