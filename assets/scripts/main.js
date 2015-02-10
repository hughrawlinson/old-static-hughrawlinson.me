$(function(){
    $.ajax({
        url:'https://api.github.com/users/hughrawlinson/repos?sort=pushed&direction=desc',
        success:function(data,status){
            if(status === "success"){
                console.log(data[0]);
                $('.gh-recent').show(400);
                $('.gh-recent #repo-name').text(data[0].name);
                var link = data[0].homepage!=null?data[0].homepage:data[0].html_url;
                $('.gh-recent #repo-name').attr('href',link);
                $('.gh-recent #repo-desc').text(data[0].description);
            }
        }
    });
});