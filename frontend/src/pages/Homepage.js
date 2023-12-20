import { Container, Row } from "react-bootstrap";
import CategoryCardComponent from "../components/CategoryCardComponent";
import ProductCarouselComponent from "../components/ProductCarouselComponent";

const Homepage = () => {
  const categories = [
    "Laptop",
    "Books",
    "Camera",
    "Mobile Phone",
    "Drives",
    "Wholes",
    "Fishes",
    "Slaves",
    "Dragons"
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {
            categories.map((category,idx) => <CategoryCardComponent key={idx} category={category} idx={idx}/>)
          }
        </Row>
      </Container>
    </>

  )
}

export default Homepage;