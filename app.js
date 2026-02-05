//importing our web framework
import express from 'express';

// create an express application
const app = express();

// Define Port number where server will listen
const PORT = 3000

// Enable static file sharing
app.use(express.static('public'));

// "middleware" that allows express to read the 
// form data and store it in req.body
// always include when using form data 
app.use(express.urlencoded({extended: true}));

// create a temporary array to store orders 
const orders = []; 


// DEFINING OUR MAIN ROUTE ('/')
app.get('/', (req,res) => {
res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// contact route
app.get('/contact-us', (req,res) => {
res.sendFile(`${import.meta.dirname}/views/contact.html`);
});
// thank you route
app.get('/thank-you', (req,res) => {
res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// admin route
app.get('/admin', (req,res) => {
    res.send(orders);
});

// submit-order route
app.post('/submit-order', (req,res) => {
    //create JSON object to store order data 
    const order = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    method: req.body.method,
    size: req.body.size,
    comment: req.body.comment,
    timestamp: new Date()
    };

    // add order
    orders.push(order)

    // res.send(orders);
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
    
});

//Starting the server and listen on the designated port 
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});