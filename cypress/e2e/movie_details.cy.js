describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/389')
  })
    
  it('displays movie details when a movie poster is clicked', () => {
    cy.intercept('GET', `https://rancid-tomatillos-api.onrender.com/api/v1/movies/389`, {
      statusCode: 200,
      fixture: "movie_details"
    })

  // Test container and title
  cy.get('.MovieDetails').should('exist')
  cy.get('h1').contains('Putrescent Potatoes')
  cy.get('.home-btn').should('exist');

  // Assert that the image and movie details section are visible
  cy.get('img').should('exist');
  cy.get('.MovieDetails').should('exist').within(() => {
    cy.get('h2').contains("12 Angry Men");
    cy.get('p').contains("The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.");
    cy.get('p').contains("1957-04-10");
    cy.get('p').contains('en');
    cy.get('p').contains('Drama');
  });
  });
});