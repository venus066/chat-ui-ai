import React from "react";
import { Button, Col, Row } from "reactstrap";
import { useRedux } from "../../../hooks";
import {
  changeSelectedChat,
  getChatUserConversations,
  getChatUserDetails,
  readConversation
} from "../../../redux/chats/actions";

const Welcome = () => {

  const { dispatch, useAppSelector } = useRedux();

  const {
    favourites,
  } = useAppSelector(state => ({
    favourites: state.Chats.favourites,
  }));

  const onSelectChat = () => {
    if (favourites.length > 0) {
      dispatch(getChatUserDetails(favourites[0].id));
      dispatch(readConversation(favourites[0].id));
      dispatch(getChatUserConversations(favourites[0].id));
      dispatch(changeSelectedChat(favourites[0].id));
    }
  }

  return (
    <React.Fragment>
      <div className="chat-welcome-section">
        <Row className="w-100 justify-content-center">
          <Col xxl={5} md={7}>
            <div className="p-4 text-center">
              <div className="avatar-xl mx-auto mb-4">
                <div className="avatar-title bg-soft-primary rounded-circle">
                  <i className="bx bxs-message-alt-detail display-4 text-primary m-0"></i>
                </div>
              </div>
              <h4>Welcome to Telico AI Chat App</h4>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. cum sociis natoque penatibus et
              </p>
              <Button type="button" className="btn btn-primary w-lg" onClick={onSelectChat}>
                Get Started
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
