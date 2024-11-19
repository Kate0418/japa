function Assign() {
    return (
        <div className="p-10 pb-28">
            <div className="text-3xl border-b p-1">代入式</div>
            <div>JAPAで記号を使う際には、演算子の前後に"全角スペース"を必要とします</div>
            <div id="value" className="p-1 pb-10">
                <div className="pb-2">【変数への代入】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　ハローワールド<br />
                    表示（変数）<br />
                    <br />
                    <p className="opacity-70">出力：ハローワールド</p>
                </div>
                このように任意の文字列を使用することができます
            </div>
            <div id="list" className="p-1">
                <div className="pb-2">【配列の値への代入】</div>
                
                <div className="border p-2 lg:w-2/3">
                    リスト　＝　「りんご、みかん、ぶどう」<br />
                    リスト「１」　＝　すいか<br />
                    表示（リスト）<br />
                    <br />
                    <p className="opacity-70">出力：["りんご","すいか","ぶどう"]</p>
                </div>
                このように任意の"全角"数字を使用することができます
            </div>
        </div>
    )
}

export default Assign