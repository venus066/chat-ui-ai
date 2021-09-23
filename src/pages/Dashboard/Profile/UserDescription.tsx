import React from 'react';

interface UserDescriptionProps {

}
const UserDescription = ({ }: UserDescriptionProps) => {
    return (
        <>
            <div className="text-muted">
                <p className="mb-4">If several languages coalesce, the grammar of the resulting language is more simple.</p>
            </div>

            <div>
                <div className="d-flex py-2">
                    <div className="flex-shrink-0 me-3">
                        <i className="bx bx-user align-middle text-muted"></i>
                    </div>
                    <div className="flex-grow-1">
                        <p className="mb-0">Kathryn Swarey</p>
                    </div>
                </div>

                <div className="d-flex py-2">
                    <div className="flex-shrink-0 me-3">
                        <i className="bx bx-message-rounded-dots align-middle text-muted"></i>
                    </div>
                    <div className="flex-grow-1">
                        <p className="mb-0">adc@123.com</p>
                    </div>
                </div>

                <div className="d-flex py-2">
                    <div className="flex-shrink-0 me-3">
                        <i className="bx bx-location-plus align-middle text-muted"></i>
                    </div>
                    <div className="flex-grow-1">
                        <p className="mb-0">California, USA</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDescription;