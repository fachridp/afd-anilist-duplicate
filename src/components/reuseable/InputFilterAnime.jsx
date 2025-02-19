import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback, useEffect } from "react";

// Import constant variables
import { DROPDOWN_ITEMS, SCREEN_SIZES } from "../../constants/constants";

// Import RTK features
import { openOverlay, resetOverlay, setMainFilters } from "../../features/dropdownFiltersManager";
import { resetFilterCheckbox, resetFilterRadio } from "../../features/selectedFiltersManager";

// Import components
import DropdownCheckboxFilter from "./DropdownCheckboxFilter";
import DropdownRadioFilter from "./DropdownRadioFilter";

function InputFilterAnime({ htmlFor, filterTitle, filterCamelcase, typeofDropdown, filterfor }) {
  const dispatch = useDispatch();

  // RTK store
  const screenSize = useSelector((state) => state.innerWidthManager.width < SCREEN_SIZES.large ? 'medium' : 'large');
  const isDropdownFilter = useSelector((state) => state.dropdownFiltersManager.mainFilters[filterCamelcase][screenSize]);
  const selectedFilter = useSelector((state) => state.selectedFiltersManager[`${typeofDropdown}DropdownFilters`][filterCamelcase]);

  const handleOpenDropdownFilter = useCallback(() => {
    dispatch(setMainFilters({ filterName: filterCamelcase, screenSize, valueFilter: true }));
    dispatch(openOverlay({ screenSize: window.innerWidth }));
  }, [dispatch, filterCamelcase, screenSize]);

  const handleClickedOutsideDropdownFilter = useCallback((event) => {
    if (!event.target.closest(`.closest-${filterCamelcase}-filter`) && isDropdownFilter) {
      dispatch(setMainFilters({ filterName: filterCamelcase, screenSize, valueFilter: false }));
      dispatch(resetOverlay());
    }
  }, [dispatch, filterCamelcase, isDropdownFilter, screenSize]);

  const handleClearSelectedFilter = () => {
    dispatch(typeofDropdown === 'checkbox' ? resetFilterCheckbox(filterCamelcase) : resetFilterRadio(filterCamelcase));
  }

  useEffect(() => {
    document.addEventListener('click', handleClickedOutsideDropdownFilter);

    return () => {
      document.removeEventListener('click', handleClickedOutsideDropdownFilter);
    }
  }, [handleClickedOutsideDropdownFilter]);
  return (
    <div data-filterfor={filterfor} className="w-[10.625rem] data-[filtercamelcase=sort]:md:hidden relative max-lg:snap-start data-[filterfor=large]:lg:w-[11.25rem]" data-filtercamelcase={filterCamelcase}>
      <label htmlFor={htmlFor}>
        <p className="text-gray-900 font-semibold text-[0.9375rem]">{filterTitle}</p>

        <div className="relative">
          <input
            data-filtercamelcase={filterCamelcase}
            data-filterfor={filterfor}
            type="text"
            onClick={handleOpenDropdownFilter}
            name={htmlFor}
            id={htmlFor}
            placeholder={selectedFilter.length > 0 ? '' : 'Any'}
            className={`bg-background-100 closest-${filterCamelcase}-filter shadow-md w-full py-[0.6875rem] pl-4 px-4 placeholder:font-semibold placeholder:text-gray-600 text-gray-700 focus:outline-none cursor-pointer text-[0.8125rem] font-normal rounded-md data-[filterfor=large]:lg:bg-background-200 data-[filterfor=large]:lg:shadow-none data-[filterfor=large]:lg:placeholder:text-gray-600 data-[filterfor=large]:lg:font-semibold`}
            readOnly
          />

          {typeofDropdown === 'radio' && (
            selectedFilter.length > 0 && (
              <div className="flex gap-x-2 absolute items-center inset-y-0 left-0 pl-3">
                <p className="text-blue-600 font-semibold text-xs py-[5px] px-[8px] rounded-md cursor-pointer">{selectedFilter}</p>
              </div>
            )
          )}

          {typeofDropdown === 'checkbox' && (
            selectedFilter.length > 0 && (
              <div className="flex gap-x-2 absolute items-center inset-y-0 left-0 pl-3">
                <p className="bg-background-300 text-gray-800 font-medium text-xs py-[5px] px-[8px] rounded-md cursor-pointer">{selectedFilter[0]}</p>
                {selectedFilter.length > 1 && (
                  <p className="bg-background-300 text-gray-800 font-medium text-xs py-[5px] px-[8px] rounded-md cursor-pointer">+{selectedFilter.length - 1}</p>
                )}
              </div>
            )
          )}
        </div>
      </label>

      <span className="absolute flex items-center inset-y-0 top-[1.42rem] pr-3 right-0 cursor-pointer">
        {selectedFilter.length > 0 ? (
          <svg className="w-3 fill-gray-400 hover:fill-gray-500 ease-in-out duration-75 py-2" onClick={handleClearSelectedFilter} aria-hidden="true" focusable="false" role="img" data-icon="cross" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path d="m2.576 1.868-.707.707a1.5 1.5 0 0 0 0 2.122l13.435 13.435a1.5 1.5 0 0 0 2.121 0l.707-.707a1.5 1.5 0 0 0 0-2.122L4.697 1.868a1.5 1.5 0 0 0-2.121 0Z" />
            <path d="M15.304 1.868 1.869 15.303a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.121 0L18.132 4.697a1.5 1.5 0 0 0 0-2.122l-.707-.707a1.5 1.5 0 0 0-2.121 0Z" />
          </svg>
        ) : (
          <svg className={`w-3 fill-gray-400 hover:fill-gray-500 ease-in-out duration-75 ${filterfor === 'large' && "lg:fill-gray-500"}`} aria-hidden="true" focusable="false" role="img" data-icon="down-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 45"><path d="M7.827.668a7.297 7.297 0 0 0-5.161 12.458L31.95 42.41a7.298 7.298 0 0 0 10.32-10.32L12.988 2.806A7.272 7.272 0 0 0 7.827.668Z" /><path d="M66.485.577a7.27 7.27 0 0 0-5.16 2.138L31.95 32.09a7.297 7.297 0 0 0 0 10.32 7.296 7.296 0 0 0 10.32 0l29.375-29.375a7.295 7.295 0 0 0 0-10.32 7.268 7.268 0 0 0-5.16-2.138Z" /></svg>
        )}
      </span>

      {isDropdownFilter && (
        typeofDropdown === "checkbox" ? (
          <DropdownCheckboxFilter
            key={filterCamelcase}
            isDropdownFilter={isDropdownFilter}
            screenSize={screenSize}
            dropdownName={filterTitle}
            mainData={DROPDOWN_ITEMS[filterCamelcase]}
          />
        )
          :
          (
            <DropdownRadioFilter
              key={filterCamelcase}
              isDropdownFilter={isDropdownFilter}
              screenSize={screenSize}
              dropdownName={filterTitle}
              mainData={DROPDOWN_ITEMS[filterCamelcase]}
            />
          )
      )}
    </div>
  )
}

InputFilterAnime.propTypes = {
  htmlFor: PropTypes.string,
  filterTitle: PropTypes.string,
  filterCamelcase: PropTypes.string,
  filterfor: PropTypes.string,
  typeofDropdown: PropTypes.string,
}

export default memo(InputFilterAnime)