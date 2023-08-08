import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiHtml5, SiWindows, SiLinux, SiNintendoswitch } from "react-icons/si";
import { RiFinderLine, RiPlaystationFill, RiXboxFill } from "react-icons/ri";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

interface Props {
  title: string;
  slug: string;
  description: string;
  date: Date;
  picture: {
    title: string;
    url: string;
  }
  platforms: Array<"html5"|"windows"|"linux"|"macos"|"android"|"ios"|"switch"|"ps"|"xbox">;
  link: string;
  children?: React.ReactNode;
}

const GameCard: React.FC<Props> = ({ title, slug, description, date, picture, platforms, link }) => {
  return (
    <div className="mt-4 p-6 md:p-7 bg-glass flex flex-col md:flex-row items-center">
      <Image src={picture.url} alt={picture.title} width={315} height={250} className="md:w-1/3 object-cover w-full h-auto rounded-2xl"/>
      <div className="mt-4 md:mt-0 md:w-2/3 md:ml-12 w-full">
        <h4 className="text-2xl md:text-4xl font-bold font-space mb-2 md:mb-4">{title}</h4>
        <p className="mb-6">{description}</p>
        <div className="container flex flex-wrap items-start self-center">
          <Link className="button hover:button-hover mb-6 mr-4" href={link} target="_blank">Jouer</Link>
          <div className="flex items-center justify-between flex-wrap text-stone-900 opacity-40 mt-4">
            {platforms.map(p => {
              if (p == 'html5') return <SiHtml5 key={`${slug}-html5`} size={20} className="mr-1" title="HTML5"/>
              if (p == 'windows') return <SiWindows key={`${slug}-win`} size={20} className="mr-1" title="Windows"/>
              if (p == 'linux') return <SiLinux key={`${slug}-linux`} size={24} className="mr-1" title="Linux"/>
              if (p == 'macos') return <RiFinderLine key={`${slug}-macos`} size={26} className="mr-1" title="macOS"/>
              if (p == 'android') return <AiFillAndroid key={`${slug}-android`} size={26} className="mr-[0.1rem]" title="Android"/>
              if (p == 'ios') return <AiFillApple key={`${slug}-ios`} size={26} className="mr-1" title="iOS"/>
              if (p == 'switch') return <SiNintendoswitch key={`${slug}-switch`} size={20} className="mr-1" title="Nintendo Switch"/>
              if (p == 'ps') return <RiPlaystationFill key={`${slug}-ps`} size={26} className="mr-1" title="PlayStation"/>
              if (p == 'xbox') return <RiXboxFill key={`${slug}-xbox`} size={26} className="mr-1" title="Xbox"/>
            })}
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default GameCard;