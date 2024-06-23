export interface Board {
    id: number;
    nickname: string;
    category: {
        id: number;
        name: string;
    };
    text: string;
    thumbsUp: number;
}