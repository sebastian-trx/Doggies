const axios = require('axios');

async function getUser() {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds');
      //console.log(response.data)
      let a = 0
      response.data.map(el => a+=1)
      console.log(a)
    } catch (error) {
      console.error(error);
    }
  }

getUser()