let valores = [5, 9, 4, 8, 2, 3]

valores.sort()

console.log('For tradicional:');
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('');

console.log('For in:');
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}