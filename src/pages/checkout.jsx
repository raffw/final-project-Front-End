import CardQuantity from "../components/Fragments/CardQuantity";
import CardShipment from "../components/Fragments/CardShipment";
import CardSummary from "../components/Fragments/CardSummary";


const CheckoutPage =() => {
    return (
        <>
            <div className="container bg-white xl:px-48 md:flex">
                <div className="sm:w-4/5 pb-4 pt-2">
                    <CardQuantity/>
                    <CardShipment/>
                </div>
            <CardSummary/>
            </div>
        </>
    )
};

export default CheckoutPage;



