

describe('Blog App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  describe('Login', () => {
    it('Login Success Auth', () => {
      cy.get("#form-login")
      
  
      cy.get('input:first').type('lemudev')
      cy.get('input:last').type('lemuel12')
  
  
      cy.get("#btn-login").click()
      cy.get('#error-message').should('not.exist');
    });
    
  
    it('Login Fail Auth', () => {
      cy.get("#form-login")
      
  
      cy.get('input:first').type('l333mudev')
      cy.get('input:last').type('333333')
  
  
      cy.get("#btn-login").click()
      cy.get('#error-message').should('exist');
    });
    
  });
  

  describe('blog CRUD', () => {
    it('Create Blog', () => {
      cy.get("#form-login")

      cy.get('input:first').type('lemudev')
      cy.get('input:last').type('lemuel12')
      cy.get("#btn-login").click()

            
      cy.get("#Form-Blog")
      cy.get('input:first').type("example...")
      cy.get('input:last').type("http://localhost:5173")

      cy.get("#btn-create-blog").click()

    });
    
  });
  

})