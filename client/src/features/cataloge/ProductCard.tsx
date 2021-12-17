import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Product } from '../../app/models/Product'

interface Props {
  product: Product,
}
export const ProductCard = ({ product }: Props) => {
  return (
    <React.Fragment>
      <Card key={product.id} className='shadow-sm'>
        <Card.Header>
          <strong>
            {product.brand} - {product.type}
          </strong>
        </Card.Header>
        <Card.Img variant="top" src={product.pictureUrl} className='bg-light' />
        <Card.Body >
          <Card.Title>
            <strong>
              Price: ${(product.price / 100).toFixed(2)}
            </strong>
          </Card.Title>
          <Card.Text><strong> {product.name}</strong></Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`${product.id}`}><Button className='btn btn-dark me-2'>View</Button></Link>
          <Button className='btn btn-dark ms-2'>Add to Cart</Button>
        </Card.Footer>

      </Card>
    </React.Fragment >
  )
}
