// const arr=[1,2,8,9,4,4] ;
// var res=0;

// for(let i=0;arr[i]!=undefined;i++){
//      res=res+arr[i];
     

//     console.log(arr[i]);
// }
// console.log(res)


// function handlePosts() {
//     var posts = [
//       { id: 23, title: 'Daily JS News' },
//       { id: 52, title: 'Code Refactor City' },
//       { id: 105, title: 'The Brightest Ruby' }
//     ];
//     return posts;
// }

// var deep = handlePosts();

// for (let i = 0; i <deep.length; i++) {
//   console.log(deep[i]);
// }   


function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  for(let i=0;i<posts.length;i++) {
    savePost(posts[i]);
  }
}
  function savePost(post){
    console.log(post);
  }

  // savePost();

handlePosts();

// posts.map((index,i)=>{

//   console.log(i,index)
// })




// function handlePosts() {
//     var posts = [
//       { id: 23, title: 'Daily JS News' },
//       { id: 52, title: 'Code Refactor City' },
//       { id: 105, title: 'The Brightest Ruby' }
//     ];
    
//     for (var i = 0; i < posts.length; i++) {
//       savePost(posts[i]);
//     }
// }