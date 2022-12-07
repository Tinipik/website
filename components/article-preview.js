import Link from 'next/link'
import Avatar from './avatar'
import DateComponent from './date'

export default function ArticlePreview({
  title,
  publishDate,
  description,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/articles/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={publishDate} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
