import tw from 'twin.macro'
import {SearchIcon} from "@heroicons/react/outline";

const TheSearch = ({placeholder, onChange, isLoading = false}) => {
  return (
    <div css={tw`container relative block`}>
      <div tw="absolute -top-9 left-4 right-4">
        <label htmlFor="company-website" tw="hidden">Search</label>
        <div tw="mt-1 relative lg:w-1/2 mx-auto">
          <div tw="absolute inset-y-0 left-0 flex justify-center items-center pointer-events-none w-16">
            <SearchIcon tw="h-5 w-5 text-gray-400"/>
          </div>

          <input type="text" name="company-website" id="company-website"
                 className="focus:ring-0 focus:outline-none outline-none block w-full px-6 py-5 pl-16 border-gray-300 rounded-md shadow-md bg-white"
                 placeholder={placeholder} onChange={onChange} disabled={isLoading}/>
        </div>
      </div>
    </div>
  )
}

export default TheSearch;
