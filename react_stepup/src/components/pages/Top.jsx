import styled from "styled-components";
import { SecondaryButton } from './../atomic_design/atoms/button/SecondaryButton';
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './../../providers/UserProvider';
import { useSetRecoilState } from "recoil";
import { userState } from './../../store/userState';

export const Top = () => {
    const history = useHistory();
    // const { setUserInfo } = useContext(UserContext); //textContextの場合
    const setUserInfo = useSetRecoilState(userState);  //Recoilの場合

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        history.push("/users");
    };
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        history.push("/users");
    };
    return (
        <SContainer>
            <h2>TOPページ</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br /><br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`