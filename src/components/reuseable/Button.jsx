import PropTypes from "prop-types"

export default function Button({ innerText }) {
 return (
  <button data-innertext={innerText} className="mt-16 text-white bg-blue text-[0.938rem] font-semibold py-2 px-7 data-[innertext=Sign_up]:md:block data-[innertext=Sign_up]:mt-5 cursor-pointer rounded-[.24rem]" type="button">{innerText}</button>
 )
}

Button.propTypes = {
 innerText: PropTypes.string,
}