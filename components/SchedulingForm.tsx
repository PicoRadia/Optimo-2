import FormWrapper from "./FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItems } from "../app/page";

type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

const SchedulingForm = ({ scheduling, updateForm }: StepProps) => {
  return (
    <FormWrapper
      title="Scheduling"
      description="Please select your preferred date and time."
    >
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            value={scheduling.date}
            onChange={(e) => updateForm({ scheduling: { ...scheduling, date: e.target.value } })}
          />
        </div>
        <div>
          <Label htmlFor="time">Time</Label>
          <Input
            type="time"
            id="time"
            value={scheduling.time}
            onChange={(e) => updateForm({ scheduling: { ...scheduling, time: e.target.value } })}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default SchedulingForm; 