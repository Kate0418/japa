function If() {
    return (
        <div className="p-10 pb-28">
            <div className="text-3xl border-b p-1">条件分岐</div>
            <div>JAPAで記号を使う際には、演算子の前後に"全角スペース"を必要とします</div>
            <div id="if" className="p-1 pb-10">
                <div className="pb-2">【条件１〜N】</div>
                <div className="border p-2 lg:w-2/3">
                    学年　＝　１<br />
                    条件１　学年　＝＝　１<br />
                    &#x3000;表示（１年生です）<br />
                    条件２　学年　＝＝　２<br />
                    &#x3000;表示（２年生です）<br />
                    <br />
                    <p className="opacity-70">出力：１年生です</p>
                </div>
                条件によって処理を分岐させる場合はこのように書きます。<br />
                条件に当てはまった場合の処理は文頭に全角スペースを入れることで表現することができます。
            </div>
            <div id="else" className="p-1">
                <div className="pb-2">【例外】</div>
                <div className="border p-2 lg:w-2/3">
                    職業　＝　会社員 <br />
                    条件１　職業　＝＝　学生<br />
                    &#x3000;表示（学生です）<br />
                    例外<br />
                    &#x3000;表示（学生ではありません）<br />
                    <br />
                    <p className="opacity-70">出力：学生ではありません</p>
                </div>
                全ての条件に当てはまらなかった場合の処理はこのように表現することができます。<br />
            </div>
        </div>
    )
}

export default If