#[fit] MeteorでReact使う意味あんの？

### @besutome
### #meteorjs_jp

---

#[fit] ないです

---

## React?
https://facebook.github.io/react/index.html

^ FacebookがつくったUI構築のためのJSライブラリ
^ `ReactLink`で双方向にもできる
^ 高速にプロトタイプ開発するためのライブラリではない

+ MVCのViewのみサポート
+ Virtual DOM (仮想DOM)
+ 一方向バインディング

---

### jquery

```js
// Submitされたら
$('form').on('submit', function() {
  // 要素作って
  var $li = $('<li>');
  // リストに追加
  $('ul').append($li);
});
```

---

### React
^ componentは状態を持たない 常に一意の結果を返す
^ ...の部分に`return <li>`とか書く

```js
var Form = React.createClass({
  onSubmit: function() {
    // 親にデータの更新を通知
  },
  render: function() {
    return <form onSubmit={this.onSubmit}>...</form>;
  }
});
 
var List = React.createClass({
  render: function() {
    // 親からもらったデータを元に構築するだけ
    return <ul>{this.props.list.map(...)</ul>;
  }
});
```

---

## Enzyme?

^ 最近名前が変わった

http://airbnb.io/enzyme/

+ airbnbがつくった
+ Reactのテストフレームワーク
+ いろんな使い方がある

---

## Install

^ 最新バージョンが1.2.0

```sh
$ meteor add react
$ meteor add meteorhacks:npm
```
```json
{
  "enzyme": "1.2.0"
}
```
---

## Shallow Rendering

^ テストとしては相当軽い

+ ユニットテスト
+ TDDで開発するときはコレ

---

^ サンプルはmochaとchai

```js
import { shallow } from 'enzyme';

describe('<MyComponent />', () => {

  it('should render three <Foo /> components', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });

  it('should render an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.length(1);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique" />)).to.be.true;
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.be.true;
  });

});
```

---

## Full Rendering

+ DOM呼出に関するテスト
+ Static Renderingとの組み合わせ

---

```js
import { mount } from 'enzyme';

describe('<Foo />', () => {

  it('calls componentDidMount', () => {
    spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.be.true;
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal("baz");
    wrapper.setProps({ bar: "foo" });
    expect(wrapper.props().bar).to.equal("foo");
  });

  it('simulates click events', () => {
    const onButtonClick = spy();
    const wrapper = mount(
      <Foo onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.be.true;
  });

});
```

---

## Static Rendered Markup

+ 出力された静的なHTMLに対してのテスト
+ Full Renderingとの組み合わせ

---

```js
import { render } from 'enzyme';

describe('<Foo />', () => {

  it('renders three `.foo-bar`s', () => {
    const wrapper = render(<Foo />);
    expect(wrapper.find('.foo-bar').length).to.equal(3);
  });

  it('rendered the title', () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain("unique");
  });

});
```

---

## まとめ

^ Meteorは実装を簡略化して内部が複雑、Reactは逆
^ サクッと作りたいけどUI周りは丁寧に作りこみたい場合に良いかも  
^ webメディアとかに使う（内部のセキュリティは気にしなくていいが離脱率は気にする）
^ web componentsと組み合わせて記述するといい感じになるかも

+ MeteorとReactは設計思想が違う
+ Meteor的に一方向バインディングにならない
+ Reactはテストしやすい
+ Enzyme便利
