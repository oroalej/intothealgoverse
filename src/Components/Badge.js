import tw, {styled} from "twin.macro";

const colors = {
  default: tw`bg-gray-100 text-gray-700`,
  success: tw`bg-green-100 text-green-800`,
  warning: tw`bg-yellow-100 text-yellow-700`
}

const Badge = styled.span(({color = 'default'}) => [
  colors[color],
  tw`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize`,
]);

export default Badge;
