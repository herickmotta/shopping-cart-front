Shopping Cart App

A simple react shopping cart application

DEMO-APP: https://shopping-cart-front.vercel.app/

**Features**

- Click buy any item to get it on cart
- You can add products from himself or the cart
- Calculates subtotal/shipping/discount/total
- Supports different types of vouchers

**TESTS**
- "yarn tests"
- Acceptance - Simulates a user experience, api is mocked to better test consistency
- Unit - Tests each components individually

**HOW TO RUN**
- Download zip or clone
- "yarn" to install dependencies
- Put the api url below in a .env file following .env.example
- "yarn start"

**NOTES**
- Tests uses different libs because I started doing unitaries learning with react-testing-library. When I changed to acceptance ones, I begin to have some problems, and that's why I used cypress.

API: https://shielded-wildwood-82973.herokuapp.com/

