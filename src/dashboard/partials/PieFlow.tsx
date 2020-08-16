import React from "react";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { Flow } from "../../state/reducer";
import { formatCurrency, COLORS, sumFlow } from "../helpers";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
} from "recharts";

interface Props {
  title: string;
  flows: Flow[];
  categories: string[];
}

export default function PieFlow({ title, flows, categories }: Props) {
  const sum = sumFlow(flows);

  // Group flows by category, into array of { name, value }
  const data = Object.entries(flows.reduce((prev: { [key: string]: number; }, curr) => ({
    ...prev,
    [curr.category]: (prev[curr.category] || 0) + curr.value
  }), {})).map(entry => ({
    name: entry[0],
    value: entry[1]
  }));

  return (
    <>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {formatCurrency(sum)}
      </Typography>

      {data.length > 0 &&
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={
                COLORS[categories.indexOf(entry.name)] || COLORS[index % COLORS.length]
              } />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>}
    </>
  );
}
