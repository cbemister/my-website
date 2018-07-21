import Link from 'next/link'

const Navbar = () => (

    <div>
        <ul>
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/"><li>About</li></Link>
            <Link href="/"><li>Contact</li></Link>
        </ul>
    </div>


);

export default Navbar