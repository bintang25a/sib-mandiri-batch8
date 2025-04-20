import Header from "../component/Header/Header.jsx";
import ProductList from "../component/ProductList/ProductList.jsx";
import Footer from "../component/Footer/Footer.jsx"
import { books } from "../utils/books.js";

export default function BooksLayout() {
    return(
        <>
            <Header />
            <ProductList max={books.length} />
            <Footer />
        </>
    );
}