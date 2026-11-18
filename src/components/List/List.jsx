import "./List.css";

const List = ({ items }) => {
    if (items.length === 0) {
        return <p className="list-empty">No items available.</p>
    }
    return (
        <ul className="list">
            {items.map((item, index)=> (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
};

export default List;