import Button from "../../components/Elements/Button";

const CardProduct =  (props) => {
    const { children } = props;
    return (  
            <div className="mx-2 my-2 w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-between">
                {children}
            </div>
    );
}

const Header = (props) => {
    const { imageUrl } = props;
    return (
        <a href="#">
            <img src={imageUrl} 
             alt="product" 
             className="rounded-t-lg"
             />
         </a>
    )
}

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
                    <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-500">{name}</h5>
                        <p className="text-m text=gray">
                            {children}
                        </p>
                    </a>
                </div>
    )
}

const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-xl font-bold text-gray">RP. {price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR' })}</span>
                    <Button classname="bg-white border-2 border-darkGreen" onClick={()=> handleAddToCart(id)}>Add To Cart</Button>
                </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;