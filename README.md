
# DailyReport
## 起動方法

### フロント
`npm start`
<br/>
Open http://localhost:8000 with your browser to see the result.

### バックエンド
`cd src/server && node server.js` 
<br/>
Open http://localhost:3000 with your server to see the result.


## バージョン

node v14.17.3
npm 6.14.13

## 技術選定
1・React 

-  対応ライブラリが多く、リッチな UI を実装できるため
-  DOM 操作のパフォーマンスチューニングを自動でしてくれるため
-  コンポーネント指向であり、再利用性と拡張性が高いため

2・TypeScript

-  型宣言をすることで、開発効率、コードの安全性と可読性を高めるため
-  ビルドエラーを事前に解決することで修正コストを下げるため

3・Gatsby.js

-  ssg にする(動的コンテンツ以外)ことで、初回レンダリングの読み込みを早くするため
-  webpack周りの設定を省くため

4・Material UI(v4)
- SonarがMaterial-uiベースでUIが作られているため

5・PWA(Progressive Web Apps)
-  DailyReportはモバイル端末でも使用することが多く、モバイルでも快適に使用できるようにするため

7・eslint + prettier
- import の順番を自動ソート
  - import順番が重要なライブラリに関しては、スルー
- セミコロン有無の統一
- タブの間隔統一
- 型・推奨されていない構文エラー表示

7・husky + lint-staged
-  コードの品質担保のため push・commit 前に lint と type-check を走らせる


## アーキテクチャ

src</br>
　　　 ├── actions  
　　　 ├── alert  
　　　 ├── components  
　　　 ├── context  
　　　 ├── images  
　　　 ├── mockData 　  
　　　 ├── pages  
　　　 ├── server  
　　　 ├── services  
　　　 ├── theme      
　　　 └── types

### actions

-  外部サービスへのアクション関数を定義する

### alert

-  swalライブラリに使用するalert文を定義する

### components

-  UIライブラリ
-  アトミックデザインを採用
  -

### hooks

-  汎用的な hooks と API コールに関するカスタムフックを定義

### lib

-  例外クラスと API クライアントクラス

### mocks

-  テストやローカル検証用のモックオブジェクト

### services

-  API コール系の処理をアプリケーションサービスとして定義

### pages

-  Next.js における自動ルーティングのため pages に index 定義

## 開発注意点

-  hooks の memo を使用して、無駄な再レンダリングを避ける作りにする
-  番組表の取得件数が多かった時にバックエンドの負荷を防ぐためローカルキャッシュを行うフェッチングライブラリ採用(react-query)
-  今後の運用を考え、変更に強く属人化しない設計にしたいと考えクリーンアーキテクチャライクな設計を採用
