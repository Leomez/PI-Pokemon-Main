const axios = require('axios');
const { Type } = require('../db');


const getTypes = async () => {
    try {
        const url = await axios.get('https://pokeapi.co/api/v2/type')
        const types = await url.data.results.map(el => {
            return el.name
        })
        types.forEach(el => {            
            Type.findOrCreate({
                where: { name: el }
            })
        });
        const allTypes = await Type.findAll({
            attributes: ['id','name']
        });
        // console.log(allTypes);
        return allTypes
        

    } catch (error) {
        throw new Error (error.message)

    }
}
 
// console.log(getTypes());

module.exports = { getTypes }

