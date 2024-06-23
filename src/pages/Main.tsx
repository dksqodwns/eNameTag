import {MainBodyComponent, MainBottomComponent, MainHeaderComponent, MainTableComponent} from "../components";

export const MainPage = () => {
    return (
        <div className={"container"}>
            <MainHeaderComponent/>
            <MainBodyComponent/>
            <hr/>
            <MainBottomComponent/>
            <MainTableComponent/>
        </div>
    )
}