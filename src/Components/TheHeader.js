import {NavLink} from "react-router-dom";
import tw from 'twin.macro'

const TheHeader = () => (
  <nav tw="fixed w-full z-50 bg-gray-900">
    <div tw="container">
      <div tw="relative h-14 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start text-gray-400">
        <NavList>
          <NavItem to="/">Links</NavItem>
          <NavItem to="/dapps">DApps</NavItem>
          <NavItem to="/community-projects">
            <span tw="hidden sm:block mr-1">Community</span>
            <span tw="block sm:hidden mr-1">Comm</span> Projects
          </NavItem>
        </NavList>
      </div>
    </div>
  </nav>
)

const NavItem = ({to, children}) => (
  <NavLink exact to={to} activeClassName="border-gray-300 text-gray-100"
           tw="hover:border-gray-300 hover:text-gray-300 inline-flex items-center border-b-3 border-solid font-medium transition-colors" className="border-transparent">
    {children}
  </NavLink>
)

const NavList = tw.div`flex justify-start space-x-8 w-full px-4 sm:pl-12 h-full`

export default TheHeader

