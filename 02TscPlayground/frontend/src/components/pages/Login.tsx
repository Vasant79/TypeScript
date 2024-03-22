import { FormEvent, useState } from "react";
import Button from "../Button";

/**
 *  problem statement :
 *  create input to input element , search the type of onChnage
 *  search how to pass the type of button -- conflicting with ts type
 */

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //console.log("email & password : ", email, password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email </label>
        <input onChange={handleEmail} value={email} />

        <label>Password </label>
        <input onChange={handlePassword} value={password} />

        <Button>Login</Button>
      </form>
    </div>
  );
}
