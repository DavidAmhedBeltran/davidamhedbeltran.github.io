const parrafo = document.getElementsByTagName("span");

const fetchPokemon = () => {
	const pokeNameInput = document.getElementById("pokeName");
	let pokeName = pokeNameInput.value;
	pokeName = pokeName.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
	fetch(url).then((res) => {
		if (res.status != "200") {
			console.log(res);
			pokeImage("./img/pokemon-sad.gif")
		}
		else {
			return res.json();
		}
	}).then((data) => {
		if (data) {
			console.log(data);
			let pokeImg = data.sprites.front_default; 
			let pokeInfo = data.abilities;
			pokeImage(pokeImg);
			pokeData(pokeInfo);
			console.log(pokeImg);
		}
	});
};

const pokeImage = (url) => {
	const pokePhoto = document.getElementById("pokeImg");
	pokePhoto.src = url;
};

const pokeData= (abilites) =>{
	const pokeAbilities = document.getElementById("abilities");
	const abilitiesName = abilites.map((item) => item.ability.name);
	pokeAbilities.innerHTML = abilitiesName;

};





