### Project Setup ###

This project does not contain the node modules required for cypress. To do this run the following - 

1. cd into your project folder
2. npm install cypress --save-dev

This will install the cypress wrapper in your local project directory only.
You can also install cypress globally with npm install -g but it is reccomended that you install node modules on a project to project basis.

### Running The Framework ###

To run the framework run one of the following - 

1. ./node_modules/.bin/cypress open
2. If you have npm version 5.2 or greater - npx cypress open

This will build your project tree and open the cypress wrapper. There are a number of example tests available to run and study. They cover the basic concepts of cypress. 

But let's make a simple test of our own!

### Making A Test ###

Open up your project in an IDE, like Visual Studio Code (or use command line if you wish). Note that I have created a folder that mirrors the instructions below, if you have any issues that you can't solve, refer to this.

1. Create a folder called myTests2
2. Create a file called search.spec.js 
3. Write the following code - 

describe('My First Example Test', function() {
    it('loads google and performs a search', function(){
        cy.visit('https://www.google.com')
    })
})

If you navigate to the cypress dashboard that you opened before, you can see that your new folder and test has appeared! 
This is the beauty of cypress, you can write your tests and run them instantly. In a way, it's like TDD for UI testing :)

Now run the test.

You can now continue to write tests in one of two ways. 

a) Use the code editor/CLI to add tests using the cypress DSL (domain specific language) which is based largely on mocha.

b) Use the test dashboard to help you navigate the page with the built in 'navigator playground'

Lets stick to the code editor for now. Do the following.

1. Change your code to look like this - 

describe('My First Example Test', function() {
    it('loads google and performs a search', function(){
        cy.visit('https://www.google.com')
        cy.get('.gLFyf')
            .type('Something')
            .type('{enter}')
          })
})

2. Hit manual save or Ctrl+S in your IDE and notice that cypress automatically runs your test for you! This is a great way to validate tests on the fly.


### Run In Tracked Cypress Project ###

cypress run --record --key 5a742243-03e6-4d7c-96a6-5f12f2125117
