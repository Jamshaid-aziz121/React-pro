import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState({});

  useEffect(() => {
    const pCart = JSON.parse(localStorage.getItem("cart"));
    const updatedProducts = pCart.map((product) => ({ ...product, qty: 1 }));
    console.log(updatedProducts);
    setCart(updatedProducts);
  }, []);

  // Calculate Grand Total
  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // Handle Quantity Change
  const handleQtyChange = (index, value) => {
    console.log(index, value);
    const updatedCart = cart.map((item, idx) =>
      idx === index
        ? { ...item, qty: value > 0 ? Number(value) : 1 } // Update qty (default to 1 if invalid)
        : item
    );
    setCart(updatedCart);
  };

  const CartProducts = () => {
    return (
      <>
        <pre>{JSON.stringify(qty, null, 4)}</pre>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={product.qty}
                      onChange={(e) => handleQtyChange(index, e.target.value)}
                    />
                  </td>
                  <td>{product.price * product.qty}</td>
                </tr>
              );
            })}
            <tr>
              <th colSpan="5" style={{ textAlign: "right" }}>
                Total Amount : {grandTotal.toFixed(2)}
              </th>
            </tr>
          </tbody>
        </Table>
      </>
    );
  };
  return (
    <>
      <CartProducts />
    </>
  );
}
