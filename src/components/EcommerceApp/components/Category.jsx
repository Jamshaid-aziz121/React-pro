import axios from "axios";
import React, { memo, useEffect, useState } from "react";

export default memo(({ setCatName }) => {
  const [finCate, setFinCate] = useState([]);
  // let cateName = children.finCate;
  // console.log("finCate", finCate);

  useEffect(() => {
    console.log("useEffect called ");
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setFinCate(finalRes);
        // console.log(finCate)
      });
  };

  let cate = finCate.map((category, i) => {
    // console.log("category", category);
    return (
      <div className="text-dark font-monospace bg-gray-700 fw-medium hover:font-bold py-2 px-3 fs-5 mb-2 shadow-lg rounded-3 cursor-pointer">
        <li onClick={() => setCatName(category.name)} key={i}>
          {category.name}
        </li>
      </div>
    );
  });

  // console.log("cate", cate);
  return (
    <div className="opacity-100  ">
      <h4 className="font-monospace hover:text-black hover:font-bold p-4 mb-4 text-dark text-center rounded-3 shadow-xl bg-white bg-transparent">
        Product Category
      </h4>
      <ul>{cate.length ? cate : "loading..."}</ul>
    </div>
  );
});

// memo HOF takes a component in its args.
// memo()
