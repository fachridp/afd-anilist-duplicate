import { lazy, memo, Suspense } from "react"
import { useDispatch, useSelector } from "react-redux";

// Import RTK features
import { toggleAdvancedGenresTag } from "../features/dropdownFiltersManager";

// Import components
const AdvancedGenres = lazy(() => import("../components/AdvancedGenres"));
const AdvancedTag = lazy(() => import("../components/AdvancedTag"));
const MinimumTagPercentage = lazy(() => import("../components/MinimumTagPercentage"));

function AdvancedGenresTagContainer() {
 const dispatch = useDispatch();

 // RTK store
 const isAdvancedGenresTag = useSelector((state) => state.dropdownFiltersManager.advancedGenresTag);

 const handleToggleAdvancedGenresTagFilters = () => {
  dispatch(toggleAdvancedGenresTag());
 };

 return (
  <div className="advanced-genres hidden lg:block border-t-2 border-gray-200 w-full mt-6 py-6">
   <div className={`font-semibold flex items-center gap-x-3 cursor-pointer row-start-4 ${isAdvancedGenresTag && "pb-6"}`} onClick={handleToggleAdvancedGenresTagFilters}>
    <svg className={`w-[.42rem] fill-gray-400 ${isAdvancedGenresTag && "rotate-90"}`} aria-hidden="true" focusable="false" role="img" data-icon="right-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 45 75"><path d="M.261 66.891a7.297 7.297 0 0 0 12.458 5.161l29.284-29.284a7.298 7.298 0 0 0-10.32-10.32L2.4 61.73a7.272 7.272 0 0 0-2.138 5.16Z" /><path d="M.17 8.233a7.27 7.27 0 0 0 2.138 5.16l29.375 29.375a7.297 7.297 0 0 0 10.32 0 7.296 7.296 0 0 0 0-10.32L12.628 3.072a7.295 7.295 0 0 0-10.32 0A7.268 7.268 0 0 0 .17 8.233Z" /></svg>

    <p className="text-gray-800 hover:text-gray-900 ease-in-out duration-75 flex-1">Advanced Genres & Tag Filters</p>
   </div>

   {isAdvancedGenresTag && (
    <Suspense fallback={<p>Loading...</p>}>
     <div className="overflow-y-scroll max-h-[60vh] advanced-genres-items">
      <MinimumTagPercentage />

      <div className="mt-6 font-bold">
       <AdvancedGenres />

       <AdvancedTag />
      </div>
     </div>
    </Suspense>
   )}
  </div>
 )
}

export default memo(AdvancedGenresTagContainer);