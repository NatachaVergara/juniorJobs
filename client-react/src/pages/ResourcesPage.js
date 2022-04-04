import { Fragment } from "react";
import { Col, Row } from "reactstrap";
import IndividualResource from "../components/Resources/IndividualResource";


let resources = [
  {
    title: "Introduction to CSS3",
    imgLink: "https://diak46rl5chc7.cloudfront.net/orgs/75329/contents/fjm9ztcwpy8n5x71/w460_fjm9ztcwpy8n5x71.jpeg",
    description: "The web today is almost unrecognizable from the early days of white pages with lists of blue links.The emphasis will be on learning how to write CSS rules, how to test code, and how to establish good programming habits.",
    link: "https://www.coursera.org/learn/introcss",
  },
  {
    title: "Introduction to CSS3",
    imgLink: "https://diak46rl5chc7.cloudfront.net/orgs/75329/contents/fjm9ztcwpy8n5x71/w460_fjm9ztcwpy8n5x71.jpeg",
    description: "The web today is almost unrecognizable from the early days of white pages with lists of blue links.The emphasis will be on learning how to write CSS rules, how to test code, and how to establish good programming habits.",
    link: "https://www.coursera.org/learn/introcss",
  },
  {
    title: "Introduction to CSS3",
    imgLink: "https://diak46rl5chc7.cloudfront.net/orgs/75329/contents/fjm9ztcwpy8n5x71/w460_fjm9ztcwpy8n5x71.jpeg",
    description: "The web today is almost unrecognizable from the early days of white pages with lists of blue links.The emphasis will be on learning how to write CSS rules, how to test code, and how to establish good programming habits.",
    link: "https://www.coursera.org/learn/introcss",
  },
  {
    title: "Introduction to CSS3",
    imgLink: "https://diak46rl5chc7.cloudfront.net/orgs/75329/contents/fjm9ztcwpy8n5x71/w460_fjm9ztcwpy8n5x71.jpeg",
    description: "The web today is almost unrecognizable from the early days of white pages with lists of blue links.The emphasis will be on learning how to write CSS rules, how to test code, and how to establish good programming habits.",
    link: "https://www.coursera.org/learn/introcss",
  }
]

const ResourcesPage = () => {
  return (
    <Fragment>
      <h2>Frontend Development</h2>
      <Row >
{resources.map((r, i) => ( 

    <Col>

<IndividualResource key={i} title={r.title} imgLink={r.imgLink} description={r.description} link={r.link} />
</Col>





))}
</Row>
    </Fragment>
 

  )}
export default ResourcesPage;
