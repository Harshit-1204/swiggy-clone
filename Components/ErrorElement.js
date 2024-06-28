import { useRouteError } from "react-router-dom";

const ErrorElement = () =>{
    const error = useRouteError();
    console.log(error);

    return <div className="flex flex-col items-center gap-y-12 my-44">
        <p className="font-bold text-2xl">opps!! sorry</p>
        <p className="font-bold text-2xl">{error.status} {" : "} Page {" "} {error.statusText}</p>
        <p className="font-bold text-2xl">{error.data}</p>
    </div>
}

export default ErrorElement;