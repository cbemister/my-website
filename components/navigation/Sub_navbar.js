import Link from 'next/link'

export default () =>

    <div className="nav-sublinks js-nav-animate">
        <div className="js-nav-animate">
            <Link prefetch href="/github">
                <a className="nav-link nav-sublink">Github</a>
            </Link>
            <Link prefetch href="/contact">
                <a className="nav-link nav-sublink">Contact</a>
            </Link>
            <Link prefetch href="/resume">
                <a className="nav-link nav-sublink">Resume</a>
            </Link>


        </div>
    </div>