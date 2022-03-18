const type = (type) => {
    return "<p class='type " + type + "'>" + type + "</p>";
}

const pokeImage = (url) => {
    let pokePhoto = document.getElementById("pokemonImage");
    pokePhoto.src = url;
}

const pokeName = (name) => {
    let pokeNam = document.getElementById("nameDisplay");
    pokeNam.innerHTML = name;
    
}

const pokeType1 = (type1) => {
    let pokeTyp = document.getElementById("typeDisplay1");
    pokeTyp.innerHTML = type1;
    
}

const pokehp = (hp) => {
    let pokehps = document.getElementById("hp");
    pokehps.innerHTML = hp;
    
}

const pokeAttack = (attack) => {
    let pokeAttacks = document.getElementById("attack");
    pokeAttacks.innerHTML = attack;
    
}

const pokeDefense = (defense) => {
    let pokeDefense = document.getElementById("defense");
    pokeDefense.innerHTML = defense;
}

const pokeSpecialAttack = (specialAttack) => {
    let pokeSpecialAttack = document.getElementById("specialAttack");
    pokeSpecialAttack.innerHTML = specialAttack;
    
}

const pokeSpecialDefense = (specialDefense) => {
    let pokeSpecialDefense = document.getElementById("specialDefense");
    pokeSpecialDefense.innerHTML = specialDefense;
    
}

const pokeSpeed = (speed) => {
    let pokeSpeed = document.getElementById("speed");
    pokeSpeed.innerHTML = speed;
    
}

const pokeMoves = (moves) => {
    let pokeMoves = document.getElementById("moves");
    pokeMoves.innerHTML = moves;
    
}


const fetchPokemon = () => {
    const pokemonNameInput = document.getElementById("pokemonName");
    let pokemonName = pokemonNameInput.value;
    pokemonName = pokemonName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;  
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeAttack("");
            pokeDefense("");
            pokeImage("../Images/not-found-image.jpeg");
            pokeMoves("Pokemon Not Found");
            pokeName("");
            pokeSpecialAttack("");
            pokeSpecialDefense("");
            pokeSpeed("");
            pokeType1("");
            pokehp("");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokemonImage = data.sprites.other.home.front_default;
            let pokemonNames = data.name;
            let pokemonType1 = data.types.map(typ => typ.type.name)
            let pokemonhp = data.stats[0].base_stat;
            let pokemonAttack = data.stats[1].base_stat;
            let pokemonDefense = data.stats[2].base_stat;
            let pokemonSAttack = data.stats[3].base_stat;
            let pokemonSDefense = data.stats[4].base_stat;
            let pokemonSpeed = data.stats[5].base_stat;
            let pokemonMoves = data.moves.map(mov =>mov.move.name)            
            pokeImage(pokemonImage);
            pokeName(pokemonNames);
            pokeType1(pokemonType1);
            pokehp(pokemonhp);
            pokeAttack(pokemonAttack);
            pokeDefense(pokemonDefense);
            pokeSpecialAttack(pokemonSAttack);
            pokeSpecialDefense(pokemonSDefense);
            pokeSpeed(pokemonSpeed);
            pokeMoves(pokemonMoves);
        }
    });
}

document.getElementById("pokemonName").addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        fetchPokemon();
    }
})

