import React, { Fragment } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { format } from 'date-fns'
import client from '../client'

//COMPONENTS
import Header from '../components/Header'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

const CommaJoiner = ({ list = [], conjuction = 'and', separator = ',' }) => <Fragment>{list.map((item, index) => <span key={item}>{item}{
  (list.length === 1) ? '.' :
    (index + 2 === list.length) ? ` ${conjuction} ` :
      (index + 1 === list.length) ? '.' : `${separator} `
}
</span>)
}</Fragment>



const BlogPost = ({ title = 'No title', name = 'No name', categories = [], authorImage = {}, body = [], _updatedAt = '' }) => (
  <div>
    <Header seoTitle={title} categories={categories} date={_updatedAt} pageTitle={title} />
    By {name}. Updated {format(_updatedAt, 'DD. MMMM, YYYY')}. {categories.length && <span>Posted in <CommaJoiner list={categories} /></span>}
    <div><img src={urlFor(authorImage).width(50).url()} /></div>
    <BlockContent
      blocks={body}
      imageOptions={{ w: 320, h: 240, fit: 'max' }}
      projectId={client.clientConfig.projectId}
      dataset={client.clientConfig.dataset}
    />
    <Link href="/blog"><a>Go to blog listings page</a></Link>
  </div>


);

BlogPost.getInitialProps = async ({ query: { slug } }) => {
  return await client.fetch(`*[slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      body,
      _updatedAt
    }`, { slug })
}

export default BlogPost