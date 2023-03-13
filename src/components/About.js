import React from 'react'

export default function About({image='https://via.placeholder.com/215', about="Empty"}) {
  return (
   <aside>
        <img src={image} alt='blog logo'/>
        <p>{about}</p>
   </aside>
  )
}


// an <aside> element with the following elements inside:
// an <img> element, with the src set to an image passed as a prop called image
// the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215"
// the image should also be accessible! Give it an alt attribute of "blog logo"
// a <p> element, with the text for the blog passed in as a prop called about