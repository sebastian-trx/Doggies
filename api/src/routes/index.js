const { Router } = require('express');
const axios = require('axios');
const {Dog,Temperament} = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    try {
        const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
        const apiInfo = await apiUrl.data.map(el => {
            return{
                name: el.name,
                height: el.height.metric,
                weight: el.weight.metric,
                life_span: el.life_span,
                image: Object.values(el.image),
                temperament: el.temperament
            }
        })
        return apiInfo;
    } catch (error) {
        console.log(error)
    }
}

const getDbInfo = async () => {
    return await Dog.findAll({
        include:{
            model: Temperament,
            attributes: ['name'],
            through:{
                attributes: []
            }
        }
    })
}

const getAllDogs = async () => {
    let apiInfo = await getApiInfo()
    let DbInfo = await getDbInfo()
    let All = apiInfo.concat(DbInfo)
    return All
}

router.get('/dogs', async(req,res) =>{
    let {raza} = req.query
    let all = await getAllDogs()
    if(raza){
        let dog = await all.filter(el => el.name.toLowerCase().includes(raza.toLowerCase()))
        dog.length ?
        res.status(200).send(dog):
        res.send('Ups no existe esa raza')
    }
    res.status(200).send(all)
})

module.exports = router;
