//importing our web framework
import express from 'express';

// create an express application
const app = express();

// Define Port number where server will listen
const PORT = 3000

// Enable static file sharing
app.use(express.static('public'));

// DEFINING OUR MAIN ROUTE ('/')
app.get('/', (req,res) => {
res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Starting the server and listen on the designated port 
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});