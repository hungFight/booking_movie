import Header from "../Header.js";
import Footer from "../Footer.js"

function LayoutHeaderFooter({children}) {
    return ( 
        <>
            <Header />
            {children}
            <Footer />
        </>
     );
}

export default LayoutHeaderFooter;