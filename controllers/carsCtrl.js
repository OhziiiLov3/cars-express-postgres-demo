const Car = require('../models/car');


const index = (req, res)=>{
let cars = Car.getAllCars()
const {make} = req.query; 
if(make){
    cars = cars.filter(car => car.make.toLowerCase() === make.toLowerCase())
 }
 res.send({
    cars
 })
}

const show = (req, res)=>{
    res.send({
     car: Car.getCar(req.params.id)
    })
};



const create = (req, res) =>{
const newCar = req.body;
Car.create(newCar);
console.log(req.body);
res.redirect('/cars')
};

const deleteCar = (res,req) =>{
 Car.deleteOne(req.params.id);
 res.redirect('/cars')
}


const update = (req, res) =>{
    Car.update(req.params.id, req.body)
    res.redirect(`skills/${req.params.id}`)
}

module.exports = {
    index,
    show,
    create,
    delete: deleteCar,
    update,
}