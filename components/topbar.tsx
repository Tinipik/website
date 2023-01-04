import React from 'react'
import Logo from "./logo"
import Nav from "./nav"

interface Props {
  children?: React.ReactNode;
}

const TopBar: React.FC<Props> = () => {
  return (
    <div className="container flex flex-wrap items-start self-center">
      <a className="w-52 mb-4" href="/"><Logo className="w-full"/></a>
      <div className="flex-grow"/>
      <Nav variant="topbar"/>
    </div>
  ) 
}

export default TopBar;