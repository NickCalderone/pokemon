const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001
const app = express();

let pokePaths = {}

async function setPokePaths(){
	if (Object.keys(pokePaths).length === 0){
		let fetchResult = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
		let resultJson = await fetchResult.json();
		pokePaths = resultJson;
	}
}

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.get("/test", (req, res) => {
	setPokePaths().then(() => {
		res.json(pokePaths)
	})
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
})