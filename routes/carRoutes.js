const express = require ("express");
const router = express.Router();
const carsCtrl = require('../controllers/carsCtrl')


// -> /cars
router.get('/', carsCtrl.index);
router.get('/:id', carsCtrl.show);
router.post('/', carsCtrl.create);
router.delete('/', carsCtrl.delete);


router.put('/:id', carsCtrl.update);







module.exports = router; 