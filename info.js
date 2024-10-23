// const arr =['red','blue','pink','green'];

// // var len = arr.length;

// // for(var i=0;arr[i]!=undefined;i++){
// //     console.log(arr[i]);
// // }
// var sum =0;
//  arr.forEach(dipu = ((raju)=>{
//      console.log(raju);
//      sum++;
//  }))
//  console.log(sum);

// var a = `${'di'} ${'lip'}`;
// var b ="yadav";
// console.log(`Hello ${a}`);

// const [a,...b] = [1,2,15,54,5,5];
// const c=[5,5,57,8,1];
// const d = [4,9,1,0,22,894,4]
// const [arr,arr1]=[5 ,8]
// console.log(arr,arr1);


// const arr=[4,5,4,898,54];
const stud= [
    {
        id:1,
        age:20,
    },
    {
        id:2,
        age:80,
    },
    {
        id:3,
        age:15,
    },
    {
        id:4,
        age:12,
    },
    {
        id:5,
        age:60,
    },
]
var res=0;

stud.map((item ,i)=>{
    res=res+item.age;

})
console.log(res);

// var res=0;
// for(let i=0;i<stud.length;i++){
//      res=res+stud[i].age;
//     // console.log(stud[i])
// }
// console.log(res);