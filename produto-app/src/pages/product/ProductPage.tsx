import { useContext, useEffect, useState } from "react";
import Product from "../../models/product";
import MUIDataTable from "mui-datatables";
import AddButton from "../../components/buttons/AddButton";
import { useModal, ModalIDs } from "../../providers/modalProvider";
import ProductModals from "./ProductModals";
import Stack from "@mui/material/Stack";
import EditActionButton from "../../components/buttons/EditActionButton";
import DeleteActionButton from "../../components/buttons/DeleteActionButton";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BnexApi } from "../../api/bnexApi";
import { ProductRepository } from "../../providers/productProvider";

function ProductPage() {

    const productRepository = useContext(ProductRepository);

    useEffect(() => {
      productRepository.getProducts();
    }, []);

    const { openModal } = useModal();
    const MySwal = withReactContent(Swal);

    const [productData, setProductData] = useState<Product>();

    const headers = ["id", "Nome", "Descrição", "Preço", "Ações"];

    const rows = productRepository.products ? productRepository.products.map((product) => [
      product.id,
      product.name,
      product.description,
      product.price,
      actions(product),
    ]) : [];

    return (
    
        <>
        <h1>Lista de Produtos</h1>
        <MUIDataTable
        title={<AddButton
          title="Produtos"
          onClick={() => openModal(ModalIDs.PRODUCT_CREATE)} />}
        data={rows}
        columns={headers}
        components={{ Checkbox: () => null }} />
        <ProductModals productData={productData} />
        </>
    );


    function actions(product: Product) {
      return (
        <Stack direction="row" spacing={2}>
          <EditActionButton onClick={onClickEdit} />
          <DeleteActionButton onClick={onClickDelete} />
        </Stack>
      );
  
      function onClickEdit() {
        setProductData(product);
        openModal(ModalIDs.PRODUCT_EDIT);
      }
  
      function onClickDelete() {
        MySwal.fire({
          title: "Deseja deletar esse produto?",
          text: "Você não poderá reverter essa ação!",
          showCancelButton: true,
          reverseButtons: true,
          confirmButtonText: "Sim",
          cancelButtonText: "Não",
        }).then((result) => {
          if (result.isConfirmed) {
            BnexApi.product.delete("", product).then(() => {
              productRepository.getProducts();
              MySwal.fire("Produto deletado!", "", "success");
            });
          }
        });
      }
    }
};

export default ProductPage;
