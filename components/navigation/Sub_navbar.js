import Link from 'next/link'
import { navItem } from '../helpers/ClickListeners'

export default () =>

    <div className="nav-sublinks js-nav-animate">
        <div className="js-nav-animate">
            <Link prefetch href="/github">
                <a onClick={ navItem } className="nav-link nav-sublink">Github</a>
            </Link>
            <Link prefetch href="/contact">
                <a onClick={ navItem } className="nav-link nav-sublink">Contact</a>
            </Link>
            <Link prefetch href="/login">
                <a onClick={ navItem } className="nav-link nav-sublink">Login</a>
            </Link>


        </div>
    </div>
