import React from 'react'

interface Props {
  imgUrl: string;
  title: string;
  description: string;
  downloadUrl: string;
  children?: React.ReactNode;
}

const BlogCard: React.FC<Props> = ({ imgUrl, title, description, downloadUrl }) => {
  return (
    <div className="md:w-[calc(50%-.5rem)] mt-4 p-6 md:p-7 bg-glassmorphism rounded-3xl flex flex-col items-center">
      <img src={imgUrl} alt={title} className="object-cover w-full h-auto rounded-2xl"/>
      <div className="mt-4 w-full">
        <h4 className="text-2xl md:text-4xl font-bold font-space mb-2">{title}</h4>
        <p className="mb-6">{description}</p>
      </div>
    </div>
  ) 
}

export default BlogCard;