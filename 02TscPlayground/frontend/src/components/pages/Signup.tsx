import { FormEvent, useState } from "react";
import Button from "../Button";

export default function Signup({}) {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleFullname(event: React.ChangeEvent<HTMLInputElement>) {
    setFullname(event.target.value);
  }

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlepassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("all data ", fullname, email, password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fullname </label>
          <input onChange={handleFullname} value={fullname} />
        </div>
        <div>
          <label>Email </label>
          <input onChange={handleEmail} value={email} />
        </div>
        <div>
          <label>Password </label>
          <input onChange={handlepassword} value={password} />
        </div>
        <Button>Signup</Button>
      </form>
    </div>
  );
}
