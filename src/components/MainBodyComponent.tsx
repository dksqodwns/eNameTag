export const MainBodyComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className={"fw-bold fs-2"}>
                    Introduce
                </div>
                <div className={"col-12 col-md-2 d-flex justify-content-center align-items-center"}>
                    <img className={"img-fluid rounded-circle"} src="../../img/profile.jpg" alt="profile"/>
                </div>
                <div className={"col-12 col-md-8 mt-3 mt-md-0"}>
                    <div className="fw-bold">
                        안녕하세요!
                        <br/>
                        <br/>
                        <a href="https://lavarwave.co.kr">라바웨이브</a>에서 백엔드 개발을 하고있는 안병준 입니다.
                        <br/>
                        <br/>
                        회사에서는 주로 API 개발과 배포를 담당하고 있습니다.
                        <br/>
                        <br/>
                        최근에는 회사에서 전 임직원이 사용 할 어드민 시스템을 개발하다 테스트 코드의 중요성과, 왜 객체 지향을 사람들이 많이 강조하는지 느끼게 되어서 책도 읽고, 다른 사람들의
                        코드를 보면서 공부하고 있습니다.
                        <br/>
                        <br/>
                        저는 주로 시간이 나면 음악을 듣거나, 카페에 가서 공부를 하거나 책을 읽곤 하는데요.
                        <br/>
                        <br/>
                        여러분이 인상깊게 읽었던 책과 주로 들으시는 노래, 그리고 취미가 궁금합니다! 방명록에 적어주시면 감사하겠습니다 ㅎㅎ
                    </div>
                </div>
            </div>
        </div>
    );
}