import Link from 'next/link'
import { format } from 'date-fns'
import client from '../client'

//COMPONENTS
import Header from '../components/Header';

//import "../scss/styles.scss"

const blogIndex = ({ posts = [] }) =>
    <div>
        <Header title="Blog | Projects, Ideas, Resources | ChrisBemister.com" description="Blog Posts About My Projects, Ideas, and Favourite Resouroces" pageTitle="Blog Posts About My Projects, Ideas, and Favourite Resources"/>
        <ul>
            {
                posts.map(({ _id, title = '', slug = '', _updatedAt = '' }) =>
                    slug && <li key={_id}>
                        <Link prefetch href={`/blog/${slug}`}><a>{title}</a></Link> ({format(_updatedAt, 'DD. MMMM, YYYY')})
              </li>
                )
            }
        </ul>

    </div>

blogIndex.getInitialProps = async () => {
    return {
        posts: await client.fetch(`*[_type == "post"][0..1000]{
      _id,
      title,
      "slug": slug.current,
      _updatedAt
    }`)
    }
}

export default blogIndex