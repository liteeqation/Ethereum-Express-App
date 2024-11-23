const express = require('express');
const Web3 = require('web3').default;
const ejs = require('ejs');
const app = express();

// Connect to an Ethereum node (e.g., Infura)
const web3 = new Web3('https://mainnet.infura.io/v3/435b6c874cce4a35beeecd908e84c870');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to render the index.ejs template
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});