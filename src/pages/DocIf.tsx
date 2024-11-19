import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import If from "../components/doc/If"
import TopButton from "../layouts/doc/TopButton"

function DocIf() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <If />
            </div>
            <TopButton />
        </>
    )
}

export default DocIf