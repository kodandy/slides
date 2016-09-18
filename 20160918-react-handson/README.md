React ハンズオン

---

# @besutome
![right](./profile.png)

### フリーランス 
### フロントエンドエンジニア

React Native Meetupとか主催してます  
9月はフィリピンにシェアハウスつくりに行ってました

---

# Set up

---

### 必要なツール

**※ Mac前提です**

【必要なもの】
+ Xcode
+ Commnad Line Tools
+ Homebrew

---

### Nodejsのインストール

**Nodeのバージョンは4以上にしてください**

```sh
$ brew update
$ brew install node
```

---

### Reactのインストール

```sh
$ npm install -g create-react-app
```

---

### 雛形の作成

```sh
$ create-react-app myapp
$ cd myapp
$ npm start
```

`http://localhost:3000/`にサンプルが表示されます

*jsファイルは`react-scripts`パッケージ経由でwebpackを利用して読み込まれています*

---

# React概要

---

## Component

Reactは **Component** というモジュールを使い、複数のComponentを組み合わせて実装します

`src/App.js`

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

`src/index.js`

```js
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

`src/App.js`が`src/index.js`の`<App />`の箇所に呼び出されます  
この`<App />`が **Component** です

---

## Props

各コンポーネントにはパラメータを与えることができ、それを **Props** といいます
新しいコンポーネントを作成します

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

`this.props`で参照でき、javascriptを使う際は、`{}`で囲みます
`src/App.js`を書き換えます

`src/App.js`

```js
import Text from './Text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Text text="ハンズオン" />
        </p>
      </div>
    );
  }
}
```

propsを渡す際はダブルクオートで囲むと、文字列型になります

---

## State

コンポーネントがもつ値にはPropsのほかに **State** があります  
Propsは一度コンポーネントが作成されると変更されませんが、
Stateはコンポーネントの中で変更される値を保持するために使います

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

このようにするとTextコンポーネントの文字が点滅します

Stateの初期値は、`constructor`内で`this.state`に代入することで利用できます  
設定したStateには`this.state`からアクセスできます

State更新には`this.setState()`を利用します  
setStateが実行されると、このStateを利用している他のコンポーネントは再レンダリングされます

---

## Style

クラスを指定したい際は、`className="App"`で指定できます  
スタイルを直接指定したい際は、`<span style={{color: "red"}}>`のように指定できます  

また、`const style = {color: "red"}; <span style={style}>`このようにも指定できます
この際`style`変数はオブジェクトなので、入れ子にして個別指定も可能です

---

## Component Life Cycle

特定の際にしたい処理などを記載するには、以下のメソッドを利用します

+ `￼componentWillMount()`
  + コンポーネントがレンダリングされる前に一度だけ呼ばれます+ `componentDidMount()`
  + コンポーネントがレンダリングされた後に一度だけ呼ばれます+ `componentWillReceiveProps(nextProps)`
  + コンポーネントのPropsが更新される際に呼ばれます  
    最初のマウントの段階では呼ばれません+ `shouldComponentUpdate(nextProps,nextState)`
  + PropsやStateが更新された際に呼ばれます  
    通常、PropsやStateが更新されると自動で再レンダリングしますが、  
    再レンダリングさせたくない際（パフォーマンの問題など）はこのメソッドで`false`を返します  
    レンダリングしたい際は`true`を返します+ `componentWillUpdate(nextProps,nextState)`
  + PropsやStateが更新され、レンダリングされる前に呼ばれます  
    最初のレンダリング時には呼ばれません + `componentDidUpdate(prevProps,prevState)`
  + PropsやStateが更新され、レンダリングした後に呼ばれます  
    最初のレンダリング時には呼ばれません + `componentWillUnmount()`
  + コンポーネントが表示されなくなり、レンダリングされなくなる前に呼ばれます 

---

## PropTypes

コンポーネントにどういったPropsを渡したかを定義するのが  **PropTypes** です  
必須ではありませんが、開発時には記載すべきです

Propsの型が定義されたものと違ったり、足りないPropsがある場合はWarningが表示されます  

```js
Class Pizza extends Component {
  static PropTypes = {
    cheeze: React.PropTypes.string.isRequired,
    meat: React.PropTypes.number.isRequired,
    onion: React.PropTypes.object, 
  };
}
```

コンポーネントを作る際にデフォルトのPropsを設定することも可能です

```js
class Pizza extends Component{
  static defaultProps = {    cheeze: 'チェダーチーズ',
    meat : 10,
    onion {redOnion, Onion},  };
}
```

