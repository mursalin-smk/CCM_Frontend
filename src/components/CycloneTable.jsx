import DataTable from 'react-data-table-component';

function CycloneTable({ data }) {
    const columns = Object.keys(data[0] || {}).map((key) => ({
        name: key,
        selector: row => row[key],
        sortable: true,
    }));

    return (
        <div>
            <DataTable
                title="Cyclone Impact Table"
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                pointerOnHover
            />
        </div>
    );
}

export default CycloneTable;
