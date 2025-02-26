import { gql } from "@apollo/client";

export const INITIAL_ANIME = gql`
  query($season:MediaSeason, $seasonYear:Int, $nextSeason:MediaSeason, $nextYear:Int) {
  trending: Page(page:1, perPage: 6) { #trending now
   media(sort:TRENDING_DESC, type:ANIME, isAdult:false) {
    ...media
   }
  }
  season: Page(page:1, perPage:6) { #popular this season
   media(season:$season,seasonYear:$seasonYear,sort:POPULARITY_DESC,type:ANIME, isAdult:false) {
   ...media
   }
  }
  nextSeason: Page(page:1, perPage:6) { #upcoming next season
   media(season:$nextSeason,seasonYear:$nextYear,sort:POPULARITY_DESC, type:ANIME, isAdult:false){
    ...media
   }
  }
  popular: Page(page:1, perPage:6) { #all time popular
   media(sort:POPULARITY_DESC, type:ANIME, isAdult:false) {
   ...media
   }
  }
  top: Page(page:1, perPage:10) { # top100
   media(sort:SCORE_DESC, type:ANIME, isAdult:false) {
   ...media
   }
  }
 }

  fragment media on Media {
    id 
    title {
      userPreferred
    }
    coverImage {
      extraLarge 
      large 
      color
    }
    startDate {
      year 
      month 
      day
    }
    endDate {
      year 
      month 
      day
    }
    bannerImage 
    season 
    seasonYear 
    description 
    type 
    format 
    status (version:2)
    episodes 
    duration 
    chapters 
    volumes 
    genres 
    isAdult 
    averageScore 
    popularity 
    mediaListEntry {
      id 
      status
    }
    nextAiringEpisode {
      airingAt 
      timeUntilAiring 
      episode
    }
    studios (isMain:true) {
      edges {
        isMain 
        node {
          id 
          name
        }
      }
    }
  }
`