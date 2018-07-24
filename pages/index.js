import React from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import client from '../client'

import NextSeo from 'next-seo';

//import "../scss/styles.scss"

const Index = ({ posts = [] }) =>
    <div className="portfolio">
        <NextSeo
            config={{
                title: 'My Website',
                description: 'Updated description as well'
            }}
        />

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

                    <ul className="nav-categories">
                        <li className="nav-category js-nav-animate"><a href="/apps" className="nav-link">Apps</a></li>
                        <li className="nav-category js-nav-animate"><a href="/stack" className="nav-link">Stack</a></li>
                        <li className="nav-category js-nav-animate"><a href="/blog" className="nav-link">Blog</a></li>
                        <li className="nav-category js-nav-animate"><a href="/profile/" className="nav-link">Profile</a></li>
                    </ul>

                    <div className="nav-sublinks js-nav-animate">
                        <div className="js-nav-animate">
                            <a className="nav-link nav-sublink" href="/github">Github</a>
                            <a className="nav-link nav-sublink" href="/contact">Contact</a>
                            <a className="nav-link nav-sublink" href="/resume">Resume</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="portfolio-intro">
                <h1 className="site-name">
                    <a className="site-name-link" href="/">Chris Bemister</a>
                </h1>

                <h2 className="single-page-header portfolio-intro-header">I make the seemingly impossible - possible - or at least aspire to.</h2>
            </div>

            <div className="case-items">
                <h2 className="section-header">Work.</h2>

                <div data-image="projectName.jpg" className="case-item case-item-projectName">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item case-item-projectName">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <div className="case-item-content">
                        <div className="content-projectName"></div>
                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="projectName.jpg" className="case-item case-item-wide case-item-projectName">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>

                    <p className="case-item-text case-item-text-projectName">projectName</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="projectName.jpg" className="case-item case-item-projectName">
                    <span className="button-image-overlay">Read more</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item case-item-projectName">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <div className="case-item-content">

                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="curriculum.jpg" className="case-item case-item-wide case-item-hi-curriculum">
                    <span className="button-image-overlay">View program</span>
                    <h3 className="case-item-header">Aute ipsum nisi anim nostrud fugiat</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item case-item-projectName">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <div className="case-item-content">

                    </div>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="projectName.jpg" className="case-item case-item-projectName">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Aliquip elit labore non id nulla dolore magna in ea tempor. Ad aliquip mollit et ullamco dolore culpa aliquip ut tempor velit aliquip adipisicing. Consequat reprehenderit veniam dolor sint velit dolor.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div className="case-item case-item-wide case-item-projectName">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header case-item-header-projectName">Project Title</h3>

                    <p className="case-item-text case-item-text-projectName">Exercitation proident cupidatat irure quis ex. Commodo consectetur duis ad proident non qui ipsum veniam ipsum eiusmod sint nostrud. Lorem nisi sint enim officia ut sint minim nostrud ea duis exercitation officia. Velit do qui sit excepteur veniam adipisicing laboris mollit. Officia ex exercitation sit laboris qui officia laborum esse labore consequat excepteur ullamco ullamco aliqua. Ullamco reprehenderit officia enim ullamco.</p>
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

                <div data-image="projectName.jpg" className="case-item case-item-projectName">
                    <span className="button-image-overlay">View project</span>
                    <h3 className="case-item-header">Project Title</h3>
                    <p className="case-item-text">Laborum incididunt fugiat velit cillum nostrud dolor amet. Sit occaecat irure deserunt minim est eiusmod eiusmod occaecat incididunt dolor cupidatat. Reprehenderit veniam excepteur duis id amet.</p>
                    <a href="#" className="case-item-link"></a>
                </div>

                <div data-image="projectName.jpg" className="case-item case-item-wide case-item-blog">
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

                    <p className="case-item-text">I love to learn, develop, and parent. I work as the <strong>Web Technologist</strong> for <strong><a href="https://autocan.ca"> AutoCanada</a></strong> <a href="https://twitter.com/ChrisBemister">Say hi!</a><br /><br />

                        Chris Bemister <br />Edmonton, Alberta</p>

                    <div className="contact-links">
                        <a className="contact-link" href="https://github.com/cbemister"></a>
                        <a className="contact-link contact-link-twitter" href="https://twitter.com/ChrisBemister"></a>
                    </div>

                    <div data-image="profile.jpg" className="contact-picture">

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