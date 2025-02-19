import { Link } from "react-router";

// Import reuseable components
import Button from "../components/reuseable/Button";
import AuthenticationLayoutWrap from "../components/reuseable/AuthenticationLayoutWrap";
import AuthenticationFormWrap from "../components/reuseable/AuthenticationFormWrap";
import InputAuthentication from "../components/reuseable/InputAuthentication";

export default function Signup() {
 return (
  <AuthenticationLayoutWrap content={
   <>
    <h1 className="text-2xl text-text">Sign up to AniList</h1>

    <AuthenticationFormWrap content={
     <>
      <InputAuthentication
       htmlfor="email"
       inputType="email"
       placeholder="Email"
      />
      <InputAuthentication
       htmlfor="username"
       inputType="text"
       placeholder="Username"
      />
      <InputAuthentication
       htmlfor="password"
       inputType="password"
       placeholder="Password"
      />
      <InputAuthentication
       htmlfor="confirm-password"
       inputType="password"
       placeholder="Confirm Password"
      />

      <label htmlFor="terms-of-service" className="text-text-light mt-8 gap-2 text-[.813rem] flex items-center justify-center cursor-pointer md:block md:place-items-center w-fit mx-auto">
       <input className="md:mr-2" type="checkbox" name="terms-of-service" id="terms-of-service" />
       <p className="md:inline-block font-normal">You agree to our terms of service</p>
      </label>

      <div className="flex justify-center">
       <Button
        innerText="Sign up"
       />
      </div>
     </>
    }>
    </AuthenticationFormWrap>

    <Link to="/login" className="font-normal text-[0.813rem] text-text-lighter hover:text-blue ease-in-out duration-75">Login</Link>
    <span className="px-1 text-text-lighter">&bull;</span>
    <Link to="/reverify" className="font-normal text-[0.813rem] text-text-lighter hover:text-blue ease-in-out duration-75">Resend Verification Email</Link>
   </>
  }>
  </AuthenticationLayoutWrap>
 )
}
