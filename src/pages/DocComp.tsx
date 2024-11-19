import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import Comp from "../components/doc/Comp"
import TopButton from "../layouts/doc/TopButton"

function DocComp() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <Comp />
            </div>
            <TopButton />
        </>
    )
}

export default DocComp