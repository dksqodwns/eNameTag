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
                setBoards(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const filterBoards = selectedCategory === 1 ? boards : boards.filter(board => board.category.id === selectedCategory);

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    const handleThumbsUp = (id: number) => {
        axios.patch(`http://localhost:4000/api/bjahn/board/${id}/thumbs-up`)
            .then((res) => {
                const updatedBoards = boards.map((board) => {
                    if (board.id === id) {
                        return {...board, thumbsUp: board.thumbsUp + 1};
                    }
                    return board;
                });
                setBoards(updatedBoards);
            })
            .catch((err) => console.log(err));
    };

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
                                onClick={() => setSelectedCategory(2)}>자유
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
                    {filterBoards.length > 0 ? (
                        filterBoards.map((board) => (
                            <div key={board.id} className="card mb-3">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="card-title mb-0">{board.nickName}</h5>
                                        <small className="text-muted">{formatDate(board.createdAt)}</small>
                                    </div>
                                    <span className="badge bg-secondary">{board.category.categoryName}</span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{board.text}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div
                                            className="text-muted"
                                            onClick={() => handleThumbsUp(board.id)}
                                            style={{cursor: 'pointer'}}>
                                            👍 {board.thumbsUp}
                                        </div>
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