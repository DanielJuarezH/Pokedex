<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Pokedex</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../CSS/pokedexStyle.css">
</head>
<body>
    <div class="headerContent">
        <div class="headerImage">
            <img src="../Images/Poké_Ball_icon.svg" alt="Pokeball image" class="pokeballImage">
        </div>
        <div class="headerText">
            <h1>Pokedex</h1>
            <p>A simple site where you can search for Pokemons and learn more about them</p>
        </div>
    </div>
    <div class="container">
        <div class="searchBar">
            <input type="text" name="pokemonName" id="pokemonName" placeholder="Pokemon Name or #">
            <button  id="button" class="btn" onclick="fetchPokemon()"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
            <p>Search for a Pokemon by name or using its number. </p>
        </div>
        <div class="pokemonImage">
            <img src="../Images/whos_that_pokemon_by_desenhosdoreu_d9n0y7l-fullview.jpg" alt="Who's that pokemon" id="pokemonImage">
            <div class="pokemonName">
                <span id="nameDisplay" class=""></span>
                <span id="pokemonNumber" class="pokemonNumber"></span>
            </div>
            <div class="pokemonType">
                <span id="typeDisplay1"></span> <span id="typeDisplay2"></span>
            </div>
        </div>
        <div class="pokemonInfo">
            <div class="statsTitle">
                <p>Stats</p>
            </div>
            <div class="stats">
                <span>Attack:</span><p id="attack" class="attack"></p>
            </div>
            <div class="stats">
                <span>Defense:</span><p class="defense" id="defense"></p>
            </div>
            <div class="stats">
                <span>Special Attack:</span><p class="specialAttack" id="specialAttack"></p>
            </div>
            <div class="stats">
                <span>Special Defense:</span><p class="specialDefense" id="specialDefense"></p>
            </div>
            <div class="stats">
                <span>Speed:</span><p class="speed" id="speed"></p>
            </div>
            <div class="stats">
                <span>HP:</span><p class="hp" id="hp"></p>
            </div>
            <div class="movesTitle">
                <p>Moves</p>
            </div>
            <div class="movesCont">
                <span></span><p class="moves" id="moves"></p>
            </div>
        </div>
    </div>
    
    
    
</body>
<footer>
    <script src="../JS/main.js"></script>
</footer>
</html>
