import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function ProductItems({ catName }) {
  const [products, setProducts] = useState([]);
  console.log("products");

  useEffect(() => {
    if (catName !== "") {
      //   console.log("useEffect called for products");
      getProducts();
    } else {
      //   console.log("No category selected");
    }
  }, [catName]);

  const getProducts = () => {
    axios
      .get(`https://dummyjson.com/products/category/${catName}`)
      .then((resPro) => resPro.data)
      .then((finalresPro) => {
        // console.log("Object of products", finalresPro);
        setProducts(finalresPro.products);
        // console.log("Jamshaid", finalresPro);
      });
  };

  const productCards = products.map((product, index) => {
    // console.log("products", products);
    return (
      <Card style={{ width: "22rem" }} className="shadow-lg border-0">
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body className="flex-grow-1">
          <h6 className="text-center font-monospace">{product.title}</h6>
          <h6 className="text-center text-primary font-monospace">
            {product.price} $ / pc
          </h6>

          <Button
            variant="btn btn-dark"
            className="position-auto bottom-0 start-0 w-100 font-monospace"
          >
            {" "}
            more details
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return <>{productCards}</>;
}
