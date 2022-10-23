import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Oooh+Baby&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <title>Xabier Oterino</title>
        <link rel="shortcut icon" href="/vercel.svg" />
      </Head>
      <body className='bg-body  text-secondary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}