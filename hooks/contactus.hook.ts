import { useState } from 'react';
import { sendContactMessage } from "../api/contact-us.api";
import { ContactMessageBody } from "../models/contact-us.model";
import { NetworkError, UnProcessableEntityError } from '../models/errors.model';

const useContactUs = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<NetworkError | UnProcessableEntityError>()

    const mapError = (apiError) => {
        if (!apiError.response) {
            return new NetworkError();
        } else {
            const status = apiError.response.status;
            if (status === 422) {
                return new UnProcessableEntityError(apiError.response.data.error.errors);
            }
        }
    }

    const onSubmit = async (contactUsBody: ContactMessageBody) => {
        console.log("🚀 ~ file: useContactUs.ts ~ line 10 ~ onSubmit ~ contactUsBody", contactUsBody)
        setLoading(true)
        setError(null);
        try {
            await sendContactMessage(contactUsBody)
            setSuccess(true)
            setLoading(false)
        } catch (error) {
            setSuccess(false)
            setError(mapError(error));
            setLoading(false)
        }
    }

    return {
        loading,
        success,
        error,
        onSubmit
    }
}

export default useContactUs;