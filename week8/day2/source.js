//SETUP
//===================================================

// npm install cypress
$(npm bin)/cypress open

// add to package
"cypress:open": "cypress open"

//first passing test
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

//first failing test

describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(false)
  })
})

//sink

describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')
  })
})

//base url

"baseUrl": "http://localhost:8000",


cy.visit(path);

cy.contains(keyword); //does element have text 

.click();

cy.url()

.should('include', '/commands/actions')

cy.get('.action-email') // like jquery query
.type('fake@email.com')
.should('have.value', 'fake@email.com')

//DESIGN
//===================================================

//WRITE
//===================================================


//STUB
//===================================================

cy.server()           // enable response stubbing
cy.route({
  method: 'GET',      // Route all GET requests
  url: '/users/*',    // that have a URL that matches '/users/*'
  response: []        // and force the response to be: []
})

//CI
//===================================================

