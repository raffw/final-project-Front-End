const Button = (props) => {
    const { children, 
            classname="bg-black", 
            onClick= ()=>{}, 
            type = "button", 
        } = props; // destructuring method. and giving them default value to the props
    return (
        <button
            className={`h-10 px-6 font-semibold rounded-md ${classname} text-blue-600`} 
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;