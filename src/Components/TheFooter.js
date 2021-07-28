import tw from 'twin.macro'
import {HeartIcon} from "@heroicons/react/solid";

const TheFooter = () => (
  <div css={tw`flex items-center w-full bg-gray-800 px-5 py-3.5 text-sm`}>
    <div tw="container mx-auto text-gray-300 sm:px-12 flex flex-row justify-center sm:justify-between items-center">
      <div tw="leading-none flex flex-row items-center gap-1">
        <span>Designed with</span>
        <HeartIcon className="w-4 h-4 text-red-500 animate-pulse"/>
        <span>by</span>
        <span tw="hover:text-white hover:underline transition-colors">Alexander Oro</span>
      </div>
    </div>
  </div>
)

export default TheFooter
