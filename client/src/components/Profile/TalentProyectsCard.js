import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import classes from './TalentProyectsCard.module.scss'
import { AiTwotoneDelete } from 'react-icons/ai';

const TalentProyectsCard = () => {
    return (
        <Card body color="light" className={classes.card}>
            <CardBody>
                <CardTitle tag="h5">Jobs Applied</CardTitle>
                <Row className={classes.row}>
                    <Col>
                        <Card body color="light" className={classes.col}>
                            <CardBody className={classes.cardBody}>
                                <CardTitle tag="h5"> Title </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Description
                                </CardSubtitle>
                                <CardText>
                                </CardText>
                            </CardBody>
                            <Button className={classes.cardButton} > <AiTwotoneDelete/></Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card body color="light" className={classes.col}>
                            <CardBody className={classes.cardBody}>
                                <CardTitle tag="h5"> Title </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Description
                                </CardSubtitle>
                                <CardText>
                                </CardText>
                            </CardBody>
                            <Button className={classes.cardButton} > <AiTwotoneDelete/></Button>
                        </Card>
                    </Col>

                    <Col>
                        <Card body color="light" className={classes.col}>
                            <CardBody className={classes.cardBody}>
                                <CardTitle tag="h5"> Title </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Description
                                </CardSubtitle>
                                <CardText>
                                </CardText>
                            </CardBody>
                            <Button className={classes.cardButton} > <AiTwotoneDelete/> </Button>
                        </Card>
                    </Col>

                </Row>
            </CardBody>
        </Card>
    )
}

export default TalentProyectsCard