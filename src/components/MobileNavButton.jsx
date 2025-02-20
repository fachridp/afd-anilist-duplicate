import { useDispatch } from "react-redux";
import { memo } from "react";

// Import RTK features
import { setMobileNav } from "../features/dropdownFiltersManager";
import MobileNavItems from "./MobileNavItems";

function MobileNavButton() {
 const dispatch = useDispatch();

 const handleOpenMobileNav = () => {
  dispatch(setMobileNav(true));
 }
 return (
  <>
   <div className="bg-background-100 shadow-md rounded-md p-4 cursor-pointer fixed bottom-6 right-5 z-10 lg:hidden" onClick={handleOpenMobileNav}>
    <svg className="w-6 fill-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 76 64">
     <path d="M75.5 57a6.248 6.248 0 0 1-6.25 6.25H6.75A6.248 6.248 0 0 1 .5 57a6.248 6.248 0 0 1 6.25-6.25h62.5A6.248 6.248 0 0 1 75.5 57Zm-6.25-31.25H6.75A6.248 6.248 0 0 0 .5 32a6.248 6.248 0 0 0 6.25 6.25h62.5A6.248 6.248 0 0 0 75.5 32a6.248 6.248 0 0 0-6.25-6.25Zm-62.5-12.5h62.5A6.248 6.248 0 0 0 75.5 7 6.248 6.248 0 0 0 69.25.75H6.75A6.248 6.248 0 0 0 .5 7a6.248 6.248 0 0 0 6.25 6.25Z" />
    </svg>
   </div>

   <MobileNavItems />
  </>
 )
}

export default memo(MobileNavButton);