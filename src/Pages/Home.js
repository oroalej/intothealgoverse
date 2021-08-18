import DefaultLayout from "../Layouts/DefaultLayout";
import TheBanner from "../Components/TheBanner";
import tw from 'twin.macro'
import Links from "../Data/Home.json";
import React, {useEffect, useState} from "react";
import themeData from "../Data/Themes";
import Skeleton from "../Components/Skeleton";
import TheDonate from "../Components/TheDonate";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const defaultTheme = themeData.default;
  const loadingCardElements = [];

  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'})

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, []);

  for (let i = 0; i < 2; i++) {
    loadingCardElements.push(
      <div tw="w-full lg:w-1/2 xl:w-1/3 relative space-y-1 mb-5" key={`skeleton` + i}>
        <h4 tw="font-medium text-base text-gray-700">
          <Skeleton className={['w-20 h-4', defaultTheme.background]}/>
        </h4>

        <div tw="flex flex-col items-start space-y-1.5 text-sm sm:text-base text-sm sm:text-base">
          <Skeleton className={['w-11/12 h-4', defaultTheme.background]}/>
          <Skeleton className={['w-6/12 h-4', defaultTheme.background]}/>
          <Skeleton className={['w-9/12 h-4', defaultTheme.background]}/>
        </div>
      </div>
    )
  }

  return (
    <DefaultLayout>
      <TheBanner/>

      <div css={tw`container my-16`}>
        <div tw="relative">
          <h2 tw="font-medium text-lg sm:text-xl mb-5 text-gray-700">Links</h2>

          <div
            css={[tw`flex flex-wrap px-0.5 items-start lg:h-184 xl:h-120`, isLoading ? tw`flex-row` : tw`flex-col`]}>
            {isLoading ?
              loadingCardElements :
              Links.map((content, index) => (
                <div tw="w-full lg:w-1/2 xl:w-1/3 relative" key={`group`+index}>
                  <h4 tw="font-medium text-base text-gray-700">{content.title}</h4>
                  <div tw="flex flex-col items-start space-y-0.5 text-sm sm:text-base text-sm sm:text-base mb-5">
                    {content.list.map((item, index) => {
                      if (typeof item === 'string') {
                        return (
                          <div tw=" overflow-ellipsis overflow-hidden w-full" key={`item` + index}>
                            <a href={item} target="_blank" rel="noreferrer"
                               tw="text-blue-500 hover:text-blue-600 font-bold">{item}</a>
                          </div>
                        )
                      }

                      return (
                        <div tw=" overflow-ellipsis overflow-hidden w-full" key={`item` + index}>
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

      <TheDonate backgroundColor={defaultTheme.background} />
    </DefaultLayout>
  )
}

export default Home
