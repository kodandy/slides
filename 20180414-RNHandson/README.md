React Native ハンズオン
===

## @besutome フリーランス フロントエンドエンジニア
### React Native Organizer

![right](./profile.png)

# セットアップ

## 必要なツール

**Mac**

* Commnad Line Tools
* Homebrew

## Node.js のインストール

*バージョン管理したい場合は`ndenv`などでも*

```sh
$ brew update
$ brew install node
$ brew install watchman
```

## React Nativeのインストール

```sh
$ npm install -g create-react-native-app
```

## Expoのインストール

スマホに以下のアプリをインストールしてください。  
Expoを使うことで、スムーズに開発することができます。

[Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)  
[iOS](https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8)


## プロジェクトの作成

```sh
$ create-react-native-app handson
$ cd handson
$ npm start
```

ExpoアプリからQRコードをスキャンすると実機で、`i`を押すとエミュレータが立ち上がります。  
（QRコードの方は、ネットワークの設定などで接続できないこともあります）

どうしてもうまくいかない場合は、公式上でもエミュレータがあるのでそちらで  
https://facebook.github.io/react-native/docs/tutorial.html

# React 概要

- FaceBook発のJSライブラリ
- コンポーネントを用いて、アプリケーションを実装

### 特徴
- コンポーネント
- JSX
- 仮想DOM

# React Native概要

- Reactを用いてネイティブアプリを構築できるフレームワーク
- JavaScriptからネイティブのAPIが呼ばれる

### メリット
- ネイティブアプリがJavaScriptで書ける
- アプリを素早くビルドできる
- CSSのサブセットがあるため、CSSでスタイリングできる
- Code Push(審査せずにアプリをアップデートすることができる仕組み)を使うことができる

### デメリット
- 複雑な実装になると、ネイティブコードを書く必要がある
- (ネイティブと比べ)発展途上の部分がある

# Reactの文法
https://facebook.github.io/react-native/docs/tutorial.html

## JSX

```js
import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}
```

この一見 HTML っぽいものがありますが、これが JSX のシンタックスです。  
HTML タグを js の中に書いていくのが特徴です。

これによって、画面に表示させるものを直感的に書いていくことができます。  
少し特殊ですが、**必ずタグは閉じる**という大原則を守るだけです。

```js
<View></View>
// or
<View />
```

## Component

React は **Component** というモジュールを使い、複数の Component を組み合わせて実装します。

`src/App.js`をみてみると下記のようになっています。

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the develor menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

これはコンポーネントと呼ばれ、これらを組み合わせて作っていくことになります。

### 基本Component

- `View`
  - iosの`UIView`に相当
- Text
  - 文字を表現するためのコンポーネント
- StyleSheet
  - スタイルを定義するためのコンポーネント

## Props

各コンポーネントにはパラメータを与えることができ、それを **Props** といいます。  
`src/Banana.js`を作成してください。

```js
import React from 'react';
import { Image } from 'react-native';

export default class Bananas extends React.Component {
  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
```

合わせて`src/Greeting.js`を作成してください。

```js
import React from 'react';
import { Text } from 'react-native';

export default class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
```

最後に`src/App.js`を書き換えます。

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banana from './Banana.js';
import Greeting from './Greeting.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Banana />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

親から渡された`props`は`this.props`で参照できます。  
この場合は`name`という`props`を参照したいので`this.props.name`となります。

> 保存するとbuildせずに画面が更新されたかと思います。  
  これもReact Nativeの特徴です。

## State

コンポーネントがもつ値には Props のほかに **State** があります。  
Props は親から渡されるものですが、State はコンポーネントの中で変更される値を保持するために使います。

`src/Blink.js`を作成します。

```js
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 一定時間ごとに点滅(Stateの更新)
    setInterval(() => {
      this.setState({
        isShowingText: !this.state.isShowingText,
      });
    }, 1000);
  }

  render() {
    const display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
```

`src/App.js`から呼び出すようにします。

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banana from './Banana.js';
import Greeting from './Greeting.js'
import Blink from './Blink.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Banana />
        <Blink />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

State の初期値は、`constructor`内で`this.state`に代入することで利用できます。

```js
this.state = { isShowingText: true };
```

設定した State には`this.state`からアクセスできます。

```js
const display = this.state.isShowingText ? this.props.text : ' ';
```

State 更新には`this.setState()`を利用します。  
setState が実行されると、この State を利用している他のコンポーネントは再レンダリングされます。

setState の中身はオブジェクトにします。  
この時オブジェクトのプロパティ名には変更したい state のプロパティ名、値には変更したい値を使います。

```js
this.setState({
  isShowingText: !this.state.isShowingText,
});
```

この場合は、1 秒ごとに、this.state.showText が true になったり false になり、その度に再レンダリングされるという挙動になります。

### 余談（React の御法度）

render メソッドは画面描写の時に実行されるので、render メソッドの中で`setState`を使わないでください。

```js
・・・
render() {
  const text = this.state.showText? this.props.text : '';
  this.setState({
    showText: !this.state.showText
  });
  return (
    <View>
      <Text style={{color: "red"}}>
        {text}
      </Text>
    </View>
  );
}
```

render メソッドの中で setState を使うと、

```
render -> setState -> render -> setState -> render ->　・・・・
```

と無限ループに陥ってしまいます。
後述する componentWillUpdate（コンポーネントが更新される時に実行される）など、  
setState と関係のあるメソッドでも毎回 setState されるようなコーディングをすると、無限ループに入ってしまいます。

## Component Life Cycle

特定の際にしたい処理などを記載するには、以下のメソッドを利用します。  
http://qiita.com/kawachi/items/092bfc281f88e3a6e456 の図が参考になります。

**注意: Reactのバージョンアップに伴い、多くの変更があります**  
**検索するときは注意してください**  
**こちらも参考に http://blog.koba04.com/post/2018/04/04/react-v163-changes/**

* `componentDidMount()`
  * コンポーネントがマウント(メモリにロード)された後に一度だけ呼ばれます
* `shouldComponentUpdate(nextProps,nextState)`
  * Props や State が更新された際に呼ばれます通常、Props や State が更新されると自動で再レンダリングしますが、再レンダリングさせたくない際（パフォーマンの問題など）はこのメソッドで`false`を返しますレンダリングしたい際は`true`を返します
* `componentDidUpdate(prevProps,prevState)`
  * Props や State が更新され、レンダリングした後に呼ばれます最初のレンダリング時には呼ばれません
* `componentWillUnmount()`
  * コンポーネントが表示されなくなり、レンダリングされなくなる前に呼ばれます

## bind

新たに Button コンポーネント作るので`src/CountButton.js`を作成して下記コードを書いてください。

```js
import React from "react";
import { Button, View, Text } from 'react-native';

export default class CountButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <View>
        <Button
          title='Add'
          onPress={this.addCount}
        />
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}
```

`src/App.js`から呼び出します。

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Banana from './Banana.js';
import Greeting from './Greeting.js'
import Blink from './Blink.js';
import CountButton from './CountButton.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Banana />
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <CountButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

ここで

```js
this.addCount = this.addCount.bind(this);
```

という記述があります。

これはイベントハンドラで`this`がバインドされないためです。  
なので、イベントハンドラに class 内のメソッドを指定する場合は`bind`を利用してください。

バインドの方法はいくつかありますが、一般的には以下の 2 つです。

```js
render() {
  return (
    <Button
      title="hoge"
      onPress={this.addCount.bind(this)}
    />
  );
}
```

以下のもののほうが実践的です。

```js
constructor(props) {
  super(props);
  this.addCount = this.addCount.bind(this);
}

render() {
  return (
    <Button
      title="hoge"
      onPress={this.addCount}
    />
  );
}
```

また、arrow functionを利用すれば`bind`する必要はありません。

```js
addCount = () => { ... }

render() {
  return (
    <Button
      title="hoge"
      onPress={this.addCount}
    />
  );
}
```

## Style

styleSheet.createを使います。  
基本はCSSと同じです。  
flexについては後述します。

あくまでJSのオブジェクトなので、文字列はカンマで囲ってください。

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 64,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
```

# Flexbox

cssのFlexboxとほぼ同様のスタイル定義です。

```js
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.base, styles.box1]}>
          <Text style={styles.text}>I am 2.</Text>
        </View>

        <View style={[styles.base, styles.box2]}>
          <Text style={styles.text}>I am 5.</Text>
        </View>

        <View style={[styles.base, styles.box3]}>
          <Text style={styles.text}>I am 1.</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    flex: 2,
    backgroundColor: 'black'
  },
  box2: {
    flex: 5,
    backgroundColor: 'red',
  },
  box3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
```

flexは比率になります。  
デフォルトでは縦方向の比率になります。  
containerは1なので画面すべて、containerの中身は2:5:2の比率になります。  
flexの方向を切り替えたい場合は、 `flexDirection`にて制御します。

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
...
```

このようにすると横方向に2:5:1の比率になります。  
`justifyContent`, `alignItems`はCSSのflexレイアウトと同様です。

## 各コンポーネントの説明

### TextInput

```js
<TextInput
  style={styles.input}
  onChangeText={this._onChangeText}
/>
```

`onChangeText`というイベントハンドラをつけます。  
入力した文字を受け取れるので、こちらを使ってstateを更新していきます。

### TouchableOpacity

クリック時に半透明になるボタンを実装するには`TouchableOpacity`を使います。  
`TouchableHightLight`や`Button`などを使うこともできます。
イベントハンドラは`onPress`で実装します。  

```js
<TouchableOpacity
  style={styles.button}
  onPress={this._onPress}
>
  <Text style={styles.buttonText} >Add</Text>
</TouchableOpacity>
```

### FlatList

リストは`FlatList`を使うことで実装します。  
`ListView`や自前のコンポーネントを使って実装することもできます。  
`FlatList`は非常に簡単にリストを作成し、スクロールも実装できるコンポーネントです。

```js
<FlatList
  data={[
    {key: 'Devin'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ]}
  renderItem={
    ({item}) => <Text style={styles.item}>{item.key}</Text>
  }
/>
```

このように`key`を持つオブジェクトの配列として渡す必要があります。


---

# Swiftとの連携（各自作業）

- ネイティブと連携する場合は、Expo経由で行う必要があります
- Expo経由で行わない場合、`npm run eject`する必要があります

*参考: https://qiita.com/nd-02110114/items/1b0ff26149aa46b9b227*

## ここからは時間があれば

### PropTypes

コンポーネントにどういった Props を渡したかを定義するのが **PropTypes** です。  
必須ではありませんが、開発時には記載すべきです。

Props の型が定義されたものと違ったり、足りない Props がある場合は Warning が表示されます。

```sh
$ npm i -D prop-types
# Reactのバージョンアップにより、別ライブラリになりました
```

```js
import PropTypes from 'prop-types';

Class Pizza extends Component {
  static propTypes = {
    cheese: PropTypes.string.isRequired,
    meat: PropTypes.number.isRequired,
    onion: PropTypes.object,
  };
}
```

コンポーネントを作る際にデフォルトの Props を設定することも可能です。

```js
class Pizza extends Component{
  static defaultProps = {
    cheeze: 'チェダーチーズ',
    meat : 10,
    onion {redOnion, Onion},
  };
}
```

PropTypes の種類を知りたい方はこちら  
[Typechecking With PropTypes - React](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

## 実践編

### Stateless Functions

コンポーネントを実装していく際に、state を利用しないコンポーネントを作成することがあると思います。

例：

```js
export default class Hello extends React.Component {
  render() {
    return <View>Hello, World!</View>;
  }
}
```

その際には、 **Stateless Functions** を利用することで、可読性の向上やテストがしやすくなるメリットがあります。

上記のコードを Stateless Functions で記述すると以下のようになります。

```js
function Hello() {
  const name = "john";
  return (
    <View>
      Hello,World!
      {name}
    </View>
  );
}

// es6
const name = "john";
const Hello = () => {
  return (
    <View>
      Hello,World!
      {name}
    </View>
  );
};

export default Hello;
```

props を利用することも可能です。

```js
function Hello(props) {
  const name = "john";
  return (
    <View>
      Hello,World!
      {props.hello}
      {name}
    </View>
  );
}

// ES6
const name = "john";
const Hello = props => {
  return (
    <View>
      Hello,World!
      {props.hello}
      {name}
    </View>
  );
};

export default Hello;
```
