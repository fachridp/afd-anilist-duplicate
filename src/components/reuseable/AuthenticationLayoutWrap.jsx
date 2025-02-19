import PropTypes from "prop-types";

export default function AuthenticationLayoutWrap({ content }) {
 return (
  <section className="text-center font-semibold md:mt-14 md:mb-14 pt-14 pb-28 md:pb-10 bg-foreground md:w-[25rem] md:mx-auto md:rounded-md font-roboto">
   {content}
  </section>
 )
}

AuthenticationLayoutWrap.propTypes = {
 content: PropTypes.element,
}