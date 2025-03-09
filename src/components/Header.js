import "../styles/globals.css";
import Image from "next/image";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Image
          className="img1"
          src="logo.svg"
          alt="logo"
          width={134}
          height={31}
        />
      </div>
    </header>
  );
}
