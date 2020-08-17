# Expenses Tracker

Expenses Tracker is simple application that allows to control the budget (income and expense) for users.
User needs to register first to start using the app.
User is automatically redirected to the Sign Up form and once registered, he redirected back to the app.

Data is stored in `localStorage` but there is also dummy data available to any user, at `?dummy`. User needs to be registered first to see them.

Expenses Tracker is created in React and uses [Material UI](https://material-ui.com/) and [Recharts](https://recharts.org/) to achieve a beautiful interface.
Routing is done via React Router.
Hooks (Context and Reducer) are used to deliver the data to the Components, or to dispatch actions.

Expenses Tracker is completely written in Typescript for better type-safety in the project.

## Develop

```
npm run start

# Open http://localhost:3000 (add ?dummy for example data)
```

## Routes

**PRIVATE**

```
http://localhost:3000/
http://localhost:3000/?dummy (testing data)
```

**PUBLIC**

```
http://localhost:3000/sign-in
http://localhost:3000/sign-up
http://localhost:3000/sign-out
```

## Build

```
npm run build

yarn global add serve
serve -s build

# Open http://localhost:5000
```

## Test

```
npm run test
```

## License

MIT
