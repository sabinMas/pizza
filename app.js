//importing our web framework
import express from 'express';

// create an express application
const app = express();

// Define Port number where server will listen
const PORT = 3000

// DEFINING OUR MAIN ROUTE ('/')
app.get('/', (req,res) => {
res.send("Benvenuto a Pizza Da Michele");
});

//Starting the server and listen on the designated port 
app.listen(PORT,() => {
    console.log(`Server is running at 
        http://localhost:${PORT}`);
});