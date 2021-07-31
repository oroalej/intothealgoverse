import {NavLink} from "react-router-dom";
import tw from 'twin.macro'
import {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const TheHeader = () => {
  const {background, text} = useContext(ThemeContext);

  return (
    <nav tw="fixed w-full z-50" className={[background, text]}>
      <div tw="container">
        <div tw="relative h-14 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start text-gray-100">
          <NavList>
            <NavItem to="/" exact>Links</NavItem>
            {/*<NavItem to="/ecosystem">Ecosystem</NavItem>*/}
            <NavItem to="/dapps">DApps</NavItem>
            <NavItem to="/community-projects">
              <span tw="hidden sm:block mr-1">Community</span>
              <span tw="block sm:hidden mr-1">Comm</span> Projects
            </NavItem>
            {/*<NavItem to="/about">About</NavItem>*/}
          </NavList>
        </div>
      </div>
    </nav>
  )
}

const NavItem = ({to, children, ...attributes}) => (
  <NavLink {...attributes} to={to} activeClassName="border-gray-300"
           tw="hover:border-gray-300 inline-flex items-center border-b-3 border-solid font-medium transition-colors" className="border-transparent">
    {children}
  </NavLink>
)

const NavList = tw.div`flex space-x-8 w-full px-4 sm:pl-12 h-full`

export default TheHeader

