import DefaultLayout from "../Layouts/DefaultLayout";
import tw from "twin.macro";
import Themes from "../Data/Themes";
import ContributorList from "../Components/ContributorList";
import DonateTitle from "../Components/DonateTitle";

const About = () => {
  return (
    <DefaultLayout theme={Themes.about}>

      <div css={tw`container my-16 text-center space-y-12`}>
        <div tw="relative">
          <h1 tw="text-2xl uppercase text-gray-700">About</h1>

          <div tw="font-light lg:w-2/3 mx-auto my-4 text-base text-center">
            <p className="mb-1">Intothealgoverse is an unofficial curation of tools, projects, and resources that are
              relevant to the <a
                href="https://www.algorand.com/" target="_blank" rel="noreferrer"
                tw="text-blue-600 hover:text-blue-700">Algorand</a> platform. It aims to help newcomers explore the
              Algorand ecosystem easily and to assist in making projects known to the community.
            </p>

            <p className="mb-1">For any feedback, bug finds, suggestions, and collaboration inquiries, please contact me
              in discord
              <span tw="font-bold mx-1">@oroalej#3957</span>
              or in reddit
              <span tw="font-bold mx-1">u/oroalej</span>
            </p>
          </div>
        </div>

        <div tw="relative">
          <h2 tw="mb-5 text-2xl uppercase text-gray-700">Contributors</h2>

          <DonateTitle />
          <ContributorList/>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default About;
