function For() {
    return (
        <div className="p-10 pb-28">
            <div className="text-3xl border-b p-1">繰り返し処理</div>
            <div>JAPAで記号を使う際には、演算子の前後に"全角スペース"を必要とします</div>
            <div className="p-1">
                <div className="pb-2">【ループ】</div>
                <div className="border p-2 lg:w-2/3">
                    リスト　＝　「りんご、みかん、ぶどう」<br />
                    ループ　リスト　＝＞　値<br />
                    &#x3000;表示（値）<br />
                    <br />
                    <p className="opacity-70">
                        出力：りんご<br />
                        &#x3000;&#x3000;&#x3000;みかん<br />
                        &#x3000;&#x3000;&#x3000;ぶどう<br />
                    </p>
                </div>
                <br />
                <div className="border p-2 lg:w-2/3">
                    ループ　数列（３）　＝＞　値<br />
                    &#x3000;表示（値）<br />
                    <br />
                    <p className="opacity-70">
                        出力：0<br />
                        &#x3000;&#x3000;&#x3000;1<br />
                        &#x3000;&#x3000;&#x3000;2<br />
                    </p>
                </div>
                このように任意の値を出力できます。
            </div>
        </div>
    )
}

export default For