import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { ProductContext } from "./ProductContext";

export default function Others() {
  const { random1, random2 } = useContext(ProductContext);
  return (
    <section className="other">
      <h1 className="title">Other food</h1>

      <section className="other-card-section">
        <div className="other-card">
          <img
            className="image"
            alt="food"
            src="https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <div className="middle-text">
            {" "}
            <span className="number">x1</span> <br />{" "}
            <span className="name">Banana Tesh</span>
          </div>
          <div className="price">$23.00</div>
        </div>

        <div className="other-card">
          <img
            className="image"
            alt="food"
            src="https://images.pexels.com/photos/701798/pexels-photo-701798.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="middle-text">
            {" "}
            <span className="number">x1</span> <br />{" "}
            <span className="name">Banana Tesh</span>
          </div>
          <div className="price">$23.00</div>
        </div>

        <div className="other-card">
          <img
            className="image"
            alt="food"
            src="https://images.pexels.com/photos/6492/food-breakfast-fork-bagel.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <div className="middle-text">
            {" "}
            <span className="number">x1</span> <br />{" "}
            <span className="name">Banana Tesh</span>
          </div>
          <div className="price">$23.00</div>
        </div>
      </section>
    </section>
  );
}
