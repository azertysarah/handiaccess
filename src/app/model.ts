export interface Review {
    author: string;
    date: string;
    content: string;
    useful: number;
    useless: number;
};

export interface Place {
    name: string;
    images: any[];
    address: string;
    reviews: Review[];
}