export interface RiviewDto {
    id: number;
    content: string;
    createdAt: number;
    updatedAt: number;
    userName: string;
    like: number;
}

// DB + API 이용
export const mockRiviewList: RiviewDto[] = [
    {
        id: 1,
        content: "��아요!",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        userName: "user1",
        like: 4,
    },
    {
        id: 2,
        content: "별로요!",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        userName: "user2",
        like: 2,
    },
    ...Array.from({length: 24}, (_, index) => ({
        id: index + 3, // id는 3부터 시작하도록
        content: "기타 리뷰",
        createdAt: Date.now(),
        updatedAt: Date.now(),
        userName: `user${index + 3}`,
        like: (index % 5) + 1, // 임의의 별점(1~5) 생성
    })),
];
