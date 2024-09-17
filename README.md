# このnext.jsプロジェクトで学ぶには(前提)
### step1
まずnpm install @supabase/supabase-jsを実行します

### step2
utilsディレクトリにあるsupabase.tsに書いてあることをそのまま真似します。
app直下のutilsの中に全く同じファイルを入れればいいのです

### step3
ルートに.env.localファイルを作成します。これはsupabaseプロジェクトのトップにあるconnectボタンを教えてnext.jsの欄を見つければ書いてあるでしょう

これで前提準備は完了しました。ここからあなたたちは
table database
auth 
storage(主に写真入れるよう)
を学ぶことができるため、とりあえず、ウェブアプリケーションを作れるようになります。
next.jsでなくてもreactで良いような気がしましたが、多分問題ないでしょう


# supabase tableのアクセス
まず必要なものはテーブルの名前を確認してtableFetchにいれる
supabaseのfrom部分に
supabase.from("storys")....このようなところに入れていこうあとは戻り地を設定してエキスポートすることでどっかでインポートしたらpage.tsxのようにすれば取り出せる
