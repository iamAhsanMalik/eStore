import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import { Product } from '../models/Product'

interface Props {
  products: Product[],
}

export const ProductCarousel = ({ products }: Props) => {
  return (
    <div>
      <Carousel variant="dark" className='mx-4 pt-3'>
        {products.map(product => (
          <Carousel.Item interval={2000} className='bg-light' key={product.id}>
            <img
              src={product.pictureUrl}
              alt="First slide"
              width={800}
              height={600}
            />
            <Carousel.Caption>
              <h3>{product.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div >
  )
}
