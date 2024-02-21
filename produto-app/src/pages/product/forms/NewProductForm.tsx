import { useForm } from "react-hook-form";
import { Button, InputLabel, Stack, TextField } from "@mui/material";
// import { UserRepository } from "../../../providers/userRepository";
import NameField from "../../../components/fields/nameField";
import { useModal, ModalIDs } from "../../../providers/modalProvider";
import PriceField from "../../../components/fields/priceField";
import Product from "../../../models/product";
import { BnexApi } from "../../../api/bnexApi";
import { useContext } from "react";
import { ProductRepository } from "../../../providers/productProvider";

function NewProductForm() {
  const productRepository = useContext(ProductRepository);
  const { closeModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  function createProduct(productData: Product) {
    BnexApi.product.create("token", productData).then(() => {
      productRepository.getProducts();
    });
    closeModal(ModalIDs.PRODUCT_CREATE);
  }

  return (
    <form onSubmit={handleSubmit((data: Product) => createProduct(data))}>
      <Stack spacing={3}>
        <NameField register={register} name={"name"} errors={errors} />
        <div>
          <InputLabel>Descrição</InputLabel>
          <TextField
            multiline
            rows={2}
            fullWidth
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
          Cadastrar
        </Button>
      </Stack>
    </form>
  );
}

export default NewProductForm;
