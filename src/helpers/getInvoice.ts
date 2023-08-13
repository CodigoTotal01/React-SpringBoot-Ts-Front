import {invoice} from "../data/invoice.ts";


export const getInvoice = () => {

    // let total = 0;
    // invoice.items.forEach((item: Item) => {
    //     total = total + item.price * item.quantity;
    // });
    const total =  invoice.
    items.map(item => item.price * item.quantity).
    reduce( (accumulator, currentValue) => accumulator + currentValue )
    return {...invoice, total};
}