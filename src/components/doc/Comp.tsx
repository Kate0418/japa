function Print() {
    return (
        <div className="p-10 pb-28">
            <div className="text-3xl border-b p-1">比較演算子</div>
            <div>JAPAで記号を使う際には、演算子の前後に"全角スペース"を必要とします</div>
            <div className="p-1 pb-10">
                <div className="pb-2">【等しい】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　５<br />
                    条件１　変数　＝＝　５<br />
                    &#x3000;表示（等しいです）<br />
                    <br />
                    <p className="opacity-70">出力：等しいです</p>
                </div>
                このように等しい場合はTrue,等しくない場合はFalseを返します。
            </div>
            <div className="p-1 pb-10">
                <div className="pb-2">【等しくない】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　５<br />
                    条件１　変数　！＝　３<br />
                    &#x3000;表示（等しくありません）<br />
                    <br />
                    <p className="opacity-70">出力：等しくありません</p>
                </div>
                このように等しくない場合はTrue,等しい場合はFalseを返します。
            </div>
            <div className="p-1 pb-10">
                <div className="pb-2">【より大きい,小さい】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　５<br />
                    条件１　変数　＞　３<br />
                    &#x3000;表示（３より大きいです）<br />
                    <br />
                    <p className="opacity-70">出力：３より大きいです</p>
                </div>
                <br />
                <div className="border p-2 lg:w-2/3">
                    変数　＝　２<br />
                    条件１　変数　＜　３<br />
                    &#x3000;表示（３より大きいです）<br />
                    <br />
                    <p className="opacity-70">出力：３より小さいです</p>
                </div>
                このようにより大きい,小さいときにTrueを返し、それ以外の場合はFalseを返します。
            </div>
            <div className="p-1 pb-10">
                <div className="pb-2">【以上,以下】</div>
                <div className="border p-2 lg:w-2/3">
                    変数　＝　５<br />
                    条件１　変数　＞＝　３<br />
                    &#x3000;表示（３より大きいです）<br />
                    <br />
                    <p className="opacity-70">出力：３以上ですです</p>
                </div>
                <br />
                <div className="border p-2 lg:w-2/3">
                    変数　＝　２<br />
                    条件１　変数　＜＝　３<br />
                    &#x3000;表示（３より大きいです）<br />
                    <br />
                    <p className="opacity-70">出力：３以下です</p>
                </div>
                このように以上,以下のときにTrueを返し、それ以外の場合はFalseを返します。
            </div>
        </div>
    )
}

export default Print