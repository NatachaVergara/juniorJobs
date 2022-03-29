import { Col, Container, Row } from "reactstrap";
import FeaturedCard from "./FeaturedCard";
import JobAreas from "./JobAreas";

// ============ JUST CLONING THE HOMEPAGE, NEEDS RE MAKE FOR OUR PLATFORM ===================
export const HomePage = () => {
  return (
    <>
      <h1>We curate tech jobs for you.</h1>
      <p>
        Get on Board allows you to easily find and apply to exclusive jobs in
        awesome startups and tech companies. We filter jobs so you don't have
        to.
      </p>
      <Row>
        <Col>
          <Row>
            <Col>
              <strong>300,000+</strong>
              <p>Professionals</p>
            </Col>
            <Col>
              <strong>9,000+</strong>
              <p>Companies</p>
            </Col>
            <Col>
              <strong>1,000,000+</strong>
              <p>applications sent</p>
            </Col>
          </Row>
        </Col>

        <Col>
          <JobAreas />
        </Col>
      </Row>
      <h3>Featured</h3>
      <Row>
        <FeaturedCard />

        <FeaturedCard />
      </Row>
    </>
  );
};
