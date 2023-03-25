describe('Component Testing - App', () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it('Type text and toggle visibility', () => {
    cy.get("input").type("Cypress Testing")
    cy.get("button").click()
    cy.get("p").should("have.text", "Cypress Testing")
  })

  it('Type text and dont toggle visibility', () => {
    cy.get("input").type("Cypress Testing")
    cy.get("p").should("not.exist")
  })

  it('Dont type text and toggle visibility', () => {
    cy.get("button").click()
    cy.get("p").should("exist")
    cy.get("p").should("be.empty")
  })
})