
# DailyReport![icon5](https://user-images.githubusercontent.com/57471744/164414979-a79bccae-40e3-46fe-a5c9-74f0e23549f1.png)

## 起動方法
<br/>

### フロント
`npm start`
<br/>
<br/>
Open http://localhost:8000 with your browser to see the result.

### バックエンド
`cd src/server && node server.js` 
<br/>
<br/>
Open http://localhost:3000 with your server to see the result.


## バージョン

node v14.17.3
npm 6.14.13
<br/>

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
- import の順番を自動ソートし、視認性を上げるため
  - import順番が重要なライブラリに関しては、スルー
- セミコロン有無の統一
- タブの間隔統一
- 型・推奨されていない構文エラー表示するため

7・husky + lint-staged
-  push・commit 前に lint と type-check を走らせ、コードの品質を担保するため


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

-  外部サービスへのアクション関数を定義

### alert

-  swalライブラリに使用するalert文を定義

### components

-  UIを定義
-  アトミックデザインを採用
  - atoms
    - ロジックは置かない
    - 独立したコンポーネントにする
  - molecules
    - モジュールごとにフォルダを分ける 

### context

-  globalなcontextを定義

### images

-  使用する画像データ

### mockData

-  テストやローカル検証用のモックオブジェクト

### pages

-  pageを構成する
-  Gatsby.jsはpagesのファイルがそのままパスになる

### server

-  apiサーバー(Node.js)

### services

-  汎用的な関数を定義

### theme

-  アプリ全体のフォント・カラーなどを定義

### types

-  使用頻度の高い型を定義

<br/>
## 開発注意点

-  hooks の memo を使用して、無駄な再レンダリングを避ける作りにする
-  番組表の取得件数が多かった時にバックエンドの負荷を防ぐためローカルキャッシュを行うフェッチングライブラリ採用(react-query)
-  今後の運用を考え、変更に強く属人化しない設計にしたいと考えクリーンアーキテクチャライクな設計を採用
