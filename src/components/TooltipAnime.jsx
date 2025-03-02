import _ from 'lodash';
import PropTypes from 'prop-types'

export default function TooltipAnime({ nextAiringEpisode, season, seasonYear, status, timeUntilAiring, averageScore, studios, format, totalEpisodes, genres }) {
 // Add id property
 const genresPropObj = genres.map((genre, index) => ({ id: index + 1, name: genre }));

 // Convert numbers to days
 const daysNum = timeUntilAiring;

 const days = _.floor(_.divide(daysNum, 86400));
 const hours = _.floor(_.divide(_.subtract(daysNum, _.multiply(days, 86400)), 3600));
 const minutes = _.floor(_.divide(_.subtract(daysNum, _.multiply(days, 86400) + _.multiply(hours, 3600)), 60));

 let timeString = '';
 let emoteFaces;

 if (days > 0) {
  timeString = `${days} days`;
 } else if (hours > 0) {
  timeString = `${hours} hours`;
 } else {
  timeString = `${minutes} minutes`;
 }

 if (averageScore > 69) {
  emoteFaces = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 28 28"><path fill="#8BF08B" d="M14 0a14 14 0 1 0 14 14A14.015 14.015 0 0 0 14 0Zm0 26a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Z" /><path fill="#8BF08B" d="M21.431 17.134a1 1 0 0 0-1.367.366 7 7 0 0 1-12.128 0 1 1 0 1 0-1.731 1 9 9 0 0 0 15.59 0 1 1 0 0 0-.364-1.366ZM10 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1ZM18 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1Z" /></svg>
 } else if (averageScore < 70) {
  emoteFaces = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 30 30"><path fill="#FF9646" fillRule="evenodd" d="M15 0C6.721 0 0 6.721 0 15s6.721 15 15 15 15-6.721 15-15S23.279 0 15 0Zm0 2c7.175 0 13 5.825 13 13s-5.825 13-13 13S2 22.175 2 15 7.825 2 15 2Zm-5 20h10a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2ZM7 12h5a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm11 0h5a1 1 0 0 0 0-2h-5a1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>
 } else if (averageScore < 50) {
  emoteFaces = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 28 28"><path fill="red" d="M14 0a14 14 0 1 0 14 14A14.015 14.015 0 0 0 14 0Zm0 26a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Z" /><path fill="red" d="M14 16a8.96 8.96 0 0 0-7.025 3.375 1 1 0 1 0 1.56 1.25 7.002 7.002 0 0 1 10.93 0 1 1 0 1 0 1.56-1.25A8.958 8.958 0 0 0 14 16ZM10 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1ZM18 12a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1Z" /></svg>
 }

 return (
  <div className='text-gray-700 font-semibold space-y-2'>
   <div className='flex items-center justify-between gap-x-8 text-[16px]'>
    {status === 'RELEASING' ? (
     <p className='text-gray-800 font-bold'>Ep {nextAiringEpisode} airing in {timeString}</p>
    ) : (
     <p className='capitalize'>{_.lowerCase(season)} {seasonYear}</p>
    )}
    {averageScore && (
     <>
      <span className='flex items-center gap-x-2'>
       {emoteFaces}
       <p>{averageScore}%</p>
      </span>
     </>
    )}
   </div>
   <p className='text-red-300 font-bold text-sm'>{studios}</p>
   <div className='flex items-start gap-x-2'>
    {format && (
     <p>{format === 'TV' ? 'TV Show' : format}</p>
    )}
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
 nextAiringEpisode: PropTypes.number,
 season: PropTypes.string,
 seasonYear: PropTypes.number,
 status: PropTypes.string,
 timeUntilAiring: PropTypes.number,
 averageScore: PropTypes.number,
 studios: PropTypes.string,
 format: PropTypes.string,
 totalEpisodes: PropTypes.number,
 genres: PropTypes.array,
}