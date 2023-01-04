import React from 'react'

interface Props {
  title: string;
  slug: string;
  picture: {
    title: string;
    url: string;
  }
  description: string;
  date: string;
  children?: React.ReactNode;
}

const BlogPostCard: React.FC<Props> = ({ title, slug, picture, description, date }) => {
  return (
    <a href={`/blog/${slug}`} className="md:w-[calc(50%-.5rem)] mt-4 p-6 md:p-7 bg-glass hover:bg-glass-hover flex flex-col items-center">
      <img src={picture.url} alt={picture.title} className="object-cover w-full h-auto rounded-2xl"/>
      <div className="mt-4 w-full">
        <p className="text-sm">May 18 2022</p>
        <h4 className="text-2xl md:text-4xl font-bold font-space mb-2">{title}</h4>
        <p className="mb-6">{description}</p>
      </div>
    </a>
  ) 
}

export default BlogPostCard;