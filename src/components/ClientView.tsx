//Interesante forma de mde fefinir el tipo de la prop directamente al compoenente
import PropTypes from "prop-types";

interface ClienteViewProps {
    client: Client,
    title: string
}

const ClientView = ({client, title}: ClienteViewProps) => {

    const {name: nameClient, lastName, address}: Client = client;

    return (
        <>
            <h3>{title}</h3>

            <ul className="list-group">
                <li className="list-group-item active">{nameClient} {lastName}</li>
                <li className="list-group-item">{address.country} - {address.city}</li>
                <li className="list-group-item">{address.street} {address.number}</li>
            </ul>
        </>
    );
};

ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}

export default ClientView;