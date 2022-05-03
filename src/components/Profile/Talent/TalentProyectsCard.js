import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import classes from './TalentProyectsCard.module.scss'
import { AiTwotoneDelete } from 'react-icons/ai';

const TalentProyectsCard = () => {
    return (
        <Card body className={classes.card}>
            <CardBody>
                <CardTitle tag="h2" className='text-dark fs-3 text-center m-3'>JOBS APPLIED</CardTitle>
                <Row className={classes.row}>
                    <Col sm='5' >
                        <Card body color="dark" className={classes.col}>
                            <CardBody className={classes.cardBody}>
                                <CardTitle tag="h5"> Frontend Engineer (Junior Frontend Developer) </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Description
                                </CardSubtitle>
                                <CardText>
                                </CardText>
                            </CardBody>
                            <Button className={classes.cardButton} > <AiTwotoneDelete /></Button>
                        </Card>
                    </Col>
                    <Col sm='5'>
                        <Card body color="dark" className={classes.col}>
                            <CardBody className={classes.cardBody}>
                                <CardTitle tag="h5">  Frontend Engineer (Junior Frontend Developer) </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Description
                                </CardSubtitle>
                                <CardText>
                                </CardText>
                            </CardBody>
                            <Button className={classes.cardButton} > <AiTwotoneDelete /></Button>
                        </Card>
                    </Col>

                    <Col sm='5'>
                        <Card body color="dark" className={classes.col}>
                            <CardBody className={classes.cardBody}>
                                <CardTitle tag="h5">  Frontend Engineer (Junior Frontend Developer) </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Description
                                </CardSubtitle>
                                <CardText>
                                </CardText>
                            </CardBody>
                            <Button className={classes.cardButton} > <AiTwotoneDelete /> </Button>
                        </Card>
                    </Col>

                </Row>
            </CardBody>
        </Card>
    )
}

export default TalentProyectsCard