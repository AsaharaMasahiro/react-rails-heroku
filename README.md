# 環境

node v14.17.3
npm 6.14.13

# アーキテクチャ

src</br>
├── actions
├── components
├── context
├── images  
├── mockData  
├── pages  
├── server  
├── services  
├── theme  
├── types
├── utils
└── presentation

# Development environment

## eslint + prettier の導入

import の順番を自動ソート
セミコロン有無の統一
タブの間隔統一
型エラーの表示

## husky + lint staged の導入

コードの品質担保のため push・commit 前に lint と type-check を走らせる
\*commit と push が少し遅くなっているので注意
