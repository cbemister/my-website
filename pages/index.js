import React from 'react'
import client from '../client'

//COMPONENTS
import Header from '../components/Header';


//import "../scss/styles.scss"

const Index = ({ posts = [] }) =>
    <div className="portfolio">
        <Header seoTitle="| ChrisBemister.com" description="blah"/>
            <div className="portfolio-intro">

                <h2 className="single-page-header portfolio-intro-header">I aspire to make the seemingly impossible - possible.</h2>
            </div>

            <div className="case-items">
                <h2 className="section-header">Projects.</h2>

                <div data-image="#" className="case-item">
                    {/* <span className="button-image-overlay">View project</span> */}
                    <h3 className="case-item-header">Crawl to Dev Node.js App </h3>
                    <p className="case-item-text">I built this app to create a local dev environment to streamline my development process when working on new page level website functionality.  I wanted an alternative to developing in browser, on the live website, or working with the limitations of the website staging environment.  The app has the following features & functionality: built using Node.js as CLI application, download an entire webpage's assets, and launch a local dev envivronment from it.  You can check it out on my Github page.   </p>
                    <a href="https://github.com/cbemister/crawl-to-dev-app" target="_new" className="case-item-link"></a>
                </div>

                <div className="case-item">
                    {/* <span className="button-image-overlay">View project</span> */}
                    <h3 className="case-item-header">Vehicle Image Download App</h3>
                    <p className="case-item-text">I built this app to make it easier for my design team to be able to download the vehicle specifications and photos of a specific stock number.  I built two version of this app: a version to download multiple photos of a single stock number or download a single photo for multiple stock numbers.  The app has the following features & functionality: built using AJAX as a single page app hosted on a live website, add-to-cart functionality, select one or more photos to download, and download vehicle specifications as CSV file. </p>  
                    <div className="case-item-content">
                        <div className="content-projectName"></div>
                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="#" className="case-item case-item-wide">
                    {/* <span className="button-image-overlay">View project</span> */}
                    <h3 className="case-item-header">ChrisBemister.com Webiste</h3>

                    <p className="case-item-text">I am building this website as both a portfolio project to showcase what I have built, and as a platform to help me build new website functionality and applications.  I am not always able to apply the advanced web development techniques that I have been learning at my current position. The website has the following features & functionality: built using Next.js to create a Reactbased server-side rendered app, uses Sanity.io to store the content in a headless CMS, hosted on Netlify static site hosting, automatic deployment through Zapier using web hooks, and Github.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="#" className="case-item">
                    {/* <span className="button-image-overlay">Read more</span> */}
                    <h3 className="case-item-header">Promo JS App</h3>
                    <p className="case-item-text">This is one of my oldest running applications. I have continuously worked to improve it as my development skills have improved and new functionality has been requested.  Originally, I built it to reduce the amount time it would take to perform - program change - a monthly switchover of the OEM marketing programs. The app has the following features & functionality: a JavaScript app built using the revealing module pattern, uses JSON format to store the data, run features before or after page load, has a built-in slideshow widget, and content personalization using URL parametres.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item">
                    {/* <span className="button-image-overlay">View project</span> */}
                    <h3 className="case-item-header">Vehicle Listings Page</h3>
                    <p className="case-item-text">I built this page with the goal of improving user experience and to increase VDP (Vehicle Detail Page) pageviews. The initial prototype was built using AJAX with limited functionality.  I had planned to rebuild it using a  front-end framework once I got an API set-up with the inventory feed. The page has the following features & functionality: built using AJAX as a single page app hosted on a live website, infinite scroll, basic filtering, sort inventory based on pageview data imported from a Google Sheet.</p>
                    <div className="case-item-content">

                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

            </div>

            <div className="contact-card">
                <h2 className="section-header">Say hi.</h2>

                <div className="contact-info">
                    <a className="case-item-header" href="mailto:chrisbemister@gmail.com">ChrisBemister<br />[at]gmail.com</a>

                    <p className="case-item-text">I love to learn, code, and hangout with my kids. I work as a <strong>Web Technologist</strong> for <strong><a href="https://autocan.ca"> AutoCanada</a></strong> <a href="https://twitter.com/ChrisBemister">Say hi!</a><br /><br />

                        Chris Bemister <br />Edmonton, Alberta</p>

                    <div className="contact-links">
                        <a className="contact-link" href="https://github.com/cbemister"></a>
                        <a className="contact-link contact-link-twitter" href="https://twitter.com/ChrisBemister"></a>
                    </div>

                    <div data-image="#" className="contact-picture">

                    </div>
                </div>

            </div>

        </div>

Index.getInitialProps = async () => {
    return {
        posts: await client.fetch(`*[_type == "post"][0..1000]{
      _id,
      title,
      "slug": slug.current,
      _updatedAt
    }`)
    }
}

export default Index