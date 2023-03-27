import React from "react";

function ModalDetail({ onSelectProduct }) {
  if (!onSelectProduct) {
    return null;
  }

  return (
    <div className="mt-3 row">
      <div className="col-sm-4">
        <h3 className="text-center">{onSelectProduct.name}</h3>
        <img
          src={onSelectProduct.image}
          alt={onSelectProduct.name}
          width="100%"
          height="350px"
        />
      </div>
      <div className="col-sm-8">
        <h3>Chi tiết</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Tên</td>
              <td>{onSelectProduct.name}</td>
            </tr>
            <tr>
              <td>Giá</td>
              <td>{onSelectProduct.price}</td>
            </tr>
            <tr>
              <td>Miêu tả</td>
              <td>{onSelectProduct.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ModalDetail;
