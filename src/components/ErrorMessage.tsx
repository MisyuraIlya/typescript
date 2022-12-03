import React from 'react';

interface ErrorMessageProps {
    error:string
}
const ErrorMessage = ({error}: ErrorMessageProps) => {
    return (
        <p className='text-center red-600'>{error}</p>
    );
};

export default ErrorMessage;