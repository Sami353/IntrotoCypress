/// <reference types="cypress" />

it('creates a new list and a new card', () => {
    cy.visit('/board/1')
    cy.get('[data-cy="add-list-input"]')
        .type('new list{enter}')
    cy.contains('Add another card')
        .click()
    cy.get('[data-cy="new-card-input"]')
        .type('new card{enter}') 
} )

it('new test for starred item', () => {
    cy.visit('/')
    cy.get('[data-cy="star"]')
        .first()
        .click({force: true})
})

//Assertions
it('making assertions', () => {
    cy.visit('/board/1')
    cy.get('[data-cy=new-card]')
        .click()
    cy.get('[data-cy="new-card-input"]')
        .type('bread{enter}')
    cy.get('[data-cy="new-card-input"]')
        .type('milk{enter}')
    cy.get('[data-cy="card"]')
        .should('have.length', 2)
})  

it('check mark', () => {
    cy.visit('/board/1')

    cy.get('[data-cy="card-checkbox"]')
        .check()

    cy.get('[data-cy="card-checkbox"]')
        .should('be.checked')

    cy.get('[data-cy="due-date"]')
        .should('have.class', 'completed')
})

it('check text or list name', () => {
    cy.visit('/board/1')

    //it is a input element so we check for value
    cy.get('[data-cy="list-name"]')
        .should('have.value', 'groceries')

    //it is a div element and has an opening tag, a closing tag and a text inside 
    cy.get('[data-cy="card-text"]')
        .should('have.text', 'bread')
})

//Chaining
it('chaining and retrying', () => {
    cy.visit('/board/1')
    cy.contains('[data-cy=card]', 'Oct 18 2024')
    cy.get('[data-cy=list]')
        .eq(1)
        .contains('[data-cy=card]', 'shampoo')
})

it('chaining and retrying', () => {
    cy.visit('/board/1')

    cy.get('[data-cy=card]') //query
        .last() //query
        .should('contain.text', 'shampoo') //assertion
        .click() //actions
    
    cy.get('[data-cy="card-detail-title"]')
        .should('have.value', 'shampoo')
})

//Run Mode
it.only('test passes', () =>{
    cy.visit('/')
})