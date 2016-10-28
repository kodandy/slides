## React Native for ...

---

## 自己紹介

### @besutome
![right](./profile.png)

### 株式会社sapeet Software Developer

React Native Meetupとか主催してます。  
気づいたら10月からスタートアップの創業メンバーになってました。

---

## 株式会社sapeet

http://sappet.com

### オンラインの試着サービス

## デザイナー探し中！

![right](./sapeet.png)

---

## React Native for ...

---

# React Native
https://facebook.github.io/react-native/

## みんなだいすきReact Native
## AndroidとiOS

---

# React Native for Web
https://github.com/necolas/react-native-web

## star数 3242
## Twitterの人がほとんど一人でつくってる感じ  

---

### React NativeのコンポーネントとAPIをwebでも使えるようにした

---

### TwitterでいろんなチームがReactアプリケーションつくってて、
### コンポーネントを共有したかったので、せっかくだからOSSにした

---

## React Webとかもある
https://github.com/taobaofed/react-web

## タオバオの2人がメインで開発

---

# React Native for macOS
https://github.com/ptmt/react-native-macos

## star数 7923

---

### 上位10名のコントリビューターのうち、6人がFacebookの人だった  
#### 各ディレクトリごとにpackage.jsonが配置されたりしててやばい

---

# React Desktop
https://github.com/gabrielbull/react-desktop

## star数 5257

---

### React UI ComponentsがmacOS SierraとWindows 10で動く  
### node-webkitかElectron.jsで動かす

---

# React Native plugin for Universal Windows Platform
https://github.com/ReactWindows/react-native-windows

# FacebookとWindows公認

---

## プラットフォーム
+ Windows 10
+ Windows 10 Mobile
+ Xbox One (UWP)

---

#### JavaScriptのReact DOMを、ネイティブプラットフォーム上のビューマネージャーに対するメソッド呼び出しに変換します。おかげで開発者は、ネイティブモジュールを直接呼び出す代わりに、JavaScriptの関数を実行すればよいのです。UWPの場合、ビューマネージャーとネイティブモジュールはC#で実装されており、ビューマネージャーはXAML要素のインスタンスを生成して操作します。

---

## React NativeのjsコードがC#に変換される

### JavaScriptコードは、Chakraによって処理

---

## VSCodeにも対応
https://github.com/Microsoft/vscode-react-native

### React Native本体のソースにコントリビュートする予定らしい

---

# React VR
https://developer.oculus.com/webvr/

## まだ開発中

---

### React VRは二つのコンポーネントからなっており、ボタンやテキスト表示を提供する

### THREE.jsベースのUIライブラリと、それをReactのシステムに組み込むReact VRライブラリから構成

---

```js
const React       = require('React');
const View        = require('View');
const AppRegistry = require('AppRegistry');
const VrText      = require('VrText');

class HelloReactVR extends React.Component {
  sconstructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View>
        <VrGlobe source={"office_lobby.jog"} />
        <VrText
          style={{
            position: 'absolute',
            fontSize={0.4},
          }}
         />
      </View>
    );
  }
}
 
AppRegistry.registerComponent('HelloReactVR', () => HelloReactVR);   
```
---

```js
render() {
  return (
    <View>
      <VrGlobe source={"office_lobby.jog"} />
      <VrText
        style={{
          position: 'absolute',
          fontSize={0.4},
        }}
      />
    </View>
  );
}
```

---

# デザイナー
# 募集中！
