import {Link}from 'react-router-dom'

export const Page2 = () => {
    return (
        <div>
            <h1>Page2ページ</h1>
            <Link to="/Page2/200">URL Parameter</Link>
            <br />
            <Link to="/Page2/200?name=aaaaa">Query Parameter</Link>
        </div>
    );
};