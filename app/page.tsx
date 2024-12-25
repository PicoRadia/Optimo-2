"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMultiplestepForm } from "hooks/useMultiplestepForm";
import { AnimatePresence } from "framer-motion";
import UserInfoForm from "@/components/UserInfoForm";
import PlanForm from "@/components/PlanForm";
import AddonsForm from "@/components/AddonsForm";
import FinalStep from "@/components/FinalStep";
import SuccessMessage from "@/components/SuccessMessage";
import SideBar from "@/components/SideBar";
import { ThemeToggle } from "@/components/ThemeToggle";

interface AddOn {
  id: number;
  checked: boolean;
  title: string;
  subtitle: string;
  price: number;
}

export type FormItems = {
  firstName: string;
  lastName: string;
  email: string;
  authentication: string;
  plan: "arcade" | "advanced" | "pro";
  yearly: boolean;
  addOns: Array<{
    id: number;
    title: string;
    description: string;
    price: number;
    checked: boolean;
  }>;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    authentication?: string;
  };
};

const initialValues: FormItems = {
  firstName: "",
  lastName: "",
  email: "",
  authentication: "",
  plan: "arcade",
  yearly: false,
  addOns: [
    {
      id: 1,
      checked: true,
      title: "Online Service",
      subtitle: "Access to multiple games",
      price: 1,
    },
    {
      id: 2,
      checked: false,
      title: "Large storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      checked: false,
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      price: 2,
    },
  ],
  errors: {},
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(4);

  function updateForm(fieldToUpdate: Partial<FormItems>) {
    const { firstName, lastName, email, authentication } = fieldToUpdate;

    if (firstName && firstName.trim().length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        firstName: "First name should be at least 3 characters long",
      }));
    } else if (firstName && firstName.trim().length > 15) {
      setErrors((prevState) => ({
        ...prevState,
        firstName: "First name should be no longer than 15 characters",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        firstName: "",
      }));
    }

    if (lastName && lastName.trim().length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        lastName: "Last name should be at least 3 characters long",
      }));
    } else if (lastName && lastName.trim().length > 15) {
      setErrors((prevState) => ({
        ...prevState,
        lastName: "Last name should be no longer than 15 characters",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        lastName: "",
      }));
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (authentication && !/\S+@\S+\.\S+/.test(authentication)) {
      setErrors((prevState) => ({
        ...prevState,
        authentication: "Please enter a valid authentication",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        authentication: "",
      }));
    }

    setFormData({ ...formData, ...fieldToUpdate });
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    nextStep();
  };

  return (
    <div
      className={`flex justify-between ${
        currentStepIndex === 1 ? "h-[600px] md:h-[500px]" : "h-[500px]"
      } w-11/12 max-w-4xl relative m-1 rounded-lg border border-gray-200 bg-white dark:bg-[#262626] dark:border-neutral-700 p-4 shadow-lg`}
    >
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {!showSuccessMsg ? (
        <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
      ) : (
        ""
      )}
      <main
        className={`${showSuccessMsg ? "w-full" : "w-full md:mt-5 md:w-[65%]"}`}
      >
        {showSuccessMsg ? (
          <AnimatePresence mode="wait">
            <SuccessMessage />
          </AnimatePresence>
        ) : (
          <form
            onSubmit={handleOnSubmit}
            className="w-full flex flex-col justify-between h-full"
          >
            <AnimatePresence mode="wait">
              {currentStepIndex === 0 && (
                <UserInfoForm
                  key="step1"
                  {...formData}
                  updateForm={updateForm}
                  errors={errors}
                />
              )}
              {currentStepIndex === 1 && (
                <PlanForm key="step2" {...formData} updateForm={updateForm} />
              )}
              {currentStepIndex === 2 && (
                <AddonsForm key="step3" {...formData} updateForm={updateForm} />
              )}
              {currentStepIndex === 3 && (
                <FinalStep key="step4" {...formData} goTo={goTo} />
              )}
            </AnimatePresence>
            <div className="w-full items-center flex justify-between">
              <div className="">
                <Button
                  onClick={previousStep}
                  type="button"
                  variant="ghost"
                  className={`${
                    isFirstStep
                      ? "invisible"
                      : "visible p-0 text-neutral-200 hover:text-white"
                  }`}
                >
                  Go Back
                </Button>
              </div>
              <div className="flex items-center">
                <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
                  <Button
                    type="submit"
                    className="relative text-neutral-200 bg-neutral-900 border border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white"
                  >
                    {isLastStep ? "Confirm" : "Next Step"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
