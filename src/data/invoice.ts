//Invoice es factura - schema
export const invoice: Invoice= {
    id: 10,
    name: 'Componentes Pc',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 123456789,
    },
    items: [
        {
            id: 1,
            product: 'CPU interl i7',
            price: 499,
            quantity: 1,
        },
        {
            id: 2,
            product: 'Corsair Keyboard Mecanico',
            price: 150,
            quantity: 1,
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 300,
            quantity: 1,
        },

    ]
}