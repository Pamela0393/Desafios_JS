/*
DESAFIO 03 - SISTEMA DE APROVAÇÃO
crie uma função chamada verificarAluno() que receba:
- nome
- nota

Regras:
- Nota maior ou igual a 7 -> Aprovado
- Nota maior ou igual a 5 e menor que 7 -> Recuperação
- Nota menor que 5 -> Reprovado

Exiba uma mensagem informando a situação do aluno
*/
    function verificarAluno(nome, nota) {
if (nota >= 7){
console.log(nome + " Aprovado(a)! ");
}
else if (nota >= 5 && nota < 7)
{
console.log(nome + " Recuperação! ");
} else {
console.log(nome + " Reprovado(a)! ");
    }
}
verificarAluno(" João ", 9);
verificarAluno(" Sonia ", 4 );
verificarAluno(" Ari ", 6 );