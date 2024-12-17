describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    })

  it('displays a list of posters', () => {
    cy.intercept("GET", "https://rancid-tomatillos-api.onrender.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    })

    // Test container and title
    cy.get('.MoviesContainer').should('exist')
    cy.get('h1').contains('Putrescent Potatoes')

    // Test first poster
    cy.get('.MoviePoster').first().within(() => {
      cy.get('p').contains(32544)
      cy.get('button').should('exist')
      cy.get('img').should('have.attr', 'src').and('include', "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg")
    })

    // Test last poster
    cy.get('.MoviePoster').last().within(() => {
      cy.get('p').contains(27642)
      cy.get('button').should('exist')
      cy.get('img').should('have.attr', 'src').and('include', "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg")
    });
  })
})