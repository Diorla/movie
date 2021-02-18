import Form from "react-bootstrap/Form";

interface TextInputProps {
  value: number;
  label: string;
  placeholder: string;
  onChange: (e: any) => void;
  [props: string]: any;
}

export default function TextInput({
  value,
  onChange,
  label,
  placeholder,
  props,
}: TextInputProps) {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="number"
        min={1}
        max={5}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Form.Group>
  );
}
