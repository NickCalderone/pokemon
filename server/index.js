const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001
const app = express();
const { isTooOld, setPokemonLinks, setPokemon } = require("./utils");

let pokemonLinks = {};

// pokemon information
let pokemonStore = {};

// pokemon flavor text
let pokemonSpeciesStore = {};

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));



//--------------------api/pokemon-links--------------------
// Properties 'birth' and 'results'
// 'birth' is the time the pokemonLinks object was created
// 'results' is an array of objects with properties 'name' and 'url' for each for the first 151 pokemon
// If the object is older than 10 minutes, it will be updated. Otherwise, it will be returned as is

app.get("/api/pokemon-links", (req, res) =>
{

	console.log("isTooOld = ", isTooOld(pokemonLinks.birth, 10));
	setPokemonLinks(pokemonLinks).then(() =>
	{
		res.json(pokemonLinks)
	})
})

//--------------------api/pokemon-store--------------------
// Keys are the urls of the pokemon
// Each key has properties 'birth' and 'results'
// 'birth' is the time the key was created
// 'results' is the pokemon iformation

app.get("/api/pokemon-store", (req, res) =>
{
	res.json(pokemonStore)
})

//--------------------api/pokemon-species-store--------------------
// Keys are the urls of the pokemon species
// Each key has properties 'birth' and 'results'
// 'birth' is the time the key was created
// 'results' is the pokemon species iformation

app.get("/api/pokemon-species-store", (req, res) =>
{
	res.json(pokemonSpeciesStore)
})

//--------------------api/pokemon-species/:pokemon--------------------

app.get("/api/pokemon-species/:pokemon", (req, res) =>
{

	let pokeUrl = `https://pokeapi.co/api/v2/pokemon-species/${req.params.pokemon}`

	setPokemon(pokeUrl, pokemonSpeciesStore).then(() => {
		res.json(pokemonSpeciesStore[pokeUrl])
	})

})

//--------------------api/:pokemon--------------------

app.get('/api/pokemon/:pokemon', (req, res) =>
{

	let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${req.params.pokemon}`

	setPokemon(pokeUrl, pokemonStore).then(() => {
		res.json(pokemonStore[pokeUrl])
	})

})






// All other GET requests not handled before will return our React app
app.get('*', (req, res) =>
{
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () =>
{
	console.log(`Server listening on ${PORT}`);
})