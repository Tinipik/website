import React from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

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
    <Link href={`/blog/${slug}`} className="md:w-[calc(50%-.5rem)] h-[500px] mt-4 p-6 md:p-7 bg-glass hover:bg-glass-hover flex flex-col items-center">
      <img src={picture.url} alt={picture.title} className="object-cover w-full h-[260px] rounded-2xl"/>
      <div className="mt-4 w-full">
        <p className="text-sm">{format(new Date(date), 'PP', {locale: fr})}</p>
        <h4 className="text-2xl md:text-4xl font-bold font-space mb-2">{title}</h4>
        <p className="mb-6">{description}</p>
      </div>
    </Link>
  ) 
}

export default BlogPostCard;