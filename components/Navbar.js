import A from './Nav_item'

const Navbar = () => (
    <ul className="nav-categories">
        <A href="/" className="nav-link" name="Home" />
        <A href="/apps" className="nav-link" name="Apps" />
        <A href="/stack" className="nav-link" name="Stack" />
        <A href="/blog" className="nav-link" name="Blog" />
        <A href="/profile" className="nav-link" name="Profile" />
    </ul>
    // <ul className="nav-categories">
    //     <li className="nav-category js-nav-animate"><a href="/" >Home</a></li>
    //     <li className="nav-category js-nav-animate"><a href="/apps" className="nav-link">Apps</a></li>
    //     <li className="nav-category js-nav-animate"><a href="/stack" className="nav-link">Stack</a></li>
    //     <li className="nav-category js-nav-animate"><a href="/blog" className="nav-link">Blog</a></li>
    //     <li className="nav-category js-nav-animate"><a href="/profile" className="nav-link">Profile</a></li>
    // </ul>
);

export default Navbar