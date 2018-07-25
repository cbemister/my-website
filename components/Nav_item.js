import Link from 'next/link'

export default ({ href, name }) =>
  <Link href={href} passHref="true">
  <li className="nav-category js-nav-animate">
    <a href={href} className="nav-link">{name}</a>
  </li>
  </Link>

