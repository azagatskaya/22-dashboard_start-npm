const moment = require('moment');

let date = moment();
console.log(date);
let dayOfWeek = date.day();
console.log(dayOfWeek);

// // let user = undefined;
// let a = 10;
// let b = a;
// let result = 0;
// try {
// 	// console.log(user.name);
// 	if (b === 0)
// 		throw new Error("На ноль делить нельзя.")
// 	result = a / b;
// } catch (error) {
// 	console.log('Что-то пошло не так: ' + error.message);
// } finally {
// 	console.log(result);
// }