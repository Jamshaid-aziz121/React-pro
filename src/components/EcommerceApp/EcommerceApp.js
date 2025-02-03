import { Col, Container, Row } from 'react-bootstrap';
import Category from './components/Category';
import ProductItems from './components/ProductItems';
// import axios from 'axios';
import { useState } from 'react';

function EcommerceApp() {

  let [catName, setCatName] = useState('beauty');

  return (

    <div className='bg-white opcaity-100'>
      <div className='py-1'>
        <div className='max-w-[1320px] mx-auto'>

          <h2 className='text-white fs-1 bg-dark mb-4 py-2 shadow-lg rounded-lg  text-center'>
            Our Products
          </h2>

          <Row className="g-4">
            {/* Category section (25%) */}
            <Col xs={3}>
              <Category setCatName={setCatName} />
            </Col>

            {/* ProductItems section (75%) */}
            <Col xs={9}>
              <Row className='gap-3 ms-2'>
                <ProductItems catName={catName} />
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default EcommerceApp;


