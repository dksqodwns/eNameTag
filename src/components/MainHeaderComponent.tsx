import React from 'react';

export const MainHeaderComponent = () => {
    return (
        <div className="container mb-3 d-flex justify-content-end">
            <div className="fw-bold d-flex gap-3">
                <span>방문자 수: 1</span>
                <span>전체 방문자 수: 10</span>
            </div>
        </div>
    );
}