function Print() {
    return (
        <div className="p-10 pb-28">
            <div className="text-3xl border-b p-1">関数</div>
            <div className="p-1 pb-10">
                <div id="print" className="pb-2">【表示】</div>
                <div className="border p-2 lg:w-2/3">
                    表示（ハローワールド）<br />
                    <br />
                    <p className="opacity-70">出力：ハローワールド</p>
                </div>
                このように任意の値を出力できます。
            </div>
            <div id="str" className="p-1 pb-10">
                <div className="pb-2">【文字】</div>
                <div className="border p-2 lg:w-2/3">
                    表示（文字（１８）　＋　歳）<br />
                    <br />
                    <p className="opacity-70">出力：18歳</p>
                </div>
                整数型を文字列型に変換することができます。
            </div>
            <div id="int" className="p-1 pb-10">
                <div className="pb-2">【数字】</div>
                <div className="border p-2 lg:w-2/3">
                    表示（数字（１８））<br />
                    <br />
                    <p className="opacity-70">出力：18</p>
                </div>
                文字列型を整数型に変換することができます。
            </div>
            <div id="push" className="p-1 pb-10">
                <div className="pb-2">【追加】</div>
                <div className="border p-2 lg:w-2/3">
                    リスト　＝　「りんご、みかん」<br />
                    リスト。追加（ぶどう）<br />
                    表示（リスト）<br />
                    <br />
                    <p className="opacity-70">出力：["りんご","みかん","ぶどう"]</p>
                </div>
                配列に値を追加することができます。
            </div>
            <div id="delete" className="p-1 pb-10">
                <div className="pb-2">【削除】</div>
                <div className="border p-2 lg:w-2/3">
                    リスト　＝　「りんご、みかん、ぶどう」<br />
                    リスト。削除（１）<br />
                    表示（リスト）<br />
                    <br />
                    <p className="opacity-70">出力：["りんご","ぶどう"]</p>
                </div>
                配列の値を削除することができます。
            </div>
            <div id="len" className="p-1 pb-10">
                <div className="pb-2">【個数】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　個数（ハローワールド） <br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：7</p>
                </div>
                <br />
                <div className="border p-2 lg:w-2/3">
                    変数　＝　個数（「りんご、みかん、ぶどう」）<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：3</p>
                </div>
                文字列や配列の個数を取得することができます。
            </div>
            <div id="range" className="p-1 pb-10">
                <div className="pb-2">【数列】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　数字（５）<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：[0,1,2,3,4]</p>
                </div>
                0から任意の数値分の配列を取得することができます。
            </div>
            <div id="input" className="p-1 pb-10">
                <div className="pb-2">【取得】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　取得（）<span className="opacity-70">入力エリア：ハローワールド</span><br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：ハローワールド</p>
                </div>
                入力エリアから値を"文字列"として取得することができます。
            </div>
            <div id="split" className="p-1">
                <div className="pb-2">【分割】</div>
                <div className="border p-2 lg:w-2/3">
                    文字　＝　りんご　みかん　ぶどう<br />
                    変数　＝　文字。分割（　）<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：["りんご","みかん","ぶどう"]</p>
                </div>
                文字列を任意の文字列を区切りとして配列に変換することができます
            </div>
        </div>
    )
}

export default Print