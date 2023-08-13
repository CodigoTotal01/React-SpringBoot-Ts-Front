import PropTypes from "prop-types";

interface InvoiceViewType {
    id: number,
    name: string
}

export const InvoiceView = ({id,name}: InvoiceViewType) => {
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Name: {name}</li>
            </ul>
        </>
    )
}

InvoiceView.protoTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired
}