import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../components/PaginationComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import SortOptionsComponent from "../components/SortOptionsComponent";
import PriceFilterComponent from "../components/filterqueryresultoption/PriceFilterComponent";
import RatingFilterComponent from "../components/filterqueryresultoption/RatingFilterComponent";
import CategoryFilterComponent from "../components/filterqueryresultoption/CategoryFilterComponent";
import AttributesFilterComponent from "../components/filterqueryresultoption/AttributesFilterComponent";
const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
        
          <ListGroup variant="flush" className="mb-3 mt-3">
            <ListGroup.Item><SortOptionsComponent /></ListGroup.Item>
            <ListGroup.Item><PriceFilterComponent /></ListGroup.Item>
            <ListGroup.Item><RatingFilterComponent /></ListGroup.Item>
            <ListGroup.Item><CategoryFilterComponent /></ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filter</Button>
              <Button variant="danger">Reset Filter</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <ProductForListComponent
              key={idx}
              images={["games", "monitors", "tablets", "games", "monitors"]}
              idx={idx}
            />
          ))}
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;

