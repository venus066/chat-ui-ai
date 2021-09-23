import image4 from '../assets/images/small/img-4.jpg';
import avatar1 from "../assets/images/users/avatar-1.jpg";
import img1 from "../assets/images/small/img-1.jpg";
import img2 from "../assets/images/small/img-2.jpg";
import img4 from "../assets/images/small/img-4.jpg";

const profileDetails = {
    basicDetails: {
        firstName: "Kathryn",
        lastName: 'Swarey',
        title: "Front end Developer",
        description: 'If several languages coalesce, the grammar of the resulting language is more simple.',
        fullName: 'Kathryn Swarey',
        email: 'adc@123.com',
        location: 'California, USA',
        avatar: avatar1,
        coverImage: image4,
    },
    media: {
        total: 17,
        list: [
            {
                id: 1,
                url: img1
            },
            {
                id: 2,
                url: img1
            },
            {
                id: 3,
                url: img4,
            },
            {
                id: 4,
                url: img1,
            }
        ]
    },
    attachedFiles: {
        total: 4,
        list: [
            {
                id: 1,
                fileName: 'design-phase-1-approved.pdf',
                size: '12.5 MB',
                downloadUrl: '#',
                icon: 'bx bx-file'
            },
            {
                id: 2,
                fileName: 'Image-1.jpg',
                size: '4.2 MB',
                downloadUrl: '#',
                icon: 'bx bx-image'
            },
            {
                id: 1,
                fileName: 'Image-2.jpg',
                size: '3.1 MB',
                downloadUrl: '#',
                icon: 'bx bx-image'
            },
            {
                id: 1,
                fileName: 'Landing-A.zip',
                size: '6.7 MB',
                downloadUrl: '#',
                icon: 'bx bx-file'
            },
        ]
    }
};

export { profileDetails };