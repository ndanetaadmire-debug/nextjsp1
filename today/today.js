//The Challenge: Given an array of user objects, write a function that returns an array of names for only the users who are active.

//JavaScript
const users = [
  { id: 1, name: "Kabelo", isActive: true },
  { id: 2, name: "Thabo", isActive: false },
  { id: 3, name: "Chantel", isActive: true },
];
function first (arrays){
  return arrays.filter((item)=>(item.isActive===true)).map((item)=>(item.name));
}
console.log(first(users));