import _ from 'lodash';
import PropTypes from 'prop-types'

export default function TooltipAnime({ nextEpisode, timeUntilAiring, averageScore, airingSince, studios, format, totalEpisodes, genres }) {
 // Add id property
 const genresPropObj = genres.map((genre, index) => ({ id: index + 1, name: genre }));

 // Convert numbers to days
 const daysNum = timeUntilAiring;

 const days = _.floor(_.divide(daysNum, 86400));
 return (
  <div className='text-gray-700 font-semibold space-y-2'>
   <div className='flex items-center justify-between gap-x-8 text-[16px]'>
    <p className='text-gray-800 font-bold'>{totalEpisodes ? `Ep ${nextEpisode} airing in ${days} days` : `Airing Since ${airingSince}`}</p>
    <p>{averageScore}%</p>
   </div>
   <p className='text-red-300 font-bold text-sm'>{studios}</p>
   <div className='flex items-start gap-x-2'>
    <p>{format === 'TV' ? 'TV Show' : format}</p>
    {totalEpisodes && (
     <>
      <p>&bull;</p>
      <p>{totalEpisodes} episodes</p>
     </>
    )}
   </div>
   <div className='flex gap-x-2 items-start'>
    {genresPropObj.map((genre, index) => (
     index < 3 && (
      <p key={genre.id} className='bg-red-300 rounded-full text-white py-0.5 px-3 text-xs lowercase'>{genre.name}</p>
     )
    ))}
   </div>
  </div>
 )
}

TooltipAnime.propTypes = {
 nextEpisode: PropTypes.number,
 timeUntilAiring: PropTypes.number,
 averageScore: PropTypes.number,
 airingSince: PropTypes.number,
 studios: PropTypes.string,
 format: PropTypes.string,
 totalEpisodes: PropTypes.number,
 genres: PropTypes.array,
}