import { RoughNotation } from "react-rough-notation";

type NavProps = {
  currentStepIndex: number;
  goTo: (index: number) => void;
};

const SideBar = ({ currentStepIndex, goTo }: NavProps) => {
  return (
    <div className="absolute -top-20 left-0 w-full md:w-[25%] md:relative md:top-0 md:left-0">
      <nav className="py-5 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-slate-200 h-full rounded-md border border-gray-200 dark:border-neutral-700 md:p-5">
        <ul className="flex justify-center gap-2 md:flex-col">
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-gray-500 dark:text-neutral-500 uppercase text-sm md:flex">
              step 1
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(0)}
              className={`text-sm ${
                currentStepIndex === 0 ? "text-[#ffe666]" : "text-gray-700 dark:text-white"
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 0}
                color="#ffe666"
              >
                Authentification
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-gray-500 dark:text-neutral-500 uppercase text-sm md:flex">
              step 2
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(1)}
              className={`text-sm ${
                currentStepIndex === 1 ? "text-[#bd284d]" : "text-gray-700 dark:text-white"
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 1}
                color="#bd284d"
              >
                Customer Information
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-gray-500 dark:text-neutral-500 uppercase text-sm md:flex">
              step 3
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(2)}
              className={`text-sm ${
                currentStepIndex === 2 ? "text-[#FF8360]" : "text-gray-700 dark:text-white"
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 2}
                color="#FF8360"
              >
                Address
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-gray-500 dark:text-neutral-500 uppercase text-sm md:flex">
              step 4
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(3)}
              className={`text-sm ${
                currentStepIndex === 3 ? "text-[#6fe79f]" : "text-gray-700 dark:text-white"
              } md:text-base`}
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 3}
                color="#6fe79f"
              >
                Scheduling
              </RoughNotation>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;