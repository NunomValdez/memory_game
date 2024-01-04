/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useEffect, forwardRef, useState, useContext } from "react";
import PropTypes from "prop-types";
import { FormControl, useFormControlContext } from "@mui/base/FormControl";
import { Input } from "@mui/base/Input";
import clsx from "clsx";
import { GameContext } from "../context-provider/ContextProvider";

export default function UserNameForm() {
  const [userName, setUserName] = useState("");
  const { setPlayerName } = useContext(GameContext);

  // Load name from localStorage on mount
  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    if (storedName) {
      setUserName(storedName);
      setPlayerName(storedName);
    }
  }, [setPlayerName]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };
  const handleSaveNameInput = () => {
    setPlayerName(userName);
    localStorage.setItem("playerName", userName);
    setUserName(""); // Reset the input field
  };

  return (
    <div>
      <FormControl defaultValue="" className="font-sans pt-52" required>
        <Label className="font-bold text-lg text-indigo-600">
          Hey there! What&apos;s your Name?
        </Label>
        <Input
          placeholder="Write your name here"
          slotProps={{
            input: {
              className:
                "w-80  font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-400 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
            },
          }}
          onChange={handleInputChange}
        />
        <button
          className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 border border-indigo-700 rounded-md shadow transition duration-200 ease-in-out"
          onClick={handleSaveNameInput}
        >
          Save
        </button>
      </FormControl>
    </div>
  );
}

const Label = forwardRef(({ className: classNameProp, children }, ref) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p className={clsx("text-sm mb-1", classNameProp)}>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p
      ref={ref}
      className={clsx(
        "text-sm mb-1",
        classNameProp,
        error || showRequiredError ? "invalid text-red-500" : ""
      )}
    >
      {children}
      {required ? " *" : ""}
    </p>
  );
});

const HelperText = forwardRef((props, ref) => {
  const { className, ...other } = props;
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? (
    <p ref={ref} className={clsx("text-sm", className)} {...other}>
      This field is required.
    </p>
  ) : null;
});

HelperText.propTypes = {
  className: PropTypes.string,
};
