import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ProductCarousel } from "../../app/components/ProductCarousel";
import { Product } from "../../app/models/Product";
import { ProductList } from "./ProductList";

export const Cataloge = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProducts() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: `Product Name ${prevState.length + 1}`,
        price: (prevState.length + 1) * 100,
        pictureUrl: "http://picsum.photos/" + (prevState.length + 1) * 100,
        description:
          "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        quantityInStock: 0,
      },
    ]);
  }
  return (
    <React.Fragment>
      <Container>
        <ProductCarousel products={products} />
        <ProductList products={products} />
        <Button className="m-3 btn-dark" onClick={addProducts}>
          Add Products
        </Button>
      </Container>
    </React.Fragment>
  );
};
