// Test suite for the Todo List App
describe("Todo List App", () => {
  // Reset tasks before each test
  beforeEach(() => {
    // Visit the app's URL
    cy.visit("http://localhost:3000");
  });

  // Test: Adding a task with a specific value
  it("allows adding a task with a specific value", () => {
    // Click the reset task button to start with a clean slate
    cy.getByData("reset-task-button").click();
    // Add a new task
    cy.getByData("add-task-input").type("New Task");
    cy.getByData("add-task-button").click();
    // Check if the added task exists in the list
    cy.get("input[value='New Task']").should("exist");
  });

  // Test: Preventing addition of an empty task
  it("prevents addition of an empty task", () => {
    // Click the reset task button to start with a clean slate
    cy.getByData("reset-task-button").click();
    // Check if the add task button is disabled for empty input
    cy.getByData("add-task-button").should("be.disabled");
  });

  // Test: Updating an existing task
  it("allows updating an existing task", () => {
    // Click the reset task button to start with a clean slate
    cy.getByData("reset-task-button").click();
    // Add a new task
    cy.getByData("add-task-input").type("New Task");
    cy.getByData("add-task-button").click();
    // Clear and update the task
    cy.get("input[value='New Task']").clear().type("Updated Task");
    // Check if the task was updated successfully
    cy.get("input[value='Updated Task']").should("exist");
  });

  // Test: Deleting a task
  it("allows deleting a task", () => {
    // Click the reset task button to start with a clean slate
    cy.getByData("reset-task-button").click();
    // Add a new task
    cy.getByData("add-task-input").type("New Task");
    cy.getByData("add-task-button").click();
    // Delete the task and check if it's removed
    cy.getByData("delete-task").click();
    cy.getByData("delete-task").should("not.exist");
  });

  // Test: Completing a task
  it("allows completing a task", () => {
    // Click the reset task button to start with a clean slate
    cy.getByData("reset-task-button").click();
    // Add a new task
    cy.getByData("add-task-input").type("New Task");
    cy.getByData("add-task-button").click();
    // Complete the task and check if it's disabled
    cy.get("[type=checkbox]").click();
    cy.get("input[value='New Task']").should("be.disabled");
  });

  // Test: Filtering completed and not completed tasks
  it("allows filtering completed and not completed tasks", () => {
    // Click the reset task button to start with a clean slate
    cy.getByData("reset-task-button").click();
    // Add a completed task
    cy.getByData("add-task-input").type("Completed Task");
    cy.getByData("add-task-button").click();
    cy.get("[type=checkbox]").click();
    // Add a not completed task
    cy.getByData("add-task-input").type("Not Completed Task");
    cy.getByData("add-task-button").click();
    // Filter for completed tasks and check existence
    cy.getByData("filter-task").select("true");
    cy.get("input[value='Completed Task']").should("exist");
    // Filter for not completed tasks and check existence
    cy.getByData("filter-task").select("false");
    cy.get("input[value='Not Completed Task']").should("exist");
  });
});
