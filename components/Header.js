import { format } from 'date-fns'
import Link from 'next/link'

//COMPONENTS
import NextSeo from 'next-seo';
import Navbar from './Navbar'

import MenuClickListener from './MenuClickListener'

export default ({ seoTitle, description, pageTitle, categories, date }) => {

    let hasPageTitle = pageTitle ? <h2>{pageTitle}</h2> : <h2></h2>

    return (

        <div>
            <NextSeo
                config={{
                    title: date ? seoTitle + ' | ' + categories + ' | ChrisBemister.com' : seoTitle,
                    description: date ? seoTitle + ' | posted in ' + categories + ' on ' + format(date, 'DD. MMMM, YYYY') : description
                }}
            />

            <div className="full-menu">

                <div className="nav js-nav nav-active">
                    <div className="nav-content">
                        <div className="js-nav-header nav-header">
                            <span className="nav-header-text">Chris Bemister</span>
                            <div className="nav-header-line js-nav-header-line"></div>
                        </div>

                        <Navbar />

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
                    </div>


                </div>

            </div>

            <a href="#" onClick={MenuClickListener} className="menu menu-toggle">
                <span className="menu-icon-line-1 menu-icon-line"></span>
                <span className="menu-icon-line-2 menu-icon-line"></span>
                <span className="menu-icon-line-3 menu-icon-line"></span>
            </a>

            <h1 className="site-name">
                <a className="site-name-link" href="/">Chris Bemister</a>
            </h1>




            {/* {hasPageTitle} */}


        </div>

    );

}
