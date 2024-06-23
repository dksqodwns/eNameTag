import axios from "axios";
import {useEffect, useState} from "react";
import {Board} from "../interfaces/board.interface";

export const MainTableComponent = () => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number>(1);

    useEffect(() => {
            axios
                .get(`http://localhost:3000/api/bjahn/board`) // TODO: env에 변수화해서 환경에 동적으로 받을 수 있도록
                .then((res) => res.data)
                .catch(err => console.log(err))
        }, []
    )

    const filterBoard = selectedCategory === 1 ? boards : boards.filter(board => board.category.id === selectedCategory);

    return (
        <div className={"container mt-3"}>
            <div className={"row"}>
                <div className={"fw-bold fs-2"}>
                    List
                </div>
                <div className={"my-2"}>
                    <div className={"col-12 d-flex flex-wrap gap-2"}>
                        <button className={`btn btn-primary ${selectedCategory === 1 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(1)}>전체
                        </button>
                        <button className={`btn btn-primary ${selectedCategory === 2 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(2)}>책
                        </button>
                        <button className={`btn btn-primary ${selectedCategory === 3 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(3)}>음악
                        </button>
                        <button className={`btn btn-primary ${selectedCategory === 4 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(4)}>취미
                        </button>
                    </div>
                </div>
                <div className={"card"}>
                    <div className={"card-body"}>
                        {filterBoard.map((board) => (
                            <div key={board.id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{board.nickname}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{board.category.name}</h6>
                                    <p className="card-text">{board.text}</p>
                                    <div>👍: {board.thumbsUp}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}