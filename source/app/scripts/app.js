/*global define */
define(['jquery'], function ($) {
    'use strict';
    var self = {};

    self.showGithub = function(){
        $.ajax({
            url:'https://api.github.com/users/hughrawlinson/repos?sort=pushed&direction=desc',
            success:function(data,status){
                if(status === "success"){
                    $('.gh-recent').show(400);
                    $('.gh-recent #repo-name').text(data[0].name);
                    $('.gh-recent #repo-name').attr('href',data[0].html_url);
                    $('.gh-recent #repo-desc').text(data[0].description);
                }
            }
        });
    };

    return self;
});