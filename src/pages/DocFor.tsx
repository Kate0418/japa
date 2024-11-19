import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import For from "../components/doc/For"
import TopButton from "../layouts/doc/TopButton"

function DocPrint() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <For />
            </div>
            <TopButton />
        </>
    )
}

export default DocPrint