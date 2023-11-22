// console.log("start")
// for (let x = 0; x<10; x++){
//     console.log(`x is =${x}`);
// }
// console.log("finish")




// // // let arr =["apple","banana","limon"]
// // // for (let i = 0; i<arr.length;i++){
// // //     alert(arr[i])
// // // }


// // // let fruits=["apple"];
// // // fruits.unshift("pineapple","lemon")
// // // fruits.push("orange","peach")
// // // console.log(fruits)



// // // let fruits = ["Banana"]
// // // let arr = fruits;
// // // alert(arr === fruits);
// // // arr.push("pear");
// // // alert(fruits);






// // // let fruits = ["apples","pear","orange"];
// // // let shoppingCart = fruits;
// // // shoppingCart.push("banana");
// // // alert(fruits.length);



// // // let fruits = ["apple","banana"];
// // // fruits.forEach(function(element,index){
// // //     console.log(`element ${element} has and index = ${index}`)
// // // })

// //                 // local variables tema


// // // function showMessage(){
// // // let massage = "Hello, I am JavaScript";
// // // alert(massage);
// // // }
// // // showMessage();
// // // alert (massage);

// //                 //    outer variables



// // // let userName = 'John';
// // // function showMessage(){
// // //        let message = ' hello ' + userName;
// // //        alert(message);
// // // }
// // // showMessage()


// // // let userName ="John";
// // // function showMessage(){
// // // let userName = "Bob";
// // // let message = "Hello," + userName;
// // //     alert(message);
// // // }
// // // showMessage();
// // // alert(userName);







// // // let arr =["apple","banana","limon","peach","orange"]
// // // for (let i = 0; i<arr.length;i++){
// // //     alert(arr[i])
// // // }







// // // let fruits = ["apple","banana","lemo","peach","orange","avacado"];
// // // fruits.forEach(function(element,index){
// // //     console.log(`element ${element} has and index = ${index}`)
// // // })







// let userName ="John";
// function showMessage(){
// let userName = "Bob";
// let message = "Hello," + userName;
//     alert(message);
// }
// showMessage();
// alert(userName);




// // let greeting1="hello,Alisher how are you?"
// // console.log(greeting1);


// // let greeting2="hello,Nursultan how are you"
// // console.log(greeting2);


// // let greeting3="hello,Amir how are you"
// // console.log(greeting3);


// // function greeting(name1){
// //     console.log(`hello,${name1},how are you?`);
// // }
// // greeting("Askar");





// // function calculateSum(x, y){
// //     let result = x +y;
// //     console.log(result);
// // }
// // calculateSum(5,5)


// // function checkAge(age){
// //     if (age>=18){
// //         return true;
// //     }
// //     else{
// //         return confirm("are you allowed to pass the border");
// //     }
// // }

// // let age = prompt("enter your age ");

// // if(checkAge(age)){
// //     alert("access granted");
// // }

// // else{
// //     alert("access denied");
// // }







// // let students = prompt("Choose student:")
// // switch(students){
// //     case "Bakyt":
// //         text = "Bacyt good at math and chemistry";
// //       break;
// //       case "Kairat":
// //         text = "He is good at turkish labguage";
// //       break;
// //       case "Aslan":
// //         text = "He realy loves IWT lesson";
// //       break;
// //       case "Aden":
// //         text = "Aden pretty good at russian language";
// //       break; 
// //      default:
// //       text ="Student like " +students+ "  don't founded";
// // }
// // document.getElementById("demo").innerHTML =text;



// function calculator(x1,x2, operation){
//     if(operation == '+')
//        return x1+x2;
//     if(operation == "-")
//        return x1-x2;
//     if(operation == "/")
//        return x1/x2;
// }
// console.log(calculator(15,3,"+"))



// // const aden = {
// //     name:"Aden",
// //     age:17,
// //     speciality:"student",
// //     city:"bishkek"}

// // console.log(aden)





// // let adenName = "Hello my name is Aden,"
// // let adenAge = "I am 17 year old,"
// // let  adenStudent ="I am student,"
// // let adenCity = "And i live in bishkek"
// // console.log(`${adenName+adenAge+adenStudent+adenCity}`);







// const aden = {
//     name:"Aden",
//     age:17,
//     speciality:"student",
//     city:"bishkek"
// }

// alert(`Hello my name ${aden.name} , My age is ${aden.age},I am ${aden.speciality},and I live in ${aden.city}`)



// function Person (name,age,spec,city){
//     this.name = name;
//     this.age = age;
//     this.spec = spec;
//     this.city = city;
// }

// const ali = new Person("ali",27,"weber","moscow");
// console.log(ali)



// function Person(name,age,spec,city){
//     this.name = name
//     this.age = age
//     this.spec = spec
//     this.city = city
//     this.sayHi = function(){
//         console.log(`hi my name is ${this.name}`)
//     }
//     }

// const alisher = new Person('alisher',18,'student','bishkek')
// console.log(alisher)
// alisher.sayHi()






