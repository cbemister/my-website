import { format } from 'date-fns'

//COMPONENTS
import NextSeo from 'next-seo';
import Navbar from './Navbar'

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
            <h1 className="site-name">
                <a className="site-name-link" href="/">Chris Bemister</a>
            </h1>

            {hasPageTitle}

            <div className="menu-animation-wrapper">
                <div className="menu-animated-background"></div>
            </div>
            <a href="/" className="menu ">
                <span className="menu-icon-line-1 menu-icon-line"></span>
                <span className="menu-icon-line-2 menu-icon-line"></span>
                <span className="menu-icon-line-3 menu-icon-line"></span>
            </a>

            <div className="nav js-nav">
                <div className="nav-content">
                    <div className="js-nav-header nav-header">
                        <span className="nav-header-text">Chris Bemister</span>
                        <div className="nav-header-line js-nav-header-line"></div>
                    </div>

                    <Navbar />

                    <div className="nav-sublinks js-nav-animate">
                        <div className="js-nav-animate">
                            <a className="nav-link nav-sublink" href="/github">Github</a>
                            <a className="nav-link nav-sublink" href="/contact">Contact</a>
                            <a className="nav-link nav-sublink" href="/resume">Resume</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );

}
