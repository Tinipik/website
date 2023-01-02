import cn from 'classnames'
import Alert from './alert'
import Footer from '../components/footer'
import Meta from './meta'

interface Props {
  preview: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ fullHeight, preview, children }) => {
  return (
    <>
      <Meta />
      <div className="w-full h-screen flex flex-col justify-start items-center overflow-y-auto">
        <Alert preview={preview} />
        <main
          className={cn('max-w-screen-lg w-full relative p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between', {
            'h-full': fullHeight,
            '': !fullHeight,
          })}
        >
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout;
