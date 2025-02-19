import { memo } from "react";

// Import components
import DropdownBrowse from "./DropdownBrowse";
import SelectedFilterBrowse from "./SelectedFilterBrowse";

function BrowseFilter() {
 return (
  <>
   <h1>Browse</h1>
   <div className="flex items-center gap-x-4 bg-background-300 rounded-md px-3 py-[0.0625rem] relative">
    <SelectedFilterBrowse />

    <svg className="w-4 fill-gray-400" aria-hidden="true" focusable="false" role="img" data-icon="down-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 45">
     <path d="M7.827.668a7.297 7.297 0 0 0-5.161 12.458L31.95 42.41a7.298 7.298 0 0 0 10.32-10.32L12.988 2.806A7.272 7.272 0 0 0 7.827.668Z" />
     <path d="M66.485.577a7.27 7.27 0 0 0-5.16 2.138L31.95 32.09a7.297 7.297 0 0 0 0 10.32 7.296 7.296 0 0 0 10.32 0l29.375-29.375a7.295 7.295 0 0 0 0-10.32 7.268 7.268 0 0 0-5.16-2.138Z" />
    </svg>

    <DropdownBrowse />
   </div>
  </>
 )
}

export default memo(BrowseFilter);