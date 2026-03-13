import { Toaster } from "react-hot-toast";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";



export default function RootLayout({ children }) {
    return (

        <div>
            <Navbar />
            {children}
            <Toaster position="top-center" />
            <Footer />
        </div>
    );
}
