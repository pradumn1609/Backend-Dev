// const user={
//     name:"Rahul",
//     email:"kp@gmail.com",
//     phone:12345687
// }
// // const  {name,email,phone}=user
// const updatedUser={...user,address:"Mathura"};
// // console.log(updatedUser);

// const user1=user;
// user1.name="Ajay";
// console.log(user);

// // const {name,...publicdata}=user;
// // console.log(publicdata)

// const numbers=[1,2,3,4,5]
// const newnumbers=numbers.map((number)=>number*2)
// console.log(newnumbers)

// const sumofnumbers=numbers.reduce((sum,number)=>sum+number,0);
// console.log(sumofnumbers)


// //Task 1
// const rawUsers = [
//     { id: 1, name: "Rahul", password: "fb_password", role: "admin" },
//     { id: 2, name: "Sanya", password: "123_password", role: "user" },
//     { id: 3, name: "Amit", password: "secret_password", role: "user" }
//     ];
    
//     const safeUsers = rawUsers.map(({password,...rest})=>rest)
//     console.log(safeUsers);
    
//     const adminOnly = safeUsers.filter(user => user.role==="admin")
//     console.log(adminOnly);
    
//     // Task 2
//     const cart = [
//         { item: "Laptop", price: 50000, quantity: 1, inStock: true },
//         { item: "Mouse", price: 1500, quantity: 2, inStock: true },
//         { item: "Keyboard", price: 3000, quantity: 1, inStock: false }
//     ];
    
//     const status1 = cart.map((item)=>{
//         if(item.inStock){
//             console.log("Dispatch");
            
//         }
//         else{
//             console.log("Wait");
            
//         }
//     })
    
//     const in1 = cart.filter(item=>item.inStock)
//     console.log(in1);
    
//     const total = in1.reduce((sum,item)=>sum+item.price*item.quantity,0)                
//     console.log(total);


    // function checkOrderStatus(orderId) {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         if (typeof orderId === "number") {
    //           resolve("Order Shipped");
    //         } else {
    //           reject("Invalid Order ID");
    //         }
    //       }, 1000);
    //     });
    //   }

    //   async function getOrderStatus(orderId) {
    //     try {
    //       const result = await checkOrderStatus(orderId);
    //       console.log(result);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
      
    //   getOrderStatus(101);      
// getOrderStatus("101");   


fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(out=>console.log(out))

// const abc = async ()=> {
//   await fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(out=>console.log(out))
// }
// abc()
  

