import Header from "../Header.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
