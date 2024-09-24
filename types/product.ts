export interface IProduct{
        id: number
        title: string;
        description: string;
        coverImage: string;
        price?: number;
        size: string[];       // Array of strings
        color?: string;      // Array of strings
        rating: {
          rate: number,
          count: number
        }
        quantity: number;
        category: string
        discount: number;
        newArrival: boolean;
        topSeller: boolean;
}



export interface ICategory {
        id: string;
        name: string;
      }