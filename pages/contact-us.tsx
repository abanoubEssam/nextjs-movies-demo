import React from 'react'
import useContactUs from '../hooks/useContactUs';
import { ContactMessageBody } from '../models/contact-us.model';

export interface ContactUsPageProps {
    
}
 
const ContactUsPage: React.FC<ContactUsPageProps> = () => {
    const body: ContactMessageBody = {
        email: "abanoub@ee.com",
        name: "abanoub",
        description: "desc"
    }
    const {data , error , loading} = useContactUs(body)
    console.log("🚀 ~ file: contact-us.tsx ~ line 16 ~ loading", loading)
    console.log("🚀 ~ file: contact-us.tsx ~ line 16 ~ error", error)
    console.log("🚀 ~ file: contact-us.tsx ~ line 16 ~ data", data)
    return (  
        <div>
            ContactUsPage
        </div>
    );
}
 
export default ContactUsPage;