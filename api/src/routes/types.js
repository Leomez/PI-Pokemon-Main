const { Router } = require('express');
const router = Router();
const { getTypes } = require('../controllers/types');


router.get('/', async (req, res) => {
    try {
        const types = await getTypes();
        res.status(200).send(types)
        
    } catch (error) {
        res.status(404).send(error)    
    }
})

module.exports = router;