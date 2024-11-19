function Logic() {
    return (
        <div className="p-10 pb-28">
            <div className="text-3xl border-b p-1">論理演算子</div>
            <div>JAPAで記号を使う際には、演算子の前後に"全角スペース"を必要とします</div>
            <div className="p-1 pb-10">
                <div className="pb-2">【論理積】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　１７<br />
                    条件１　変数　＞＝　１６　＆　変数　＜＝　１８<br />
                    &#x3000;表示（学生です）<br />
                    <br />
                    <p className="opacity-70">出力：学生です</p>
                </div>
                このように全ての条件がTrueの場合に処理を実行します。
            </div>
            <div className="p-1 pb-10">
                <div className="pb-2">【論理和】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　高校生<br />
                    条件１　変数　＝＝　中学生　＄　変数　＝＝　高校生<br />
                    &#x3000;表示（学生です）<br />
                    <br />
                    <p className="opacity-70">出力：学生です</p>
                </div>
                このようにいずれかの条件がTrueの場合に処理を実行します。
            </div>
        </div>
    )
}

export default Logic