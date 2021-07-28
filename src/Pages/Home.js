import DefaultLayout from "../Layouts/DefaultLayout";
import TheBanner from "../Components/TheBanner";
import tw from 'twin.macro'
import Links from "../Data/Home.json";

const Home = () => (
  <DefaultLayout>
    <TheBanner/>

    <div css={tw`container mx-auto`}>
      <div tw="p-4 sm:my-16 sm:px-12">
        <div tw="relative transform">
          <h2 tw="font-medium text-lg sm:text-xl mb-5 text-gray-700">Links</h2>

          <div tw="flex flex-col flex-wrap px-0.5 space-y-4 items-start lg:h-176 xl:h-120">
            {Links.map((content, index) => (
              <div tw="w-full lg:w-1/2 xl:w-1/3 relative" key={index}>
                <h4 tw="font-medium text-base text-gray-700">{content.title}</h4>
                <div tw="flex flex-col items-start space-y-0.5 text-sm sm:text-base text-sm sm:text-base">
                  {content.list.map((item, index) => {
                    if (typeof item === 'string') {
                      return (
                        <div tw=" overflow-ellipsis overflow-hidden w-full" key={`item`+ index}>
                          <a href={item} target="_blank" rel="noreferrer"
                             tw="text-blue-500 hover:text-blue-600 font-bold">{item}</a>
                        </div>
                      )
                    }

                    return (
                      <div tw=" overflow-ellipsis overflow-hidden w-full" key={`item`+ index}>
                        <a href={item.link} target="_blank" rel="noreferrer"
                           css={[tw`text-blue-500 hover:text-blue-600`, item.is_official && tw`font-bold`]}>
                          {item.text ? item.text : item.link}
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
)

export default Home
