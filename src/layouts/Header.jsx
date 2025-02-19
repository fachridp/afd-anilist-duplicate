import { Link, Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "react-use";

// Import logos/icons
import aniListLogo from "../assets/icons/icon-anilist.svg";

// Import reuseable components
import HeaderNavItem from "../components/reuseable/HeaderNavItem";

// Import components
import MobileNavButton from "../components/MobileNavButton";
import NavSearchDropdown from "../components/NavSearchDropdown";

// Import RTK features
import { setInnerWidth } from "../features/innerWidthManager";

export default function Header() {
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);
  const [previousScrollY, setPreviousScrollY] = useState(window.scrollY);

  const headerRef = useRef(null);

  const handleResizeBrowser = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleVerticalScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > previousScrollY) {
      headerRef.current.classList.add('lg:-top-full');
      headerRef.current.classList.remove('lg:top-0');
    } else {
      headerRef.current.classList.remove('lg:-top-full');
      headerRef.current.classList.add('lg:top-0');
    }

    setPreviousScrollY(currentScrollY);
  }, [previousScrollY])

  useEffect(() => {
    window.addEventListener("resize", handleResizeBrowser);
    window.addEventListener('scroll', handleVerticalScroll);

    return () => {
      window.removeEventListener('resize', handleResizeBrowser);
      window.removeEventListener('scroll', handleVerticalScroll);
    }
  }, [handleResizeBrowser, handleVerticalScroll]);

  useDebounce(
    () => {
      dispatch(setInnerWidth(width))
    },
    500,
    [width]
  );
  return (
    <>
      <header ref={headerRef} className="h-[4.25rem] bg-[#2b2d42] place-content-center relative hidden lg:block lg:z-20 lg:sticky lg:top-0 lg:left-0 duration-[250ms] ease-in-out">
        <div className="flex max-w-[71.25rem] items-center text-[#bcbedc] font-semibold text-sm">
          <Link to="/" className="ml-30 mr-80">
            <img className="size-[3.125rem]" src={aniListLogo} alt="AniList Logo" />
          </Link>

          <ul className="flex gap-x-8">
            <li>
              <div className="group/search">
                <HeaderNavItem
                  linkTo="search/anime"
                  innerText="Search"
                />

                <NavSearchDropdown />
              </div>
            </li>

            <li>
              <HeaderNavItem
                linkTo="social"
                innerText="Social" />
            </li>

            <li>
              <HeaderNavItem
                linkTo="forum/overview"
                innerText="Forum" />
            </li>
          </ul>

          <div className="space-x-6 ml-[6.3rem]">
            <HeaderNavItem linkTo="login" innerText="Login" />
            <HeaderNavItem linkTo="signup" innerText="Sign Up" />
          </div>
        </div>
      </header>

      <MobileNavButton />
      <Outlet />
    </>
  )
}