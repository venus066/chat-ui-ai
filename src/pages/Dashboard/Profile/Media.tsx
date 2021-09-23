import React from 'react';

interface MediaProps {

}
const Media = ({ }: MediaProps) => {
    return (
        <div>
            <div className="d-flex">
                <div className="flex-grow-1">
                    <h5 className="font-size-11 text-muted text-uppercase">Media</h5>
                </div>
                <div className="flex-shrink-0">
                    <a href="#" className="font-size-12 d-block mb-2">Show all</a>
                </div>
            </div>
            <div className="profile-media-img">
                <div className="media-img-list">
                    <a href="#">
                        <img src="assets/images/small/img-1.jpg" alt="media img" className="img-fluid" />
                    </a>
                </div>
                <div className="media-img-list">
                    <a href="#">
                        <img src="assets/images/small/img-2.jpg" alt="media img" className="img-fluid" />
                    </a>
                </div>
                <div className="media-img-list">
                    <a href="#">
                        <img src="assets/images/small/img-4.jpg" alt="media img" className="img-fluid" />
                        <div className="bg-overlay">+ 15</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Media;