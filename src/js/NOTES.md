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