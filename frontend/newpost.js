$('#post').click(function(){
    createNewPost();
    window.location.href = "http://localhost:8080";
    
});

$('#photo').change(function(){
    previewPhoto($('#photo').val());
});

function createNewPost(){

    var newpost = {
        // POINT 8. Use jQuery to get form data and create an object for new post
        username: $('#username').val(),
        title: $('#title').val(),
        comment: $('#comment').val(),
        image_url: $('#photo').val(),
        create_date: moment()
    };

    var url = 'http://localhost:8080/api/posts';
    
    // POINT 9. Insert data to REST API with axios
    axios.post(url,newpost).then(function (response) {
        console.log(response);
        
        
    });
}

function previewPhoto(src){
    $('#preview').attr('src', src);
}