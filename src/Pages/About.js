import DefaultLayout from "../Layouts/DefaultLayout";
import tw from "twin.macro";
import Themes from "../Data/Themes";
import oroalej from "../Images/oroalej.jfif"
import {useState} from "react";
import {DuplicateIcon} from "@heroicons/react/solid";

const About = () => {
  const [isCopied, setIsCopied] = useState(false)
  let timer = null;

  const copyAddress = () => {
    if (timer) {
      clearTimeout(timer)
    }

    const input = document.createElement("textarea");
    input.value = 'JD5DBO5BGVKQKFX7MQ7VIPBOQAEJB4MYGMUOJEDWSTUFWKOB7OAWMEQRPM';
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    input.remove();

    setIsCopied(true);

    timer = setTimeout(() => (
      setIsCopied(false)
    ), 2500)
  }

  return (
    <DefaultLayout theme={Themes.about}>

      <div css={tw`container my-16 text-center space-y-12`}>
        <div tw="relative">
          <h1 tw="text-2xl uppercase text-gray-700">About</h1>

          <div tw="font-light lg:w-2/3 mx-auto my-4 text-base text-left">
            <p className="mb-1">Intothealgoverse is an unofficial curation of tools, projects, and resources that are
              relevant to the <a
                href="https://www.algorand.com/" target="_blank" rel="noreferrer"
                tw="text-blue-600 hover:text-blue-700">Algorand</a> platform. It aims to help newcomers explore the
              Algorand ecosystem easily and to assist in making projects known to the community.
            </p>

            <p className="mb-1">For any feedback, bug finds, suggestions, and collaboration inquiries, please contact me in discord
              <span tw="font-bold mx-1">@oroalej#3957</span>
            </p>
          </div>
        </div>

        <div tw="relative space-y-5">
          <h1 tw="text-2xl uppercase text-gray-700">Contributors</h1>

          <p className="font-light text-base">Any amount of ALGO or YLDY donations are welcome</p>

          <div tw="flex flex-row gap-4 justify-center">
            <div onClick={copyAddress}
                 tw="rounded-3xl text-gray-700 p-5 bg-white shadow-lg relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <h3 tw="font-bold text-lg">oroalej</h3>

              <div tw="w-48 h-48">
                <img src={oroalej} alt="oroalej" tw="w-full object-contain"/>
              </div>

              <p tw="text-sm text-gray-800 capitalize -mt-2 inline-flex flex-row items-center">
                <DuplicateIcon tw="h-4.5 w-4.5"/>
                <span tw="mx-1 block">Copy Address</span>
              </p>

              {isCopied && <p tw="font-bold text-sm text-gray-900 uppercase mt-4">Copied</p>}
            </div>
          </div>
        </div>
      </div>

    </DefaultLayout>
  )
}

export default About;
