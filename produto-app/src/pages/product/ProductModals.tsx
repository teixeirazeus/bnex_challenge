import Modal from "react-bootstrap/esm/Modal";
import { useModal, ModalIDs } from "../../providers/modalProvider";
import EditProductForm from "./forms/EditProductForm";
import NewProductForm from "./forms/NewProductForm";

function ProductModals({ productData }: any) {
  const { modals, closeModal } = useModal();

  return (
    <div>
      <ProductCreate />
      <ProductEdit />
    </div>
  );

  function ProductCreate() {
    return (
      <Modal
        show={modals.productCreate}
        onHide={() => closeModal(ModalIDs.PRODUCT_CREATE)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Novo produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewProductForm />
        </Modal.Body>
      </Modal>
    );
  }

  function ProductEdit() {
    return (
      <Modal
        show={modals.productEdit}
        onHide={() => closeModal(ModalIDs.PRODUCT_EDIT)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProductForm productData={productData} />
        </Modal.Body>
      </Modal>
    );
  }
}

export default ProductModals;
