import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import * as whService from "../../services/workHistoryService";
import WorkHistory from "./WorkHistory";
import locale from "rc-pagination/lib/locale/en_US";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import toastr from "toastr";

export default function WorkHistoryByUserList(props) {
  const [pageData, setPageData] = useState({
    arrayData: [],
    components: [],
    pageIndex: 0,
    pageSize: 2,
    currentPage: 1,
    totalCount: 0,
  });

  useEffect(() => {
    whService
      .getWorkHistoryByUserIdPaginated(pageData.pageIndex, pageData.pageSize)
      .then(getByUserIdSuccess)
      .catch(getByUserIdError);
  }, [pageData.pageIndex, pageData.pageSize]);

  const displayCards = () => {
    return <CardGroup>{pageData.components}</CardGroup>;
  };

  const listMappingFunction = (element) => {
    return (
      <WorkHistory
        wh={element}
        setGrandParentState={props.setParentState}
        key={"work history id..." + element.id}
      />
    );
  };

  const getByUserIdSuccess = (data) => {
    setPageData((prevState) => {
      const newState = { ...prevState };
      newState.arrayData = data.item.pagedItems;
      newState.components = data.item.pagedItems.map(listMappingFunction);
      newState.totalCount = data.item.totalCount;
      return newState;
    });
  };

  const getByUserIdError = (error) => {
    toastr.error("There was an error attempting to get the record by user Id. ", error);
  };

  const onPagination = (page) => {
    setPageData((prevState) => {
      const newState = { ...prevState };
      newState.currentPage = page;
      newState.pageIndex = page - 1;
      return newState;
    });
  };

  return (
    <React.Fragment>
      <Container fluid className="p-2">
        <Row className="justify-content-md-center p-2">
          <Col md="auto">
            <Pagination
              onChange={onPagination}
              current={pageData.currentPage}
              total={pageData.totalCount}
              locale={locale}
              pageSize={pageData.pageSize}
            />
          </Col>
        </Row>
        {displayCards()}
        <Row className="justify-content-md-center p-2">
          <Col md="auto">
            <Pagination
              onChange={onPagination}
              current={pageData.currentPage}
              total={pageData.totalCount}
              locale={locale}
              pageSize={pageData.pageSize}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

WorkHistoryByUserList.propTypes = {
  setParentState: PropTypes.func,
};
