import { Link, useHistory } from 'react-router-dom'

export const Page1 = () => {
    const arr = [...Array(100).keys()];

    const history = useHistory();
    const onClickDetailA = () => history.push("/Page1/detailA");
    return (
        <div>
            <h1>Page1ページ</h1>
            <Link to={{ pathname: "/Page1/detailA", state: arr }}>DetailA</Link>
            <br />
            <Link to="/Page1/detailB">DetailB</Link>
            <br />
            <button onClick={onClickDetailA}>DetailA(Link使わないよ)</button>
        </div>
    );
};