import PropTypes from "prop-types"

export default function InputAuthentication({ htmlfor, inputType, placeholder }) {
 return (
  <label htmlFor={htmlfor} className="block mb-5">
   <input className="w-full p-3 rounded-sm outline-none placeholder:text-sm placeholder:font-normal placeholder:font-roboto bg-background" type={inputType} name={htmlfor} id={htmlfor} placeholder={placeholder} autoComplete="false" />
  </label>
 )
}

InputAuthentication.propTypes = {
 htmlfor: PropTypes.string,
 inputType: PropTypes.string,
 placeholder: PropTypes.string,
}