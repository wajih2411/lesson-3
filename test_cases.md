#### Test Case 1: Valid Login
- **Description:** Verify that a standard user can log in with valid credentials.
- **Steps to Execute:**
  1. Navigate to the login page.
  2. Enter valid username and password.
  3. Click the login button.
- **Expected Results:** User is successfully logged in and redirected to the home page.
- **Test Data:** Username: standard_user, Password: secret_sauce

#### Test Case 2: Invalid Login-Incorrect Password
- **Description:** Verify that a user cannot log in with an incorrect password.
- **Steps to Execute:**
  1. Navigate to the login page.
  2. Enter valid username and an incorrect password.
  3. Click the login button.
- **Expected Results:** User receives an error message indicating an incorrect password, and they remain on the login page.
- **Test Data:** Username: standard_user, Password: incorrect123

#### Test Case 3:  Invalid login- Non-existent User
- **Description:** Verify that a user cannot log in with a non-existent username.
- **Steps to Execute:**
  1. Navigate to the login page.
  2. Enter a non-existent username and a valid password.
  3. Click the login button.
- **Expected Results:** User receives an error message indicating an invalid username, and they remain on the login page.
- **Test Data:** Username: non_user, Password: secret_sauce

#### Test Case 4:  Adding Items to the Cart
- **Description:** Verify that a user can add items to the cart after successful login.
- **Steps to Execute:**
  1. Log in with valid credentials.
  2. Browse the product catalog.
  3. Add one or more items to the shopping cart.
- **Expected Results:** Items are added to the cart, and the cart icon shows the correct number of items.
- **Test Data:** Username: standard_user, Password: secret_sauce

#### Test Case 5:  Checkout Process
- **Description:** Verify that a user can successfully complete the checkout process.
- **Steps to Execute:**
  1. Log in with valid credentials.
  2. Add items to the cart.
  3. Navigate to the cart.
  4. Click the "Checkout" button.
  5. Enter shipping information and payment details.
  6. Confirm the order.
- **Expected Results:** The order is successfully placed, and the user receives an order confirmation.
- **Test Data:** Username: standard_user, Password: secret_sauce
