const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001
const app = express();

let pokemonLinks = {}
let pokemonStore = {}

async function setPokemonLinks()
{
	if (Object.keys(pokemonLinks).length === 0)
	{
		let fetchResult = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
		let resultJson = await fetchResult.json();
		pokemonLinks = resultJson;
	}
}

async function setPokemon(pokemon)
{

	let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

	if (!pokemonStore.hasOwnProperty(pokemonUrl))
	{
		let fetchPokemon = await fetch(pokemonUrl);
		let jsonPokemon = await fetchPokemon.json();
		pokemonStore[pokemonUrl] = jsonPokemon;
	}
}

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/pokemon-links", (req, res) =>
{
	setPokemonLinks().then(() =>
	{
		res.json(pokemonLinks)
	})
})

app.get("/api/pokemon-store", (req, res) =>
{
	res.json(pokemonStore)
})

app.get('/api/:pokemon', (req, res) =>
{
	// res.send(pokemonStore)
	setPokemon(req.params.pokemon).then(() => {
		res.json(pokemonStore[`https://pokeapi.co/api/v2/pokemon/${req.params.pokemon}`])
	})
	// res.send(req.params)
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