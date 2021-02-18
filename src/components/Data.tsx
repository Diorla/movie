import { useState } from "react";
import Table from "react-bootstrap/Table";

type datum = {
  title: string;
  rating: number;
  duration: string;
};

interface TableProps {
  data: Array<datum>;
  filter: string;
}
export default function Data({ data, filter }: TableProps) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Movie</th>
          <th>Duration</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((item) =>
            item.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map(
            (
              item: { title: string; duration: string; rating: number },
              idx: number
            ) => (
              <tr key={idx}>
                <td>{item.title}</td>
                <td>{item.duration}</td>
                <td>{item.rating.toFixed(2)}</td>
              </tr>
            )
          )}
      </tbody>
    </Table>
  );
}
