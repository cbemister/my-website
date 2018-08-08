import React from 'react'

//COMPONENTS
import Header from '../components/layout/Header'
import Case_item from '../components/layout/Case_item'
import Footer from '../components/layout/Footer'

export default () => {
  return (
    <div>
      <Header seoTitle="Contact Me | ChrisBemister.com" description="Find out how to contact Chris Bemister" pageTitle="Contact Me"/>

      <Case_item headline="Contact Me" description="Labore culpa est enim consequat dolor proident commodo ipsum cupidatat aute sint. Sit ex mollit non nulla. Officia aute in in sit consequat ipsum veniam consequat qui. Exercitation exercitation adipisicing excepteur eiusmod ea eiusmod labore. In duis consequat velit qui tempor aliquip mollit esse. Sit ea voluptate consequat excepteur anim dolore duis enim cillum eiusmod velit. Qui commodo proident sint eu veniam consequat enim ipsum aliqua anim dolor proident enim." layout="case-item-article" />

      <Footer />

    </div>
  );
}
