import React from 'react'

//COMPONENTS
import Header from '../components/layout/Header';
import Case_item from "../components/layout/Case_item"

export default () => {
  return (
    <div>
      <Header title="Apps | Find out what I've built, building, and would like to build | ChrisBemister.com" description="Find out what web applications that I\'ve built, what I\'m building, and what I would like to build." pageTitle="Find out what I've built, building, and would like to build" />

      <Case_item headline="Apps" description="Ever since I was a young kid, I always liked to create.  I would come up with a wild and crazy idea then start to figure out what I would need to make that idea come to life.  I satisfied this need at first through woodworking; then more recently through programming.  I find it very motivating to think what I will be able to create with only a computer, some programming skills, and a lot of hard work and determination." layout="case-item-article" />

      <Case_item description="The word 'app' can mean a lot of a different things to different people.  Most people when they hear the word app think of a phone app.  When I use the word app, I mean a web app. One of the main differences between the two types of apps is the programming languages that go into building them.  With native phone apps, they are usually built with specialized languages - either Java for Android or Swift for iOS. With a web app, they can be built with a variety of languages, but most importantly for me, they can be built with the webpage triad - HTML, CSS, and JavaScript." layout="case-item-article" />

      <Case_item description="The field of app development includes a lot of different technologies.  To make things easier for me, I decided early on in my journey that I would focus on technologies built with JavaScript.  Three of the technologies that meet that criteria and that I use most often when developing my apps are: Node, React, and Next." layout="case-item-article" />

      <div className="case-items case-item-list">

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">Future Projects</h3>

          <ul>

            <li>
              React Native App
            </li>
            <li>
              Electron App
            </li>
            <li>
              Socket.io App
            </li>
            <li>
              Machine Learning App
            </li>


          </ul>

          <a href="#" className="case-item-link"></a>
        </div>

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">Current Projects</h3>

          <ul>

            <li>
              Portfolio Website
                      </li>
            <li>
              LeanWebsites.cs
                      </li>

          </ul>

          <a href="#" className="case-item-link"></a>
        </div>

        <div data-image="#" className="case-item case-item-third">
          {/* <span className="button-image-overlay">View project</span> */}
          <h3 className="case-item-header">Completed Projects</h3>

          <ul>

            <li>
              Crawl To Dev App
                      </li>
            <li>
              Vehicle Image Download App
                      </li>
            <li>
              Tire Selector App
                      </li>
            <li>
              Promo JS App
                      </li>

          </ul>

          <a href="#" className="case-item-link"></a>
        </div>

      </div>

    </div>
  );
}
