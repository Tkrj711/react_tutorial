import { Header } from './../atomic_design/atoms/layout/Header';
import { Footer } from './../atomic_design/atoms/layout/Footer';

export const DefaultLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}