describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3000/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    }).as('getMovies')
    cy.visit('http://localhost:3000')
  })

  it('displays a list of posters', () => {
    // cy.wait('@getMovies')
    cy.get('.MoviesContainer').should('exist')
    cy.get('.MoviePoster').first().find('button').should('exist')
    cy.get('.MoviePoster').first().find('vote_count').should('exist')
    cy.get('.MoviePoster').first().find('vote_count').should('have.text', '12 Angry Men')
  })
})