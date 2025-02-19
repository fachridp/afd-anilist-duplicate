import { useSelector } from "react-redux";
import PropTypes from "prop-types"
import { SCREEN_SIZES } from "../constants/constants";

export default function Main({ content }) {
 const isOverlay = useSelector((state) => state.dropdownFiltersManager.overlay);
 const width = useSelector((state) => state.innerWidthManager.width);

 return (
  <main className={`max-w-[71.25rem] mx-auto ${width < SCREEN_SIZES.medium && isOverlay && 'overlay'}`}>
   {content}
  </main>
 )
}

Main.propTypes = {
 content: PropTypes.element,
}