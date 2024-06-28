import Check from "../Assets/check-solid.svg";

const PaymentSuccessfull =()=>{
    return <div className="w-9/10 flex flex-col gap-y-8 mt-32 items-center h-screen">
    <div className="w-16 border-4 rounded-full border-green-800"><img src={Check} className="w-16 p-2"/></div>
    <p className="text-xl font-bold">Order Successful 🎉</p>
    <p className="text-lg font-semibold">Thank You!</p>
    <p className="text-lg font-semibold">Hang tight, your meal is on its way!</p>

    </div>
}

export default PaymentSuccessfull;