import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import constant variables
import { DROPDOWN_ITEMS } from "../constants/constants";

// Import RTK features
import { setFilterCheckbox } from "../features/selectedFiltersManager";

export default function AdvancedTag() {
 const dispatch = useDispatch();

 // RTK store
 const checkboxFilterValues = useSelector((state) => state.selectedFiltersManager.checkboxDropdownFilters.genres);

 const handleSelectFilterCheckbox = useCallback((event) => {
  let { value, checked } = event.target;
  const keyFilter = 'genres';

  dispatch(setFilterCheckbox({ keyFilter, valueFilter: checked ? value = [...checkboxFilterValues, value] : checkboxFilterValues.filter(item => item !== value) }));
 }, [checkboxFilterValues, dispatch]);

 const tags = [...DROPDOWN_ITEMS.tags];

 const groupedByCategory = tags.reduce((acc, current) => {
  acc[current.category] = acc[current.category] || [];
  acc[current.category].push(current);

  return acc;
 }, {});

 return (
  <>
   {Object.keys(groupedByCategory).sort().map(key => (
    <div key={key}>
     <p className="text-gray-800 text-sm mb-1 mt-6">{key}</p>

     <div className="flex flex-wrap gap-2 pr-2">
      {groupedByCategory[key].map(item => (
       <label key={item.id} htmlFor={`advanced-tag-${item.name}`} className="flex items-center cursor-pointer">
        <input type="checkbox" className="peer appearance-none" value={item.name} checked={checkboxFilterValues.includes(item.name)} onChange={handleSelectFilterCheckbox} name={`advanced-tag-${item.name}`} id={`advanced-tag-${item.name}`} />

        <p className="bg-blue-600 text-xs text-white duration-75 ease-in-out py-[0.3125rem] px-[0.5rem] rounded-md hover:bg-green-400 peer-checked:bg-green-400">{item.name}</p>
       </label>
      ))}
     </div>
    </div>
   ))}
  </>
 )
}
