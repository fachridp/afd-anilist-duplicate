import { useSelector } from "react-redux";
import { memo } from "react";

// Import components
import LargeExtraFilter from "./LargeExtraFilter";
import GenresFilter from "./GenresFilter";

// Import reuseable components
import InputFilterAnime from "./reuseable/InputFilterAnime";

// Import constant variables
import { INPUT_FILTERS_PROPS } from "../constants/constants";

function ExtraFilter() {
 // RTK store
 const isExtraFilterMobile = useSelector((state) => state.dropdownFiltersManager.extraFilterButtons.medium);
 return (
  <>
   <div className={`row-start-2 col-start-1 col-end-12 max-lg:overflow-x-scroll w-full max-lg:pb-1 overflow-scroll-wrap snap-x snap-mandatory lg:block md:max-lg:-mb-96 md:max-lg:pb-96 ${!isExtraFilterMobile && "hidden"}`}>
    <div className="flex gap-x-4 w-max items-end max-lg:mr-8 lg:gap-x-6">
     <GenresFilter />

     <InputFilterAnime
      key="year"
      {...INPUT_FILTERS_PROPS.year}
     />

     <InputFilterAnime
      key="season"
      {...INPUT_FILTERS_PROPS.season}
     />

     <InputFilterAnime
      key="format"
      {...INPUT_FILTERS_PROPS.format}
     />

     <InputFilterAnime
      key="sort"
      {...INPUT_FILTERS_PROPS.sort}
     />

     <LargeExtraFilter />

     <label htmlFor="doujin" className="bg-background-100 py-[0.6rem] pl-4 px-4 shadow-md rounded-md flex items-center gap-x-2 cursor-pointer lg:hidden">
      <input type="checkbox" className="cursor-pointer" name="doujin" id="doujin" />
      <p className="text-gray-900 font-semibold text-[0.9375rem]">Doujin</p>
     </label>
    </div>
   </div>
  </>
 )
}

export default memo(ExtraFilter);