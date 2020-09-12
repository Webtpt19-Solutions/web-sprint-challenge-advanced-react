// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialState, cb, cbParam) => {
    const [ values, setValues ] = useState(initialState);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cb(cbParam);
    }

    return [values, handleChange, handleSubmit]
};

export default useForm