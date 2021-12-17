import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../app/models/Product";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://localhost:5001/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);
  if (loading === true) {
    return <h1>Loading....</h1>;
  }
  if (!product) {
    return <h1>Product Not Found</h1>;
  }
  return (
    <React.Fragment>
      <h1>Product Details {product.name}</h1>
      <Link type="button" className="my-3 btn btn-light" to="/">
        Click Me
      </Link>
      <Row className="my-5">
        <Col md={5}>
          <Card>
            <Card.Img src={product.pictureUrl} alt={product.name} />
          </Card>
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>{`Price: $${product.price}`}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{`Description: ${product.description}`}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Type: {product.type}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Brand: {product.brand}</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Brand: {product.quantityInStock}</h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{`$${product.price}`}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.quantityInStock ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.quantityInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty:</Col>
                    <Col>
                      {/* <Form.Select
                        value={productQty}
                        onChange={productQtyHandler}
                      >
                        {[...Array(product.productInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select> */}
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                {/* <Button
                  onClick={addToCartHandler}
                  className="btn btn-dark"
                  type="button"
                  disabled={!product.quantityInStock}
                >
                  Add to Cart
                </Button> */}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
