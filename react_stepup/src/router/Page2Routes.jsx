import { Page2 } from '../components/Page2/Page2';
import { UrlParameter } from '../components/Page2/UrlParameter';

export const Page2Routes = [
    {
        path: "/",
        exact: true,
        children: <Page2 />
    },
    {
        path: "/:id",
        exact: false,
        children: <UrlParameter />
    }
];