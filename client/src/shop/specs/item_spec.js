var Item = require('../models/item');
var assert = require('assert');

describe('item', function(){
  it('should have a name', function(){
    var item = new Item({name: 'Almond Toe Court Shoes', color:  'Patent Black', category:'Women’s Footwear' , price: 99.00, quantity: 5 });
    assert.equal(item.name, 'Almond Toe Court Shoes');
  });

})
