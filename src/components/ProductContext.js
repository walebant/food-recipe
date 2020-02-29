import React, { createContext, useState, useEffect } from "react";
const ProductContext = createContext();

function ProductContextProvider(props) {
  const [random1, setRandom1] = useState();
  const [random2, setRandom2] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => setRandom1(data.meals[0]));

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => setRandom2(data.meals[0]));
    // return () => {}
  }, []);

  const handleClick = e => {
    const name = e.target.children[0].innerText;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(response => response.json())
      .then(data => setSelected(data.meals[0]));
  };

  return (
    <ProductContext.Provider
      value={{ random1, random2, handleClick, selected }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContextProvider, ProductContext };
