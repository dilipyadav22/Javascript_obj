function handlePosts(posts) {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];


    // for(let i =0;i<posts.length;i++){
    //     console.log(posts[i]);
    // }
    // console.log(posts[0]);

    return posts;


}
  
 var da= handlePosts();

 for (let i = 0; i <da.length; i++) {
    savePost(da[i]);
  }
console.log(da[0]);
    function savePost(post){
        // console.log("saved");
        return post;
    }
