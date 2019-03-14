1.various template directive
  v-once 一回だけ！
  v-pre
    what's for purpose
      .when raw mutache tag display
      .for prevent XSS
      .for compile speedup 
  v-html
    for purpose
      サーバーサイドからの文書をhtmlにする時
      XSSリスク高いので扱い注意！
  v-cloak
    描画の遅れ対策
  v-text
    mustache構文と同じ。
    多分mutacheの方がいい感じ
2.binding formula
　Javascript formula
    単一式のみbinding可能
　filter
    localとglobalあり。
    引数渡せる。呼び出し時は第一引数省力
3.v-bind omission description
