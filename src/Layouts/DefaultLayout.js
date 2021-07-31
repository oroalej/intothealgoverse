import TheHeader from "../Components/TheHeader";
import TheFooter from "../Components/TheFooter";
import tw from 'twin.macro'
import ThemeContext from "../Context/ThemeContext";
import ThemeData from "../Data/Themes";

const DefaultLayout = ({children, theme = ThemeData.default}) => {
  return (
    <ThemeContext.Provider value={theme}>
      <TheHeader/>
      <main css={tw`bg-gray-50 h-full flex flex-col`} style={{minHeight: 'calc(100vh - 42px)'}}>
        {children}
      </main>
      <TheFooter/>
    </ThemeContext.Provider>
  )
}

export default DefaultLayout
