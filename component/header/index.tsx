import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-purple-400 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl">name site</div>
        <nav className="text-white">
          <ul className="flex gap-4">
            <li>
              <Link
                className="bg-slate-700 w-32 h-12 flex justify-center items-center rounded-md"
                href={"/"}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="bg-slate-700 w-32 h-12 flex justify-center items-center rounded-md"
                href={"/blog"}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                className="bg-slate-700 w-32 h-12 flex justify-center items-center rounded-md"
                href={"/about"}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
