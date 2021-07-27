import DefaultLayout from "../../Layouts/DefaultLayout";
import TheBanner from "../../Components/TheBanner";
import tw from 'twin.macro'
import Data from "../../Data/Dapps.json";
import Card from "../../Components/Card/Card";
import ProjectList from "../../Components/Project";

const DappIndex = () => (
  <DefaultLayout>
    <TheBanner/>

    {/*<div className="w-full -mt-9">*/}
    {/*  <label htmlFor="company-website" className="hidden">Search</label>*/}
    {/*  <div className="mt-1 relative w-1/2  mx-auto">*/}
    {/*    <div className="absolute inset-y-0 left-0 flex justify-center items-center pointer-events-none w-16">*/}
    {/*      <SearchIcon class="h-5 w-5 text-gray-400"/>*/}
    {/*    </div>*/}

    {/*    <input type="text" name="company-website" id="company-website"*/}
    {/*           className="focus:ring-0 focus:outline-none outline-none block w-full px-6 py-5 pl-16 border-gray-300 rounded-md shadow-md"*/}
    {/*           placeholder="Search for dapps"/>*/}
    {/*  </div>*/}
    {/*</div>*/}

    <div css={tw`container mx-auto my-10`}>
      <div tw="mx-4 sm:mx-12">

        <div tw="relative space-y-5">
          {
            Data.map(dapp => (
              <div tw="relative">
                <Card.Title>{dapp.title}</Card.Title>
                <ProjectList list={dapp.list}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </DefaultLayout>
)

export default DappIndex;
