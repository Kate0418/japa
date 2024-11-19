import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import Arith from "../components/doc/Arith"
import TopButton from "../layouts/doc/TopButton"

function DocArith() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <Arith/>
            </div>
            <TopButton />
        </>
    )
}

export default DocArith