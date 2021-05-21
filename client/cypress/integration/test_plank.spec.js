describe("Werken alle url's van de applicatie", function() {
    it('applicatie draait', function() {
      cy.visit('http://localhost:4200');
     
    });
 
    it('navigeren op applicatie (naar contact)', function() {
        cy.visit('http://localhost:4200');
        cy.get('[data-cy=c]').click();
        cy.get('[data-cy=contact]').should('be.visible');
      });
      it('navigeren op applicatie (naar cuttingboards)', function() {
        cy.visit('http://localhost:4200');
        cy.get('[data-cy=all]').click();
        cy.get('[data-cy=list]').should('be.visible');
      });
      it('navigeren op applicatie (naar add)', function() {
        cy.visit('http://localhost:4200');
        cy.get('[data-cy=add]').click();
        cy.get('[data-cy=addp]').should('be.visible');
      });
      it('navigeren op applicatie (naar home (via add))', function() {
        cy.visit('http://localhost:4200');
        cy.get('[data-cy=add]').click();
        cy.get('[data-cy=home]').click();
        cy.get('[data-cy=h]').should('be.visible');
      });
      it('verkeerde url geeft 404 terug', function() {
        cy.visit('http://localhost:4200/dezeurlbestaatniet');
        cy.get('[data-cy=404]').should('be.visible');
      });

  });
describe("Worden de databank gegevens opgehaald", function() {
    //slechte test want we kunnen ook op andere plaatsen icon toevoegen
  it('gegevens worden uit databank gehaald (slechte manier)', function() {
    cy.visit('http://localhost:4200/cuttingboard/list');
    cy.get('mat-icon').should('be.visible');  
  });

  it('gegevens worden uit databank gehaald (goeie manier)', function() {
    cy.visit('http://localhost:4200/cuttingboard/list');
    cy.get('[data-cy=laden').should('be.visible');
  });

});

describe("Filter", function() {
    //slechte want gebruiken databank --> zullen falen als er iets veranderd
  it('filter testen (niet met mockdata)"', function() {
    cy.visit('http://localhost:4200/cuttingboard/list');
    cy.get('[data-cy=plankList]').should('have.length',3)
    cy.get('[data-cy=filterInput]').type('he');
    cy.get('[data-cy=plankList]').should('have.length',1)

  });
  it('filter testen (met mockdata)', function(){
    cy.server();
    cy.route({
        method: 'GET', 
        url: 'http://localhost:4200/api/cuttingboards', 
        status: 200,
        response: 'fixture:planken.json'
     });
     cy.visit('http://localhost:4200/cuttingboard/list');
    cy.get('[data-cy=plankList]').should('have.length',3);
    cy.get('[data-cy=filterInput]').type('k');
    cy.get('[data-cy=plankList]').should('have.length',2);
    cy.get('[data-cy=filterInput]').type('i');
    cy.get('[data-cy=plankList]').should('have.length',1);
    });
});

describe("Error", function() {
  it('Error tonen na 500 return code ', function(){
    cy.server();
    cy.route({
        method: 'GET', 
        url: 'http://localhost:4200/api/cuttingboards', 
        status: 500,
        response: 'Error'
     });
     cy.visit('http://localhost:4200/cuttingboard/list');
     cy.get('[data-cy=error').should('be.visible');
    });
});

describe("Add", function() {
  it('add testen (niet met mockdata)', function(){
    cy.visit('http://localhost:4200/cuttingboard/list');
    cy.get('[data-cy=plankList]').should('have.length',3);
    cy.visit('http://localhost:4200/cuttingboard/add');
    cy.get('[data-cy=a1]').type('dit is de titel');
    cy.get('[data-cy=a2]').type('materiaal');
    cy.get('[data-cy=a3]').type('hier komt de beschrijving');
    cy.get('[data-cy=a4]').click();
    cy.visit('http://localhost:4200/cuttingboard/list');
    cy.get('[data-cy=plankList]').should('have.length',4);

    });
});

  describe("Add-Error", function() {
    it('form geeft pas error na het aanklikken van verplicht veld', function(){
      cy.visit('http://localhost:4200/cuttingboard/add');
      cy.get('[data-cy=ae]').should('not.exist');
      cy.get('[data-cy=a1]').click();
      cy.get('[data-cy=a2]').click();
      cy.get('[data-cy=ae]').should('exist');
  
      });
  });

  describe("Add-disable", function() {
    it('form submit knop is disabled omdat niet verplichten velden niet zijn ingevuld', function(){
      cy.visit('http://localhost:4200/cuttingboard/add');
      cy.get('[data-cy=a4]').should('be.disabled');;
  
      });
  });