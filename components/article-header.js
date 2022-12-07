import Avatar from './avatar'
import DateComponent from './date'
import ArticleTitle from './article-title'

export default function ArticleHeader({ title, publishDate }) {
  return (
    <>
      <ArticleTitle>{title}</ArticleTitle>
      <div className="hidden md:block md:mb-12">
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={publishDate} />
        </div>
      </div>
    </>
  )
}
