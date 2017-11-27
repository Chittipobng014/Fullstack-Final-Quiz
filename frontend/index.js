$(function(){
    loadAllPost();
});

$('#search').click(function(){
    loadPostByUser();
});

function loadAllPost() {
    $('#posts').empty();
    //Get all posts
    var url = 'http://localhost:8080/api/posts/';
    
    // POINT 6. Call REST APIs with Axios
    axios.get(url).then(function (response) {
        
            
                $.get('post.mst', function(template) {
                    for(i=0;i<response.data.length;i++){
                        
            
                        
                        var title = JSON.stringify(response.data[i].title);
                        var comment = JSON.stringify(response.data[i].comment);
                        var create_date = JSON.stringify(response.data[i].create_date);
                        
            
                  var rendered = Mustache.render(template, 
                    {
                        image_url: response.data[i].image_url,
                        title: title,
                        comment: comment,
                        create_date: create_date
                    });
                  $('#posts').append(rendered);
                }
                });
              
        
    });    
    // POINT 7. User Mustache render template(post.mst) with json data from the API
    

}

function loadPostByUser() {
    // Additional 1.

    $('#posts').empty();
    
    var url = 'http://localhost:8080/api/posts/search';
    
    
    axios.get(url,{
        params:{
            username: "army"
        }
    }).then(function (response) {
        $.get('post.mst', function(template) {
            for(i=0;i<response.data.length;i++){
                
    
                
                var title = JSON.stringify(response.data[i].title);
                var comment = JSON.stringify(response.data[i].comment);
                var create_date = JSON.stringify(response.data[i].create_date);
                
    
          var rendered = Mustache.render(template, 
            {
                image_url: response.data[i].image_url,
                title: title,
                comment: comment,
                create_date: create_date
            });
          $('#posts').append(rendered);
        }
        });
      
    });    
    
    
}
    

