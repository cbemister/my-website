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
                <h2 className="section-header">Work.</h2>

                <div data-image="#" className="case-item">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <div className="case-item-content">
                        <div className="content-projectName"></div>
                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="#" className="case-item case-item-wide">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>

                    <p className="case-item-text">projectName</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="#" className="case-item">
                    <span className="button-image-overlay">Read more</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <div className="case-item-content">

                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="#" className="case-item case-item-wide case-item-hi-curriculum">
                    <span className="button-image-overlay">View program</span>
                    <h3 className="case-item-header">Aute ipsum nisi anim nostrud fugiat</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <div className="case-item-content">

                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="#" className="case-item">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item case-item-wide">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>

                    <p className="case-item-text">Exercitation proident cupidatat irure quis ex. Commodo consectetur duis ad proident non qui ipsum veniam ipsum eiusmod sint nostrud. Lorem nisi sint enim officia ut sint minim nostrud ea duis exercitation officia. Velit do qui sit excepteur veniam adipisicing laboris mollit. Officia ex exercitation sit laboris qui officia laborum esse labore consequat excepteur ullamco ullamco aliqua. Ullamco reprehenderit officia enim ullamco.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item case-item-gh-css">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Laborum incididunt fugiat velit cillum nostrud dolor amet. Sit occaecat irure deserunt minim est eiusmod eiusmod occaecat incididunt dolor cupidatat. Reprehenderit veniam excepteur duis id amet.</p>
                    <div className="case-item-content">

                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="#" className="case-item">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Laborum incididunt fugiat velit cillum nostrud dolor amet. Sit occaecat irure deserunt minim est eiusmod eiusmod occaecat incididunt dolor cupidatat. Reprehenderit veniam excepteur duis id amet.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="#" className="case-item case-item-wide">
                    <span className="button-image-overlay">View blog</span>
                    <h3 className="case-item-header">Lorem magna aute Lorem commodo amet</h3>
                    <p className="case-item-text">Anim incididunt mollit Lorem velit ut. Irure nostrud non non sint exercitation pariatur adipisicing aliqua aute esse adipisicing eiusmod consequat. Anim duis qui proident adipisicing.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

            </div>

            <div className="contact-card">
                <h2 className="section-header">Say hi.</h2>

                <div className="contact-info">
                    <a className="case-item-header" href="mailto:hello@ChrisBemister.com">hello@<br />ChrisBemister.com</a>

                    <p className="case-item-text">I love to learn, develop, and hangout with my kids. I work as the <strong>Web Technologist</strong> for <strong><a href="https://autocan.ca"> AutoCanada</a></strong> <a href="https://twitter.com/ChrisBemister">Say hi!</a><br /><br />

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