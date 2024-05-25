import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
        <InputForm
          label = "Full Name"
          type = "text"
          placeholder = "Please enter your full name"
          name = "fullName"
        />
        <InputForm
          label = "Email"
          type = "email"
          placeholder = "example@example.com"
          name = "email"
        />
        <InputForm
          label = "Password"
          type = "password"
          placeholder = "*******"
          name = "password"
        />
         <InputForm
          label = "Confirm Password"
          type = "password"
          placeholder = "*******"
          name = "ConfirmPassword"
        />
        <Button classname="bg-white-600 w-full border-2 border-midGreen">Register</Button>
      </form>
    );
};

export default FormRegister;