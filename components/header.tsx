import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navList = [
    { nav: "制作実績", link: "/#works" },
    { nav: "事業・サービス", link: "/#service" },
    { nav: "会社概要", link: "/#about" },
    //{ nav: "お知らせ", link: "/#news" },
    { nav: "お問い合わせ", link: "/#contact" },
  ];
  return (
    <header className="w-1/2 h-20 ml-4">
      <div className="flex">
        <h1>
          <Link href="/">
            <Image alt="logo" src="/AutoSystemsLogo.jpg" className="c w-28" />
          </Link>
        </h1>
        <nav>
          <ul className="flex ">
            {navList.map(({ nav, link }) => {
              return (
                <li key={nav}>
                  <Link
                    href={link}
                    className="flex justify-center items-center h-20 w-28 relative after:absolute after:content-[''] after:block after:h-0.5 after:bg-black after:w-0 after:bottom-4 after:left-1 
                    after:transition-all after:duration-300 after:ease-out
                    hover:after:w-11/12"
                  >
                    <span className="text-base  font-semibold">{nav}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
