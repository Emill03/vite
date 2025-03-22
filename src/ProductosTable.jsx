import './ProductosTable.css';

function ProductosTable({ productos }) {
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Cantidad</th>
            <th>Precio con Descuento</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            const precioConDescuento =
              producto.precio - (producto.precio * producto.porcentaje_descuento) / 100;
            return (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio.toFixed(2)}</td>
                <td>{producto.porcentaje_descuento}%</td>
                <td>{producto.cantidad_existencia}</td>
                <td>${precioConDescuento.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductosTable;