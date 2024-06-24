const express = require('express');
const carsRouter = require('./routes/carRoutes');


const app = express();

app.use(express.json());


const PORT = 3001;





app.use('/cars', carsRouter);

// error handling - 404 not found
app.use((req,res,next)=>{
 res.status(404).send("Sorry Page not found...")
})




// Redirect the home route to the /cars route
app.use('/*', (req, res) => {
    res.redirect('/cars');
});





app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`)
})