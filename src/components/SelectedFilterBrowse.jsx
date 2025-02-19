import { useSelector } from "react-redux";

export default function SelectedFilterBrowse() {
 // RTK store
 const selectedBrowseFilter = useSelector((state) => state.selectedFiltersManager.browse);

 return (
  <p>{selectedBrowseFilter}</p>
 )
}
