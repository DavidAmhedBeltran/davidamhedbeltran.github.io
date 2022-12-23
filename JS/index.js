const parrafo = document.getElementsByTagName("span");

const fetchPokemon = async () => {
	const pokeNameInput = document.getElementById("pokeName");
	let pokeName = pokeNameInput.value;
	pokeName = pokeName.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
	// fetch: consultar APIs y devolver respuestas y .then es una promesa * 
	// Y cuando termine esta promesa fetch
	let data = await fetch(url).then((res) => {
		if (res.status != "200") {
			console.log(res);
			pokeImage("./img/pokemon-sad.gif")
		}
		else {
			return res.json();
		}

	// * la promesa
	// comenzará esta promesa
	})

		if (data) {
			console.log(data);
			let pokeImg = data.sprites.front_default; 
			let pokeInfo = data.abilities;
			let pokeTyp = data.types;
			let pokeNam = data.name;

			// let altura = alto;
			// let mide = data.height;

			pokeImage(pokeImg);
			pokeData(pokeInfo);
			pokeType(pokeTyp);
			pokeNameGreen(pokeNam);
			console.log(pokeImg);
		};


};



// pokeName
const pokeNameGreen = name => {
	const pokeNameGreen = document.getElementById("name");
	const pokeNames = name;
	pokeNameGreen.innerHTML = pokeNames;
}

// pokeTypes
const pokeType = types => {
	const pokeType = document.getElementById("types")
	const typesName = types.map((item) => item.type.name);
	pokeType.innerHTML = typesName;
};

// pokeImage
const pokeImage = (url) => {
	const pokePhoto = document.getElementById("pokeImg");
	pokePhoto.src = url;
};

// pokeData
const pokeData= (abilites) =>{
	const pokeAbilities = document.getElementById("abilities");
	const abilitiesName = abilites.map((item) => item.ability.name);
	pokeAbilities.innerHTML = abilitiesName;
};




// decímetros a metros
// function alto () {
// 	let decimetros = parseInt();
// 	metros = decimetros / 10;
// 	return (metros + ' m');
// };