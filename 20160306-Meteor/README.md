#[fit] MeteorとReact Native


### @besutome

### #meteorjs_jp

---

#### フリーでフロントエンドやってます
### 最近はReact Native書いてます

![fit](profile.png)

---

### なんでMetoerとReact Native?

MeteorとReact Naiveの記事  
#### http://blog.differential.com/easily-connect-react-native-to-a-meteor-server/

---

### React Naitve書いてるよね？

---

### React Naitive?

#### ネイティブのスマホアプリをReactjsで書けるようになる

---

+ ios / android両方でうごくものではない  
+ 各プラットフォームごとの実装が必要

---

#### 様々なプラットフォームに対応するものではない

#### Reactの学習コストだけでスマホアプリ作れるようになる

---

`index.ios.js`

```js
import React, {AppRegistry} from 'react-native';
import App from './src/App.ios';

class Sample extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Sample', () => Sample);
```

---

`/src/App.ios.js`

```js
import React, {
  Text,
  View,
  ActivityIndicatorIOS,
  TabBarIOS,
  NavigatorIOS,
  StyleSheet,
} from 'react-native';

class App extends React.Component {
  render() {
      return(
        <View style={styles.activityIndicator}>
          <ActivityIndicatorIOS
            animating={true}
            size={'large'}
          />
          <View>
            <Text style={styles.message}>Please wait</Text>
          </View>
        </View>
      );
   }
}

...
```

---

`/src/App.ios.js`

```js
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 20,
    color: '#656565',
  },
});

module.exports = App;
```

---

### MetoerとReact Nativeの使いドコロ

Easily Connect React Native to a Meteor Server  
#### http://blog.differential.com/easily-connect-react-native-to-a-meteor-server/

---

要約

## Parseが死んだ？
## Meteor使えばいいじゃん！

---

## Parse?

2017/01/28にサービス終了予定のMBaaS  
モバイル開発における諸々をやってくれる

---

## Parse

+ Push通知
+ ログイン機能
+ アクセス解析

---

### 他にもいい感じのMBaaSはあります

+ AWS MobileHub

#### わざわざこのためにMeteorつかななくても...

---
## DDP?

+ Meteor独自のWebScoketプロトコル  
+ スマホで更新したデータがWebにも即反映されたりする

#### データを即時同期したいサービスに便利

---

### DDP以外の機能がおおきすぎ  

+ Firebase

#### わざわざこのためにMeteorつかななくても...

---

## Firebase?

+ Googleに買収されたbaas
+ リアルタイムデータ同期
+ データ同期のための機能だけ

#### データ同期したいならFirebaseでいいのでは？

---

### MetoerとReact Nativeの使いドコロ

+ WebにMeteor使いたい
+ accounts-ui等の便利なライブラリ使いたい

#### データ同期が必要な時しか使わない気がする

---

最後に

### Meteorとは関係ないけど...

---

### 興味があるようならReact Nativeの話します
