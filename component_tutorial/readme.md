## コンポーネントの学習フォルダ

__reactコンポーネントに用意されているメソッド__
### 1.初回DOMマウント時(上から順に実行される）
- constructor(props)  
　・・・オブジェクトが生成される
- componentWillMount()<br>　・・・コンポーネントがDOMにマウントされる直前に呼び出される
- render()　<br>　・・・コンポーネント描画処理
- componentDidMount()　<br>　・・・コンポーネントがDOMにマウントされた直後に呼び出される
### 2.コンポーネントのプロパティ更新時
- componentWillReceiveProps(nextProps)<br>  ・・・コンポーネントのプロパティが変更されたときに呼び出される(変更がなければ呼び出されない）
- shouldComponentUpdate(nextProps, nextState)<br>  ・・・コンポーネントの外観を更新してよいかどうか判断するとき
- componbentWillUpdate()<br>  ・・・コンポーネントが更新される直前
- render()　<br>　・・・コンポーネント描画処理
- componentDidUpdate()<br>
### 3.アンマウント（削除）時
- componentWillUnmount()
