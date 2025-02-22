import { lazy, memo, Suspense, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

// Import reuseable components
import InputFilterAnime from "./reuseable/InputFilterAnime";

// Import componenets sliders
const YearSlider = lazy(() => import("./YearSlider"));
const EpisodesSlider = lazy(() => import("./EpisodesSlider"));
const DurationSlider = lazy(() => import("./DurationSlider"));

// Import RTK features
import { setExtraFilterButton } from "../features/dropdownFiltersManager";

// Import components
import AdvancedGenresTagContainer from "../layouts/AdvancedGenresTagContainer";

// Import constant variables
import { INPUT_FILTERS_PROPS } from "../constants/constants";

function LargeExtraFilter() {
 const dispatch = useDispatch();

 // Import RTK store
 const isExtraFilterLarge = useSelector((state) => state.dropdownFiltersManager.extraFilterButtons.large);

 const handleClickedOutsideFilterLarge = useCallback((event) => {
  if (!event.target.closest('.closest-button-filter-large') && isExtraFilterLarge) {
   dispatch(setExtraFilterButton({ screenSize: 'large' }))
  }
 }, [dispatch, isExtraFilterLarge]);

 useEffect(() => {
  document.addEventListener('click', handleClickedOutsideFilterLarge);

  return () => {
   document.removeEventListener('click', handleClickedOutsideFilterLarge);
  }
 }, [handleClickedOutsideFilterLarge]);

 return (
  <div className={`flex gap-x-4 items-start closest-button-filter-large lg:bg-background-100 lg:rounded-[0.625rem] lg:shadow-md lg:w-[58rem] lg:flex-col lg:absolute lg:right-0 lg:top-[4.5rem] lg:px-10 lg:pt-8 ${!isExtraFilterLarge && "lg:hidden"}`}>
   <div className="flex gap-x-4 lg:grid lg:grid-cols-4 lg:gap-x-10">
    <InputFilterAnime
     key="airingStatus"
     {...INPUT_FILTERS_PROPS.airingStatus}
    />

    {isExtraFilterLarge && (
     <Suspense fallback={null}>
      <YearSlider />
     </Suspense>
    )}

    <InputFilterAnime
     key="streamingOn"
     {...INPUT_FILTERS_PROPS.streamingOn}
    />

    {isExtraFilterLarge && (
     <Suspense fallback={null}>
      <EpisodesSlider />
     </Suspense>
    )}

    <InputFilterAnime
     key="countryOfOrigin"
     {...INPUT_FILTERS_PROPS.countryOfOrigin}
    />

    {isExtraFilterLarge && (
     <Suspense fallback={null}>
      <DurationSlider />
     </Suspense>
    )}

    <InputFilterAnime
     key="sourceMaterial"
     {...INPUT_FILTERS_PROPS.sourceMaterial}
    />
   </div>

   <AdvancedGenresTagContainer />
  </div>
 )
}

export default memo(LargeExtraFilter);