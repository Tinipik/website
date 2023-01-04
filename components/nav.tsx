import cn from 'classnames';
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
      <a 
        className={ router.pathname == "/" 
            ? `${vClass} navlink-active`
            : `${vClass} navlink hover:navlink-hover`
        }
        href="/"
      >
        Home
      </a>

      <a 
        className={ router.pathname == "/games" 
            ? `${vClass} navlink-active`
            : `${vClass} navlink hover:navlink-hover`
        }
        href="/games"
      >
        Games
      </a>

      <a 
        className={ router.pathname == "/blog" 
            ? `${vClass} navlink-active`
            : `${vClass} navlink hover:navlink-hover`
        }
        href="/blog"
      >
        Blog
      </a>

    </nav>
  )
}

export default Nav;
