import React, { useState } from "react";

function ErrorHandler({ children }) {
    const [hasError, setHasError] = useState(false);

    const handleOnError = () => {
        setHasError(true);
    };

    if (hasError) {
        return (
            <h1 className="alert alert-warning text-center m-5 p-5">
                Sorry :) Something went wrong. Please reload the page
            </h1>
        );
    }

    return (
        <React.Fragment>
            <ErrorBoundary onError={handleOnError}>{children}</ErrorBoundary>
        </React.Fragment>
    );
}

function ErrorBoundary({ onError, children }) {
    const handleOnError = (error) => {
        onError();
    };

    return (
        <React.Fragment>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    onError: handleOnError,
                })
            )}
        </React.Fragment>
    );
}

export default ErrorHandler;
