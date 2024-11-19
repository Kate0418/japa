import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import Top from "../components/doc/Top"
import TopButton from "../layouts/doc/TopButton"

function Doc() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <Top />
            </div>
            <TopButton />
        </>
    )
}

export default Doc