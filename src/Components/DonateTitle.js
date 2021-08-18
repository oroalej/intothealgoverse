import tw from "twin.macro";

const DonateTitle = () => (
  <>
    <p css={tw`mb-0 leading-normal text-base md:text-lg text-gray-700 font-light`}>Like our content/find our content useful?</p>
    <p tw="mb-8 leading-normal text-base md:text-lg text-gray-700 font-light">
      Help us sustain this page by donating <span className="font-medium">ALGO / YLDY</span>
    </p>
  </>
)

export default DonateTitle;
