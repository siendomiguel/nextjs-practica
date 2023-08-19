import Link from 'next/link'
export default function TitlePage() {
  return (
    <>
      <h1>Ohlala</h1>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </>
  )
}
