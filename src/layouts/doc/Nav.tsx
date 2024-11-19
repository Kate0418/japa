function Nav() {
    return (
        <div className="flex flex-col border">
            <a href="/doc">
                <div className="border-b flex justify-center p-3">
                    <div className="text-2xl">目次</div>
                </div>
            </a>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">出力関数</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/print" className="block">・ハローワールド</a>
                </div>
            </details>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">型</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/type" className="block">・文字列型</a>
                    <a href="/doc/type" className="block">・整数型</a>
                    <a href="/doc/type" className="block">・配列型</a>
                </div>
            </details>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">代入式</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/assign" className="block">・変数への代入</a>
                    <a href="/doc/assign" className="block">・配列の値への代入</a>
                </div>
            </details>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">関数</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/func" className="block">・表示（）</a>
                    <a href="/doc/func" className="block">・文字（）</a>
                    <a href="/doc/func" className="block">・数字（）</a>
                    <a href="/doc/func" className="block">・追加（）</a>
                    <a href="/doc/func" className="block">・削除（）</a>
                    <a href="/doc/func" className="block">・個数（）</a>
                    <a href="/doc/func" className="block">・数列（）</a>
                    <a href="/doc/func" className="block">・取得（）</a>
                    <a href="/doc/func" className="block">・分割（）</a>
                </div>
            </details>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">条件分岐</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/if" className="block">・条件１〜N</a>
                    <a href="/doc/if" className="block">・例外</a>
                </div>
            </details>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">繰り返し処理</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/for" className="block">・ループ</a>
                </div>
            </details>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">算術演算子</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/arith" className="block">・加法</a>
                    <a href="/doc/arith" className="block">・減法</a>
                    <a href="/doc/arith" className="block">・乗法</a>
                    <a href="/doc/arith" className="block">・除法</a>
                    <a href="/doc/arith" className="block">・剰余</a>
                </div>
            </details>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">比較演算子</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/comp" className="block">・等しい</a>
                    <a href="/doc/comp" className="block">・等しくない</a>
                    <a href="/doc/comp" className="block">・より大きい,小さい</a>
                    <a href="/doc/comp" className="block">・以上,以下</a>
                </div>
            </details>
            <details className="border-b flex flex-col p-3">
                <summary className="text-xl">論理演算子</summary>
                <div className="pl-6 border-t">
                    <a href="/doc/logic" className="block">・論理積</a>
                    <a href="/doc/logic" className="block">・論理和</a>
                </div>
            </details>
        </div>
    )
}

export default Nav