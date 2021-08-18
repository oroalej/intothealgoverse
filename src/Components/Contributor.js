import {useState} from "react";
import tw from "twin.macro";
import {DuplicateIcon} from "@heroicons/react/solid";

const Contributor = ({address, name, qr}) => {
  const [isCopied, setIsCopied] = useState(false)
  let timer = null;

  const copyAddress = () => {
    if (timer) {
      clearTimeout(timer)
    }

    const input = document.createElement("textarea");
    input.value = address;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    input.remove();

    setIsCopied(true);

    timer = setTimeout(() => (
      setIsCopied(false)
    ), 2500)
  }

  return (
    <div onClick={copyAddress}
         css={tw`rounded-3xl text-gray-700 p-5 bg-white shadow-lg relative cursor-pointer transform hover:scale-105 transition-transform duration-200`}>
      <h3 tw="font-bold text-lg">{name}</h3>

      <div tw="w-48 h-48">
        <img src={qr} alt={name} tw="w-full object-contain"/>
      </div>

      <p tw="text-sm text-gray-800 capitalize -mt-2 inline-flex flex-row items-center">
        <DuplicateIcon tw="h-4.5 w-4.5"/>
        <span tw="mx-1 block">Copy Address</span>
      </p>

      {isCopied && <p tw="font-bold text-sm text-gray-900 uppercase mt-4">Copied</p>}
    </div>
  )
}

export default Contributor;
