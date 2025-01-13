import React from 'react'
import './index.css'
import { useLocation, useParams } from 'react-router'

export default function ProductDetails() {
    const location = useLocation(); 
    let { id } = useParams();
    const { state: { product } } = location;
    console.log("product", product, id)


    return (
        <>

            <div class="container my-5">
                <div class="row g-4">
                    <div class="col-md-6">
                        <img src={product.images[0]} class="img-fluid rounded shadow" alt={product.title} />
                    </div>
                    <div class="col-md-6">
                        <h1 class="mt-6">{product.title}</h1>
                        <p class="text-muted">
                            {product.description}
                        </p>
                        <div>
                            <div class="d-flex justify-content-between mb-2">
                                <h6 class="text-secondary me-3">Brand</h6>
                                <h6 class="text-secondary me-3">{product.brand}</h6>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <h6 class="text-secondary me-3">Catagory</h6>
                                <h6 class="text-secondary me-3">{product.category}</h6>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <h6 class="text-secondary me-3">Stock</h6>
                                <h6 class="text-success me-3">{product.stock}</h6>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <h6 class="text-secondary me-3"> Availbility</h6>
                                <h6 class="text-secondary me-3">{product.availabilityStatus}</h6>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <h6 class="text-secondary me-3"> Rating </h6>
                                <span class="badge bg-warning text-dark">⭐⭐⭐⭐☆ ({product.rating}/5)</span>

                            </div>

                        </div>


                        <div class="d-flex align-items-center mb-3">
                            <h6 class="text-secondary me-3"> Price  - </h6>
                            <h2 class="text-danger me-3">{product.price}{` /-`}</h2>

                        </div>
                        <button class="btn btn-primary btn-lg mt-3">Buy Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}
