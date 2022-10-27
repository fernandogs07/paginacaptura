const alunos = [
    {nome: 'Fernando', nota: Math.floor(Math.random() * 10)},
    {nome: 'Lucas', nota: Math.floor(Math.random() * 10)},
    {nome: 'Davi', nota: Math.floor(Math.random() * 10)},
    {nome: 'Isaque', nota: Math.floor(Math.random() * 10)}
]

console.log(alunos)
const reprovados = alunos.filter(esudantes =>{
    return esudantes.nota < 6
   
})
for(let i=0;i < reprovados.length;i++){

    console.log(reprovados[i].nome, reprovados[i].nota)
}