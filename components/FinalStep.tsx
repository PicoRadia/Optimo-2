"use client";

import { useState } from "react";
import FormWrapper from "./FormWrapper";
import { Calendar } from "@/components/ui/calendar";
import { FormItems } from "@/app/page";

type StepProps = FormItems & {
  goTo: (index: number) => void;
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

const FinalStep = ({ scheduling = { date: "", time: "", timezone: "" }, updateForm }: StepProps) => {
  const [date, setDate] = useState<Date | undefined>(
    scheduling.date ? new Date(scheduling.date) : undefined
  );

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    updateForm({
      scheduling: {
        ...scheduling,
        date: newDate?.toISOString() || "",
      },
    });
  };

  return (
    <FormWrapper
      title="Scheduling"
      description="Choose a time slot for your customer"
    >
      <div className="flex justify-center items-center h-[450px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1a1a1a] p-4"
        />
      </div>
    </FormWrapper>
  );
};

export default FinalStep;
