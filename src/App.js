import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

// import { data } from "./data";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />
        React Dersleri
      </h1>
      <Routes>
        <Route exact path="/" Component={Products} />
        <Route path="/cart" Component={Cart} />
      </Routes>
      {/* <Products/> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps)(App);
