import { Row } from "reactstrap";

import FeaturedCard from "./FeaturedCard";

const FeaturedCards = () => {
  return (
    <>
      <h3>Featured</h3>
      <Row>
        <FeaturedCard color="info" />

        <FeaturedCard />
      </Row>
      <Row>
        <FeaturedCard />

        <FeaturedCard color="info" />
      </Row>{" "}
      <Row>
        <FeaturedCard color="info" />

        <FeaturedCard />
      </Row>{" "}
      <Row>
        <FeaturedCard />

        <FeaturedCard color="info" />
      </Row>
    </>
  );
};

export default FeaturedCards;
