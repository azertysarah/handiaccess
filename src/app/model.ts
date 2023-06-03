export interface Review {
    author: string;
    date: Date;
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