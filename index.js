// main //
const mainNode = document.querySelector(".main");

// player-menu //
const playerMenuNode = document.querySelector(".player-menu");

// Кнопки добавить игрока
const btnAddPlayerLeftNode = document.querySelector(".btn-add-player__left");
const btnAddPlayerTopNode = document.querySelector(".btn-add-player__top");
const btnAddPlayerBottNode = document.querySelector(".btn-add-player__bottom");
const btnAddPlayerRightNode = document.querySelector(".btn-add-player__right");

// Основные кнопки игрока
const btnPlayerLeftNode = document.querySelector(".btn-player__left");
const btnPlayerTopNode = document.querySelector(".btn-player__top");
const btnPlayerBottomNode = document.querySelector(".btn-player__bottom");
const btnPlayerRightNode = document.querySelector(".btn-player__right");

// Кнопки пропуск хода
const btnPlayerMissLeftNode = document.querySelector(".btn-player__miss__left");
const btnPlayerMissRightNode = document.querySelector(
	".btn-player__miss__right"
);

// Центральное поле
const startNode = document.querySelector(".central-field__start");
const whoFirstNode = document.querySelector(".central-field__who-first");
const boostsNode = document.querySelector(".central-field__boosts");
const quantityMovesNode = document.querySelector(
	".central-field__quantity-moves"
);

// Центральные кнопки
const btnStartNode = document.querySelector(".btn-start");

const btnWhoFirstNode = document.querySelector(".btn-who-first");

const btnThreeMovesNode = document.querySelector(".btn-three-moves");
const btnMutlByTwoNode = document.querySelector(".btn-mult-by-two");
const btnMultByThreeNode = document.querySelector(".btn-mult-by-three");

const quantityMovesItemNode = document.querySelector(".quantity-moves__item");

// player-menu //

// Кнопки выбрать цвета
const btnRedNode = document.querySelector(".btn-color-red");
const btnGreenNode = document.querySelector(".btn-color-green");
const btnYellowNode = document.querySelector(".btn-color-yellow");
const btnBlueNode = document.querySelector(".btn-color-blue");

// Выбор имени
const inputNameNode = document.querySelector(".name-input");

const btnEnterNode = document.querySelector(".btn-enter");

// БИЗНЕС-ЛОГИКА //
let arrBtnAddPlayer = [
	btnAddPlayerLeftNode,
	btnAddPlayerTopNode,
	btnAddPlayerBottNode,
	btnAddPlayerRightNode,
];
let arrBtnPlayer = [
	btnPlayerLeftNode,
	btnPlayerTopNode,
	btnPlayerRightNode,
	btnPlayerBottomNode,
];
let newArrBtnPlayer = [];
let arrBtnCollor = [btnRedNode, btnGreenNode, btnYellowNode, btnBlueNode];

let choiePlayer = {};

btnAddPlayerLeftNode.addEventListener("click", () => {
	mainNode.classList.add("hidden");
	playerMenuNode.classList.remove("hidden");
	choiePlayer.btnAdd = btnAddPlayerLeftNode;
	choiePlayer.btnPlayer = btnPlayerLeftNode;
});
btnAddPlayerTopNode.addEventListener("click", () => {
	mainNode.classList.add("hidden");
	playerMenuNode.classList.remove("hidden");
	choiePlayer.btnAdd = btnAddPlayerTopNode;
	choiePlayer.btnPlayer = btnPlayerTopNode;
});
btnAddPlayerBottNode.addEventListener("click", () => {
	mainNode.classList.add("hidden");
	playerMenuNode.classList.remove("hidden");
	choiePlayer.btnAdd = btnAddPlayerBottNode;
	choiePlayer.btnPlayer = btnPlayerBottomNode;
});
btnAddPlayerRightNode.addEventListener("click", () => {
	mainNode.classList.add("hidden");
	playerMenuNode.classList.remove("hidden");
	choiePlayer.btnAdd = btnAddPlayerRightNode;
	choiePlayer.btnPlayer = btnPlayerRightNode;
});

btnRedNode.addEventListener("click", () => {
	if (!btnRedNode.classList.contains("not-active")) {
		choiePlayer.collor = "red";
		choiePlayer.btnCollor = btnRedNode;
		addClassActive(btnRedNode);
		inputNameNode.focus();
	}
});
btnGreenNode.addEventListener("click", () => {
	if (!btnGreenNode.classList.contains("not-active")) {
		choiePlayer.collor = "green";
		choiePlayer.btnCollor = btnGreenNode;
		addClassActive(btnGreenNode);
		inputNameNode.focus();
	}
});
btnYellowNode.addEventListener("click", () => {
	if (!btnYellowNode.classList.contains("not-active")) {
		choiePlayer.collor = "yellow";
		choiePlayer.btnCollor = btnYellowNode;
		addClassActive(btnYellowNode);
		inputNameNode.focus();
	}
});
btnBlueNode.addEventListener("click", () => {
	if (!btnBlueNode.classList.contains("not-active")) {
		choiePlayer.collor = "blue";
		choiePlayer.btnCollor = btnBlueNode;
		addClassActive(btnBlueNode);
		inputNameNode.focus();
	}
});

function addClassActive(node) {
	for (const elem of arrBtnCollor) {
		elem.classList.remove("active");
	}
	node.classList.add("active");
}

btnEnterNode.addEventListener("click", () => {
	let isSelectBtnCollor = false;

	for (const elem of arrBtnCollor) {
		if (elem.classList.contains("active")) {
			isSelectBtnCollor = true;
		}
	}

	if (isSelectBtnCollor) {
		for (const elem of arrBtnCollor) {
			elem.classList.remove("active");
		}

		choiePlayer.btnCollor.classList.add("not-active");

		addPlayer();

		playerMenuNode.classList.add("hidden");
		mainNode.classList.remove("hidden");
	}
});

function addPlayer() {
	choiePlayer.btnAdd.classList.add("hidden");
	choiePlayer.btnPlayer.classList.remove("hidden");
	choiePlayer.btnPlayer.classList.add(`${choiePlayer.collor}`);
	choiePlayer.btnPlayer.innerText = `${inputNameNode.value}`;
	inputNameNode.value = "";
}

btnStartNode.addEventListener("click", () => {
	if (isActiveBtn()) {
		startNode.classList.add("hidden");
		for (const elem of arrBtnAddPlayer) {
			elem.classList.add("hidden");
		}
		whoFirstNode.classList.remove("hidden");

		removeElemInArrBtnPlayer();
	}
});

function isActiveBtn() {
	let quantityPlayer = 0;
	for (const elem of arrBtnAddPlayer) {
		if (elem.classList.contains("hidden")) {
			quantityPlayer++;
		}
	}
	return quantityPlayer >= 2;
}

function removeElemInArrBtnPlayer() {
	let count = 0;
	for (const elem of arrBtnPlayer) {
		if (elem.classList.contains("hidden")) {
			saveFrames(arrBtnPlayer[count]);
			arrBtnPlayer.splice(count, 1);
		}
		count++;
	}
}

function saveFrames(node) {
	node.classList.remove("hidden");
	node.classList.add("close");
}
///////////////////////////////////////////////////////////
btnWhoFirstNode.addEventListener("click", () => {
	whoFirstMove(indexWhoFirstMove());

	whoFirstNode.classList.add("hidden");
	boostsNode.classList.remove("hidden");

	newArrBtnPlayer = arrBtnPlayer;
});

function indexWhoFirstMove() {
	return Math.round(Math.random() * (arrBtnPlayer.length - 1) + 1) - 1;
}

function whoFirstMove(index) {
	for (const elem of arrBtnPlayer) {
		elem.classList.add("not-active", "prepend");
	}
	arrBtnPlayer[index].classList.remove("not-active", "prepend");
}

for (const btnPlayer of arrBtnPlayer) {
	btnPlayer.addEventListener("click", () => {
		if (!btnPlayer.classList.contains("not-active", "prepend")) {
			// boostsNode.classList.add("hidden");
			// quantityMovesNode.classList.remove("hidden");

			// prependBtnPlayer(btnPlayer);
			console.log(1);
		}
	});
}

function nextPalyer(node) {
	let index = newArrBtnPlayer.indexOf(node);
	const length = newArrBtnPlayer.length;
	if (index === length - 1) {
		// console.log("index === length - 1", newArrBtnPlayer[0]);
		return newArrBtnPlayer[0];
	} else {
		// console.log(newArrBtnPlayer[++index]);
		return newArrBtnPlayer[++index];
	}
}

function prependBtnPlayer(node) {
	node.classList.add("not-active", "prepend");
	nextPalyer(node).classList.remove("not-active");
}
