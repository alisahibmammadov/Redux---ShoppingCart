import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sepetdenCikar } from "../actions";


function Cart(props) {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  );

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>

      {props.cart.map((book) => (
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            <p>Toplam: &#8378;19.99</p>
            <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
            <button>-</button>
            <button>Sepetten Çıkar</button>
            <button>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
