import {getInvoice} from "../helpers/getInvoice.ts";
import {InvoiceView} from "./InvoiceView.tsx";
import ClientView from "./ClientView.tsx";
import CompanyView from "./CompanyView.tsx";
import ListItemView from "./ListItemView.tsx";
import TotalView from "./TotalView.tsx";
import {useForm} from "../hooks/useForm.ts";


const bodyForInvoiceApp: Item = {
    id: 1,
    product :"",
    price: 0,
    quantity: 1

}
export const InvoiceApp = () => {

    const {id, name, client, company, items, total} = getInvoice();


    const {id:productId, product, quantity, price, formState, onInputChange} = useForm(bodyForInvoiceApp);

    const onSumitItem = (event: Event) => {
        event.preventDefault();
        console.log(formState)
    }
    return (
        <>
            <div className="container">

                <div className="card mt-4">

                    <div className="card-header">
                        Ejemplo Factura
                    </div>

                    <div className="card-body">
                        <InvoiceView id={id} name={name}/>

                        <div className="row">
                            <div className="col">
                                <ClientView title={"Datos del cliente"} client={client}/>
                            </div>
                            <div className="col">
                                <CompanyView title={"Datos de la empresa"} company={company}/>
                            </div>
                        </div>

                        <ListItemView title={"Lista de productos"} items={items} />
                        <TotalView total={total} />
                        <form onSubmit={onSumitItem}>
                            <input
                                type="text"
                                placeholder="Producto"
                                className="form-control mb-3"
                                name="product"
                                value={product}
                                onChange={onInputChange}
                            />


                            <input
                                type="text"
                                placeholder="Precio"
                                className="form-control  mb-3"
                                name="price"
                                value={price}
                                onChange={onInputChange}
                            />

                            <input
                                type="text"
                                placeholder="Cantidad"
                                className="form-control mb-3"
                                name="quantity"
                                value={quantity}
                                onChange={onInputChange}
                            />
                            
                            <button className="btn btn-primary">Agregar Producto</button>
                        </form>
                    </div>
                </div>
                {/*Cierre del contenedor*/}
            </div>
        </>
    );
}