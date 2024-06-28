import { GenericInputProps } from "@/types/genericInputProps";

export default function GenericInput({
  label,
  placeholder,
  name,
  type = "text",
  id,
}: GenericInputProps) {
  return (
    <>
      <label>
        {label}
        <input
          className="content-new"
          placeholder={placeholder}
          id={id}
          name={name}
          type={type}
        />
      </label>
    </>
  );
}
