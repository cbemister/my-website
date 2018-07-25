import Link from 'next/link'

export default ({ href, name }) =>
  <Link passHref="true">
    <li>
        <a href={href}>{name}</a>
    </li>
  </Link>

