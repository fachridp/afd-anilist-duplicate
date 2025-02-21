import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router";

// Import RTK features
import { setFilterBrowse } from "../features/selectedFiltersManager";

// Import constants variables
import { BROWSE_ITEMS } from "../constants/constants";

export default function DropdownBrowse() {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 // RTK store
 const isDropdownBrowse = useSelector((state) => state.dropdownFiltersManager.browse);
 const selectedFilterBrowse = useSelector((state) => state.selectedFiltersManager.browse);

 const handleChooseBrowseFilter = useCallback((event) => {
  const { innerText } = event.currentTarget;
  const { value } = event.currentTarget.dataset;

  dispatch(setFilterBrowse(innerText));

  const newBrowseItems = [...BROWSE_ITEMS];
  const positionBrowseItem = newBrowseItems.findIndex(item => item.name.includes(event.target.innerText));
  const deleteCount = 1;
  const id = newBrowseItems[positionBrowseItem].id;
  const name = selectedFilterBrowse;
  const newElement = { id, name };

  newBrowseItems.splice(positionBrowseItem, deleteCount, newElement);

  navigate(`search/${value}`);
 }, [dispatch, navigate, selectedFilterBrowse]);

 return (
  <>
   {isDropdownBrowse && (
    <div className="bg-background-100 absolute top-[3.8rem] w-44 left-0 shadow-md rounded-md px-4 py-3 space-y-3 z-10">
     {BROWSE_ITEMS.map(item => (
      <p key={item.id} data-value={item.name.toLocaleLowerCase()} onClick={handleChooseBrowseFilter} className="text-gray-700 cursor-pointer font-semibold text-[1.125rem] hover:text-blue-600 duration-75 ease-in-out">{item.name}</p>
     ))}
    </div>
   )}
  </>
 )
}
