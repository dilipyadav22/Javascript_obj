
// Using bind method do curring function
 function multiply(x,y){
    console.log(x*y);
}

let multiplytwo = multiply.bind(this ,2);
multiplytwo(3)
console.log(multiplytwo)

let multiplymore =function(x,y){
    console.log(x-y);

}
//3 is not take bcz in bind methode value alreday define
let multiplythree = multiplymore.bind(this,10);
multiplythree(3,5)


// Using closer methode to do curring function

let add = function  (a){
    return function (b){
        console.log(a + b);
    }

}


  let addtwo = add(5);
  addtwo(5)


  function sum (a){
    return function(b){
        return a*b;
    }
  }
  sum(50)(20);
  console.log(sum(5)(20));

  const userObj={
    name:"dlip",
    age:25
  }

  function userInfo(Obj){
    return function(userdetails){
            return Obj[userdetails]

    }
  }

  let res = userInfo(userObj);
  console.log(res('name'),res('age'));
