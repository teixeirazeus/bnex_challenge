import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import NameField from "../../../components/fields/nameField";
import { useModal, ModalIDs } from "../../../providers/modalProvider";
import PriceField from "../../../components/fields/priceField";
import Product from "../../../models/product";
import { useContext } from "react";
import { ProductRepository } from "../../../providers/productProvider";
import { BnexApi } from "../../../api/bnexApi";

function EditProductForm({ productData }: any) {
  const productRepository = useContext(ProductRepository);
  const { closeModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ defaultValues: productData });

  function editProduct(data: Product) {
    BnexApi.product.update("token", data).then(() => {
      productRepository.getProducts();
    });
    
    closeModal(ModalIDs.PRODUCT_EDIT);
  }

  return (
    <form onSubmit={handleSubmit((data: Product) => editProduct(data))}>
      <Stack spacing={3}>
        <NameField register={register} name={"name"} errors={errors} />
        <div>
          <InputLabel>Descrição</InputLabel>
          <TextField
            fullWidth
            multiline
            rows={2}
            id="description"
            type="text"
            {...register("description")}
          />
        </div>
        <PriceField
          register={register}
          name={"price"}
          title={"Preço:"}
        />
        <Button
          variant="contained"
          style={{ height: "50px" }}
          color="success"
          type="submit"
        >
          salvar
        </Button>
      </Stack>
    </form>
  );
}

export default EditProductForm;
