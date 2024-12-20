describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/389')
  })
    
  it('displays movie details when a movie poster is clicked', () => {

    cy.get('.MoviePoster img').first().click(); 

    
    cy.get('img').should('exist'); 
    cy.get('.MovieDetails').should('exist').within(() => {
      cy.get('h2').should('contain', movie.title);
      cy.get('p').should('contain', `Overview: ${movie.overview}`);
      cy.get('p').should('contain', `Release Date: ${movie.release_date}`);
      cy.get('p').should('contain', `Language: ${movie.original_language}`);
      cy.get('p').should('contain', `Genres: ${movie.genre_ids.join(', ')}`);
      
    });
    cy.get('.home-btn').should('exist').click();

    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('.MoviesContainer').should('exist'); 
  });
});