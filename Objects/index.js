const Adele = {
    name: 'Adele',
    age: 27,
    job: "mortgage servicing",
    pets: ["Herbie"],
    hobbies: ["sport", "pub"]
}

console.log(Adele)
console.log("My pets", Adele.pets)
console.log("My Hobbies", Adele.hobbies)
console.log("My age", Adele.age)
console.log("My job", Adele.job)

const Luke = {
    name: 'Luke',
    age: 34,
    job: 'Carpenter',
    pets: ["Herbert"],
    hobbies: ["football", "pub"]
}

const Sasha = {
    name: 'Sasha',
    age: 23,
    job: "telephony",
    pets: ["Bonnie", "Archie"],
    hobbies: ["Relaxing", "Days out"]
}


const RoomTwo = [Adele, Luke, Sasha]

// 'person' is naming each object in the roomtwo array
for (const person of RoomTwo) {
    console.log(person)
}

// find oldest 'person'
let oldest = { age: 0 }
for (let person of RoomTwo) {
    if (person.age > oldest.age) oldest = person;
}
console.log(oldest)

// Updated age for Sasha
console.log(Sasha);
Sasha.age = 24;
console.log(Sasha)