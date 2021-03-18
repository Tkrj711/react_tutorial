## SetUp TypeScript-React-Webpack
``` dos
# npm init -y
# npm install --save react react-dom
# npm install --save-dev @types/react-dom @types/webpack @types/webpack-dev-server ts-loader ts-node typescript webpack webpack-cli webpack-dev-server
```
■説明
|  パラメータ  |  内容  |
| ---- | ---- |
|  react,react-dom  |  Reactを書くのに必要  |
|  @types/~  |  @typesに続くパッケージの型宣言ファイルが含まれている  |
| ts-loader | TypescriptをJavascriptにコンパイルするのに使う |
| ts-node | Typescriptのファイルを直接実行できる |
| typescript | Typescriptを書くのに必要 |
| webpack | Javascriptのファイルを1つにまとめる |
| webpack-cli | webpackコマンドを使うのに必要 |
| webpack-dev-server | ファイルを変えた時に差分ビルドをしてくれる |
```dos
webpackの設定ファイル作成
# type nul > webpack.config.ts
```
webpack.config.tsの内容
```ts:webpack.config.ts
import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    context: path.join(__dirname, 'src'),
    entry: './App.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'static'),
        open: true,
        port: 3000,
    },
};

export default config;
```
■説明
|  パラメータ  |  内容  |
| ---- | ---- |
| path | ファイルやディレクトリのpathを操作できる。デフォルトでnode_modulesに入っている |
| Configuration | configのtype |
| __dirname | カレントディレクトリを示す |
| output | ファイルの出力設定(path:出力ファイルのディレクトリ名、filename:出力ファイル名、publicPath:バンドルファイルをアップロードする場所) |
| module | rules(test:コンパイルするファイル、use:コンパイルに使うツール) |
| mode | 開発(development)か本番(production)か |
| resolve | extensions:importで省略したい拡張子 |
| devtool | デバッグ用のツール(mode:develop) |			
| devServer | 開発用のサーバー(contentBase:サーバーの起点とするディレクトリ、open:ブラウザを自動で起動するか、port:ポート番号) |

```dos
Typescriptの設定ファイル作成
# type nul > tsconfig.json
```
```json:tsconfig.json
{
    "compilerOptions": {
        "sourceMap": true,
        "baseUrl": "./",
        "target": "es5",
        "strict": true,
        "module": "commonJs",
        "jsx": "react",
        "lib": ["ES5", "ES6", "DOM"],
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "isolatedModules": true,
    }
}
```
■説明
|  パラメータ  |  内容  |
| ---- | ---- |
| sourceMap | ソースマップを見れるようにするか |
| baseUrl | tsconfig.jsonの場所 |
| target | どのバージョンでJavascriptを出力するか |
| strict | 型付けのルールを厳しくする |
| module | Typescriptのモジュールをどのバージョンで出力するか |
| jsx | jsxの書式を有効化 |
| lib | コンパイルに使用する組み込みライブラリ |			
| allowSyntheticDefaultImports | default importを使うか |				
| esModuleInterop | import	* 以外も使えるようにするか |
| isolatedModules | exportを必須にするか |
```dos
# mkdir src && type nul > src/index.tsx
# type nul > src/index.html
# cd src && mkdir components
起動
# webpack-cli serve --mode development
```
