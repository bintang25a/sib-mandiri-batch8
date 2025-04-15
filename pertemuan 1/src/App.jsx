import logo from "./assets/react.svg";

//komponen header
function Header() {
    return(
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={logo} alt="Logo" />
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2">Home</a></li>
                    <li><a href="#book" className="nav-link px-2">Book</a></li>
                    <li><a href="#team" className="nav-link px-2">Team</a></li>
                    <li><a href="#contact" className="nav-link px-2">Contact</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Register</button>
                </div>
            </header>
        </div>
    )
}

//komponen hero
function Hero() {
    return(
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Perubahan kecil yang memberikan hasil luar biasa.</h1>
                    <p className="lead">
                        Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Details</button>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="" width="720" />
                </div>
            </div>
        </div>
    )
}

//komponen list product
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

//komponen team
function Team() {
    return(
        <div className="container px-4 py-5" id="team">
            <h2 className="pb-2 border-bottom">reactbooks Team member</h2>
            <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src="https://github.com/twbs.png" alt="" width="32" height="32" className="rounded-circle flex-shrink-0" />
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                        <h6 className="mb-0">Bintang Al Fizar</h6>
                        <p className="mb-0 opacity-75">Bintang merupakan CEO dari reactbooks</p>
                        </div>
                        <small className="opacity-50 text-nowrap">now</small>
                    </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src="https://github.com/twbs.png" alt="" width="32" height="32" className="rounded-circle flex-shrink-0" />
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                        <h6 className="mb-0">James Bondan</h6>
                        <p className="mb-0 opacity-75">James adalah Manajer terampil di reactbooks</p>
                        </div>
                        <small className="opacity-50 text-nowrap">3d</small>
                    </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src="https://github.com/twbs.png" alt="" width="32" height="32" className="rounded-circle flex-shrink-0" />
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                        <h6 className="mb-0">Alika Raisya</h6>
                        <p className="mb-0 opacity-75">Raisya yang menjadi penggerak dalam berjalannya reactbooks setiap harinya</p>
                        </div>
                        <small className="opacity-50 text-nowrap">1w</small>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

//komponen contact
function Contact() {
    return(
        <div className="container px-4 py-5" id="featured-3">
            <h2 id="contact" className="pb-2 border-bottom">Contact Us on Social Media</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="48" height="48" fill="currentColor">
                        <path d="M16 .667c-8.825 0-16 7.175-16 16 0 2.825.725 5.5 2.05 7.9L0 32l7.575-2.025a15.87 15.87 0 0 0 8.425 2.275h.025c8.825 0 16-7.175 16-16 0-4.275-1.675-8.3-4.7-11.325A15.902 15.902 0 0 0 16 .667zm0 29.4c-2.675 0-5.275-.725-7.525-2.1l-.525-.3-4.5 1.2 1.2-4.425-.35-.575A13.253 13.253 0 0 1 2.667 16c0-7.375 6-13.333 13.333-13.333 3.575 0 6.925 1.4 9.425 3.925a13.27 13.27 0 0 1 3.908 9.408c0 7.375-6 13.334-13.333 13.334zm7.675-9.675c-.425-.213-2.5-1.225-2.9-1.363-.4-.15-.7-.212-1 .212-.3.425-1.15 1.362-1.4 1.637-.25.275-.525.3-.95.087-2.675-1.35-4.425-2.4-6.15-5.4-.475-.825.475-.762 1.35-2.525.15-.312.075-.587-.037-.8-.112-.213-1-2.4-1.375-3.3-.362-.875-.725-.762-1-.775l-.862-.012c-.275 0-.725.1-1.1.5s-1.45 1.413-1.45 3.437c0 2.025 1.488 3.975 1.7 4.25.213.275 2.925 4.475 7.088 6.275 4.15 1.8 4.15 1.2 4.888 1.137.75-.075 2.5-1.025 2.85-2.012.35-.987.35-1.838.25-2.012-.1-.175-.387-.275-.812-.475z"/>
                    </svg>

                    </div>
                    <h3 className="fs-2 text-body-emphasis">Whatsapp</h3>
                    <p>Kontak whatsapp kami untuk melakukan pengaduan terhadap layanan yang kami berikan. Khusus untuk pengaduan.</p>
                    <a href="#" className="icon-link">
                    0821-3376-8831
                    <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
                        <path fill="#f44336" d="M4 10v28c0 2.2 1.8 4 4 4h8V24L4 10z"/>
                        <path fill="#2196f3" d="M44 10v28c0 2.2-1.8 4-4 4h-8V24l12-14z"/>
                        <path fill="#4caf50" d="M12 42h24V24L24 34 12 24v18z"/>
                        <path fill="#ffeb3b" d="M44 10H4l20 14 20-14z"/>
                    </svg>

                    </div>
                    <h3 className="fs-2 text-body-emphasis">Email</h3>
                    <p>Want to be partner? Hubungi kami melalui email dengan subject yang jelas dan singkat dengan menggunakan bahasa formal dan santun.</p>
                    <a href="#" className="icon-link">
                    reactbooks@gmail.com
                    <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1.1-1 1.6s-1 0.8-1.6 1c-.5.2-1.3.4-2.5.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 5.9.2 4.9.4 4 .7 3 1 2.2 1.5 1.5 2.2.8 2.9.3 3.7 0 4.7c-.3.9-.5 1.9-.6 3.1C-.7 9.1-.7 9.5-.7 12s0 2.9.1 4.2c.1 1.2.3 2.2.6 3.1.3 1 .8 1.8 1.5 2.5.7.7 1.5 1.2 2.5 1.5.9.3 1.9.5 3.1.6 1.3.1 1.7.1 4.2.1s2.9 0 4.2-.1c1.2-.1 2.2-.3 3.1-.6 1-.3 1.8-.8 2.5-1.5.7-.7 1.2-1.5 1.5-2.5.3-.9.5-1.9.6-3.1.1-1.3.1-1.7.1-4.2s0-2.9-.1-4.2c-.1-1.2-.3-2.2-.6-3.1-.3-1-.8-1.8-1.5-2.5-.7-.7-1.5-1.2-2.5-1.5C16.2.4 15.2.2 14 .1 12.8 0 12.3 0 9.7 0H12zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.4-11.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z"/>
                    </svg>

                    </div>
                    <h3 className="fs-2 text-body-emphasis">Instagram</h3>
                    <p>Cek instagram kami untuk info yang menarik dan terbaru setiap harinya. Cek juga untuk mengetahui Diskon atau Event meriah yang akan kami gelar di masa yang akan datang.</p>
                    <a href="#" className="icon-link">
                    @reactbooks
                    <svg className="bi" aria-hidden="true"><use xlink:href="#chevron-right"/></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

//komponen footer
function Footer() {
    return(
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Scroll up</a></li>
                </ul>
                <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
            </footer>
        </div>
    )
}

function App() {
    return (
        <>
            <Header />
            <Hero />
            <ProductList />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

export default App
