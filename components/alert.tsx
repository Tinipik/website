import cn from 'classnames'

interface Props {
  preview: boolean;
  children?: React.ReactNode;
}

const Alert: React.FC<Props> = ({ preview }) => {
  return (
    <div
      className={cn('border-b', {
        'w-full bg-accent-7 border-accent-7 text-white': preview,
        'hidden': !preview,
      })}
    >
      <div className="container mx-auto px-5 flex justify-center">
        <div className="py-2 text-center text-sm">
          <>
            This is page is a preview.{' '}
            <a
              href="/api/exit-preview"
              className="underline hover:text-teal-300 duration-200 transition-colors"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </>
        </div>
      </div>
    </div>
  )
}

export default Alert;
