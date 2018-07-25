import Link from 'next/link'

export default ({ href, name }) =>
  <Link passHref="true">
  <li className="nav-category js-nav-animate">
    <a href={href} className="nav-link">{name}</a>
  </li>
  </Link>

