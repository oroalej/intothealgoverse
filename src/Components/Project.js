import Card from "./Card";
import Badge from "./Badge";
import tw from 'twin.macro'
import {camelCase} from "lodash"

const ProjectList = ({list}) => (
  <div css={tw`grid grid-cols-1 xl:grid-cols-2 gap-2.5`}>
    {
      list.map(item => (
        <ProjectCard item={item} key={camelCase(item.name)}/>
      ))
    }
  </div>
)

const ProjectCard = ({item}) => (
  <Card>
    <Card.Body>
      <div tw="flex flex-row justify-start items-center gap-2">
        <a href={item.site} rel="noreferrer" target="_blank"
           tw="text-lg leading-snug hover:underline text-green-700">{item.name}</a>
        {item.is_released ? <Badge color="success">Live</Badge> : <Badge>TBA</Badge>}
      </div>

      {item.actions && (<Card.Actions item={item.actions}/>)}
    </Card.Body>
  </Card>
)

const ProjectCardSkeleton = () => (
  <Card>
    <Card.Body>
      <div tw="flex flex-row justify-start items-center gap-2">
        <span className="w-48 h-6.5 bg-gray-200 rounded transform animate-pulse"/>
        <span className="w-16 h-6.5 bg-gray-200 rounded transform animate-pulse"/>
      </div>

      <div tw="flex flex-row flex-wrap justify-start items-center gap-2 w-full sm:w-auto">
        <span className="w-20 h-6.5 bg-gray-200 rounded transform animate-pulse"/>
        <span className="w-20 h-6.5 bg-gray-200 rounded transform animate-pulse"/>
      </div>
    </Card.Body>
  </Card>
)

export default ProjectList;
export {
  ProjectCard,
  ProjectCardSkeleton
}
