let arr = [{
    id: "6f9e8be0-ec85-43cb-ab6b-0a591274363f",
    age: 45,
    firstName: "Josefa",
    lastName: "Clark",
    gender: "female",
    smartphone: "iPhone"
}, {
    id: "20749b1f-c8d7-4bb0-81ad-0311b63c22a1",
    age: 22,
    firstName: "Meyer",
    lastName: "Larson",
    gender: "male",
    smartphone: "Samsung S6"
}, {
    id: "f0557e6a-4f76-4a2b-9306-8511a7826509",
    age: 60,
    firstName: "Margret",
    lastName: "Cunningham",
    gender: "female",
    smartphone: "Blackberry"
}, {
    id: "ebc2e2d9-b5fc-4ab4-8388-59c88991c0b3",
    age: 36,
    firstName: "Alba",
    lastName: "Cote",
    gender: "female",
    smartphone: "iPhone"
}, {
    id: "29a303dd-6fcd-49f4-b89a-d4c5de198aec",
    age: 42,
    firstName: "Laverne",
    lastName: "Figueroa",
    gender: "female",
    smartphone: "Samsung A5"
}, {
    id: "d532639b-aabd-4443-b273-193dd92bd3df",
    age: 52,
    firstName: "Navarro",
    lastName: "Wilkins",
    gender: "male",
    smartphone: "iPhone"
}, {
    id: "1344b416-bd94-48f6-b5d2-f706d141e8a6",
    age: 42,
    firstName: "Leigh",
    lastName: "Hardy",
    gender: "female",
    smartphone: "iPhone"
}, {
    id: "0ce0af37-cd22-4576-bb7b-9f7afe26c174",
    age: 24,
    firstName: "Mcintosh",
    lastName: "Ingram",
    gender: "male",
    smartphone: "LG"
}, {
    id: "83e6233d-b92a-40ee-8e9b-a80a2a35bafb",
    age: 56,
    firstName: "Bobbi",
    lastName: "Gentry",
    gender: "female",
    smartphone: "XIAOMI"
}, {
    id: "db9004bc-2cb5-47bc-8207-442f2eed1990",
    age: 38,
    firstName: "Gaines",
    lastName: "Middleton",
    gender: "male",
    smartphone: "LG"
}]

console.log(search(arr));

function search(arr) {
    let ageProp = [];
    for (let object of arr) {
        if (object.smartphone === 'iPhone') {
            ageProp.push(object);
        }
    }
    return checkAge(ageProp);
}

function checkAge(ageProp) {
    let minAge = ageProp[0].age;
    let object = null;
    for (let ageVal of ageProp) {

        if (minAge >= ageVal.age) {
            minAge = ageVal.age;
            object = ageVal;
        }
    }
    return object;
}
