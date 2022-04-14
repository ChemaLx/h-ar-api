import { Document } from 'mongoose'
export interface lugar extends Document{
    name: string
    description: string
    imageUrl: string
}