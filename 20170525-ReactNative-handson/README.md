# 【初学者対象】はじめてのReact Native ハンズオン

---

# @besutome
![right](./profile.png)

### フリーランス 
### フロントエンドエンジニア

React Native Meetupとか主催してます。

---

# セットアップ
## 必要なツール

【Mac】
+ Commnad Line Tools
+ Homebrew


## Node.jsのインストール

```sh
$ brew update
$ brew install node
```

---

## Reactのインストール

```sh
$ npm install -g create-react-app
```

---

## 雛形の作成

```sh
$ create-react-app myapp
$ cd myapp
$ npm start
```

`http://localhost:3000/`にサンプルが表示されます


---

# React概要

ReactとはFaceBook発のライブラリです。  
Facebook, Instagram, Airbnbなどなど有名企業も取り入れています。  
（そしてこれらの企業のアプリはReact-Native製）


後述するコンポーネントを作っていくことが目的になります。  
大きな特徴としては、コンポーネントとJSX、そして仮想DOMです。

## JSX

```js
class Hello extends React.Component {
    render() {
        return (
            <div>
              Hello, World!
            </div>
        )
    }
}
```

この一見HTMLっぽいものがありますが、これがJSXのシンタックスです。  
HTMLタグをjsの中に書いていくのが特徴です。

これによって、画面に表示させるものを直感的に書いていくことができます。  
少し特殊ですが、**必ずタグは閉じる**という大原則を守るだけです。

```js
<div></div>
// or
<div />
```


[jsx](http://facebook.github.io/jsx/)

---

## Component

Reactは **Component** というモジュールを使い、複数のComponentを組み合わせて実装します。

`src/App.js`をみてみると下記のようになっています。

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

これはコンポーネントと呼ばれ、これらを組み合わせて作っていくことになります。


`src/index.js`では、

```js
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

となっており、このコードによって`src/App.js`が`src/index.js`の`<App />`の箇所に呼び出され、  
`public/index.html`の`id="root"`となっている箇所に出力されます。  
この`<App />`が **Component** となります。

### 仮想DOM

効率よくレンダリングするための仕組みです。  
DOMを描画するのにはパワーがいるのですが、Reactでは画面の要素に変更があった時に  
差分を計算して差分のみを画面に描写してくれます。  
これによって高いパフォーマンスを得られます。


### 開発環境

開発環境についてはjsxを変換する仕組み、ES6を変換する仕組みなど色々が必要なのですが、
`create-react-app` を使うことによってこれらの仕組みが自動的に構築されています。

---

## Props

各コンポーネントにはパラメータを与えることができ、それを **Props** といいます。  
新しいコンポーネントを作成します。


`src/Text.js`を作成し、下記コードを書きます。

`src/Text.js`
```js
import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <span style={{color: "red"}}>
        {this.props.text}
      </span>
    );
  }
}

export default Text;
```
`src/App.js`を書き換えます。

`src/App.js`

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Text text="ハンズオン" />
        </div>
      </div>
    );
  }
}

export default App;
```

保存すればリロードしなくても変更点は反映されています。  
画面にハンズオンと赤字で表示されていると思います。


ここでコードを振りかえると、

`src/App.js`

```js
・・・
// Textコンポーネントの読み込み
import Text from './Text';

・・・
// Textコンポーネントの使用
// propsとして”ハンズオン"を渡している
<div className="App-intro">
  <Text text="ハンズオン" />
</div>
```

となっています。  
これによってTextコンポーネントが画面に表示されるようになります。　　

そして`src/Text.js`では、


`src/Text.js`
```js
・・・
<span style={{color: "red"}}>
  {this.props.text}
</span>
・・・
```
となっています。  
このように親から渡されたpropsはthis.propsで参照できます。  
この場合はtextというpropsを参照したいのでthis.props.textとなります。

### 余談（ReactのStyleとか）

styleを使うことでスタイルを簡単に適用することができます。

```js
<span style={{color: "red"}}>
```

このようになっています。これはCSSの`color: red`と同じ意味合いになります。  
また、Reactでは {} で囲うことによってJavaScriptとして評価されるので、これはオブジェクトを渡しているということになります。

inlineStyleチックですが、オブジェクトを渡すという点と、

```js
<span style={{ backgroundColor: "blue" }}
```

プロパティ名はキャメルケースに置き換えるという点が異なっています。

さらに、クラスを使いたい場合は

```js
<div className="App-intro">
```

と`class`ではなく`className`になっている点も注意してください。  
CSSに描くCSSはいつも通りで問題ありません。

---

## State

コンポーネントがもつ値にはPropsのほかに **State** があります。  
Propsは親から渡されるものですが、Stateはコンポーネントの中で変更される値を保持するために使います。


下記のようにText.jsを書き換えます。

`src/Text.js`

```js
 class Text extends Component {
   constructor(props) {
     super(props);
     this.state = {
       showText: true
     };

     setInterval(() => {
      this.setState({
        showText: !this.state.showText
      });
     }, 1000);
   }

  render() {
    const text = this.state.showText? this.props.text : '';
    return (
      <div>
        <span style={{color: "red"}}>
          {text}
        </span>
      </div>
    );
  }
}
```

このようにするとTextコンポーネントの文字が点滅します。  
昔懐かしのホームページみたいですね。


Stateの初期値は、`constructor`内で`this.state`に代入することで利用できます。

```js
this.state = {
  showText: true
};
```

設定したStateには`this.state`からアクセスできます。

```js
const text = this.state.showText? this.props.text : '';
```

State更新には`this.setState()`を利用します。  
setStateが実行されると、このStateを利用している他のコンポーネントは再レンダリングされます。  

setStateの中身はオブジェクトにします。  
この時オブジェクトのプロパティ名には変更したいstateのプロパティ名、値には変更したい値を使います。

```js
this.setState({
  showText: !this.state.showText
});
```

この場合は、1秒ごとに、this.state.showTextがtrueになったりfalseになり、その度再レンダリングされるという挙動になります。

### 余談（Reactの御法度）

renderメソッドは画面描写の時に実行されるので、renderメソッドの中で`setState`を使わないでください。

```js
・・・
render() {
  const text = this.state.showText? this.props.text : '';
  this.setState({
    showText: !this.state.showText
  });
  return (
    <div>
      <span style={{color: "red"}}>
        {text}
      </span>
    </div>
  );
}
```

renderメソッドの中でsetStateを使うと、

```
render -> setState -> render -> setState -> render ->　・・・・
```

と無限ループに陥ってしまいます。　　  
後述するcomponentWillUpdate（コンポーネントが更新される時に実行される）など、  
setStateと関係のあるメソッドでも毎回setStateされるようなコーディングをすると、無限ループに入ってしまいます。


---

## Component Life Cycle

特定の際にしたい処理などを記載するには、以下のメソッドを利用します。  
http://qiita.com/kawachi/items/092bfc281f88e3a6e456 の図が参考になります。

+ `componentWillMount()`
  + コンポーネントがマウント(メモリにロード)される前に一度だけ呼ばれます
+ `componentDidMount()`
  + コンポーネントがマウント(メモリにロード)された後に一度だけ呼ばれます
+ `componentWillReceiveProps(nextProps)`
  + コンポーネントのPropsが更新される際に呼ばれます
    最初のマウントの段階では呼ばれません
+ `shouldComponentUpdate(nextProps,nextState)`
  + PropsやStateが更新された際に呼ばれます
    通常、PropsやStateが更新されると自動で再レンダリングしますが、
    再レンダリングさせたくない際（パフォーマンの問題など）はこのメソッドで`false`を返します
    レンダリングしたい際は`true`を返します
+ `componentWillUpdate(nextProps,nextState)`
  + PropsやStateが更新され、レンダリングされる前に呼ばれます
    最初のレンダリング時には呼ばれません
+ `componentDidUpdate(prevProps,prevState)`
  + PropsやStateが更新され、レンダリングした後に呼ばれます
    最初のレンダリング時には呼ばれません
+ `componentWillUnmount()`
  + コンポーネントが表示されなくなり、レンダリングされなくなる前に呼ばれます

---

## bind

新たにButtonコンポーネント作るので`src/Button.js`を作成して下記コードを書いてください。

```js
import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

 render() {
   return (
      <button onClick={this.addCount}>
        buttonCount{this.state.count}
      </button>
   );
 }
}

export default Button;
```

ここで

```js
  this.addCount = this.addCount.bind(this);
```

という記述があります。

これはイベントハンドラで`this`がバインドされないためです。  
なので、イベントハンドラにclass内のメソッドを指定する場合は`bind`を利用してください。


バインドの方法はいくつかありますが、一般的には以下の2つです。

```js
   render() {
     <button onClick={this.addCount.bind(this)}>
       button
     </button>
     ...
   }
```

```js
   constructor(props) {
     super(props);

     this.addCount = this.addCount.bind(this);
   }

   render() {
     <button onClick={this.addCount}>
       button
     </button>
     ...
   }
```

------

## ここからは時間があれば
### PropTypes

コンポーネントにどういったPropsを渡したかを定義するのが **PropTypes** です。  
必須ではありませんが、開発時には記載すべきです。

Propsの型が定義されたものと違ったり、足りないPropsがある場合はWarningが表示されます。

```sh
$ npm i -D prop-types
# Reactのバージョンアップにより、別ライブラリになりました
```

```js
import PropTypes from 'prop-types';

Class Pizza extends Component {
  static propTypes = {
    cheese: React.PropTypes.string.isRequired,
    meat: React.PropTypes.number.isRequired,
    onion: React.PropTypes.object, 
  };
}
```

コンポーネントを作る際にデフォルトのPropsを設定することも可能です。

```js
class Pizza extends Component{
  static defaultProps = {
    cheeze: 'チェダーチーズ',
    meat : 10,
    onion {redOnion, Onion},
  };
}
```

PropTypesの種類を知りたい方はこちら  
[Typechecking With PropTypes - React](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

## 実践編
### Stateless Functions

コンポーネントを実装していく際に、stateを利用しないコンポーネントを作成することがあると思います。

例：
```js
class Hello extends React.Component {
    render() {
        return (
            <div>
              Hello, World!
            </div>
        )
    }
}

export default Hello;
```


その際には、 **Stateless Functions** を利用することで、可読性の向上やテストがしやすくなるメリットがあります。

上記のコードをStateless Functionsで記述すると以下のようになります。

```js
function Hello() {
  const name = 'john';
  return (
    <div>
      Hello,World!
		{name}
    </div>
  );
}

// es6
const name = 'john';
const Hello = () => {
  return (
    <div>
      Hello,World!
      {name}
    </div>
  );
}

export default Hello;
```

propsを利用することも可能です。

```js
function Hello(props) {
  const name = 'john';
  return (
    <div>
      Hello,World!
		{props.hello}
		{name}
    </div>
  );
}

// ES6
const name = 'john';
const Hello = props => {
  return (
    <div>
      Hello,World!
		{props.hello}
      {name}
    </div>
  );
}

export default Hello;
```
