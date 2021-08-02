import tw from 'twin.macro'
import ThemeContext from "../Context/ThemeContext";
import {useContext} from "react";

const TheBanner = () => {
  const {background, text} = useContext(ThemeContext);

  return (
    <div>
      <div css={tw`flex-col w-full flex justify-center items-center transition-colors duration-1000 h-60 sm:h-86`} className={[background, text]}>
        <div tw="text-center space-y-1 md:space-y-4 sm:-mt-14">
          <p tw="block text-xl sm:text-3xl md:text-5xl uppercase">Into-the-algoverse</p>
          <p tw="text-base md:text-xl leading-normal font-light">Your portal to the
            <a href="https://www.algorand.com/" target="_blank" rel="noreferrer" tw="underline font-normal mx-1">Algorand</a>
            universe
          </p>
        </div>
      </div>
    </div>
  )
}

export default TheBanner;
