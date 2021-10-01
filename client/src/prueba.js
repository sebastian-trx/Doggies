let allDogs1 = [
    {
    "id": 264,
    "name": "Yorkshire Terrier",
    "height": "20 - 23",
    "weight": "2 - 3",
    "life_span": "12 - 16 years",
    "image": "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
    "temperaments": "Bold, Independent, Confident, Intelligent, Courageous"
  },
  {
    "id": 197,
    "name": "Poodle (Toy)",
    "height": "23 - 28",
    "weight": "10 - 4",
    "life_span": "18 years",
    "image": "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg"
  },
  {
    "id": "e1581d24-d7c1-47ee-ab5e-d7fc2f3f9bbf",
    "name": "ddd",
    "height": "23 - 29",
    "weight": "3 - 6",
    "life_span": "10 - 12 years",
    "image": "imagen",
    "createdAt": "2021-09-29T14:35:21.729Z",
    "updatedAt": "2021-09-29T14:35:21.729Z",
    "temperaments": [
      {
        "name": "Asada"
      },
      {
        "name": "Vigilant"
      }
    ]
  }
]


let filterByTemperament, filter1, filter2
// si existe temperaments y si es de tipo string filter2 

filter2 = allDogs1.filter(el => {
  if (el.temperaments && typeof el.temperaments === 'string') {
    return  el.temperaments.split(', ').includes("Bold")
  }
})

// si existe temperaments y si es de tipo array filter1
filter1 = allDogs1.filter(el => {
  if (el.temperaments && Array.isArray(el.temperaments)) {
    return el.temperaments.map(el => el.name).includes("Bold")
  }
})

filterByTemperament = filter1.concat(filter2)    

//console.log(filterByTemperament)

allDogs1.sort((a,b)=> {
  if (a.weight > b.weight) {
    return 1
  }
  if (a.weight < b.weight) {
    return -1
  }
  return 0
})

//console.log(allDogs1)

var items = [
  { name: 'fdsas', value: "20 - 21" },
  { name: 'Edward', value: "2 - 3" },
  { name: 'tyui', value: "NaN - 6" },
  { name: 'fdsas', value: "NaN" },
  { name: 'Sharpe', value: "3 - 4"  },
  { name: 'And', value: "3 - 6" },
];

let noNaN = items.filter(e=> !e.value.includes("NaN"))

//console.log(noNaN)

noNaN.sort(function (a, b) {
    if (parseInt(a.value) > parseInt(b.value)) {
      return 1;
    }
    if (parseInt(a.value) < parseInt(b.value)) {
      return -1;
    }
    // a must be equal to b
    return 0;
});

console.log(noNaN)
