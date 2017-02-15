React Native ハンズオン
======

## 自己紹介

### @besutome
![](./profile.png)

フリーランスのフロントエンドエンジニア。
React Native Meetupとか主催してます。  

## インストール
+ `brew install node@6`(サンプルはv6.9.5)
+ `brew install watchman`
+ `npm i -g react-native-cli`
+ `react-native init test && cd test`
+ `react-native run-ios`

※ 上記で動かない場合は`npm start`後、Xcodeから`test/ios/test.xcodeproj`をビルドしてください


## 概要

+ Reactを用いてiOSやAndroidのネイティブアプリを構築できるフレームワーク
+ JavaScriptからネイティブのAPIが呼ばれる
+ 一度覚えればどのプラットフォーム向けにも書けるようになる

※ 一度書けばどのプラットフォームでも動くわけではない

### メリット
+ ネイティブアプリがJavaScriptで書ける
+ アプリを素早くビルドできる
+ CSSのサブセットがあるため、CSSでスタイリングできる

### デメリット
+ 複雑なUIになると、ネイティブコードを書かざるを得なくなる


## デバッグ
`⌘+D`でメニュー画面表示(iosの場合)

+ `Debug JS Remotely` - デベロッパーツールの機能が利用できる
+ `Enable Live Reload` - 保存のたびにリロードが走る（初期画面に戻る）
+ `Enable Hot Reloading` - 保存時に現在表示してる画面のままリロードが走る
+ `Start Systrace` - Android UIのパフォーマンス確認ができる
+ `Show Inspector` - アプリのレイアウト確認ができる
+ `Show Perf Monitor` - パフォーマンスの確認ができる

---

## Tutorial

このハンズオンでは公式チュートリアルを利用します。  
ブラウザ上でコードを変更すれば結果を見ることができるので、試しながら進めていってください。

https://facebook.github.io/react-native/docs/tutorial.html

### Props

各コンポーネントにはパラメータを与えることができ、それを `Props` といいます

### State

コンポーネントがもつ値には `Props`のほかに `State` があります  
`Props` は一度コンポーネントが作成されると変更されませんが、   
`State` はコンポーネントの中で変更される値を保持するために使います

### Style

```js
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        {/* <Text style={{color: 'purple'}}>hoge</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);
```

変数でオブジェクトを作成し、その中でスタイルを定義します。  
スタイルを直接記述したい場合は、二重オブジェクトの中に定義します。

`fontSize` はcssの `font-size` に対応するように、スタイルはハイフンではなくキャメルケースで表現します。  
cssに対応しているものはほぼ利用可能です。

### Height and Width

#### Fixed Dimensions

領域が画面幅に追随しません。

```js
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
```

#### Flex Dimensions

領域が画面幅に追随します。

```js
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
      {/* 
        <View>
        <View style={{height: 300}}>
      */}
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
```

> コンポーネントの親のサイズが0より大きい場合、コンポーネントは使用可能な領域を塗りつぶすためにのみ展開できます。  
> 親が固定幅と高さまたはフレックスのいずれも持たない場合、親の寸法は0になり、フレックスの子は表示されません。

`<View style={{flex: 1}}>` をコメントアウトしているものに変更してみてください。  
挙動がよくわかると思います。

> **cssとの違い**

> cssとの違いはいくつかありますが、重要なのは `z-index` を指定できないことです。  
> 重ね順を変更するにはコンポーネントの順序を変えることで対応します。

### Layout with Flexboxレイアウト

#### Flex Direction

`flexDirection` は要素の並び順を指定します。

```js
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
      {/* <View style={{flex: 1, flexDirection: 'column'}}> */}
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
```

#### Justify Content

`justifyContent` は要素の縦位置を指定します。

```js
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // justifyContent: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);
```

#### Align Items

`alignItems` は素の縦位置を指定します。

```js
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        // flexDirection: 'row',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
        alignItems: 'center',
        // alignItems: 'row',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
```

### Handling Text Input

`TextInput` はーザーにテキストを入力してもらう際に利用します。  
サンプルではペースで区切った単語ごとに🍕が出力されます。

```js
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);
```

> **ScrollView / ListView**

> スクロール領域を指定したい場合は、 `<ScrollView>` もしくは `<ListView>` で指定する必要があります。  
> それぞれの違いは以下です。

> + `ScrollView`
>  + 要素が小さくて大きさが限られたものを表示する
>  + 要素は基本的に不変
> + `ListView`
>  + 要素が長いリスト
>  + 要素が動的に変更される

> `ScrollView` の内容は端末内であらかじめ全てレンダリングされます。  
> `ListView` はスクロールされた時に画面に入った要素をその都度レンダリングします。

### Using a ScrollView

画面全体をスクロールすることができます。

```js
import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native'

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>What is the best</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Image source={require('./img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}


AppRegistry.registerComponent(
  'IScrolledDownAndWhatHappenedNextShockedMe',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
```

### Using a ListView

```js
import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';

class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);
```

`ListView` は少し複雑です。

まず `new ListView.DataSource()` から、初期化済みのDataSourceを用意しています。  
`rowHasChanged` の値は各データの同一性を検証する関数で、  
 `r1` と `r2` というデータを与えた時、二つのデータが違うものかどうかを返す関数です。  
上記の例では単純に `r1` と `r2` を比較しているだけです。

そしてDataSourceに値を入れ、コンポーネントの `dataSource` Stateに設定します。  
`cloneWithRows` は自身のDataSourceを複製して、引数で与えられた値を追加したものを返します。  
そのため、 `dataSource` Stateには値が入った状態のDataSourceが登録されます。

表示の際には、`<ListView>` のpropsに表示させたいデータを指定する `dataSource` と  
データの表示方法を指定する `renderRow` を設定します。  

`dataSource` には `DataSource` Stateを与えています。  
`renderRow` にはデータを表示するためのコンポーネントを返す関数を与えます。

### Neteworking

ここでは外部のREST APIとやりとりする際に必要なことが記載れています。  
ハンズオンでは飛ばしますが、後ほど確認してみてください。

### Using Navigators

※ この章のみ、公式チュートリアルがわかりにくかったため、独自の資料を使用しています。

React Nativeではルーティング管理のために、`Navigator`というコンポーネントを利用します。

```js
import React, { Component, PropTypes } from 'react';
import { AppRegistry, Navigator, Text, TouchableHighlight, View } from'react-native';

class MyScene extends Component {
  render() {
    return (
      <View style={{padding: 30}}>
        <Text>タイトル:{this.props.title}</Text>
      </View>
    );
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'MyInitialScene', index: 0}}
        renderScene={ (route,navigator) =>
          <MyScene title={route.title}/>
        }
      />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
```

`<Navigator>` はPropsとして `initialRoute` と `renderScene` を受けとり、  
`renderScene` には `(route, navigator)` を引数に、画面を表示するためのコンポーネントを返す関数を設定します。  

この関数は画面遷移のたびに呼び出されるため、与えられた `route` の値に応じて画面作成することでページ遷移ができます。  
`initialRoute` は最初に作られる画面の  `route` になります。

ページ遷移はもう一つの引数 `navigator` のAPIを呼ぶことで行います。  

```js
class MyScene extends Component {
  render() {
    return(
      <View style={{padding: 30}}>
        <Text>タイトル: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>進む</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>戻る</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'MyInitialScene', index: 0}}
        renderScene={ (route,navigator) =>
          <MyScene title={route.title}
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={ () => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}
```

進むをタップすると `this.props.onForward` を、戻るをタップすると `this.props.onBack` を実行します。  
`renderScene` で返される `MyScene` コンポーネントに `onForward` と `onBack` を設定します。  

`onForward` 内の `navigator.push` は新しいページに遷移するAPIです。  
引数にはスタックにpushするオブジェクトを与えます。  
`onBack` 内の `navigator.pop` はスタックから一つページを取り出し、元のページに遷移します。

このように、スタックにページのもととなるオブジェクトを追加、取り出す操作がページ遷移の基本です。

### More Resources

https://facebook.github.io/react-native/docs/more-resources.html#content

より詳しくReact Nativeを知りたい方は確認してみてください。

## ライブラリ

React Native向けのライブラリはnpmで提供されています。  
ほとんどが`npm install`で利用できますが、ものによっては設定ファイルを編集する必要があります。

どのようなライブラリがあるかは以下のページで確認できます。

React.parts  
https://react.parts/native

---

## 参考
+ Tutorial
  + https://facebook.github.io/react-native/docs/tutorial.html
