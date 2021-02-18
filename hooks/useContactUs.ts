import sendContactUs from "../api/contact-us.api";
import { ContactMessageBody } from "../models/contact-us.model";

const useContactUs = (contactUsBody: ContactMessageBody) => {
    const { data, loading, error } = sendContactUs(contactUsBody);
    return {
        data,
        loading,
        error
    }
}

export default useContactUs;