import "../styles/globals.css";
import Image from "next/image";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Image src="logo.svg" alt="logo" width={45} height={45} />
      </div>
    </header>
  );
}
