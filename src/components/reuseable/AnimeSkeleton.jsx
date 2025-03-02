import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

export default function AnimeSkeleton({ count = 6 }) {
 return (
  <div className="grid grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] gap-5 items-start min-[1041px]:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] min-[1041px]:gap-x-10 anime-trending-wrapper">
   {Array(count).fill(0).map((_, index) => (
    <div key={index} className="lg:last:hidden">
     <div className="h-[200px] min-[1041px]:h-[270px]">
      <Skeleton height="100%" className="rounded-md" />
     </div>
     <Skeleton width="80%" height={20} className="mt-3" />
    </div>
   ))}
  </div>
 )
}


AnimeSkeleton.propTypes = {
 count: PropTypes.number,
}