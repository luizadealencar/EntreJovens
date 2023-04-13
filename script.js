const versiculos = [
	"O Senhor é o meu pastor; nada me faltará. Salmos 23:1",
	"Pois eu sei que o meu Redentor vive, e que no fim se levantará sobre a terra. Jó 19:25",
	"Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna. João 3:16",
	"Deixem vir a mim as crianças e não as impeçam; pois o Reino dos céus pertence aos que são semelhantes a elas. Mateus 19:14",
	"Entregue suas preocupações ao Senhor, e ele o susterá; jamais permitirá que o justo venha a cair. Salmos 55:22",
	"Jesus respondeu: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. João 14:6",
	"Confie no Senhor de todo o seu coração e não se apóie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas. Provérbios 3:5-6"
];

const btn = document.getElementById("btn");
const versiculo = document.getElementById("versiculo");
const data = document.getElementById("data");

btn.addEventListener("click", function() {
	const randomIndex = Math.floor(Math.random() * versiculos.length);
	versiculo.textContent = versiculos[randomIndex];
	const currentDate = new Date();
	const dateString = "Dia " + currentDate.getDate() + "/0" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
	data.textContent = dateString + " - Ministério de Jovens da Redenção";
	btn.style.display = "none";
	const mensagem = document.createElement("p");
	mensagem.textContent = "Obrigado por vir!";
	data.parentNode.insertBefore(mensagem, data.nextSibling);
	mensagem.classList.add("mensagem"); // adiciona a classe "mensagem" ao elemento "p"
	data.parentNode.insertBefore(mensagem, data.nextSibling);
});

