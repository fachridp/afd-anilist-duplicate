import { Link } from "react-router";

// Import reuseable components
import AuthenticationLayoutWrap from "../components/reuseable/AuthenticationLayoutWrap";
import Button from "../components/reuseable/Button";
import InputAuthentication from "../components/reuseable/InputAuthentication";
import AuthenticationFormWrap from "../components/reuseable/AuthenticationFormWrap";

export default function Forgot() {
 return (
  <AuthenticationLayoutWrap content={
   <>
    <h1 className="text-2xl text-text">Reset Password</h1>

    <AuthenticationFormWrap content={
     <>
      <InputAuthentication
       htmlfor="email"
       inputType="email"
       placeholder="Email"
      />

      <Button innerText="Reset Password" />
     </>
    }>
    </AuthenticationFormWrap>

    <Link to="/login" className="text-[0.813rem] font-normal hover:text-blue duration-75 ease-in-out text-text-lighter">Login</Link>
   </>
  }>
  </AuthenticationLayoutWrap>
 )
}
