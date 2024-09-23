export interface IProduct{
        title: string;
        description: string;
        coverImage: string;
        price?: number;
        size: string[];       // Array of strings
        color: string[];      // Array of strings
        rating: string;
        quantity: number;
        discount: number;
        newArrival: boolean;
        topSeller: boolean;
}