import Fuse from "fuse.js";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Results from "./Results";

export default function Search({pokemonLinks})
{

	let resultsRef = useRef(null);

	let [focus, setFocus] = useState(false);

	let display = focus ? "block" : "none";

	let Fuze = new Fuse(pokemonLinks, {
		threshold: 0.0,
		keys: ["name"]
	})

	let [search, setSearch] = useState("");

	let [results, setResults] = useState([]);

	function handleSearch(e)
	{
		setSearch(e.target.value);

		setResults(Fuze.search(e.target.value));
	}

	function handleBlur(e)
	{
		if (!e.currentTarget.contains(e.relatedTarget))
		{
			setFocus(false);
		}
		return
	}

	function handleClick()
	{
		setFocus(false);
		return
	}
	return (
		<SearchWrapper onFocus={() => setFocus(true)} onBlur={handleBlur} id="search">
			<SearchInput type="search" placeholder="(ex: Pikachu)" value={search} onChange={handleSearch} />
			<div ref={resultsRef} onClick={handleClick} style={{ display: display }}>
				{(!results.length > 0) || <Results id="search-results" results={results} />}
			</div>
		</SearchWrapper>
	)
}

let SearchWrapper = styled.div`
  position: relative;
`

let SearchInput = styled.input`
  width: 200px;
  height: 35px;
  padding-left: 10px;
  border-radius: 5px;
  border: none;
`