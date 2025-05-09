import Slider from "rc-slider"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { memo, useCallback } from "react"

// Import constant variables
import { SLIDERS_VALUES } from "../constants/constants"

// Import RTK features
import { setFilterSlider } from "../features/selectedFiltersManager";

function EpisodesSlider() {
 const dispatch = useDispatch();

 // RTK store
 const episodesSliderChange = useSelector((state) => state.selectedFiltersManager.sliderFilters.episodesChange, shallowEqual);
 const episodeSliderAfterChange = useSelector((state) => state.selectedFiltersManager.sliderFilters.episodes, shallowEqual);

 const handleEpisodeSliderChange = (value) => {
  dispatch(setFilterSlider({ keyFilter: 'episodesChange', valueFilter: value }));

 };

 const handleEpisodesSliderAfterChnage = useCallback((value) => {
  const keyFilter = 'episodes';
  const valueFilter = value;

  value !== episodeSliderAfterChange && dispatch(setFilterSlider({ keyFilter, valueFilter }));
 }, [dispatch, episodeSliderAfterChange]);

 const handleResetEpisodesSlider = () => {
  const valueFilter = SLIDERS_VALUES.episodes.defaultValue;

  dispatch(setFilterSlider({ keyFilter: 'episodes', valueFilter }));
  dispatch(setFilterSlider({ keyFilter: 'episodesChange', valueFilter }));
 }

 const episodesSliderHasChanged = JSON.stringify(episodeSliderAfterChange) !== JSON.stringify(SLIDERS_VALUES.episodes.defaultValue);

 return (
  <div className="hidden lg:block slider-container row-start-2 mt-8">
   <div className="font-semibold flex justify-between items-center">
    <p className="text-gray-900 text-[0.9375rem]">Episodes</p>

    {episodesSliderHasChanged && (
     <div className="flex items-start gap-x-1 closest-button-filter-large">
      <p className="text-gray-700 text-xs">{episodeSliderAfterChange.join('-')}</p>

      <svg onClick={handleResetEpisodesSlider} className="w-[.6rem] pt-[0.125rem] fill-gray-500 cursor-pointer hover:fill-gray-800 ease-in-out duration-75" aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
       <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
       <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
      </svg>
     </div>
    )}
   </div>

   <Slider
    range
    min={SLIDERS_VALUES.episodes.min}
    max={SLIDERS_VALUES.episodes.max}
    value={episodesSliderChange}
    onChange={handleEpisodeSliderChange}
    onChangeComplete={handleEpisodesSliderAfterChnage}
    styles={{
     rail: {
      backgroundColor: '#edf1f5',
      height: 10,
     },
     track: {
      backgroundColor: '#c9e8ff',
      height: 10,
     },
     handle: {
      width: 20,
      height: 20,
      backgroundColor: '#3db4f2',
     },
    }}
   />
  </div>
 )
}

export default memo(EpisodesSlider);