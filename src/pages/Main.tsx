import {MainBodyComponent, MainBottomComponent, MainTableComponent} from "../components";

export const MainPage = () => {
    return (
        <div className={"container"}>
            <MainBodyComponent/>
            <hr/>
            <MainBottomComponent/>
            <MainTableComponent/>
        </div>
    )
}