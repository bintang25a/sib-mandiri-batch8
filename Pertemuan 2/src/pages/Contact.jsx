import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

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
                    <svg className="bi" aria-hidden="true"><use xlinkHref="#chevron-right"/></svg>
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
                    <svg className="bi" aria-hidden="true"><use xlinkHref="#chevron-right"/></svg>
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
                    <svg className="bi" aria-hidden="true"><use xlinkHref="#chevron-right"/></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function ContactLayout() {
    return (
        <>
            <Header />
            <Contact />
            <Footer />
        </>
    )
};