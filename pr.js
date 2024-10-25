const arr =[
    {
        id:1,
        age:20
    },
    {
        id:2,
        age:30
    },
    {
        id:3,
        age:26
    },
]
// var sum=0;

// arr.filter((index)=>{
//     if(index.age>20) {
//         sum=sum+index.age;
//         console.log(index.age);}
//     else{console.log("zero");}

// })

// console.log(sum);


const sum=arr.reduce((prev,cur)=>{
    if(cur.age>20){
    return prev+cur.age;
    }
    return prev;
},0);

console.log(sum);

