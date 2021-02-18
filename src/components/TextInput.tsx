import Form from "react-bootstrap/Form";

interface TextInputProps {
  value: string;
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
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Form.Group>
  );
}
