import { useState } from "react";
import { textFieldStyles, textareaStyles, newButtonStyles } from "@/styles";
import TextArea from "@/components/TextArea";
import TextField from "@/components/TextField";

const CardForm = () => {
  const [fields, setFields] = useState([{ title: "", description: "" }]);

  const handleTitleChange = (e, index) => {
    const newFields = [...fields];
    newFields[index].title = e.target.value;
    setFields(newFields);
  };

  const handleDescriptionChange = (e, index) => {
    const newFields = [...fields];
    newFields[index].description = e.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    if (fields.length <= 4) {
      setFields([...fields, { title: "", description: "" }]);
    }
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  return (
    <form>
      {fields.map((field, index) => (
        <div key={index}>
          <TextField
            label="Activity to Achieve your Goal"
            value={field.title}
            onChange={(e) => handleTitleChange(e, index)}
            style={textFieldStyles}
          />

          <div style={{ textAlign: "center" }}>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Description
            </label>
            <TextArea
              placeholder="Describe how to do the activity ..."
              value={field.description}
              onChange={(e) => handleDescriptionChange(e, index)}
              style={textareaStyles}
            />
          </div>

          {index !== 0 && (
            <button
              style={newButtonStyles}
              type="button"
              onClick={() => handleRemoveField(index)}
            >
              Remove Field
            </button>
          )}
        </div>
      ))}

      {fields.length < 5 && (
        <button style={newButtonStyles} type="button" onClick={handleAddField}>
          Add Field
        </button>
      )}
    </form>
  );
};

export default CardForm;
