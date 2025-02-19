import { useSelector } from "react-redux"
import PropTypes from "prop-types"

export default function MobileNavContainer({ content }) {
 // RTK store
 const isMobileNav = useSelector((state) => state.dropdownFiltersManager.mobileNav);

 return (
  <>
   {isMobileNav && (
    <div className={`fixed right-5 bottom-6 cursor-pointer bg-background-100 shadow-md rounded-md text-gray-600 text-[0.625rem] grid grid-cols-3 gap-5 p-4 z-10 ${!isMobileNav && 'hidden'}`}>
     {content}
    </div>
   )}
  </>
 )
}

MobileNavContainer.propTypes = {
 content: PropTypes.element,
}