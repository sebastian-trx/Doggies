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
                temperaments: el.temperament
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


async function getTemperaments() {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds');
      let arr = response.data.map(el => {
        return[
          el.temperament
        ]
      })
      arr = arr.flat()
      let b = []
      for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === 'string'){
          b.push(arr[i].split(','))
        }
      }
      b = b.flat()
      let sinDuplicados = [...new Set(b)]
      // sin duplicados pero con espacios >:c
      let sinEspacio = sinDuplicados.filter(el => el[0] !== ' ')
      let conEspacio = sinDuplicados.filter(el => el[0] === ' ')
      //quitar los espacios de conEspacio y pushearlo a sinEspacio
      conEspacio.forEach(element => {
        sinEspacio.push(element.slice(1))
      });
      let sinDuplicadosX2 = [...new Set(sinEspacio)]
      return sinDuplicadosX2
    } 
    catch (error) {
      console.error(error);
    }
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



router.get('/temperament',async (req,res) =>{
    let temperament = await getTemperaments()
    temperament.forEach(el => {
        Temperament.findOrCreate({
            where: {name: el}
        })
    })
    let allTemperaments = await Temperament.findAll()
    res.send(allTemperaments)
})
 
router.post('/dogs', async (req,res) =>{
    let {
        name,
        height,
        weight,
        life_span,
        image,
        temperament
    } = req.body

    let razaCreated = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
    })

    let temperamentDb = await Temperament.findAll({
        where: {name: temperament}
    })
    razaCreated.addTemperament(temperamentDb)
    res.send('nueva raza creada ')
})

module.exports = router;
