import { useAuthContext } from "../../context/AuthContext";
import { businessCategories, governorates } from "../../data/data";
import Select from "../../components/Select";
import FormInput from "../../components/FormInput";
import Input from "../../components/Input";

const Step1 = () => {
  const { register } = useAuthContext();

  return (
    <>
      <FormInput label="Business Name">
        <Input
          type="text"
          id="businessName"
          placeholder="Your business name"
          {...register("businessName")}
        />
      </FormInput>
      <Select
        label="Business Category"
        options={businessCategories}
        name="businessCategory"
        register={register}
      />
      <Select
        label="Location"
        options={governorates}
        name="location"
        register={register}
      />
    </>
  );
};
export default Step1;
