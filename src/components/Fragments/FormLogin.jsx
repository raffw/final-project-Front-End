import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/";
  };
    return (
        <form onSubmit={handleLogin}>
        <InputForm
          label = "Email"
          type = "email"
          placeholder = "example@example.com"
          name = "email"
        />
        <InputForm
          label = "Password"
          type = "password"
          placeholder = "password"
          name = "password"
        />
        <Button classname="bg-white w-full border-2 border-midGreen" type="submit"
        >Login</Button>
      </form>
    );
};

export default FormLogin;