import axios from "axios";

/*async function getApiAsync(params) {
  try{
    let algo = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(algo.data)
  }catch{
    console.log('error')
  }
} 
getApiAsync()*/


let allDogs1 = [
  {
    id: 264,
    name: "Yorkshire Terrier",
    height: "20 - 23",
    weight: "2 - 3",
    life_span: "12 - 16 years",
    image: "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
    temperaments: "Bold, Independent, Confident, Intelligent, Courageous",
  },
  {
    id: 197,
    name: "Poodle (Toy)",
    height: "23 - 28",
    weight: "10 - 4",
    life_span: "18 years",
    image: "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg",
  },
  {
    id: "e1581d24-d7c1-47ee-ab5e-d7fc2f3f9bbf",
    name: "ddd",
    height: "23 - 29",
    weight: "3 - 6",
    life_span: "10 - 12 years",
    image: "imagen",
    createdAt: "2021-09-29T14:35:21.729Z",
    updatedAt: "2021-09-29T14:35:21.729Z",
    temperaments: [
      {
        name: "Asada",
      },
      {
        name: "Vigilant",
      },
    ],
  },
];





let filterByTemperament, filter1, filter2;
// si existe temperaments y si es de tipo string filter2

filter2 = allDogs1.filter((el) => {
  if (el.temperaments && typeof el.temperaments === "string") {
    return el.temperaments.split(", ").includes("Bold");
  }
});

// si existe temperaments y si es de tipo array filter1
filter1 = allDogs1.filter((el) => {
  if (el.temperaments && Array.isArray(el.temperaments)) {
    return el.temperaments.map((el) => el.name).includes("Bold");
  }
});

filterByTemperament = filter1.concat(filter2);

//console.log(filterByTemperament)

allDogs1.sort((a, b) => {
  if (a.weight > b.weight) {
    return 1;
  }
  if (a.weight < b.weight) {
    return -1;
  }
  return 0;
});

//console.log(allDogs1)

var items = [
  { name: "fdsas", value: "20 - 21" },
  { name: "Edward", value: "2 - 3" },
  { name: "tyui", value: "NaN - 6" },
  { name: "fdsas", value: "NaN" },
  { name: "Sharpe", value: "3 - 4" },
  { name: "And", value: "3 - 6" },
];

let noNaN = items.filter((e) => !e.value.includes("NaN"));

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

console.log(noNaN);

let temperaments = ["Loyal", "Friendly", "Amiable", "Loyal", "Amiable"];
let temperaments1 = [...new Set(temperaments)];

let filter = temperaments.filter((e) => e !== "Loyal");

console.log(temperaments1);  

let string = "hola@hot.com"

console.log(!/\S+@\S+\.\S+/.test(string))
console.log(string.match(!/\S+@\S+\.\S+/))









let arr=[
  {
      "id": "6fed736d-8a03-45c8-b14e-a02f166964d8",
      "date": "2021-11-20",
      "startTime": 11,
      "half": true,
      "cost": 500,
      "mpId": "18269734847",
      "createdAt": "2021-11-19T04:59:39.938Z",
      "updatedAt": "2021-11-19T04:59:39.941Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "8b88ba19-a92c-465d-b9bb-c29c5c917f52",
      "date": "2021-11-21",
      "startTime": 12,
      "half": true,
      "cost": 500,
      "mpId": "18269734961",
      "createdAt": "2021-11-19T05:00:01.515Z",
      "updatedAt": "2021-11-19T05:00:01.518Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "3d1c7fcd-dbb9-41c7-9d44-17c135ef0d5a",
      "date": "2021-11-21",
      "startTime": 13,
      "half": false,
      "cost": 500,
      "mpId": "18269734961",
      "createdAt": "2021-11-19T05:00:01.518Z",
      "updatedAt": "2021-11-19T05:00:01.524Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "3ee51a47-e6f5-4069-a46b-5fcec5583e24",
      "date": "2021-11-21",
      "startTime": 13,
      "half": true,
      "cost": 500,
      "mpId": "18269734961",
      "createdAt": "2021-11-19T05:00:01.524Z",
      "updatedAt": "2021-11-19T05:00:01.528Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "c4272dad-a7ed-405e-8273-dbe6ccb828d5",
      "date": "2021-11-21",
      "startTime": 14,
      "half": false,
      "cost": 500,
      "mpId": "18269734961",
      "createdAt": "2021-11-19T05:00:01.528Z",
      "updatedAt": "2021-11-19T05:00:01.531Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "b8abc936-ec65-48e1-b95c-c86a8e1d6dd0",
      "date": "2021-11-23",
      "startTime": 11,
      "half": false,
      "cost": 500,
      "mpId": "18269745474",
      "createdAt": "2021-11-19T05:00:20.182Z",
      "updatedAt": "2021-11-19T05:00:20.185Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "b3195b82-7956-4bfd-be88-164f094ceae4",
      "date": "2021-11-20",
      "startTime": 10,
      "half": false,
      "cost": 500,
      "mpId": "18269734847",
      "createdAt": "2021-11-19T04:59:39.927Z",
      "updatedAt": "2021-11-19T04:59:39.929Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "66028aab-5e05-4b15-ae24-f7f5ef55a86b",
      "date": "2021-11-20",
      "startTime": 10,
      "half": true,
      "cost": 500,
      "mpId": "18269734847",
      "createdAt": "2021-11-19T04:59:39.930Z",
      "updatedAt": "2021-11-19T04:59:39.934Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "c9f72621-920d-4fc2-b89f-739621014445",
      "date": "2021-11-23",
      "startTime": 11,
      "half": true,
      "cost": 500,
      "mpId": "18269745474",
      "createdAt": "2021-11-19T05:00:20.185Z",
      "updatedAt": "2021-11-19T05:00:20.191Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "73911fb6-564e-417b-9e05-28854bb5a436",
      "date": "2021-11-20",
      "startTime": 11,
      "half": false,
      "cost": 500,
      "mpId": "18269734847",
      "createdAt": "2021-11-19T04:59:39.934Z",
      "updatedAt": "2021-11-19T04:59:39.937Z",
      "deletedAt": null,
      "userId": "619c4afa-48cd-42e2-ba3e-25a30dc43f68",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "52697e1b-b088-4df4-b526-b0680ec9c601",
      "date": "2021-11-23",
      "startTime": 13,
      "half": false,
      "cost": 500,
      "mpId": "18269815143",
      "createdAt": "2021-11-19T05:18:41.226Z",
      "updatedAt": "2021-11-19T05:18:41.230Z",
      "deletedAt": null,
      "userId": "7a3c81e8-93f6-4f8c-bdc8-98c92383e511",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  },
  {
      "id": "47c1b021-9909-44a0-a552-397830b923a4",
      "date": "2021-11-23",
      "startTime": 13,
      "half": true,
      "cost": 500,
      "mpId": "18269815143",
      "createdAt": "2021-11-19T05:18:41.230Z",
      "updatedAt": "2021-11-19T05:18:41.234Z",
      "deletedAt": null,
      "userId": "7a3c81e8-93f6-4f8c-bdc8-98c92383e511",
      "fieldId": "7a9f046b-154f-4d1a-ac5c-a7c645c6eb80"
  }
]




allDogs1.sort((a, b) => {
  if (a.weight > b.weight) {
    return 1;
  }
  if (a.weight < b.weight) {
    return -1;
  }
  return 0;
});