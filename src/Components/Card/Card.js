import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faReddit, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Card = ({children}) => (
  <div tw="box-border block relative rounded-md bg-white border border-solid border-gray-100 shadow-md p-4 lg:p-5">
    {children}
  </div>
)

const CardTitle = tw.h4`font-medium text-lg mb-1 text-gray-700 uppercase`;

const CardBody = tw.div`flex flex-col sm:flex-row sm:justify-between items-center space-y-3 sm:space-y-0`;

const CardButton = ({link, children, text}) => (
  <a href={link} rel="noreferrer" target="_blank"
     tw="inline-flex justify-center items-center text-sm px-2 py-1 border border-solid border-gray-300 rounded hover:bg-gray-50">
    {children}
    <span tw="ml-1 leading-normal capitalize text-xs">{text}</span>
  </a>
)

const CardActions = ({item}) => (
  <div tw="flex flex-row flex-wrap justify-start items-center gap-2 w-full sm:w-auto">
    {item.reddit && <CardButton link={item.reddit} text="Reddit">
      <FontAwesomeIcon icon={faReddit}/>
    </CardButton>}

    {item.telegram && <CardButton link={item.telegram} text="Telegram">
      <FontAwesomeIcon icon={faTelegram}/>
    </CardButton>}

    {item.discord && <CardButton link={item.discord} text="Discord">
      <FontAwesomeIcon icon={faDiscord}/>
    </CardButton>}

    {item.twitter && <CardButton link={item.twitter} text="Twitter">
      <FontAwesomeIcon icon={faTwitter}/>
    </CardButton>}

    {item.github && <CardButton link={item.github} text="Github">
      <FontAwesomeIcon icon={faGithub}/>
    </CardButton>}
  </div>
)

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Button = CardButton;
Card.Actions = CardActions;

export default Card;
export {
  CardTitle,
  CardBody,
  CardButton,
  CardActions
}
