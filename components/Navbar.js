import Link from 'next/link'

const Navbar = () => (

    <div>
        <ul>
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/apps"><li>Apps</li></Link>
            <Link href="/stack"><li>Stack</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/profile"><li>Profile</li></Link>
        </ul>
    </div>


);

export default Navbar