describe('Authentication', () => {
    beforeEach(() => {
      cy.fixture('users.json').as('users');
  
      cy.intercept('POST', '/api/login', (req) => {
        const { email, password } = req.body;
        cy.get('@users').then((users) => {
          const user = users.find((u) => u.email === email && u.password === password);
          if (user) {
            req.reply({ statusCode: 200, body: { success: true } });
          } else {
            req.reply({ statusCode: 401, body: { success: false } });
          }
        });
      }).as('loginRequest');
    });
  
    it('should redirect to /login when navigating to /', () => {
      cy.visit('/');
      cy.url().should('include', '/login');
    });
  
    it('should redirect to / after successful login', () => {
      cy.visit('/login');
      cy.get('input[type="email"]').type('correctEmail@example.com');
      cy.get('input[type="password"]').type('correctPassword');
      cy.get('button[type="submit"]').click();
      cy.wait('@loginRequest');
      cy.url().should('eq', 'http://localhost:3000/');
    });
  
    it('should stay on /login after failed login', () => {
      cy.visit('/login');
      cy.get('input[type="email"]').type('wrongEmail@example.com');
      cy.get('input[type="password"]').type('wrongPassword');
      cy.get('button[type="submit"]').click();
      cy.wait('@loginRequest');
      cy.url().should('include', '/login');
    });
  });
  