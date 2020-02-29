import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { ProductContext } from "./ProductContext";

export default function Recommended() {
  const { random1, random2, handleClick } = useContext(ProductContext);

  return (
    <section className="recommended">
      <h1 className="title">Recommended</h1>
      <section className="card-section">
        {random1 && (
          <div
            className="card"
            style={{ backgroundImage: `url(${random1.strMealThumb})` }}
            value={random1.idMeal}
            onClick={handleClick}
          >
            <h4 className="card-title">{random1.strMeal}</h4>

            <span className="text-bottom">
              <span>
                <AiOutlineHeart className="favorite icon" />
                99+
              </span>
              <FiPlusCircle className="plus icon" />
            </span>
          </div>
        )}

        {random2 && (
          <div
            className="card"
            style={{ backgroundImage: `url(${random2.strMealThumb})` }}
            value={random2.idMeal}
            onClick={handleClick}
          >
            <h4 className="card-title">{random2.strMeal}</h4>

            <span className="text-bottom">
              <span>
                <AiOutlineHeart className="favorite icon" />
                99+
              </span>
              <FiPlusCircle className="plus icon" />
            </span>
          </div>
        )}
      </section>
    </section>
  );
}
