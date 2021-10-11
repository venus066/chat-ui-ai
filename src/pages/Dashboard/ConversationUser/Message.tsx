import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import avatar7 from "../../../assets/images/users/avatar-7.jpg";

// components
import LightBox from "../../../components/LightBox";

//images
import imagePlaceholder from "../../../assets/images/users/profile-placeholder.png";

// interface
import {
  MessagesTypes,
  ImageTypes,
  AttachmentTypes,
} from "../../../data/messages";

// hooks
import { useProfile } from "../../../hooks";

// utils
import { formateDate } from "../../../utils";

const Menu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      className="align-self-start message-box-drop"
    >
      <DropdownToggle className="btn btn-toggle" role="button" tag={"a"}>
        <i className="ri-more-2-fill"></i>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          className="d-flex align-items-center justify-content-between"
          to="#"
          data-bs-toggle="collapse"
          data-bs-target=".replyCollapse"
        >
          Reply <i className="bx bx-share ms-2 text-muted"></i>
        </DropdownItem>
        <DropdownItem
          className="d-flex align-items-center justify-content-between"
          to="#"
          data-bs-toggle="modal"
          data-bs-target=".forwardModal"
        >
          Forward <i className="bx bx-share-alt ms-2 text-muted"></i>
        </DropdownItem>
        <DropdownItem
          className="d-flex align-items-center justify-content-between"
          to="#"
        >
          Copy <i className="bx bx-copy text-muted ms-2"></i>
        </DropdownItem>
        <DropdownItem
          className="d-flex align-items-center justify-content-between"
          to="#"
        >
          Bookmark <i className="bx bx-bookmarks text-muted ms-2"></i>
        </DropdownItem>
        <DropdownItem
          className="d-flex align-items-center justify-content-between"
          to="#"
        >
          Mark as Unread <i className="bx bx-message-error text-muted ms-2"></i>
        </DropdownItem>
        <DropdownItem
          className="d-flex align-items-center justify-content-between delete-item"
          to="#"
        >
          Delete <i className="bx bx-trash text-muted ms-2"></i>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const ImageMoreMenu = () => {
  return (
    <div className="message-img-link">
      <ul className="list-inline mb-0">
        <UncontrolledDropdown
          tag="li"
          color="none"
          className="list-inline-item dropdown"
        >
          <DropdownToggle tag="a" role="button" className="btn btn-toggle">
            <i className="bx bx-dots-horizontal-rounded"></i>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              className=" d-flex align-items-center justify-content-between"
              to="#"
            >
              Download <i className="bx bx-download ms-2 text-muted"></i>
            </DropdownItem>
            <DropdownItem
              className=" d-flex align-items-center justify-content-between"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target=".replyCollapse"
            >
              Reply <i className="bx bx-share ms-2 text-muted"></i>
            </DropdownItem>
            <DropdownItem
              className=" d-flex align-items-center justify-content-between"
              to="#"
              data-bs-toggle="modal"
              data-bs-target=".forwardModal"
            >
              Forward <i className="bx bx-share-alt ms-2 text-muted"></i>
            </DropdownItem>
            <DropdownItem
              className=" d-flex align-items-center justify-content-between"
              to="#"
            >
              Bookmark <i className="bx bx-bookmarks text-muted ms-2"></i>
            </DropdownItem>
            <DropdownItem
              className=" d-flex align-items-center justify-content-between delete-item"
              to="#"
            >
              Delete <i className="bx bx-trash ms-2 text-muted"></i>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </ul>
    </div>
  );
};

interface ImageProps {
  image: ImageTypes;
  onImageClick: (id: number) => void;
  index: number;
}
const Image = ({ image, onImageClick, index }: ImageProps) => {
  return (
    <div className="message-img-list">
      <div>
        <Link
          className="popup-img d-inline-block"
          to={"#"}
          onClick={() => onImageClick(index)}
        >
          <img src={image.downloadLink} alt="" className="rounded border" />
        </Link>
      </div>
      <ImageMoreMenu />
    </div>
  );
};
interface ImagesProps {
  images: ImageTypes[];
}
const Images = ({ images }: ImagesProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const onImageClick = (id: number) => {
    setSelected(id);
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="message-img mb-0">
        {(images || []).map((image: ImageTypes, key: number) => (
          <Image
            image={image}
            key={key}
            index={key}
            onImageClick={onImageClick}
          />
        ))}
      </div>
      {isOpen && (
        <LightBox
          isOpen={isOpen}
          images={images}
          onClose={onClose}
          defaultIdx={selected}
        />
      )}
    </>
  );
};

interface AttachmentsProps {
  attachments: AttachmentTypes[] | undefined;
}
const Attachments = ({ attachments }: AttachmentsProps) => {
  return (
    <>
      {(attachments || []).map((attachment: AttachmentTypes, key: number) => (
        <div
          key={key}
          className={classnames("p-3", "border-primary", "border rounded-3", {
            "mt-2": key !== 0,
          })}
        >
          <div className="d-flex align-items-center attached-file">
            <div className="flex-shrink-0 avatar-sm me-3 ms-0 attached-file-avatar">
              <div className="avatar-title bg-soft-primary text-primary rounded-circle font-size-20">
                <i className="ri-attachment-2"></i>
              </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <div className="text-start">
                <h5 className="font-size-14 mb-1">{attachment.name}</h5>
                <p className="text-muted text-truncate font-size-13 mb-0">
                  {attachment.desc}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 ms-4">
              <div className="d-flex gap-2 font-size-20 d-flex align-items-start">
                <div>
                  <Link to={attachment.downloadLink ? attachment.downloadLink : "#"} className="text-muted">
                    <i className="bx bxs-download"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Typing = () => {
  return (
    <p className="mb-0">
      typing
      <span className="animate-typing">
        <span className="dot mx-1"></span>
        <span className="dot me-1"></span>
        <span className="dot"></span>
      </span>
    </p>
  );
};
interface MessageProps {
  message: MessagesTypes;
  chatUserDetails: any;
}
const Message = ({ message, chatUserDetails }: MessageProps) => {
  const { userProfile } = useProfile();
  const hasImages = message.image && message.image.length;
  const hasAttachments = message.attachments && message.attachments.length;
  const hasText = message.text;
  const isTyping = false;
  const isFromMe = message.meta.sender + "" === userProfile.uid + "";

  const fullName = chatUserDetails.firstName
    ? `${chatUserDetails.firstName} ${chatUserDetails.lastName}`
    : "-";
  const profile = chatUserDetails.profileImage
    ? chatUserDetails.profileImage
    : imagePlaceholder;

  const date = formateDate(message.time, "hh:mmaaa");
  const isSent = message.meta.sent;
  const isReceived = message.meta.received;
  const isRead = message.meta.read;

  return (
    <li className={classnames("chat-list", { right: isFromMe })}>
      <div className="conversation-list">
        <div className="chat-avatar">
          <img src={isFromMe ? avatar7 : profile} alt="" />
        </div>

        <div className="user-chat-content">
          {
            hasImages && message.text && <div className="ctext-wrap"><div className="ctext-wrap-content">
              <p className="mb-0 ctext-content">{message.text}</p>
            </div></div>
          }
          <div className="ctext-wrap">
            {/* text message end */}

            {/* image message start */}
            {hasImages ? (
              <>
                <Images images={message.image!} />
              </>
            ) : (
              <>
                <div className="ctext-wrap-content">
                  {hasText && (
                    <p className="mb-0 ctext-content">{message.text}</p>
                  )}

                  {/* typing start */}
                  {isTyping && <Typing />}

                  {/* typing end */}
                  {/* files message start */}
                  {hasAttachments && (
                    <Attachments attachments={message.attachments} />
                  )}
                  {/* files message end */}
                </div>
                <Menu />
              </>
            )}

            {/* image message end */}
          </div>
          <div className="conversation-name">
            {isFromMe ? (
              <>
                <span
                  className={classnames(
                    "me-1",
                    { "text-success": isRead },
                    { "text-muted": (isSent || isReceived) && !isRead }
                  )}
                >
                  <i
                    className={classnames(
                      "bx",
                      { "bx-check-double": isRead || isReceived },
                      { "bx-check": isSent }
                    )}
                  ></i>
                </span>
                <small className={classnames("text-muted", "mb-0", "me-2")}>
                  {date}
                </small>
                You
              </>
            ) : (
              <>
                {fullName}
                <small className={classnames("text-muted", "mb-0", "ms-2")}>
                  {date}
                </small>
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Message;
