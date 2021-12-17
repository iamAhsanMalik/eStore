import React from 'react'
import { Col, Container, Row, CardGroup } from 'react-bootstrap'
import { Product } from '../../app/models/Product'
import { ProductCard } from './ProductCard'

interface Props {
  products: Product[],
}

export const ProductList = ({ products }: Props) => {
  return (
    <React.Fragment>
      <Container className='my-5'>
        <Row>
          <CardGroup>
            {products.map(product => (
              <Col xs={12} sm={6} md={4} lg={3} className='mb-4 card-group px-2' key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </React.Fragment>
  )
}
