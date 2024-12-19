import FormWrapper from "./FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItems } from "../app/page";

type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  errors: Partial<FormItems>;
};

const UserInfoForm = ({
  firstName,
  lastName,
  email,
  authentication,
  errors,
  updateForm,
}: StepProps) => {
  const handleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateForm({ 
      authentication: value,
      errors: {
        ...errors,
        authentication: value !== "betterearth2025" ? "Incorrect password" : ""
      }
    });
  };

  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and Authentication code."
    >
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            autoFocus
            type="text"
            name="firstName"
            id="firstName"
            placeholder="e.g. Stephen"
            value={firstName}
            onChange={(e) => updateForm({ firstName: e.target.value })}
            className="w-full"
            required
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="e.g. King"
            value={lastName}
            onChange={(e) => updateForm({ lastName: e.target.value })}
            className="w-full"
            required
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            className="w-full"
            onChange={(e) => updateForm({ email: e.target.value })}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="authentication">Authentication Code</Label>
          <Input
            type="password"
            name="authentication"
            id="authentication"
            placeholder="Enter your authentication code"
            value={authentication}
            className="w-full"
            onChange={handleAuthChange}
            required
          />
          {errors.authentication && (
            <p className="text-red-500 text-sm">{errors.authentication}</p>
          )}
        </div>
      </div>
    </FormWrapper>
  );
};

export default UserInfoForm;
