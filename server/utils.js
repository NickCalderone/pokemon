function isTooOld(birth, lifespan){

	let now = Date.now();
	let ageMiliseconds = now - birth;
	let ageSeconds = Math.floor(ageMiliseconds/1000);

	return ageSeconds > lifespan ? true : false;

}

async function setPokemonLinks(pokemonLinksObject)
{
	//if there are no links or the lifespan has expired
	if (Object.keys(pokemonLinksObject).length === 0 || isTooOld(pokemonLinksObject.birth, 10))
	{
		//fetch pokemonlinks and update life
		let fetchResult = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
		let resultJson = await fetchResult.json();
		pokemonLinksObject.birth = Date.now();
		pokemonLinksObject.results = resultJson.results;
	} 
}

async function setPokemon(pokemon, pokemonStoreObject)
{

	let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

	if (!pokemonStoreObject.hasOwnProperty(pokemonUrl) || isTooOld(pokemonStoreObject[pokemonUrl].birth, 10))
	{
		let fetchPokemon = await fetch(pokemonUrl);
		let jsonPokemon = await fetchPokemon.json();
		pokemonStoreObject[pokemonUrl] = {
			birth: Date.now(),
			value: jsonPokemon
		}
	}
}

module.exports = { isTooOld, setPokemonLinks, setPokemon }