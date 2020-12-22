import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/product';
import { listProducts } from '../redux/products/product.actions';
import Loader from '../components/loader';
import Message from '../components/message';

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  return (
    <>
      <h1>Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
