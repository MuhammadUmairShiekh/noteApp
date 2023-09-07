let date = new Date()
let getmili = date.getTime();

let dob = new Date(prompt("Enter Date"))
// let dob = new Date("12/6/1999")
// console.log(dob)
let getmilidob = dob.getTime()
 let min = getmili - getmilidob
 let result = min / (1000 * 60 * 60 * 24 * 365)
 console.log(Math.floor(result))
 