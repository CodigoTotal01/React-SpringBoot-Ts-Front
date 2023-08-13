interface Item {
    id: number
    product: string,
    price: number,
    quantity: number,
}

interface Company {
    name: string,
    fiscalNumber: number,
}

interface Address {
    country: string,
    city: string,
    street: string,
    number: number
}

interface Client {
    name: string,
    lastName: string,
    address: Address
}

interface Invoice {
    id: number,
    name: string,
    client: Client,
    company: Company,
    items: Item[],
}
//Form
interface FormValidations {
    [key: string]: [(value: any) => boolean, string];
}
