import { FormItems } from "@/app/page";
import { Checkbox } from "@/components/ui/checkbox";
import FormWrapper from "./FormWrapper";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

const AddonsForm = ({ addOns, yearly, updateForm }: stepProps) => {
  function handleCheckboxChange(addOnId: number, checked: boolean) {
    const updatedAddOns = addOns.map((addOn) => {
      if (addOn.id === addOnId) {
        return {
          ...addOn,
          checked,
        };
      } else {
        return addOn;
      }
    });
    updateForm({ addOns: updatedAddOns });
  }

  return (
    <FormWrapper
      title="Address"
      description="Please enter the correct address"
    >
   
    </FormWrapper>
  );
};

export default AddonsForm;
