// import { Children } from "react";
import { Link } from "react-router-dom";

const AuthLayout = (prop) => {
    const { children, title, type } = prop;
    return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-02 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details!
        </p>
        {children}
        <Navigation type = { type }/>
        {/* <p className="text-sm mt-5 text-center">
           {type === 'login' ? "Don't have an account? " : "Alaready  have an account? "}

           {type === 'login' && (
           <Link to="/register" className="font-bold text-blue-600">Sign Up, Now!</Link> 
          )}

          {type === 'register' && (
           <Link to="/login" className="font-bold text-blue-600">Sign in, Now!</Link> 
          )} 
        </p> */}
      </div>
      </div>
    )
};

// merender login/register menggunakan operator kondisi if
const Navigation = ({type}) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account? {" "}
        <Link to = "/register" className="font-bold text-blue-600">Register Now!</Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account? {" "}
        <Link to = "/login" className="font-bold text-blue-600">Login Now!</Link>
      </p>
    );
  }
}
export default AuthLayout;