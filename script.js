const versiculos = [
  "Não deixe que ninguém o despreze por você ser jovem. Mas, para os que creem, seja um exemplo na maneira de falar, na maneira de agir, no amor, na fé e na pureza. 1 Timóteo 4:12", "Confie no Senhor de todo o seu coração e não se apóie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas. Provérbios 3:5-6", "Jovem, aproveite a sua mocidade e seja feliz enquanto é moço. Faça tudo o que quiser e siga os desejos do seu coração. Mas lembre de uma coisa: Deus o julgará por tudo o que você fizer. Eclesiastes 11:9", "Como pode um jovem conservar pura a sua vida? É só obedecer aos teus mandamentos. Salmos 119:9", "Entreguem todas as suas preocupações a Deus, pois ele cuida de vocês. 1 Pedro 5:7", "Você é corajoso, e o SENHOR está com você! Juízes 6:12b", "Até os fios dos cabelos de vocês estão todos contados. Não tenham medo, pois vocês valem mais do que muitos passarinhos! Lucas 12:7", "O SENHOR guardará você; ele está sempre ao seu lado para protegê-lo. Salmos 121:5", "Ele é o Deus que me dá forças e me protege aonde quer que eu vá. Salmos 18:32", "— Pois eu lhes digo que assim também vai haver mais alegria no céu por um pecador que se arrepende dos seus pecados do que por noventa e nove pessoas boas que não precisam se arrepender. Lucas 15:7", "O SENHOR guardará você de todo perigo; ele protegerá a sua vida. Ele o guardará quando você for e quando voltar, agora e sempre. Salmos 121:7", "Eu digo isso para que, por estarem unidos comigo, vocês tenham paz. No mundo vocês vão sofrer; mas tenham coragem. Eu venci o mundo. João 16:33", "Ele enxugará dos olhos deles todas as lágrimas. Não haverá mais morte, nem tristeza, nem choro, nem dor. As coisas velhas já passaram. Apocalipse 21:4", "— Venham a mim, todos vocês que estão cansados de carregar as suas pesadas cargas, e eu lhes darei descanso. Mateus 11:28", "Não fiquem com medo, pois estou com vocês; não se apavorem, pois eu sou o seu Deus. Eu lhes dou forças e os ajudo; eu os protejo com a minha forte mão. Isaías 41:10", "Lembre da minha ordem: Seja forte e corajoso! Não fique desanimado, nem tenha medo, porque eu, o SENHOR, seu Deus, estarei com você em qualquer lugar para onde você for! Josué 1:9"
];

const btn = document.getElementById("btn");
const versiculo = document.getElementById("versiculo");
const data = document.getElementById("data");

btn.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * versiculos.length);
  versiculo.textContent = versiculos[randomIndex];
	btn.style.display = "none";
	const mensagem = document.createElement("p");
  mensagem.textContent = "Obrigado por vir!";
  mensagem.classList.add("mensagem"); // adiciona a classe "mensagem" ao elemento "p"
  data.parentNode.insertBefore(mensagem, data.nextSibling);
});
