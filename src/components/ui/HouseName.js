import { useEffect, useRef, useState } from "react";
import Input from "../forms/Input";

function HouseName({ houseName, index, updateName }) {
  const inputRef = useRef(null);
  const [name, setName] = useState(houseName);
  const [showNameEdit, setShowNameEdit] = useState(false);

  useEffect(() => {
    showNameEdit && inputRef.current.focus();
  }, [showNameEdit]);

  const isValidName = (name) => {
    if (name.trim().length === 0) {
      alert("House name should not be empty");
      setName("House");
      return false;
    }
    if (name.trim().length > 12) {
      alert("House name should be less than 12 chars");
      setName(name.slice(0, 12));
      return false;
    }
    return true;
  };

  return (
    <h4 className="font-bold flex items-center">
      {index + 1}.
      {showNameEdit ? (
        <Input
          ref={inputRef}
          type="text"
          value={name}
          className="w-[100px]"
          changeHandler={setName}
          blurHandler={() => {
            if (isValidName(name)) {
              setShowNameEdit(false);
              updateName(name);
            }
          }}
        />
      ) : (
        <span
          className="ml-[3px]"
          onClick={() => {
            setShowNameEdit(true);
          }}
        >
          {name}
        </span>
      )}
    </h4>
  );
}

export default HouseName;
