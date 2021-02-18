import useAxios from "axios-hooks";

const [{ data, loading, error }, refetch] = useAxios(
    "https://reqres.in/api/users?delay=1"
);