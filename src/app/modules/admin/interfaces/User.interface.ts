export interface IUser {
    id: number;
    email: string;
    name: string;
    username?: string;
    address?: {
        city: string;
        street: string;
        zipcode: string
    };
    phone?: string;
}