import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";

// Import constant variables
import { DROPDOWN_ITEMS } from "../constants/constants";

// Import RTK features
import { setFilterCheckbox } from "../features/selectedFiltersManager";

function OptionalDataDropdownGenres({ isAdvancedFilter, htmlfor }) {
 const dispatch = useDispatch();

 // RTK store
 const checkboxFilterValues = useSelector((state) => state.selectedFiltersManager.checkboxDropdownFilters.genres);

 const handleSelectFilterCheckbox = useCallback((event) => {
  let { value, checked } = event.target;
  const keyFilter = 'genres';

  dispatch(setFilterCheckbox({ keyFilter, valueFilter: checked ? value = [...checkboxFilterValues, value] : checkboxFilterValues.filter(item => item !== value) }));
 }, [checkboxFilterValues, dispatch]);

 return (
  <>
   {DROPDOWN_ITEMS.tags && DROPDOWN_ITEMS.tags.map(data => (
    <label key={data.id} data-isadvancedfilter={isAdvancedFilter} htmlFor={`${htmlfor}-${data.name}`} className="flex justify-between items-center mt-1 cursor-pointer hover:bg-background-200 duration-75 ease-in-out rounded-md p-2 group relative flex-row-reverse">
     <input type="checkbox" value={data.name} checked={checkboxFilterValues.includes(data.name)} onChange={handleSelectFilterCheckbox} className="peer appearance-none" name={`${htmlfor}-${data.name}`} id={`${htmlfor}-${data.name}`} />
     <p data-isadvancedfilter={isAdvancedFilter} className="text-gray-700 font-semibold group-hover:text-blue-600 duration-75 ease-in-out md:text-sm">{data.name}</p>

     {isAdvancedFilter === "false" && (
      <svg className='w-5 lg:w-4 fill-blue hidden peer-checked:block absolute right-0 top-1/2 -translate-y-1/2' aria-hidden="true" focusable="false" role='img' data-icon="checklist" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 84"><path d="M42 .332C19.023.332.332 19.023.332 42 .332 64.973 19.023 83.668 42 83.668c22.973 0 41.668-18.691 41.668-41.668S64.973.332 42 .332Zm19.613 32.113-25 25a4.156 4.156 0 0 1-5.89 0l-8.333-8.332a4.161 4.161 0 0 1 0-5.89 4.161 4.161 0 0 1 5.891 0l5.387 5.386 22.055-22.055a4.161 4.161 0 0 1 5.89 0 4.169 4.169 0 0 1 0 5.891Z" /></svg>
     )}
    </label>
   ))}
  </>
 )
}

OptionalDataDropdownGenres.propTypes = {
 isAdvancedFilter: PropTypes.string,
 htmlfor: PropTypes.string,
}

export default memo(OptionalDataDropdownGenres);