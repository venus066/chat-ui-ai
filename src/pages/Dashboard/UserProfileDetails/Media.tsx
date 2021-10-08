import React from 'react';
import { Link } from "react-router-dom";

interface MediaProps {
    chatUserDetails: any;
}
const Media = ({ chatUserDetails }: MediaProps) => {
    return (
        <div>
            <div className="d-flex">
                <div className="flex-grow-1">
                    <h5 className="font-size-11 text-muted text-uppercase">
                        Media
                    </h5>
                </div>
                <div className="flex-shrink-0">
                    <Link to="#" className="font-size-12 d-block mb-2">
                        Show all
                    </Link>
                </div>
            </div>
            <div className="profile-media-img">
                <div className="media-img-list">
                    <Link to="#">
                        <img
                            src="assets/images/small/img-1.jpg"
                            alt="media img"
                            className="img-fluid"
                        />
                    </Link>
                </div>
                <div className="media-img-list">
                    <Link to="#">
                        <img
                            src="assets/images/small/img-2.jpg"
                            alt="media img"
                            className="img-fluid"
                        />
                    </Link>
                </div>
                <div className="media-img-list">
                    <Link to="#">
                        <img
                            src="assets/images/small/img-3.jpg"
                            alt="media img"
                            className="img-fluid"
                        />
                    </Link>
                </div>
                <div className="media-img-list">
                    <Link to="#">
                        <img
                            src="assets/images/small/img-4.jpg"
                            alt="media img"
                            className="img-fluid"
                        />
                        <div className="bg-overlay">+ 15</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Media;