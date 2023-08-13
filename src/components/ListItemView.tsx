import RowItemView from "./RowItemView.tsx";
import PropTypes from "prop-types";

interface ListItemViewProps {
    title: string,
    items: Item[]
}

const ListItemView = ({title, items}: ListItemViewProps) => {
    return (
        <>
            <h4>{title}</h4>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item: Item) => <RowItemView key={item.id} item={item}/>)
                }
                </tbody>
            </table>
        </>
    );
};

ListItemView.propType = {
    title: PropTypes.string.isRequired,
    items:  PropTypes.array.isRequired
}
export default ListItemView;