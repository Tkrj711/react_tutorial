import { Page1 } from '../components/Page1/Page1';
import { Page1DetailA } from '../components/Page1/Page1DetailA';
import { Page1DetailB } from '../components/Page1/Page1DetailB';

export const Page1Routes = [
    {
        path: "/",
        exact: true,
        children: <Page1 />
    },
    {
        path: "/detailA",
        exact: false,
        children: <Page1DetailA />
    },
    {
        path: "/detaliB",
        exact: false,
        children: <Page1DetailB />
    },
];