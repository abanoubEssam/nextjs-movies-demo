import useAxios from "axios-hooks";
import { ContactMessageBody } from "../models/contact-us.model";

const sendContactUs = (contactUsBody: ContactMessageBody) => {
    const [
        { data, loading, error }
    ] = useAxios(
        {
            url: "http://167.99.10.248:3014/api/v1/contact-us",
            method: "POST",
            data: contactUsBody
        }
    );
    return {
        data,
        loading,
        error
    }
}

export default sendContactUs