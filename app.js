//     //  PRESS (Ctrl + A) to select all and then press (Ctrl + ?) to remove comment to see the code
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")!;
// function add(num1: number, num2: number) {
//     return num1 + num2;
// }
// button.addEventListener("click", function() {
//     console.log(add(+input1.value, +input2.value));
// });
// // Number: 0, 5, 0.5, -8
// // String: "Apple"
// // Boolean: true,false
// // -------------------------------------------- ERROR # 01  -------------------------------------------- //
// let person: string;
// person = 12;
// // Because typeOf Person is string;
// let person1: string;
// person1 = "12";
// // ERROR # 01 SOLVED because person1.value is also string
// // --------------------------------------------  ERROR # 02  -------------------------------------------- //
// // ERROR in Arrays
// let array1: string[] = [];
// array1.push(1);
// // Because typeOf array1 is string not Number;
// // ERROR # 02 
// // ERROR in Arrays
// let array2: string[] = [];
// array2.push("1");
// // ERROR # 02 SOLVED because array2.push.value is also string;
// // --------------------------------------------  Different ways of OBJECTS  -------------------------------------------- //
// const person3 = {
//     name: "Hadi",
//     age: 20,
//     cities: ["Karachi"]
// }
// // SECOND WAY ( We first define types and then assign values )
// const person4: {
//     name:string;
//     age: number;
//     cities: string[]
// } = {
//     name: "Hadi",
//     age: 20,
//     cities: ["Karachi"]
// }
// // THIRD WAY ( We first define types and then assign values )
// type person5 = {
//     name:string;
//     age: number;
//     cities: string[];
//     email: string
// }
// const person5 = {
//     name: "Hadi",
//     age: 20,
//     cities: ["Karachi"],
//     email: ""
// }
// person5.email = "hr@team.com";
// const person01: customers[] = [];
//  const person01: customers = {
//     name: "Hadi",
//     age: 20,
//     hobbies: ["cricket"],
//     email: ""
//  }
// email.push("hr@team.com");
// type customer = {
//     name:string;
//     age: number;
//     hobbies: string[];
//     email: string
// }
// let customers: customer[] = [];
// const person02: customer = {
//     name: "Nadir",
//     age: 19,
//     hobbies: ["cricket"],
//     email: ""
// }
// person02.email = "hello@cr.com";
// customers.push(person02);
// customers.push({
//    name: "Raza",
//    age: 19,
//     hobbies: ["cricket"],
//     email: ""
// })
// // ERROR Generated in Index no 2
// const roles: [number, string] = [0, "Admin"];
// roles[2] = "Ishaq"
// // ByDefault ERROR in TypeScript
// const roles1: [number, string] = [0, "Admin"];
// roles1.push("Hadi");
// // ASSIGN DUAL Type in TypeScript
// let userName: string | number;
// userName = "Hadi";
// userName = 123;
// // If you assign other than string or number you get an ERROR
// userName = true;
// // No ERROR FOUND
// function myFunc(num8: number, num9: number, condition: string) {
//    if(condition === "add") {
//       return num8 + num9;
//    }
//    else if(condition === "subtract") {
//       return num8 - num9;
//    }
// }
// console.log(myFunc(5,8, "divide"));
// // ERROR FOUND 
// function myFunct(num8: number, num9: number, condition: "add" | "subtract") {
//    if(condition === "add") {
//       return num8 + num9;
//    }
//    else if(condition === "subtract") {
//       return num8 - num9;
//    }
// }
// console.log(myFunct(5,8, "divide"));
// // TEMPLATE LETERALS
// function myFunct(num8: number, num9: number, condition: "add" | "subtract") {
//    if(condition === "add") {
//       return num8 + num9;
//    }
//    else if(condition === "subtract") {
//       return num8 - num9; 
//    }
// }
// console.log(myFunct(5,8, "add"));
// // OR
// console.log(myFunct(5,8, "subtract"));
// // FUNCTION TYPES
// let myFunction: (a: number, b:number) => number;
// function add (num5: number, num6: number): number {
//    return num5 + num6;
// }
// myFunction = add;
