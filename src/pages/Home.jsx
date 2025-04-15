import Header from "../component/Header/Header.jsx";
import Hero from "../component/Hero/Hero.jsx";
import Footer from "../component/Footer/Footer.jsx"

function ProductList() {
    return(
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Best Seller</h1>
                    <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                    <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                    <a href="#" className="btn btn-secondary my-2 m-2">Other Book</a>
                    </p>
                </div>
                </div>
            </section>

            <div id="book" className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="https://picsum.photos/600/960" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" />
                                <div className="card-body">
                                    <p className="card-text">Kisah seorang pengelana yang mencari arti rumah di tengah badai.</p>
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
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="https://picsum.photos/700/960" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" />
                                <div className="card-body">
                                    <p className="card-text">Seorang gadis misterius membawa harapan di kota yang hampir punah.</p>
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
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="https://picsum.photos/800/960" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" />
                                <div className="card-body">
                                    <p className="card-text">Sebuah jam kuno mengungkap rahasia lintas masa.</p>
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
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="https://picsum.photos/600/760" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" />
                                <div className="card-body">
                                    <p className="card-text">Sebuah kedai kopi biasa menyimpan portal ke dimensi lain.</p>
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
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="https://picsum.photos/400/960" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" />
                                <div className="card-body">
                                    <p className="card-text">Perjalanan emosional seorang pelukis yang kehilangan inspirasinya.</p>
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
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="https://picsum.photos/840/960" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" />
                                <div className="card-body">
                                    <p className="card-text">Seorang detektif memecahkan kasus pembunuhan lewat teka-teki tulisan tangan.</p>
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
                    </div>
                </div>
            </div>
        </>
    )
}

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <ProductList />
            <Footer />
        </>
    )
}

export default Home;