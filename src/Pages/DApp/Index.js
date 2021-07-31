import React, {useEffect, useState} from "react";
import tw from 'twin.macro'
import DefaultLayout from "../../Layouts/DefaultLayout";
import TheBanner from "../../Components/TheBanner";
import TheSearch from "../../Components/TheSearch";
import Card from "../../Components/Card";
import ProjectList, {ProjectCardSkeleton} from "../../Components/Project";
import {camelCase} from "lodash"
import DataJson from "../../Data/Dapps.json";
import ThemeData from "../../Data/Themes";
import Skeleton from "../../Components/Skeleton";

const DappIndex = () => {
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
    <DefaultLayout theme={ThemeData.dapp}>
      <TheBanner/>
      <TheSearch onClick={ChangeSearchInput} placeholder="Search for dapps" isLoading={isLoading}/>

      <div css={tw`container mx-auto my-16 min-h-96`}>
        <div tw="mx-4 sm:mx-12">
          <div tw="relative space-y-5">
            {isLoading ? (
              <div tw="relative">
                <Card.Title>
                  <Skeleton className={['w-20 h-5', ThemeData.dapp.background]}/>
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
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default DappIndex;
