import Contributor from "./Contributor";
import oroalejQr from "../Images/oroalej.jfif";
import tw from "twin.macro";

const ContributorList = () => {
  return (
    <div css={tw`flex flex-row gap-4 justify-center items-start`} style={{height: '21rem'}}>
      <Contributor qr={oroalejQr} name="oroalej" address="JD5DBO5BGVKQKFX7MQ7VIPBOQAEJB4MYGMUOJEDWSTUFWKOB7OAWMEQRPM"/>
    </div>
  )
}

export default ContributorList
