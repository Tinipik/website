import Head from 'next/head'

interface Props {
  children?: React.ReactNode;
}

const Meta: React.FC<Props> = ({ children }) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#532C93" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#532C93" />
      <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Je viens partager mes créations et ma passion du jeu vidéo"
      />
      <meta property="og:image" content="https://images.ctfassets.net/6mmt75obyu7g/4ZASHnta2ZOEFi9FMsHg52/78dd72632de97c8fa52ff028ba2c2b7d/tinge.jpg" />
    </Head>
  )
}

export default Meta;
