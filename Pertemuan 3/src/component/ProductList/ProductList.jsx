import { books } from "../../utils/books.js";

function ProductList({ max }) {
    return(
        <div id="book" className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {books.slice(0, max).map((book) => (
                        <div className="col" key={book.id}>
                            <div className="card shadow-sm">
                                <img src={book.image} className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" />
                                <div className="card-body">
                                    <h3 class="fs-2 text-body-emphasis">{book.title}</h3>
                                    <p className="card-text">{book.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                                        </div>
                                        <small className="text-body-secondary">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList;