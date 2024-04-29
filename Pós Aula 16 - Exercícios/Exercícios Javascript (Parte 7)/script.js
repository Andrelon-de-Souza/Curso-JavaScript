let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero (n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {

    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
            window.alert('Número inválido ou já adicionado na base!')

    }
    num.value = ''
    num.focus()
}

function ResultadoFinal() {
    if(valores.length == 0) {
        window.alert('[NULL] Adicione um número antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }

        media = soma / valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>- Ao todo, temos ${total} números adicionados;</p>`
        res.innerHTML += `<p>- O número ${maior} é o maior da lista;</p>`
        res.innerHTML += `<p>- O número ${menor} é o menor da lista;</p>`
        res.innerHTML += `<p>- A soma dos valores é ${soma};</p>`
        res.innerHTML += `<p>- A média dos números adicionados é ${media}.</p>`

    }
}