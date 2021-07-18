import { memo } from 'react';

const style = {
    width: "100%",
    hight: "200px",
    backgroundColor: "khaki"
}

export const ChildArea = memo((props) => {
    const { open,onClickclose } = props;
    console.log("te");
    return (
        <>
            {open ?
                <div style={style}>
                    <p>Childコンポーネント</p>
                    <button onClick={onClickclose}>閉じる</button>
                </div>
                : null}

        </>
    )
})