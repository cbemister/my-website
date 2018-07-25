import A from './Nav_item'

const Navbar = () => (
        <ul>
            <A href="/" name="Home" />
            <A href="/apps" name="Apps" />
            <A href="/stack" name="Stack" />
            <A href="/blog" name="Blog" />
            <A href="/profile" name="Profile" />
        </ul>
);

export default Navbar