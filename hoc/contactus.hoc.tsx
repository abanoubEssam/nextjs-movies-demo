import React, { useEffect, useState } from 'react'
import ContactUsForm from '../components/contact-us-form/contact-us-form'
import ContactUsModalComponent from '../components/contact-us-modal/contact-us-modal';
import useContactUs from '../hooks/contactus.hook';
import { NetworkError, UnProcessableEntityError } from '../models/errors.model';

interface Props {

}

const ContactUsHOC: React.FC<Props> = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [message, setMessage] = useState<string>(null)
    const handleCloseSuccessModal = () => setShowModal(false);
    const { error, loading, success, onSubmit } = useContactUs()

    useEffect(() => {
        if (success) {
            setShowModal(true)
            setMessage("Contact Us Message Sent Successfully!")
        }

    }, [success])

    useEffect(() => {
        if (error instanceof NetworkError) {
            setShowModal(true)
            setMessage("No network!!!");
        }
    }, [error]);

    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <ContactUsForm loading={loading} error={error as UnProcessableEntityError} onSubmit={(data) => {
                onSubmit(data);
                setShowModal(false);
                setMessage(null);
            }} />
            <ContactUsModalComponent show={showModal} handleClose={handleCloseSuccessModal} message={message} />
        </div>
    );
}

export default ContactUsHOC;