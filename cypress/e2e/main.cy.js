// Mock data to use for testing:
// import posters from '../fixtures/movie_posters.json' (we've added mock data to this file for you!)
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe('Main Page', () => {
  it('displays title on page load', () => {
    // hint: you'll want to add an intercept here if you are making a network request on page load!
    cy.intercept("GET", "http://localhost:3000", {
      statusCode: 200,
      body: "movie_posters"
    })
    
    cy.visit('http://localhost:3000/')
    .get('h1')
    .contains('rancid tomatillos')
  })
})