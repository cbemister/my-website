import React from 'react'

//COMPONENTS
import Header from '../components/layout/Header';
import Case_item from "../components/layout/Case_item"

export default () => {
  return (
    <div>
      <Header title="Apps | Find out what I've built, building, and would like to build | ChrisBemister.com" description="Find out what web applications that I\'ve built, what I\'m building, and what I would like to build." pageTitle="Find out what I've built, building, and would like to build" />

      <Case_item headline="Apps" description="I am working to become a senior web developer.  In order to do that, I am continuously learning about new web technologies and the related knowledge that will be required to perform that role." layout="case-item-article" />

      <div className="case-items case-item-list">

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">Future Projects</h3>

          <ul>

            <li>
              list 1
                      </li>

          </ul>

          <a href="#" className="case-item-link"></a>
        </div>

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">Current Projects</h3>

          <ul>

            <li>
              list 2
                      </li>

          </ul>

          <a href="#" className="case-item-link"></a>
        </div>

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">Completed Projects</h3>

          <ul>

            <li>
              item 3
                      </li>

          </ul>

          <a href="#" className="case-item-link"></a>
        </div>

      </div>

      {/* <h3>Future Projects</h3>
      <ul>
        <li>React Native App</li>
        <li>Progressive Web App</li>
        <li>Meteor JS App</li>
        <li>Google Fire App</li>  
      </ul>
      <h3>Current Projects</h3>
      <ul>
        <li>My Portfolio Website</li>
        <li>Promo JS App</li>
      </ul>
      <h3>Completed Projects</h3>
      <ul>
        <li>Crawl-to-dev Node.js App</li>
        <li>Vehicle Image Download App</li>
      </ul> */}
    </div>
  );
}
