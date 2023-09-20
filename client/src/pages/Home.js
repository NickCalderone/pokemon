import { useState } from 'react';
import { useFetch, useFetchPokemon } from '../utility/utility'
import AllTiles from '../components/ui/AllTiles'
import Content from '../components/shared/content';
import H1 from '../components/shared/H1';
import Loading from '../components/ui/Loading';

export default function Home({ pokemonLinks, loading })
{

	return (
		<Content>
			<H1>Pokédex</H1>
			<AllTiles data={pokemonLinks} loading={loading} />
		</Content>
	)
}