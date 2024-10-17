import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/">Main Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
