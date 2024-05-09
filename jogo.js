
let altura = 0
let largura = 0

function telaJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

telaJogo()


function localRandom() {

	let localX = Math.floor(Math.random() * largura) - 90
	let localY = Math.floor(Math.random() * altura) - 90

	localX = localX < 0 ? 0 : localX
	localY = localY < 0 ? 0 : localY

	console.log(localX, localY)

	//criar o elemento html
	let mosca = document.createElement('img')
	mosca.src = 'imagens/mosca.png'
	mosca.className = sizeRandom()
	mosca.style.left = localX + 'px'
	mosca.style.top = localY + 'px'
	mosca.style.position = 'absolute'

	document.body.appendChild(mosca)

	sizeRandom()
}
function sizeRandom(){
	let classe = Math.floor(Math.random() * 3)
	if (classe == 0){
		return 'mosca1'
	}if (classe == 1) {
		return 'mosca2'
	} else {
		return 'mosca3'
	}
}
