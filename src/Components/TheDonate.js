import tw from "twin.macro";
import ContributorList from "./ContributorList";
import DonateTitle from "./DonateTitle";

const TheDonate = ({backgroundColor}) => {
  return (
    <div css={[tw`bg-opacity-15`]} className={backgroundColor}>
      <div css={tw`pt-16 pb-5 text-center container mx-auto`}>
        <DonateTitle />
        <ContributorList/>
      </div>
    </div>
  )
}

export default TheDonate;
