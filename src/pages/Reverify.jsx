import { Link } from "react-router";

// Import reuseable components
import AuthenticationLayoutWrap from "../components/reuseable/AuthenticationLayoutWrap";
import AuthenticationFormWrap from "../components/reuseable/AuthenticationFormWrap";
import Button from "../components/reuseable/Button";
import InputAuthentication from "../components/reuseable/InputAuthentication";

export default function Reverify() {
 return (
  <AuthenticationLayoutWrap content={
   <>
    <h1 className="text-2xl font-semibold text-text-clr">Resend Verification Email</h1>

    <AuthenticationFormWrap content={
     <>
      <InputAuthentication
       htmlfor="email"
       inputType="email"
       placeholder="Email"
      />

      <Button
       innerText="Send"
      />

      <Link to="/login" className="text-[0.813rem] font-normal hover:text-blue duration-75 ease-in-out text-text-lighter block mt-5">Login</Link>
     </>
    }>
    </AuthenticationFormWrap>
   </>
  }>
  </AuthenticationLayoutWrap>
 )
}
