#[fit] Meteorをはじめさせるための3ステップ

### @besutome

### #meteorjs_jp

---

## 自己紹介

### フリーでフロントエンドやってるやつ

![fit](profile.png)

---

#[fit] Meteor書いてる人ー？

---

#[fit] 仕事でMeteor書いてる人ー？

---

#[fit] ios,android,webで同じ機能のサービスを作る!

---

#[fit] それ、Meteorでできるよ

---

# Meteorの特徴

+ SPA
+ mongoのみ
+ 環境構築が楽（手軽に開発環境を共通化できる）
+ すぐリリースできる（5万円也）

---

### 要件

+ ios,android,webで同じ機能
+ 現状のMySQLのデータを利用する
+ B2B(small B)
+ リテラシー低めの人がターゲット
+ 開発リソースが足りない（Web側が足りなそう）

---

# SQL使うんかい！

---

## 救世主

# [meteor-mysql](https://github.com/numtel/meteor-mysql)

---

### meteor-mysql

```js
var liveDb = new LiveMysql(Meteor.settings.mysql);

Meteor.publish('allPlayers', function(){
  return liveDb.select(
    `SELECT * FROM players ORDER BY score DESC`,
    [ { table: 'players' } ]
  );
});
```

---

## MeteorはMySQLも対応してます！
### (クエリ直書きだけど...)

---

## 他の懸念点

+ 学習コスト
+ フロントエンドどうする問題

---

##[fit] 社内で既にNode(Sails)を使っている

---

##[fit] 学習コストもそこまで高くない！

---

##[fit] 終わらないフロント論争

---

##[fit] すでに他のプロジェクトは全てReact!

---

> ていうかMeteorってアプリとウェブでUI違う場合にメリットなくね？
-- 上司

---

> そっすね
-- ぼく

---

##[fit] 結果

---

#[fit] React Native

---

![fit](dead.png)

---

#[fit] どうやってゴリ押しするか？

---

#[fit] Meteorをはじめるための3ステップ

### @besutome

### #meteorjs_jp

---

## Meteor Guide

#[fit] http://guide.meteor.com/

---

## Meteor Formus

#[fit] https://forums.meteor.com/

---

## Meteor in Action

#[fit] https://www.manning.com/books/meteor-in-action

---

## Meteor Devshop

#[fit] http://livestream.meteor.com/

---

## Meteor

#[fit] http://docs.meteor.com/#/full/quickstart

---

## Discover Meteor

#[fit] https://book.discovermeteor.com/

---

## crater.io

#[fit] https://crater.io/

---

#[fit] 英語でググったらいろいろ出てくるよ！
