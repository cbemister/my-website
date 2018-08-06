import React from 'react'

//COMPONENTS
import Header from '../components/layout/Header'
import Case_item from '../components/layout/Case_item'

export default () => {
  return (
    <div>
      <Header seoTitle=" My Profile | ChrisBemister.com" description="Learn more about me." pageTitle="Profile Page"/>

      <Case_item headline="My Profile" description="Labore culpa est enim consequat dolor proident commodo ipsum cupidatat aute sint. Sit ex mollit non nulla. Officia aute in in sit consequat ipsum veniam consequat qui. Exercitation exercitation adipisicing excepteur eiusmod ea eiusmod labore. In duis consequat velit qui tempor aliquip mollit esse. Sit ea voluptate consequat excepteur anim dolore duis enim cillum eiusmod velit. Qui commodo proident sint eu veniam consequat enim ipsum aliqua anim dolor proident enim." layout="case-item-article" />

    </div>
  );
}
