import tw from 'twin.macro'
import DefaultLayout from "../../Layouts/DefaultLayout";
import TheBanner from "../../Components/TheBanner";
import TheSearch from "../../Components/TheSearch";
import Card from "../../Components/Card";
import ProjectList, {ProjectCardSkeleton} from "../../Components/Project";
import {camelCase} from "lodash"
import {useEffect, useState} from "react";
import DataJson from "../../Data/Dapps.json";

const DappIndex = () => {
  const [data, setData] = useState(DataJson)
  const [isLoading, setIsLoading] = useState(true);

  const originalData = DataJson.map(dapp => Object.assign({}, dapp))
  const loadingCardElements = [];

  const ChangeSearchInput = (e) => {
    const input = e.target.value;

    if (input.length === 0)
      setData(DataJson)

    if (input.length <= 2)
      return;

    let filteredData = originalData.map(dapp => {
      dapp.list = dapp.list.filter(({name}) => name.toLowerCase().search(input.toLowerCase()) !== -1)

      return dapp;
    }).filter(({list}) => list.length > 0)

    setData(filteredData)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, []);

  for (let i = 0; i < 3; i++) {
    loadingCardElements.push(<ProjectCardSkeleton key={`loading-${i}`}/>)
  }

  return (
    <DefaultLayout>
      <TheBanner/>
      <TheSearch onClick={ChangeSearchInput} placeholder="Search for dapps" isLoading={isLoading}/>

      <div css={tw`container mx-auto my-16 min-h-96`}>
        <div tw="mx-4 sm:mx-12">
          <div tw="relative space-y-5">
            {isLoading ? (
              <div tw="relative">
                <Card.Title>
                  <span tw="inline-block w-20 h-5 bg-gray-200 rounded transform animate-pulse"/>
                </Card.Title>

                <div tw="grid grid-cols-1 xl:grid-cols-2 gap-2.5">
                  {loadingCardElements}
                </div>
              </div>
            ) : data.map(dapp => (
              <div tw="relative" key={camelCase(dapp.title)}>
                <Card.Title>{dapp.title}</Card.Title>
                <ProjectList list={dapp.list}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default DappIndex;
