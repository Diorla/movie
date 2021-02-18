import Button from "react-bootstrap/Button";

interface SubmitProps {
  onClick: (e: any) => void;
}

export default function Submit({ onClick }: SubmitProps) {
  return (
    <Button variant="primary" onClick={onClick}>
      Submit
    </Button>
  );
}
