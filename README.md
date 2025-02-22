# 日本語プログラミング言語「JAPA」

## 公開URL
- 9:00~21:00の公開（現在停止中）

  ~~http://nakao-keito.com:8003~~

## アプリケーション概要
- 気軽に日本語でプログラミングが書けるそんなアプリになっています。
- ドキュメントも用意しているのでプログラミングの入り口。そんな風になればいいなと思っています。

## 使用技術スタック
- フレームワーク: React
- デプロイ: AWS EC2
- 開発環境: Docker, Git

## 創意工夫
【ユーザー体験の向上】
- 日本語でコードを打つため、半角と全角の切り替えを使用するとユーザー体験の低下につながります。そのため**全て全角で書ける**ように実装いたしました。
- コードスペースとドキュメントページを行き来することが想定されるので、コードをローカルストレージに保存することでページ遷移時も**入力値を保持できる**ようにしました。

【ターゲットの理解】
- 「プログラミングの専門学校に興味があるけど合わなかったらどうしよう」という人に向けての比較的**学習コストが低く**、**実際のプログラミング言語に近い**という特性を持った言語として開発しました。

## 実際のアプリケーション画像
<table>
  <tr>
    <td>
      コードスペース
    </td>
    <td>
      ドキュメントページ
    </td>
  </tr>
  <tr>
    <td>
      <img width="1440" alt="スクリーンショット 2024-12-19 14 51 01" src="https://github.com/user-attachments/assets/44d15028-761f-4e59-b46a-074158df08c4" />
    </td>
    <td>
      <img width="1440" alt="スクリーンショット 2024-12-21 14 41 32" src="https://github.com/user-attachments/assets/2d22ed8a-2c3d-492c-9dd8-59322387fe4e" />
    </td>
  </tr>
</table>

## 楽しかったこと！！（コアな内容）
- 日本語で変数を定義するのは危険なのでオブジェクトのキーとして定義
```ts
変数　＝　ハローワールド
// vars["変数"] = "ハローワールド"
```
- 構文解析を使用していないのでゴリゴリの**正規表現**を使用

　-> そうすると、"二次元配列"や"関数の中の関数"などを認識できないのでそこはループを使用
```ts
const initial_types = {
        space: /^[ 　]*$/,
        if: /^条件１　(.+)$/,  // If文
        elseIf: /^条件[２３４５６７８９]　(.+)$/,  // Else if文
        else: /^例外$/,  // Else文
        for: /^ループ　(.+)　＝＞　(.+)$/,  // For文
        print: /^表示（(.*)）$/, //出力関数   
        assign: /^([^＝]+)　＝　([^＝]+)$/,  // 代入式
        funcs: /^(?:[^。]+(?:。[^。]+)+)$/,
    }
const arg_types = {
        funcs: /^(?:[^。]+(?:。[^。]+)+)$/,
        func: /^(.+)（(.*)）$/,  // 関数
        list: /^「(.+?(?:、.+)*)」$/,  // リスト
        item: /^(.+?)((?:「(.*?)」)+)$/,  // リストの値
        num: /^ー?[０１２３４５６７８９]+$/,  // 数字
        fin: /(　＋　|　ー　|　＊　|　｜　|　％　)/
    }
const func_types = {
        int: /^数字（(.*)）$/,
        str: /^文字（(.*)）$/,
        split: /^分割（(.*)）$/,
        input: /^取得（(.*)）$/,
        push: /^追加（(.*)）$/,
        delete: /^削除（(.*)）$/,
        len: /^個数（(.*)）$/,
        range: /^数列（(.*)）$/,
    }
```
- 引き算の記号を`ー`にしたためハローワールドが`"ハロ" - "ワ" - "ルド"`などになってしまった。そのため記号を使用する際は全て前後に全角スペースを入れるように実装した
- 割り算の記号で`/`をできない（全角のみで実装予定のため）ので`｜`で割り算を実装`＄`で論理和を実装
- ループ処理を実装する際に代入する変数を作らないといけないためa~zを使う様に指定した
```ts
ループ　「０、１、２」　＝＞　値
// for (const a of [0, 1, 2]) {
//    vars["値"] = a;
```
```ts
const abc_list: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
```
