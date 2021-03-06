import Card from "./Card";
import Badge from "./Badge";
import tw from 'twin.macro'
import {camelCase, random} from "lodash"
import {useContext, useEffect, useState} from "react";
import ThemeContext from "../Context/ThemeContext";
import Skeleton from "./Skeleton";

const ProjectList = ({list}) => (
  <div css={tw`grid grid-cols-1 xl:grid-cols-2 gap-2.5`}>
    {list.map(item => (
      <ProjectCard item={item} key={camelCase(item.name)}/>
    ))}
  </div>
)

const ProjectCard = ({item}) => {
  const [isLoading, setIsLoading] = useState(true);

  const {background} = useContext(ThemeContext);

  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'})

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, random(300, 1000))

    return () => clearTimeout(timer)
  }, []);

  const renderBadgeElement = () => {
    if (item.status === undefined)
      return null
    else if (item.status === 'live')
      return <Badge color="success">Live</Badge>
    else if (item.status === 'test')
      return <Badge color="warning">Testing</Badge>
    else
      return <Badge>{item.status}</Badge>
  }

  const renderTitleElement = () => {
    if (item.site)
      return (
        <a href={item.site} rel="noreferrer" target="_blank"
           tw="text-lg leading-snug hover:underline text-green-700 whitespace-nowrap sm:flex-1 capitalize">{item.name}
        </a>
      )

    return <p tw="text-lg leading-snug text-green-900 whitespace-nowrap sm:flex-1 capitalize">{item.name}</p>
  }

  return (
    <Card>
      <Card.Body>
        <div tw="flex flex-row justify-start items-center gap-2">

          {isLoading ? <span tw="w-16 h-5 rounded transform animate-pulse bg-opacity-30" className={background}/> :
            <>
              {renderTitleElement()}
              {renderBadgeElement()}
            </>
          }

        </div>
        {isLoading ?
          <div tw="flex flex-row flex-wrap justify-start items-center gap-2 w-full sm:w-auto"
               style={{paddingTop: '3px', paddingBottom: '3px'}}>
            <span tw="w-16 h-5 rounded transform animate-pulse bg-opacity-30" className={background}/>
          </div> : item.actions && (<Card.Actions item={item.actions}/>)
        }

      </Card.Body>
    </Card>
  )
}
const ProjectCardSkeleton = () => {
  const {background} = useContext(ThemeContext);

  return (
    <Card>
      <Card.Body>
        <div tw="flex flex-row justify-start items-center gap-2">
          <Skeleton className={['w-48 h-6.5', background]}/>
          <Skeleton className={['w-16 h-5', background]}/>
        </div>

        <div tw="flex flex-row flex-wrap justify-start items-center gap-2 w-full sm:w-auto">
          <Skeleton className={['w-16 h-5', background]}/>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectList;
export {
  ProjectCard,
  ProjectCardSkeleton
}
