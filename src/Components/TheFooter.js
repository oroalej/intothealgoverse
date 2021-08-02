import tw from 'twin.macro'
import {HeartIcon} from "@heroicons/react/solid";
import {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const TheFooter = () => {
  const {background, text} = useContext(ThemeContext);

  return (
    <div css={tw`flex items-center w-full py-3.5 text-sm`} className={[background, text]}>
      <div tw="container flex flex-row justify-center sm:justify-between items-center">
        <div tw="leading-none flex flex-row items-center gap-1">
          <span>Designed with</span>
          <HeartIcon className="w-4 h-4 text-red-500 animate-pulse"/>
          <span>by</span>
          <span tw="hover:text-white hover:underline transition-colors">Alexander Oro</span>
        </div>
      </div>
    </div>
  )
}

export default TheFooter
