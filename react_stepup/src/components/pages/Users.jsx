import styled from "styled-components";
import { SerachInput } from './../atomic_design/molecules/SearchInput';
import { UserCard } from './../atomic_design/organisms/user/UserCard';
import { SecondaryButton } from './../atomic_design/atoms/button/SecondaryButton';
import { UserContext } from './../../providers/UserProvider';
import { useContext } from 'react';
import { useRecoilState } from "recoil";
import { userState } from './../../store/userState';

const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: `test${val}`,
        image: "https://source.unsplash.com/--SDX4KWIbA",
        email: "tttt.com",
        phone: "000-000-000",
        company: {
            name: "test株式会社"
        },
        website: "https://google.com"
    }
}))


export const Users = () => {
    // const { userInfo, setUserInfo } = useContext(UserContext);  //textContextの場合
    const [userInfo, setUserInfo] = useRecoilState(userState);     //Recoilの場合
    const onClickSwitch = () => {
        setUserInfo({ isAdmin: !userInfo.isAdmin })
    }
    return (
        <SContainer>
            <h2>ユーザ一覧</h2>
            <SerachInput />
            <br />
            <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));// 1つのgrid内に表示するサイズ
    grid-gap: 20px; // grid間のスペース
`