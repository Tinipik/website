import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from "next/router";

interface Props {
  variant: "home" | "topbar";
  children?: React.ReactNode;
}

const Nav: React.FC<Props> = ({ variant, children }) => {

  const router = useRouter()
  const vClass = `navlink-${variant}`

  return (
    <nav
      className={cn('flex items-center justify-between flex-wrap', {
        '-ml-8': variant === "topbar",
        'mt-8': variant === "home",
      })}
    >
      <Link
        className={ router.pathname == "/" 
            ? `${vClass} navlink-active`
            : `${vClass} navlink hover:navlink-hover`
        }
        href="/"
      >
        Home
      </Link>

      <Link
        className={ router.pathname == "/games" 
            ? `${vClass} navlink-active`
            : `${vClass} navlink hover:navlink-hover`
        }
        href="/games"
      >
        Games
      </Link>

      <Link
        className={ router.pathname == "/blog" 
            ? `${vClass} navlink-active`
            : `${vClass} navlink hover:navlink-hover`
        }
        href="/blog"
      >
        Blog
      </Link>

    </nav>
  )
}

export default Nav;
