import Link from 'next/link'
import { navItem } from '../helpers/ClickListeners'

export default ({ href, name }) =>
  <Link href={href} passHref>
  <li className="nav-category js-nav-animate">
    <a href={href} onClick={ navItem } className="nav-link">{name}</a>
  </li>
  </Link>

