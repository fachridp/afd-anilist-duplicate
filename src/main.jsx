import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Provider } from 'react-redux'

import "./style/global.css"
import 'rc-slider/assets/index.css';

// Import RTK store
import store from './store/store.js'

import Header from './layouts/Header.jsx'
import Top100Manga from './pages/Top100Manga.jsx'
import TrendingManga from './pages/TrendingManga.jsx'
import TopManhwa from './pages/TopManhwa.jsx'

const BrowseFilterContainer = lazy(() => import('./layouts/BrowseFilterContainer.jsx'))

// Anime
const FiltersAnime = lazy(() => import("./layouts/FiltersAnime.jsx"));
const AnimeHome = lazy(() => import("./pages/AnimeHome.jsx"));
const SearchAnimeHome = lazy(() => import("./pages/SearchAnimeHome.jsx"));
const Top100Anime = lazy(() => import("./pages/Top100Anime.jsx"));
const TrendingAnime = lazy(() => import("./pages/TrendingAnime.jsx"));
const TopMovies = lazy(() => import("./pages/TopMovies.jsx"));

// Manga
const FiltersManga = lazy(() => import('./layouts/FiltersManga.jsx'));
const SearchMangaHome = lazy(() => import('./pages/SearchMangaHome.jsx'))
const SearchCharactersHome = lazy(() => import('./pages/SearchCharactersHome.jsx'));
const SearchStaffHome = lazy(() => import('./pages/SearchStaffHome.jsx'))
const SearchStudiosHome = lazy(() => import('./pages/SearchStudiosHome.jsx'))
const SearchUsersHome = lazy(() => import('./pages/SearchUsersHome.jsx'))
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Forgot = lazy(() => import("./pages/Forgot.jsx"));
const Reverify = lazy(() => import("./pages/Reverify.jsx"));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route element={<BrowseFilterContainer />}>
              <Route element={<FiltersAnime />}>
                <Route index element={<AnimeHome />} />
                <Route path='search/anime' element={<SearchAnimeHome />} />
                <Route path='search/anime/top-100' element={<Top100Anime />} />
                <Route path='search/anime/trending' element={<TrendingAnime />} />
                <Route path='search/anime/top-movies' element={<TopMovies />} />
              </Route>

              <Route element={<FiltersManga />}>
                <Route path='search/manga' element={<SearchMangaHome />} />
                <Route path='search/manga/top-100' element={<Top100Manga />} />
                <Route path='search/manga/trending' element={<TrendingManga />} />
                <Route path='search/manga/top-manhwa' element={<TopManhwa />} />
              </Route>

              <Route path='search/characters' element={<SearchCharactersHome />} />

              <Route path='search/staff' element={<SearchStaffHome />} />

              <Route path='search/studios' element={<SearchStudiosHome />} />

              <Route path='search/users' element={<SearchUsersHome />} />
            </Route>

            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgot' element={<Forgot />} />
            <Route path='reverify' element={<Reverify />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
