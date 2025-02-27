import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

// Import RTK features
import { setFilterRadio } from "../features/selectedFiltersManager";

export default function DropdownYear({ dropdownName, mainData }) {
 const dispatch = useDispatch();

 // RTK store
 const dropdownYearValue = useSelector((state) => state.selectedFiltersManager.radioDropdownFilters.year);
 const searchedYearValue = useSelector((state) => state.selectedFiltersManager.searchYearFilter);


 const searchedYearResult = mainData.filter(item => item.name.toString().includes(searchedYearValue));

 const handlehandleSelectFilterCheckbox = (event) => {
  const keyFilter = 'year'
  const valueFilter = event.target.value;

  dispatch(setFilterRadio({ keyFilter, valueFilter }))
 };
 return (
  <>
   <div>
    {searchedYearResult && searchedYearResult.map(data => (
     <label key={data.id} htmlFor={`${dropdownName} ${data.name}`} className="flex justify-between items-center cursor-pointer p-2 group hover:bg-background-200 closest-year-filter duration-75 ease-in-out rounded-md relative my-1">
      <p className="text-gray-700 font-semibold group-hover:text-blue-600 duration-75 ease-in-out md:text-sm">{data.name}</p>
      <input type="radio" value={data.name} checked={data.name.toString() === dropdownYearValue} onChange={handlehandleSelectFilterCheckbox} className="peer appearance-none" name={`${dropdownName} ${data.name}`} id={`${dropdownName} ${data.name}`} />

      <svg className='w-5 lg:w-4 fill-blue hidden peer-checked:block absolute right-0 top-1/2 -translate-y-1/2' aria-hidden="true" focusable="false" role='img' data-icon="checklist" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 84"><path d="M42 .332C19.023.332.332 19.023.332 42 .332 64.973 19.023 83.668 42 83.668c22.973 0 41.668-18.691 41.668-41.668S64.973.332 42 .332Zm19.613 32.113-25 25a4.156 4.156 0 0 1-5.89 0l-8.333-8.332a4.161 4.161 0 0 1 0-5.89 4.161 4.161 0 0 1 5.891 0l5.387 5.386 22.055-22.055a4.161 4.161 0 0 1 5.89 0 4.169 4.169 0 0 1 0 5.891Z" /></svg>
     </label>
    ))}
   </div>
  </>
 )
}

DropdownYear.propTypes = {
 dropdownName: PropTypes.string,
 mainData: PropTypes.array,
}