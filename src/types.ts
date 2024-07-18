import { ReactNode } from "react"

export interface AuthInterface {
    contextAuth: User
    contextAuthDispatch: React.Dispatch<AuthAction>
}
export interface AuthAction {
    payload? : User
    type : string
}
export interface OutletContext {
    children: ReactNode
}
export interface User {
    id: string;
    name: string;
    photo: string;
    email: string;
    workstation: string;
    number_phone: string;
    start_date: string;
    description: string;
    state: boolean;
    password: string; 
}
export interface Booking {
    guest: string;
    picture: string;
    id: number;
    orderdate: string;
    checkin: string;
    checkout: string;
    note: string | null;
    roomtype: string;
    roomid: number;
    status: string;
}
export interface Comment {
    date: string
    id: number
    customer: string
    email: string
    phone: string
    comment: string
    archived: boolean
}
export interface Room {
    id: number
    name: string
    images: string[]
    type: 'Suite' | 'Single Bed' | 'Double Bed' | 'Double Superior'
    price: number
    offer: number
    amenities: string[]
    available: boolean
}