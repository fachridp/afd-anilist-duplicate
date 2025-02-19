import { Link } from "react-router";

// Import reuseable components
import Button from "../components/reuseable/Button";
import AuthenticationWrap from "../components/reuseable/AuthenticationLayoutWrap";
import AuthenticationFormWrap from "../components/reuseable/AuthenticationFormWrap";
import InputAuthentication from "../components/reuseable/InputAuthentication";

export default function Login() {
 return (
  <AuthenticationWrap content={
   <>
    <h1 className="text-2xl text-text">Login</h1>

    <AuthenticationFormWrap content={
     <>
      <InputAuthentication
       htmlfor="email"
       inputType="email"
       placeholder="Email"
      />

      <InputAuthentication
       htmlfor="password"
       inputType="password"
       placeholder="Password"
      />

      <Button
       innerText="Login"
      />
     </>
    }>
    </AuthenticationFormWrap>

    <Link to="/forgot" className="text-[0.813rem] mb-14 hover:text-blue ease-in-out duration-75 font-normal text-text-lighter inline-block">Forgot password?</Link>

    <Link to="/signup" className="text-[0.813rem] font-normal hover:text-blue duration-75 ease-in-out block text-text-lighter">Not registered? <span className="text-blue">Create an account</span></Link>
   </>
  }>
  </AuthenticationWrap>
 )
}
