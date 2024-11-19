import Header from "../layouts/Header"
import Nav from "../layouts/doc/Nav"
import Type from "../components/doc/Type"
import TopButton from "../layouts/doc/TopButton"

function Doc() {
    return (
        <>
            <Header />
            <div className="grid lg:grid-cols-[1fr_5fr]">
                <Nav />
                <Type />
            </div>
            <TopButton />
        </>
    )
}

export default Doc