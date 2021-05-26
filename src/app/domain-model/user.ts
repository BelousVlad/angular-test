import { Address } from './Address'

export class User {
    id: Number
    name: String
    username: String
    address: Address

    constructor(id: Number, name: String, username: string, address: Address)
    {
        this.id = id
        this.name = name
        this.username = username
        this.address = address
    }
}