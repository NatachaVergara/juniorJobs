import { Fragment } from "react";
import { Col, Row } from "reactstrap";
import IndividualResource from "../components/Resources/IndividualResource";
import { frontendResources } from "../components/Resources/dbResources";



const ResourcesPage = () => {
  return (
    <Fragment>
      <h2>Frontend Development</h2>
      <Row >
{frontendResources.map((r, i) => ( 

    <Col>

<IndividualResource key={i} title={r.title} imgLink={r.imgLink} description={r.description} link={r.link} />

</Col>





))}
<h1>Backend</h1>
</Row>
    </Fragment>
 

  )}
export default ResourcesPage;
