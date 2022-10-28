const { Router } = require('express');
const pokemons = require('../routes/pokemons')
const types = require('../routes/types')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/types', types)
router.use('/pokemons', pokemons)

module.exports = router;
