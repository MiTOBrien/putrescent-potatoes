import movieDetails from '../fixtures/movie_details.json';

describe('Movie Details Page', () => {
  const movie = movieDetails[0];

  beforeEach(() => {
    cy.visit('http://localhost:3000/');

    cy.intercept('GET', `https://rancid-tomatillos-api.onrender.com/api/v1/movies/129`, {
      statusCode: 200,
      body: movie,
    }).as('getMovieDetails');
  });

  it('displays movie details when a movie poster is clicked', () => {
    cy.get('.MoviePoster img').first().click(); // Click the first movie poster

    // Assert that the image and movie details section are visible
    cy.get('img').should('exist'); // Check if the image exists (ensure it has loaded)
    cy.get('.MovieDetails').should('exist').within(() => {
      cy.get('h2').should('contain', movie.title);
      cy.get('p').should('contain', `Overview: ${movie.overview}`);
      cy.get('p').should('contain', `Release Date: ${movie.release_date}`);
      cy.get('p').should('contain', `Language: ${movie.original_language}`);
      cy.get('p').should('contain', `Genres: ${movie.genre_ids.join(', ')}`);
      
    });
    cy.get('.home-btn').should('exist').click();

    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('.MoviesContainer').should('exist'); // Adju
  });
});