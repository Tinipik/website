import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'

export default function HeroArticle({
  title,
  publishDate,
  description,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/articles/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={publishDate} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{description}</p>
        </div>
      </div>
    </section>
  )
}
