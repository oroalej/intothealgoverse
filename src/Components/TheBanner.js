import tw from 'twin.macro'

const TheBanner = () => (
  <div>
    <div css={tw`bg-gray-900 flex-col w-full flex justify-center items-center`} style={{height: '400px'}}>
      <div tw="text-center space-y-5">
        <p tw="text-gray-200 block text-2xl sm:text-5xl uppercase">Into-the-algoverse</p>
        <p tw="text-gray-200 mt-1 text-xl">Your portal to the
          <a href="https://www.algorand.com/" target="_blank" tw="text-green-600 hover:text-green-700 mx-1">Algorand</a>
          universe
        </p>
      </div>
    </div>
  </div>
)

export default TheBanner;
