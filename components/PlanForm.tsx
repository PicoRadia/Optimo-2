"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormWrapper from "./FormWrapper";
import { FormItems } from "@/app/page";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

const PlanForm = ({ updateForm, firstName, lastName, email, phone }: stepProps) => {
  return (
    <FormWrapper
      title="Personal Information"
      description="Please provide your personal details."
    >
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            autoFocus
            type="text"
            name="firstName"
            id="firstName"
            placeholder="e.g. John"
            value={firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
            className="w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="e.g. Doe"
            value={lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
            className="w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. johndoe@example.com"
            value={email}
            onChange={(e) => updateForm({ email: e.target.value })}
            className="w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
            className="w-full"
            required
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default PlanForm;
