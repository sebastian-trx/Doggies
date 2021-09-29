let arr = [
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
    "weight": "3 - 4",
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
        "name": "Stubborn"
      },
      {
        "name": "Vigilant"
      }
    ]
  }
]


for(let i=0; i<arr.length; i++){
    if(arr[i].temperaments !== undefined){
        console.log(arr[i].temperaments)
    }
}

