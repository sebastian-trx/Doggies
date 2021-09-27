const axios = require('axios');


const getTemperaments = async () => {
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
    console.log(sinDuplicadosX2)
    return sinDuplicadosX2
  } 
  catch (error) {
    console.error(error);
  }
}
getTemperaments()

//==================================================================================================================

/*temperament = ['Stubborn', 'Curious', 'Playful', 'Adventurous', 'Active', 'Fun-loving', 'Adventurous']
var uniqueArr = [...new Set(temperament)]
console.log(uniqueArr)*/

//==================================================================================================================

/*let arr = [
  [
    'Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful'
  ],
  [ 'Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active' ],
  [
    'Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent'
  ],
  [
    'Affectionate, Energetic, Lively, Independent, Playful, Companionable'
  ],
  [
    1232
  ],
  [
    ' Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent'
  ],
  [
    'Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent'
  ],
  [
    ' Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent'
  ]
]

arr = arr.flat()
let b = []
for(let i=0;i<arr.length;i++){
  if(typeof arr[i] === 'string'){
    b.push(arr[i].split(','))
  }
}
b = b.flat()
var uniqueArr = [...new Set(b)]
let sinEspacio = uniqueArr.filter(el => el[0] !== ' ')
let conEspacio = uniqueArr.filter(el => el[0] === ' ')
console.log(sinEspacio)
console.log(conEspacio)
//quitar los espacios de conEspacio y pushearlo a sinEspacio
conEspacio.forEach(element => {
  sinEspacio.push(element.slice(1))
});
console.log(sinEspacio)
*/


/*
let palabra = ['-holanda',' otra cosa']
let palabraSinEspacio = palabra[0].slice(1)
console.log(palabraSinEspacio)
*/


/*for(let j=0; j<uniqueArr.length;j++){
  if(uniqueArr[j][0] !== ' '){
    console.log(uniqueArr[j])
  }
}
*/

