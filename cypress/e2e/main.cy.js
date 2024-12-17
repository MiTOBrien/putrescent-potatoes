// Mock data to use for testing:
// import posters from '../fixtures/movie_posters.json' (we've added mock data to this file for you!)
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", "http://localhost:3000/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    })
  })

  it('displays title on page load', () => {
    // hint: you'll want to add an intercept here if you are making a network request on page load!
    cy.get('h1')
    .contains('Putrescent Potatoes')
  })

  it('displays a list of posters', () => {
    cy.get('.MoviesContainer').should('exist')
    cy.get('.MoviePoster').first().find('button').should('exist')

  })    // cy.get('.MoviePoster').first().find('title').should('exist')
})