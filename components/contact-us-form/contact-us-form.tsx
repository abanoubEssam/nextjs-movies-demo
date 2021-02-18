import React, { useEffect } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { ContactMessageBody } from '../../models/contact-us.model';
import { UnProcessableEntityError } from '../../models/errors.model';

interface Props {
    loading: boolean;
    onSubmit: (data: ContactMessageBody) => void;
    error: UnProcessableEntityError;
}


const ContactUsForm: React.FC<Props> = ({ loading, onSubmit, error }) => {
    const { register, handleSubmit, errors, setError } = useForm<ContactMessageBody>({reValidateMode:"onChange"});
    const fieldNames = ['name', 'email'];

    useEffect(() => {
        if (error) {
            error.errors?.forEach(e => {
                if (fieldNames.includes(e.param as any)) {
                    setError(e.param, { message: e.message[Object.keys(e.message)[0]] });
                }
            })
        }

    }, [error])

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Contact Us</h1>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" ref={register} />
                    {errors.name && <span>{errors.name?.message}</span>}
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" ref={register} />
                    {errors.email && <span>{errors.email?.message}</span>}
                </Form.Group>

                <Form.Group controlId="formBasicDiscription">
                    <Form.Label>Discription</Form.Label>
                    <Form.Control type="text" placeholder="Discription" name="discription" ref={register} />
                </Form.Group>

                <Button disabled={loading} variant="primary" type="submit">
                    {loading ? <Spinner animation="border" style={{ width: "20px", height: "20px" }} /> : null}
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ContactUsForm;