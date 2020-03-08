import React from "react";
import { connect } from "react-redux";

// Note that "mapStateToProps" is just a convention, most developers for example use "select".
const mapStateToProps = state => {
    return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (
    <ul>
      {articles.map(el => (
        <li key={el.id}> {el.title}</li>
      ))}
    </ul>
  );

// List is the result of connecting the stateless component ConnectedList with the Redux store.
const List = connect(mapStateToProps)(ConnectedList);

export default List;

// The List component receives the prop articles which is a copy of the articles array we saw in the Redux state. 
// Always remember: the state in redux comes from reducers.