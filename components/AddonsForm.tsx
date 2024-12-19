"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FormWrapper from "./FormWrapper";
import { FormItems } from "@/app/page";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

const AddressForm = ({ updateForm, address = {
  street: "",
  city: "",
  state: "",
  postalCode: "",
  warehouse: ""
} }: stepProps) => {
  return (
    <FormWrapper
      title="Address Information"
      description="Please provide your address details."
    >
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="street">Street Address</Label>
          <Input
            autoFocus
            type="text"
            name="street"
            id="street"
            placeholder="e.g. 123 Main Street"
            value={address.street}
            onChange={(e) =>
              updateForm({
                address: { ...address, street: e.target.value },
              })
            }
            className="w-full"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="e.g. San Francisco"
            value={address.city}
            onChange={(e) =>
              updateForm({
                address: { ...address, city: e.target.value },
              })
            }
            className="w-full"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="state">State</Label>
            <Input
              type="text"
              name="state"
              id="state"
              placeholder="e.g. CA"
              value={address.state}
              onChange={(e) =>
                updateForm({
                  address: { ...address, state: e.target.value },
                })
              }
              className="w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="e.g. 94103"
              value={address.postalCode}
              onChange={(e) =>
                updateForm({
                  address: { ...address, postalCode: e.target.value },
                })
              }
              className="w-full"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="warehouse">Warehouse</Label>
          <Input
            type="text"
            name="warehouse"
            id="warehouse"
            placeholder="e.g. Main Distribution Center"
            value={address.warehouse}
            onChange={(e) =>
              updateForm({
                address: { ...address, warehouse: e.target.value },
              })
            }
            className="w-full"
            required
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default AddressForm;