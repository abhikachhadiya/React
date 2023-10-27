import { type ReactNode } from "react";

interface IHeader {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

function Header(props: IHeader) {
  const { image, children } = props;
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
}

export default Header;
