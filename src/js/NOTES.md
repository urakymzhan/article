# Design 
of this super simple application made of three components:

an App component
a List component for displaying articles
a Form component for adding new articles

# react-redux
For React there is react-redux, a library for which you need to learn just one method for now: connect. What does it do? Unsurprisingly it connects a React component with the Redux store.

You will use connect with two or three arguments depending on the use case:

a mapStateToProps function (you can name it also "select")
a mapDispatchToProps function
mapStateToProps does exactly what its name suggests: it connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.

mapDispatchToProps does something similar, but for actions. mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to send messages to the store.

# React Redux tutorial: introducing Redux Saga
redux-thunk makes perfect sense for a lot of project. You can also entirely skip redux-thunk and move your asynchronous logic to a custom middleware. But in reality asynchronous actions can be trickier to test and organize.

For this reason most developers prefer an alternative approach: redux-saga.

What is redux-saga? redux-saga is a Redux middleware for managing side effects. With redux-saga you can have a separate thread in your application for dealing with impure actions: API calls, storage access, and more.

redux-saga is different from an async action in terms of both syntax and code organization. With redux-thunk you can put an API call directly inside an action creator while in redux-saga you can have clear separation between synchronous and asynchronous logic.

Worth noting, redux-saga does not use regular JavaScript function. You will see a lot of asterisks and "yield" in your sagas. Those asterisks mark generator functions!

Generator functions in JavaScript are function which can be paused and resumed on demand. redux-saga relies heavily on generator functions but the good thing is that you won't need to call next() in your code. redux-saga handles that for you under the hood.