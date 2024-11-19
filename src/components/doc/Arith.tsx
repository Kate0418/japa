function Arith() {
    return (
        <div className="p-10 pb-28">
            <div className="text-3xl border-b p-1">算術演算子</div>
            <div>JAPAで記号を使う際には、演算子の前後に"全角スペース"を必要とします</div>
            <div className="p-1 pb-10">
                <div className="pb-2">【加法】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　２　＋　３<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：5</p>
                </div>
                <br />
                <div className="border p-2 lg:w-2/3">
                    変数　＝　ハロー　＋　ワールド<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：ハローワールド</p>
                </div>
                このように数値を加算、文字列を結合することができます。
            </div>
            <div className="p-1 pb-10">
                <div className="pb-2">【減法】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　5　ー　３<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：2</p>
                </div>
                このように数値を減算することができます。
            </div>
            <div className="p-1 pb-10">
                <div className="pb-2">【乗法】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　２　＊　３<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：6</p>
                </div>
                このように数値を乗算することができます。
            </div>
            <div className="p-1 pb-10">
                <div className="pb-2">【除法】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　6　｜　２<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：3</p>
                </div>
                このように数値を除算することができます。
            </div>
            <div className="p-1 pb-10">
                <div className="pb-2">【剰余】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　５　％　２<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：１</p>
                </div>
                このように除算の余りを算出することができます。
            </div>
        </div>
    )
}

export default Arith