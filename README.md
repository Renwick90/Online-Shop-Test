INSTALLATION 

$ git clone git@github.com:Renwick90/Online-Shop-Test.git
$ cd final_deloitte_shop 
$ nodemon server.js 

RUN TESTS

From final_deloitte_shop directory in terminal:

$ cd client
$ npm install
$ cd src/shop
$ mocha specs

CODE STRUCTURE 

The code for this site has been written in a MVC structure. The front end has not been completed yet. 

The logic is located in client/src/shop/models and the tests are in client/src/shop/specs. 

APPROACH 

The app is written entirely in JavaScript. The TDD methodology required that all tests be written before tackling the functionality. The bulk of the logic is in client/src/shop/models/shop.js. This is where item.js, voucher.js, and inventory.js can be found. The next steps are to populate the homepage front end with the inventory.js and utilise the functionality that is located in models. This will be done in views by updating elements of the index.html.
