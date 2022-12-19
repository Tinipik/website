import React from 'react'

interface Props {
  title: string;
  children?: React.ReactNode;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="container flex items-center justify-center mt-6 md:mb-12">
      <h1 className="font-bold text-white text-5xl md:text-7xl">{title}</h1>
    </div>
  ) 
}

export default PageTitle;