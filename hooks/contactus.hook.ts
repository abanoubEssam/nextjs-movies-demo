import React, { useState } from 'react';
import { sendContactMessage } from "../api/contact-us.api";
import { ContactMessageBody, SendContactRes } from "../models/contact-us.model";
import { NetworkError, UnProcessableEntityError } from '../models/errors.model';

const useContactUs = () => {
    const [data, setData] = useState<SendContactRes>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<NetworkError|UnProcessableEntityError>()

    const mapError = (apiError) => {
      if(!apiError.response){
        return new NetworkError();
      }else{
         const status = apiError.response.status ;
         if(status === 422){
             return new UnProcessableEntityError(apiError.response.data.error.errors) ;
         }
       }
    }

    const onSubmit = (contactUsBody: ContactMessageBody) => {
        console.log("🚀 ~ file: useContactUs.ts ~ line 10 ~ onSubmit ~ contactUsBody", contactUsBody)
        setLoading(true)
        setError(null);
        sendContactMessage(contactUsBody).then(res => {
            if (res.data) {
                setData(res.data)
                setSuccess(true)
                setLoading(false)
            }
        }).catch(error => {
            setSuccess(false)
            setError(mapError(error));
            setLoading(false)
        });
    }

    return {
        data,
        loading,
        success,
        error,
        onSubmit
    }
}

export default useContactUs;