import PropTypes from "prop-types";

export default function AuthenticationFormWrap({ content }) {
 return (
  <form className="mt-12 mb-5 px-9 text-sm text-text">
   {content}
  </form>
 )
}

AuthenticationFormWrap.propTypes = {
 content: PropTypes.element,
}