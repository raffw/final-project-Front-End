import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();

    return (
        
        <div className="flex flex-col justify-center min-h-screen items-center">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p> Sorry, an unexpected error has occured.</p>
            <p>Page {error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;