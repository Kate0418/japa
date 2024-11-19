import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import Logic from "../components/doc/Logic"
import TopButton from "../layouts/doc/TopButton"

function DocLogic() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <Logic />
            </div>
            <TopButton />
        </>
    )
}

export default DocLogic