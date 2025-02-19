// Import components
import MainDataDropdownGenres from "./MainDataDropdownGenres";

export default function AdvancedGenres() {
 return (
  <div className="pr-2">
   <p className="text-gray-800 text-sm mb-1">Genres</p>

   <div className="flex flex-wrap gap-x-2 gap-y-2 pr-2">
    <MainDataDropdownGenres isAdvancedFilter="true" htmlfor="advanced-genres" />
   </div>
  </div>
 )
}