import Link from 'next/link'

export function Hometitle(props) {
return(
<div>
<Link href="/">
index
</Link>
<Link href="/about">
about
</Link>
<h1 className="home__title">
  Welcome to home title {props.title}<br />
  <a
    className="home__title__link"
    href="https://developers.line.biz/en/docs/liff/overview/"
  >
    LIFF Starter!
  </a>
</h1>
</div>
)
}