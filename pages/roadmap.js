import React from 'react'

//COMPONENTS
import Header from '../components/layout/Header';
import Case_item from "../components/layout/Case_item"
import Footer from '../components/layout/Footer'

export default () => {
  return (
    <div>
      <Header seoTitle="Roadmap | New Functionality To Be Added | ChrisBemister.com" description="Find out what new funtionality I will be added to this website." />

      <Case_item headline="Roadmap" description="The purpose of this website is to provide a sandbox for me to be able to build advanced website functionality.  I'm constantly learning about new technologies and techniques related to web and application development.  This website will be the place where I will showcase that learning in the form of new website functionality." layout="case-item-article" />

      <Case_item description="Also, I think there is an opportunity to disrupt the website development market with a lean alternative to currently available options.  Ultimately, my goal for this website is to create a high performance website that I can use as a proof of concept for new type of website template.  I will then market this template under the brand name LeanWebsites and offer it as a monthly SaaS subscription." layout="case-item-article" />

      <div className="case-items case-item-list">

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">To-do</h3>

          <ul>
            <li>add form to contact page</li>
            <li>create blog template including index and post page</li>
            <li>convert static page content to pull dynamically from sanity.io</li>
            <li>create search functionality</li>
            <li>create single page app (SPA) for browsing website content</li>
            <li>create basic app to pull GitHub data from API</li>
            <li>create registration functionality  </li>
          </ul>

          <a href="#" className="case-item-link"></a>
        </div>

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">Doing</h3>

          <ul>
            <li>write content for static pages</li>
            <li>create footer component - add to all pages</li>
            <li>set up webmaster tools </li>
            <li>create sitemap</li>
          </ul>
          <a href="#" className="case-item-link"></a>
        </div>

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">Done</h3>
          <ul>
            <li>refactor menu using vanilla JS</li>
            <li>add service workers using next-offline</li>
            <li>add manifest.json file </li>
            <li>write homepage content</li>
            <li>convert content into components</li>
            <li>design website based off inspiration </li>
            <li>design logo and brand identity</li>
            <li>link sanity.io database with website</li>
            <li>set-up zapier to trigger build in netlify</li>
            <li>implemented next-seo module</li>
            <li>set-up Netlify static site hosting</li>
          </ul>
          <a href="#" className="case-item-link"></a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
