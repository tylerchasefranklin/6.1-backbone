var Likes = require('./models/likes.js').Likes;
var $ = require('jquery');

var like = new Likes();

$(document).on('click', '.like-button', function(event){
  like.addLike();
  like.toJSON();
  $('.like-button').html(like.get('value') + " " + like.get('label'));
});
