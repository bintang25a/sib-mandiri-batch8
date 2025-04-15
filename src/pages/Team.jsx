import Footer from "../component/Footer/Footer.jsx";
import Header from "../component/Header/Header.jsx";

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

export default function TeamLayout() {
    return (
        <>
            <Header />
            <Team />
            <Footer />
        </>
    )
}