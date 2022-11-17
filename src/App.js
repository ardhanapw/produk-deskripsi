import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddProduct from "./components/AddProduct";
import ProductsList from "./components/ProductsList";
import "./App.css";

function App() {
  const [productId, setProductId] = useState("");

  const getProductIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setProductId(id);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">ProdukDeskripsi CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddProduct id={productId} setProductId={setProductId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ProductsList getProductId={getProductIdHandler} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;