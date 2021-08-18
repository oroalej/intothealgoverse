import tw from "twin.macro";
import ContributorList from "./ContributorList";
import DonateTitle from "./DonateTitle";

const TheDonate = ({backgroundColor}) => {
  return (
    <div css={[tw`bg-opacity-15`]} className={backgroundColor}>
      <div css={tw`py-16 text-center container mx-auto`}>
        <DonateTitle />
        <ContributorList/>
      </div>
    </div>
  )
}

export default TheDonate;
