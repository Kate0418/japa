import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import Print from "../components/doc/Print"
import TopButton from "../layouts/doc/TopButton"

function DocPrint() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <Print />
            </div>
            <TopButton />
        </>
    )
}

export default DocPrint