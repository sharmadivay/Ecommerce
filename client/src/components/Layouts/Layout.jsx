import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "73.5vh" }}>
        {children}
        <Toaster />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
