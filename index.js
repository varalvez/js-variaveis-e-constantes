document.write("<h1>Javascript - variáveis e constantes</h1>")
document.write("<h2>Exemplos Simples</h2>")
let valor = 10; //number
let nome_completo = 'Nayara' //string
let nomeCompleto = 'Guilherme' //string
let NomeCompleto = 'Daniel' //string
let verdadeiro = true; //boolean
let falso = false; //boolean

document.writeln(valor);
valor = 20;
document.writeln(valor);
valor = 30;
document.writeln(valor);

document.writeln(nome_completo);
document.writeln(nomeCompleto);
document.writeln(NomeCompleto)
document.writeln(verdadeiro);
document.writeln(falso);

const nomeDaTurma = 'FS18';
document.write("<br><br>");
document.write(nomeDaTurma);

document.write("<h2>Operadores de atribuição </h2>")

// Operadores de atribuição 
// =, +=, -=
let idade = 34;
document.write("<br>");
document.write(idade);
idade = idade + 1;
idade += 1;
document.write("<br>");
document.write(idade);
idade -= 3;
document.write("<br>")
document.write(idade);
document.write("<h2>Operadores aritiméticos</h2>")

// Operadores aritiméticos
// +, -, *, /, %

document.write("<br>");
document.write(2+1);
document.write("<br>");
document.write(4-2);
document.write("<br>");
document.write(2*6);
document.write("<br>");
document.write(6/3);
document.write("<br>");
document.write(2%2);

document.write("<h2>Operadores de comparação</h2>")

// Operadores de comparação 
// ==, !=, ===, !==, <, >, <=, >=
document.write("<br>");
document.write(2==2); // Somos iguais ? Sim 
document.write("<br>");
document.write(2!=2); //
document.write("<br>");
document.write(2===2); //iguais no vallor e o tipo ? Sim 
document.write("<br>");
document.write(2==='2');
document.write("<br>");
document.write(2!==2); //a gente  é diferente ? Não
document.write("<br>");
document.write(2!=='2'); // Somos diferentes? Sim 
document.write("<br>");

document.write("<h2>Part.2 Operadores de comparação </h2>")

document.write(2>2);
document.write("<br>");
document.write(2<2);
document.write("<br>");
document.write(2<=2);
document.write("<br>");
document.write(2>=2);
document.write("<br>");

document.write("<h2>Operadores lógicos</h2>")

// Operadores lógicos
// !, !!, &&, || 
document.write("<br>");
document.write(!true);
document.write("<br>");
document.write(!!3);
document.write("<br>");
document.write(3===3 && 2==2);
document.write("<br>");
document.write(3==3 && 2==3); // esse && é como se fosse 3 é igual 3 e 2 é igual 2 no caso é verdadeiro
document.write("<br>");
document.write(3==4 || 2==2);
document.write("<br>");
document.write(3!=3 || 2>=2);   // || essas duas barras são como se fosse OU 
document.write("<br>");






