const axios = require('axios');


const getTypesApi = async () => {
try {
    const url = await axios.get('https://pokeapi.co/api/v2/type')
    const data = url.data.result.map(el => {
        return { type: el.name}
    })
} catch (error) {
    console.log('type error ==> ' + error);
}
}