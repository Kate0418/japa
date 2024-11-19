function Type() {
    return (
        <div className="p-10 pb-28">
            <div className="text-3xl border-b p-1">型</div>
            <div className="p-1 pb-5">
                <p>JAPAは3つの型が存在します</p>
                <ul className="pt-1 list-disc flex list-inside">
                    <li className="px-2">文字列型</li>
                    <li className="px-2">整数型</li>
                    <li className="px-2">配列型</li>
                </ul>
            </div>
            <div id="str" className="p-1 pb-10">
                <div className="pb-2">【文字列型】</div>
                <div className="border p-2 lg:w-2/3">
                    表示（ハローワールド）<br />
                    <br />
                    <p className="opacity-70">出力：ハローワールド</p>
                </div>
                このように任意の文字列を使用することができます。
            </div>
            <div id="int" className="p-1 pb-10">
                <div className="pb-2">【整数型】</div>
                <div className="border p-2 lg:w-2/3">
                    表示（４０４）<br />
                    <br />
                    <p className="opacity-70">出力：404</p>
                </div>
                <br />
                <div className="border p-2 lg:w-2/3">
                    表示（ー２９３）<br />
                    <br />
                    <p className="opacity-70">出力：-293</p>
                </div>
                このように任意の"全角"数字を使用することができます。
            </div>
            <div id="arr" className="p-1">
                <div className="pb-2">【配列型】</div>
                <div className="border p-2 lg:w-2/3">
                    表示（「りんご、みかん、ぶどう」）<br />
                    <br />
                    <p className="opacity-70">出力：["りんご","みかん","ぶどう"]</p>
                </div>
                <br />
                <div className="border p-2 lg:w-2/3">
                    表示（「太郎、１８、「愛知県、名古屋市、中村区」」）<br />
                    <br />
                    <p className="opacity-70">出力：["太郎",18,["愛知県","名古屋市","中村区"]]</p>
                </div>
                このように「」の内部に"、"を区切りとして値を格納することができます。
            </div>
        </div>
    )
}

export default Type