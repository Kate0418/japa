import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import Func from "../components/doc/Func"
import TopButton from "../layouts/doc/TopButton"

function DocFunc() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <Func />
            </div>
            <TopButton />
        </>
    )
}

export default DocFunc