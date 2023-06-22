import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Col, Container, Row } from "react-bootstrap";
import * as whService from "../../services/workHistoryService";
import WorkPosition from "./WorkPosition";
import toastr from "toastr";

export default function WorkPositionsByWorkHistoryList() {
  const [pageData, setPageData] = useState({
    arrayData: [],
    components: [],
    workHistoryId: 3,
  });

  useEffect(() => {
    whService
      .getWorkPositionsByWorkHistoryId(pageData.workHistoryId)
      .then(getByWorkHistoryIdSuccess)
      .catch(getByWorkHistoryIdError);
  }, []);

  const displayCards = () => {
    return <Row>{pageData.components}</Row>;
  };

  const listMappingFunction = (element) => {
    return (
      <Col key={"work position id..." + element.id}>
        <WorkPosition wp={element} />
      </Col>
    );
  };

  const getByWorkHistoryIdSuccess = (data) => {
    setPageData((prevState) => {
      const newState = { ...prevState };
      newState.arrayData = data.item;
      newState.components = data.item.map(listMappingFunction);
      return newState;
    });
  };

  const getByWorkHistoryIdError = (error) => {
    toastr.error("There was an error attempting to get the record by work history Id. ", error);
  };

  return (
    <React.Fragment>
      <Helmet title="Positions:" />
      <Container fluid className="p-0">
        {displayCards()}
      </Container>
    </React.Fragment>
  );
}
