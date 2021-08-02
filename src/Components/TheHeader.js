import {Link, NavLink} from "react-router-dom";
import tw from 'twin.macro'
import {useContext, useState} from "react";
import ThemeContext from "../Context/ThemeContext";
import {MenuAlt3Icon} from "@heroicons/react/outline";

const TheHeader = () => {
  const {background, text} = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => {
      return !prev
    });
  }

  return (
    <>
      <nav tw="fixed inset-x-0 z-50 top-0" className={[background, text]}>
        <div tw="container text-gray-100">
          <div
            tw="relative h-14 flex-1 items-center justify-center sm:items-stretch sm:justify-start hidden sm:flex overflow-hidden">
            <NavList>
              <NavItem to="/" exact>Links</NavItem>
              <NavItem to="/dapps">DApps</NavItem>
              <NavItem to="/community-projects">
                <span tw="hidden sm:block mr-1">Community</span>
                <span tw="block sm:hidden mr-1">Comm</span> Projects
              </NavItem>
              <NavItem to="/about">About</NavItem>
            </NavList>
          </div>

          <div tw="relative h-14 flex-1 flex items-center justify-between sm:hidden">
            <Link to="/" tw="text-gray-200">intothealgoverse</Link>
            <div>
              <span tw="p-2 absolute -right-2 top-1" onClick={toggleMenu}>
                <MenuAlt3Icon tw="h-8 w-8"/>
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div css={[tw`fixed top-14 inset-x-0 bottom-0 h-full sm:hidden z-40`, isOpen && tw`block`]}
           className={[background, text, 'hidden']}>
        <NavList>
          <NavItem to="/" exact>Links</NavItem>
          <NavItem to="/dapps">DApps</NavItem>
          <NavItem to="/community-projects">
            <span tw="hidden sm:block mr-1">Community</span>
            <span tw="block sm:hidden mr-1">Comm</span> Projects
          </NavItem>
          <NavItem to="/about">About</NavItem>
        </NavList>
      </div>
    </>
  )
}

const NavItem = ({to, children, ...attributes}) => (
  <NavLink {...attributes} to={to} activeClassName="border-gray-300"
           tw="hover:border-gray-300 inline-flex sm:flex-row items-center border-b-3 border-solid font-medium transition-colors"
           className="border-transparent">
    {children}
  </NavLink>
)

const NavList = tw.div`flex flex-col flex-1 w-full h-full items-start px-6 justify-center space-y-5 z-10 -mt-20 sm:px-0 sm:mt-0 sm:justify-start sm:space-y-0 sm:flex-row sm:space-x-8 sm:items-center`

export default TheHeader

