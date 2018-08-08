import React from 'react'
import client from '../client'

//COMPONENTS
import Header from '../components/layout/Header'
import Case_item from '../components/layout/Case_item'
import Footer from '../components/layout/Footer'


//import "../scss/styles.scss"

const Index = ({ posts = [] }) =>
    <div className="portfolio">
        <Header seoTitle="My Portfolio Website | ChrisBemister.com" description="blah" />
        <div className="portfolio-intro">

            <h2 className="single-page-header portfolio-intro-header">I aspire to make the seemingly impossible - possible.</h2>
        </div>

        <div className="case-items">
            <h2 className="section-header">Code.</h2>

            <Case_item headline="My Portfolio Website" description="I am building this website as both a portfolio project to showcase what I have built, and as a platform to help me build new website functionality and applications.  I am not always able to apply at my current position the advanced web development techniques that I have been learning. The website has the following features & functionality: built using Next.js to create a Reactbased server-side rendered app, uses Sanity.io to store the content in a headless CMS, hosted on Netlify static site hosting, automatic deployment through Zapier using web hooks, and Github. I also converted it to a progressive web app using an npm package called next-offline." layout="case-item-full"/>

            <Case_item headline="Crawl to Dev Node.js App " description="I built this app to create a local dev environment to streamline my development process when working on new page level website functionality.  I wanted an alternative to developing in browser, on the live website, or working with the limitations of the website staging environment.  The app has the following features & functionality: built using Node.js as CLI application, download an entire webpage's assets, and launch a local dev envivronment from it. You can check it out on my Github page." href="https://github.com/cbemister/crawl-to-dev-app" />

            <Case_item headline="Vehicle Image Download App" description="I built this app to make it easier for my design team to be able to download the vehicle specifications and photos of a specific stock number.  I built two version of this app: a version to download multiple photos of a single stock number or download a single photo for multiple stock numbers.  The app has the following features & functionality: built using AJAX as a single page app hosted on a live website, add-to-cart functionality, select one or more photos to download, and download vehicle specifications as CSV file." href="https://www.autocan.ca/web-app.htm" />

            <Case_item headline="Promo JS App" description="This is one of my oldest running applications. I have continuously worked to improve it as my development skills have improved and new functionality has been requested.  Originally, I built it to reduce the amount time it would take to perform - program change - a monthly switchover of the OEM marketing programs. The app has the following features & functionality: a JavaScript app built using the revealing module pattern, uses JSON format to store the data, run features before or after page load, has a built-in slideshow widget, and content personalization using URL parametres." />

            <Case_item headline="Vehicle Listings Page" description="I built this page with the goal of improving user experience and to increase VDP (Vehicle Detail Page) pageviews. The initial prototype was built using AJAX with limited functionality.  I had planned to rebuild it using a  front-end framework once I got an API set-up with the inventory feed. The page has the following features & functionality: built using AJAX as a single page app hosted on a live website, infinite scroll, basic filtering, sort inventory based on pageview data imported from a Google Sheet."/>

        </div>

        <Footer />

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