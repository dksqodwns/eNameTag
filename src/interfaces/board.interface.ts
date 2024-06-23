export interface Board {
    id: number;
    nickName: string;
    category: {
        id: number;
        categoryName: string;
    };
    text: string;
    thumbsUp: number;
}