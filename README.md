# React_Express_Sample_App
- This repository has the code to support a React FrontEnd, a Node/Express BackEnd, and Stripe integration.

.
## Download the app
1.  git clone https://github.com/im0099/react-express-sample-app
 
## How to run the API
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.
4. Navigate to http://localhost:9000/orders and verify you see an empty array.  

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app
4. Navigate to http://localhost:3000 and verify you see a scaffold web app.  


## End-to-End test
1. With client and api running, open your browser to http://localhost:3000/.
2. Select a book, fill in payment info (using one of the test cards at https://stripe.com/docs/payments/accept-a-payment?integration=elements), click confirm.
3. Enjoy!