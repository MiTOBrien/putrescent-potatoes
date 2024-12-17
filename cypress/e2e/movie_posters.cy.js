describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    })

  it('displays a list of posters', () => {
    cy.intercept("GET", "https://rancid-tomatillos-api.onrender.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    })

    cy.get('.MoviesContainer').should('exist')
    cy.get('h1').contains('Putrescent Potatoes')
    cy.get('.MoviePoster').first().find('button').should('exist')
    cy.get('.MoviePoster').first().contains('img[src="https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg"]')
    cy.get('.MoviePoster').first().find('vote_count').should('exist')
    cy.get('.MoviePoster').first().find('vote_count').should('have.text', '12 Angry Men')
  })
})