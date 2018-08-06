import A from './Nav_item'

const Navbar = () => (
    <ul className="nav-categories">
        <A href="/" className="nav-link" name="Home" />
        <A href="/apps" className="nav-link" name="Apps" />
        <A href="/stack" className="nav-link" name="Stack" />
        <A href="/blog" className="nav-link" name="Blog" />
        <A href="/profile" className="nav-link" name="Profile" />
    </ul>
);

export default Navbar