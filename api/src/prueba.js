const axios = require('axios');

async function getUser() {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds');
      //console.log(response.data)
      const arr = response.data.map(el => {
        return{
          name: el.name,
          height: el.height.metric,
          weight: el.weight.metric,
          life_span: el.life_span,
          image: Object.values(el.image),
          temperament: el.temperament
        }
      })
      console.log(arr)
    } catch (error) {
      console.error(error);
    }
  }

getUser()

