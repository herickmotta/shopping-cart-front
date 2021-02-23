/// <reference types="cypress" />

describe("Visit the app and buy things", () => {
  it("Should load products and vouches", () => {
    cy.intercept("/products.json", { fixture: "products_mock_data.json" });
    cy.intercept("/vouchers.json", { fixture: "vouchers_mock_data.json" });
    cy.visit("/");
  });

  it("Should be able to buy many itens", () => {
    cy.get(":nth-child(1) > [data-testid=main-button]").click();
    cy.wait(500);
    cy.get("[data-testid=cart-list]").children().should("have.length", 1);
    cy.get(":nth-child(3) > [data-testid=main-button]").click();
    cy.wait(500);
    cy.get(":nth-child(4) > [data-testid=main-button]").click();
    cy.wait(500);
    cy.get("[data-testid=cart-list]").children().should("have.length", 3);
    cy.get("[data-testid=discount-input]").type("#30OFF");
    cy.get("form").submit();
    cy.get("[data-testid=sbt-field]").should("have.text", "$ 75,00");
    cy.get("[data-testid=ship-field]").should("have.text", "$ 30,00");
    cy.get("[data-testid=disc-field]").should("have.text", "$ 22,50");
    cy.get("[data-testid=ttl-field]").should("have.text", "$ 82,50");
    cy.get(".checkoutBtn").click();
    cy.wait(500);
    cy.get(".checkoutBtn").should("have.text", "ORDER MADE!");
  });
});

describe("Testing API errors", () => {
  it("Should handle api error", () => {
    cy.intercept("/products.json", { forceNetworkError: true });
    cy.intercept("/vouchers.json", { forceNetworkError: true });
    cy.visit("/");
    cy.wait(500);
  });
  it("Should be able to reload failed request", () => {
    cy.intercept("/products.json", { fixture: "products_mock_data.json" });
    cy.intercept("/vouchers.json", { fixture: "vouchers_mock_data.json" });
    cy.get("[data-testid=reload-box] > #reload-btn").click({ multiple: true });
  });
});

describe("Testing cart features", () => {
  it("Should load products and vouches", () => {
    cy.intercept("/products.json", { fixture: "products_mock_data.json" });
    cy.intercept("/vouchers.json", { fixture: "vouchers_mock_data.json" });
    cy.visit("/");
  });

  it("Should put all 3th product in cart", () => {
    cy.get(":nth-child(3) > [data-testid=main-button]").click();
    for (let i = 0; i < 10; i += 1) {
      cy.get("[data-testid=add-btn]").click();
    }
    cy.get(":nth-child(3) > [data-testid=main-button]").should(
      "have.text",
      "NO STOCK"
    );
  });

  it("Should shipping be free", () => {
    cy.get("[data-testid=ship-field]").should("have.text", "$ 0,00");
  });

  it("Should shipping cost 30", () => {
    for (let i = 0; i < 3; i += 1) {
      cy.get("[data-testid=rmv-btn]").click();
    }
    cy.get("[data-testid=ship-field]").should("have.text", "$ 30,00");
  });
  it("Should apply voucher and shipping be free", () => {
    cy.get("[data-testid=discount-input]").type("#SHIPIT");
    cy.get("form").submit();
    cy.wait(500);
    cy.get("[data-testid=ship-field]").should("have.text", "$ 0,00");
  });
});

describe("Testing shipping values", () => {
  it("Should load products and vouches", () => {
    cy.intercept("/products.json", { fixture: "products_mock_data.json" });
    cy.intercept("/vouchers.json", { fixture: "vouchers_mock_data.json" });
    cy.visit("/");
  });

  it("Should put somes products in cart", () => {
    cy.get(":nth-child(3) > [data-testid=main-button]").click();
    for (let i = 0; i < 5; i += 1) {
      cy.get("[data-testid=add-btn]").click();
    }
    cy.get("[data-testid=cart-list]").children().should("have.length", 1);
  });

  it("Should remove product in cart", () => {
    cy.get(":nth-child(3) > [data-testid=main-button]").click();
    for (let i = 0; i < 7; i += 1) {
      cy.get("[data-testid=rmv-btn]").click();
    }
    cy.get("[data-testid=cart-list] >").should(
      "have.text",
      "Add items to your cart"
    );
  });

  it("Should do not checkout with empty cart", () => {
    cy.get(".checkoutBtn").click();
    cy.wait(500);
    cy.get(".checkoutBtn").should("have.text", "CHECKOUT");
    cy.get("[data-testid=cart-section] > :last").should(
      "have.text",
      "Cart can't be empty"
    );
  });
});
