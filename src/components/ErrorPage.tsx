const ErrorPage = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center p-4 gap-4 vh-100">
                <p>I didn't find this page :(</p>
                <a href="/">Back to main page</a>
                <p className="fst-italic">Iván San Martín</p>
            </div>
        </>
    );
};

export default ErrorPage;