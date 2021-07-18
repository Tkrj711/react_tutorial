import clases from "./CssModules.module.scss";

export const CssModules = () => {
    return (
        <div className={clases.container}>
            <p className={clases.title}>CssModules</p>
            <button className={clases.button}>Fight!!!</button>
        </div>
    );
};