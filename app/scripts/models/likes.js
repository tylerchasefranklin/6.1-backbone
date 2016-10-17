var Backbone = require('backbone');

var Likes = Backbone.Model.extend({
  defaults: {
    'value': 0,
    'label': 'Like'
  },
  initialize: function(){
    this.get('value');
  },
  addLike: function(){
    var likeCount = this.get('value') + 1;
    this.set('value', likeCount);
    console.log(this.get('value'));
  },
  toJSON: function(){
    if(this.get('value') != 1){
        this.set('label', "Likes");
    }
  }

});


module.exports = {
  "Likes": Likes
};
