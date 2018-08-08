import A from './Nav_item'

const Navbar = () => (
    <ul className="nav-categories">
        <A href="/" className="nav-link" name="Home" />
        <A href="/apps" className="nav-link" name="Apps" />
        <A href="/road" className="nav-link" name="Roadmap" />
        {/* <A href="/stack" className="nav-link" name="Stack" /> */}
        {/* <A href="/blog" className="nav-link" name="Blog" /> */}
        {/* <A href="/metrics" className="nav-link" name="Metrics" /> */}
    </ul>
);

export default Navbar