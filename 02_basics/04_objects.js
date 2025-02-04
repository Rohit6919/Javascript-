// singleton or how to declare with constructor
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
// assign is used to merge to object 