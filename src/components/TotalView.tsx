const TotalView = ({total}: {total: number}) => {
    return (
        <>
            <div className="text-end">
                <span className="badge bg-success">{total}</span>
            </div>
        </>
    );
};

export default TotalView;