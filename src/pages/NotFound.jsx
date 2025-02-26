import { Link } from "react-router";

export default function NotFound() {
 return (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center place-content-center font-bold">
   <h1>404 NOT FOUND</h1>

   <Link to='/' className="bg-[#3577ff] text-white font-bold rounded-md shadow-md py-[0.6875rem] inline-block px-4 cursor-pointer mt-2">Leave, and go home</Link>
  </div>
 )
}
