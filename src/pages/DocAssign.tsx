import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import Assign from "../components/doc/Assign"
import TopButton from "../layouts/doc/TopButton"

function DocAssign() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <Assign />
            </div>
            <TopButton />
        </>
    )
}

export default DocAssign