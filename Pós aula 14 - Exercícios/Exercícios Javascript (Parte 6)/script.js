function gerarTabuada() {
    let num = document.querySelector('input#txtnum')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert("[ERRO] Por favor, insira um número para gerar a tabuada!")
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}