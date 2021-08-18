import DefaultLayout from "../../Layouts/DefaultLayout";
import TheBanner from "../../Components/TheBanner";
import tw from "twin.macro";
import DataJson from "../../Data/Community.json";
import Card from "../../Components/Card";
import ProjectList, {ProjectCardSkeleton} from "../../Components/Project";
import {camelCase} from "lodash"
import React, {useEffect, useState} from "react";
import TheSearch from "../../Components/TheSearch";
import ThemeData from "../../Data/Themes";
import Skeleton from "../../Components/Skeleton";
import TheDonate from "../../Components/TheDonate";

const CommunityIndex = () => {
  const [data, setData] = useState(DataJson)
  const [isLoading, setIsLoading] = useState(true);

  const originalData = DataJson.map(dapp => Object.assign({}, dapp))

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
    window.scroll({top: 0, left: 0, behavior: 'smooth'})

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, []);

  return (
    <DefaultLayout theme={ThemeData.community}>
      <TheBanner/>
      <TheSearch onClick={ChangeSearchInput} placeholder="Search for community projects" isLoading={isLoading}/>

      <div css={tw`container my-16 min-h-96`}>
        <div tw="relative space-y-5">
          {isLoading ? (
            <div tw="relative">
              <Card.Title>
                <Skeleton className={['w-20 h-5', ThemeData.community.background]}/>
              </Card.Title>

              <div tw="grid grid-cols-1 xl:grid-cols-2 gap-2.5">
                <ProjectCardSkeleton/>
              </div>
            </div>
          ) : data.map(dapp => (
            <div tw="relative" key={camelCase(dapp.title)}>
              <Card.Title>{dapp.title}</Card.Title>
              <ProjectList list={dapp.list}/>
            </div>
          ))
          }
        </div>
      </div>

      <TheDonate backgroundColor={ThemeData.community.background}/>
    </DefaultLayout>
  )
}

export default CommunityIndex;
