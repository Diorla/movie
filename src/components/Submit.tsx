import Button from "react-bootstrap/Button";

interface SubmitProps {
  onClick: (e: any) => void;
  [props: string]: any;
}

export default function Submit({ onClick, props }: SubmitProps) {
  return (
    <Button variant="primary" onClick={onClick} {...props}>
      Submit
    </Button>
  );
}
