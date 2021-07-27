import TheHeader from "../Components/TheHeader";
import TheFooter from "../Components/TheFooter";
import tw from 'twin.macro'

const DefaultLayout = ({children}) => (
  <div>
    <TheHeader />
    <main css={tw`bg-gray-50 h-full flex flex-col`} style={{minHeight: 'calc(100vh - 42px)'}}>
      {children}
    </main>
    <TheFooter />
  </div>
)

export default DefaultLayout
