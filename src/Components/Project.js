import Card from "./Card/Card";
import Badge from "./Badge";
import tw from 'twin.macro'

const ProjectList = ({list}) => (
  <div css={tw`grid grid-cols-1 xl:grid-cols-2 gap-2.5`}>
    {
      list.map(item => (
        <ProjectCard item={item}/>
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

export default ProjectList;
export {
  ProjectCard
}
