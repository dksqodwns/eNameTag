import axios from "axios";
import {useEffect, useState} from "react";
import {Board} from "../interfaces/board.interface";

export const MainTableComponent = () => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number>(1);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/bjahn/board`)
            .then((res) => {
                console.log("res: ", res);
                setBoards(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const filterBoard = selectedCategory === 1 ? boards : boards.filter(board => board.category.id === selectedCategory);

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="fw-bold fs-2">List</div>
                <div className="my-2">
                    <div className="col-12 d-flex flex-wrap gap-2">
                        <button className={`btn btn-primary ${selectedCategory === 1 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(1)}>전체
                        </button>
                        <button className={`btn btn-primary ${selectedCategory === 2 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(2)}>any
                        </button>
                        <button className={`btn btn-primary ${selectedCategory === 3 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(3)}>책
                        </button>
                        <button className={`btn btn-primary ${selectedCategory === 4 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(4)}>음악
                        </button>
                        <button className={`btn btn-primary ${selectedCategory === 5 ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(5)}>취미
                        </button>
                    </div>
                </div>
                <div className="col-12">
                    {filterBoard.length > 0 ? (
                        filterBoard.map((board) => (
                            <div key={board.id} className="card mb-3">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">{board.nickName}</h5>
                                    <span className="badge bg-secondary">{board.category.categoryName}</span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{board.text}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-muted">👍 {board.thumbsUp}</div>
                                        <button className="btn btn-outline-primary btn-sm">댓글 보기</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="alert alert-info">게시물이 없습니다.</div>
                    )}
                </div>
            </div>
        </div>
    );
}