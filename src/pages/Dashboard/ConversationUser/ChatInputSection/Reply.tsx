import React from "react";

import { Collapse, Card, CardBody } from 'reactstrap';

const Reply = () => {
  return (
    <Collapse isOpen={false} className="chat-input-collapse replyCollapse">
      <Card className="mb-0">
        <CardBody className="py-3">
          <div className="replymessage-block mb-0 d-flex align-items-start">
            <div className="flex-grow-1">
              <h5 className="conversation-name">Jean Berwick</h5>
              <p className="mb-0">
                Yeah everything is fine. Our next meeting tomorrow at 10.00 AM
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                type="button"
                className="btn btn-sm btn-link mt-n2 me-n3 font-size-18"
                data-bs-toggle="collapse"
                data-bs-target=".replyCollapse.show"
              >
                <i className="bx bx-x align-middle"></i>
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Collapse>
  );
};


export default Reply;
