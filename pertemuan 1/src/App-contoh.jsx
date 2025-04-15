import './App.css'

// komponen header
function Header() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

// komponen konten
function Content() {
    return (
        <h1>Content</h1>
    )
}

// komponen footer
function Footer() {
    return(
        <footer>
            <h2>NF Academy</h2>
            <p>Create by React JS</p>
        </footer>
    )
}

// Hello
function Hello() {
    const nama = "Bintang";
    return(
        <>
            <h2>Hello React</h2>
            <p>Saya {nama} - Seorang Website Developer</p>
        </>
    )
}

// Greetings
function Greeting(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Profile
function Profile(props) {
    return(
        <>
            <h3>Nama: {props.name}</h3>
            <p>Umur: {props.age}</p>
            <p>Asal: {props.country}</p>
        </>
    )
}

function App() {
    return (
        <>
        <Header />
        <Content />
        <Hello />
        <Greeting name="Udin" />
        <Greeting name="Jono" />
        <Profile name="Tono" age={24} country="Indonesia"/>
        <Footer />
        </>
    )
}

export default App
