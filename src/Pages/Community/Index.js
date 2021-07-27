import DefaultLayout from "../../Layouts/DefaultLayout";
import TheBanner from "../../Components/TheBanner";
import tw from "twin.macro";
import Data from "../../Data/Community.json";
import Card from "../../Components/Card/Card";
import ProjectList from "../../Components/Project";

const CommunityIndex = () => (
  <DefaultLayout>
    <TheBanner />

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

export default CommunityIndex;
