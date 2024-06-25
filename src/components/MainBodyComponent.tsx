export const MainBodyComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className={"fw-bold fs-2"}>
                    Introduce
                </div>
                <div className={"col-12 col-md-2 d-flex justify-content-center align-items-center"}>
                    <img className={"img-fluid rounded-circle"} src="../../public/img/profile.jpg" alt="profile"/>
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
                        최근에는 회사에서 개발하다 잦은 구조 변경과 추가되는 요구사항으로 인해 테스트 코드의 중요성과, 왜 객체 지향을 사람들이 많이 강조하는지 느끼게 되어서 책도 읽고, 다른 사람들의
                        코드를 보면서 공부하고 있습니다.
                        <br/>
                        <br/>
                        개발 외적으로는 저는 음악을 참 좋아하는데요. 장르는 그렇게 가리지는 않지만, 꽂히는 앨범이나 아티스트가 있으면 그것만 주구장창 듣는 편입니다 ㅎ ㅎ
                        <br/>
                        <br/>
                        여러분이 최근에 읽은 책이나 들었던 음악, 그리고 관심있는 분야나 취미에 대해서 궁금합니다. 괜찮으시면 아래에 간단한 소개와 함께 적어주세요!
                    </div>
                </div>
            </div>
        </div>
    );
}