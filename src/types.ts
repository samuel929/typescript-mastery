export interface User {
    avatar: string;
    email: string;
    first_name: string;
    id: string;
    last_name: string;
}


export interface Pagination {
    data: User[]
    page: number;
    per_page: number;
    support: {
        text: string;
        url: string;
    };
    total: number;
    total_pages: number;
}

