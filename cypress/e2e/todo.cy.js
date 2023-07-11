/* eslint-disable no-undef */
describe('Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have background image', () => {
    cy.get('img[Alt="Mountains"]').should('be.visible');
  });

  it('should have correct header', () => {
    cy.get('[class^="Header_AppHeader"] > p').should('have.text', 'REACT TODO');
  });

  it('empty list displays correctly', () => {
    cy.get('[class^="TodoList_TodoItems"]').should('exist');
    cy.get('[class^="TodoList_NoItems"]').should('be.visible');
    cy.get('[class^="TodoList_NoItems"]').children().should('have.length', 1);
    cy.get('[class^="TodoList_NoItems"] > p').should('have.text', 'empty');
  });
});

describe('Todo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('create todo', () => {
    cy.get('[class^="AddTodoInput_Input"]').type('Sleep');
    cy.contains('ADD').click();

    cy.get('[class^="AddTodoInput_Input"]').type('Eat');
    cy.contains('ADD').click();

    cy.contains('Sleep').should('exist');
    cy.contains('Eat').should('exist');
  });

  it('delete todo', () => {
    cy.get('[class^="AddTodoInput_Input"]').type('Sleep');
    cy.contains('ADD').click();

    cy.get('[class^="AddTodoInput_Input"]').type('Eat');
    cy.contains('ADD').click();

    cy.get('[Alt="Delete"]').first().click();
    cy.contains('Sleep').should('not.exist');
    cy.contains('Eat').should('exist');
  });

  it('mark as complete', () => {
    cy.get('[class^="AddTodoInput_Input"]').type('Sleep');
    cy.contains('ADD').click();

    cy.get('[class^="AddTodoInput_Input"]').type('Eat');
    cy.contains('ADD').click();

    cy.get('[class^="TodoItem_InputGroup"] > input[type="checkbox"]').first().click();

    cy.get('[class^="DeleteButton_Deletion"]').first().should('have.attr', 'disabled');
  });

  it('should display correct items left', () => {
    cy.get('[class^="AddTodoInput_Input"]').type('Sleep');
    cy.contains('ADD').click();

    cy.get('[class^="AddTodoInput_Input"]').type('Eat');
    cy.contains('ADD').click();

    cy.get('[class^="TodoItem_InputGroup"] > input[type="checkbox"]').first().click();

    cy.get('[class^="TodoFooter_Text"]').should('contain', '1 items left');
  });

  it('should filter correctly', () => {
    cy.get('[class^="AddTodoInput_Input"]').type('Sleep');
    cy.contains('ADD').click();

    cy.get('[class^="AddTodoInput_Input"]').type('Eat');
    cy.contains('ADD').click();

    cy.get('[class^="AddTodoInput_Input"]').type('Repeat');
    cy.contains('ADD').click();

    cy.get('[class^="TodoItem_InputGroup"] > input[type="checkbox"]').first().click();

    cy.get('[class^="FooterButton"]').contains('All').click();
    cy.get('[class^="TodoList_TodoItems"]').children().should('have.length', 3);

    cy.get('[class^="FooterButton"]').contains('Active').click();
    cy.get('[class^="TodoList_TodoItems"]').children().should('have.length', 2);

    cy.get('[class^="FooterButton"]').contains('Completed').click();
    cy.get('[class^="TodoList_TodoItems"]').children().should('have.length', 1);
  });

  it('clear completed works correctly', () => {
    cy.get('[class^="AddTodoInput_Input"]').type('Sleep');
    cy.contains('ADD').click();

    cy.get('[class^="AddTodoInput_Input"]').type('Eat');
    cy.contains('ADD').click();

    cy.get('[class^="AddTodoInput_Input"]').type('Repeat');
    cy.contains('ADD').click();

    cy.get('[class^="TodoItem_InputGroup"] > input[type="checkbox"]').first().click();

    cy.get('[class^="FooterButton"]').contains('Clear Completed').click();

    cy.get('[class^="FooterButton"]').contains('All').click();
    cy.get('[class^="TodoList_TodoItems"]').children().should('have.length', 2);

    cy.get('[class^="FooterButton"]').contains('Completed').click();
    cy.get('[class^="TodoList_NoItems"]').should('exist');
  });

  it('should have max height and scrollbar', () => {
    for (let i = 0; i < 12; i++) {
      cy.get('[class^="AddTodoInput_Input"]').type(i);
      cy.contains('ADD').click();
    }

    cy.get('[class^="TodoList_TodoItems"]')
      .invoke('css', 'height')
      .then((str) => parseInt(str, 10))
      .should('be.lte', 350);

    cy.get('[class^="TodoList_TodoItems"]').should('have.css', 'overflow-y', 'auto');
  });
});
