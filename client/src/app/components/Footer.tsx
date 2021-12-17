import React from 'react'
import { Container, Nav } from 'react-bootstrap'

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className="border-top footer text-center text-lg-start bg-light text-muted">
        <Container className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <Container className="me-5 d-none d-lg-block">
            <p>Get connected with us on social networks:</p>
          </Container>
          <Container>
            <Nav>
              <Nav.Link href="" className=" text-reset">
                <i className="fab fa-facebook-f"></i>
              </Nav.Link>
              <Nav.Link href="" className=" text-reset">
                <i className="fab fa-twitter"></i>
              </Nav.Link>
              <Nav.Link href="" className=" text-reset">
                <i className="fab fa-google"></i>
              </Nav.Link>
              <Nav.Link href="" className=" text-reset">
                <i className="fab fa-instagram"></i>
              </Nav.Link>
              <Nav.Link href="" className=" text-reset">
                <i className="fab fa-linkedin"></i>
              </Nav.Link>
              <Nav.Link href="" className=" text-reset">
                <i className="fab fa-github"></i>
              </Nav.Link>
            </Nav>
          </Container>
        </Container>
        <Container>
          <div className="text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Company name
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <Nav.Link href="#!" className="text-reset">Link 1</Nav.Link>
                <Nav.Link href="#!" className="text-reset">Link 2</Nav.Link>
                <Nav.Link href="#!" className="text-reset">Link 3</Nav.Link>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <Nav.Link href="#!" className="text-reset">Link 1</Nav.Link>
                <Nav.Link href="#!" className="text-reset">Link 2</Nav.Link>
                <Nav.Link href="#!" className="text-reset">Link 3</Nav.Link>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <Nav.Link className="text-reset">
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </Nav.Link>
                <Nav.Link className="text-reset">
                  <i className="fas fa-envelope me-3"></i> info@example.com
                </Nav.Link>
                <Nav.Link className="text-reset">
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </Nav.Link>
              </div>
            </div>
          </div>
        </Container>
        <Container fluid className="text-center p-4">
          <hr />
          <div> Copyright &copy; {new Date().getFullYear()} | Design &amp; Developed by
            <Nav.Link className="text-reset d-inline" href="https://github.com/ahsanjoyia"><strong>Ahsan Joyia</strong></Nav.Link></div>
        </Container>
      </footer>
    </React.Fragment >
  )
}
