import { Flow } from "../../state/reducer";

export const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#F25F5C",
  "#50514F",
  "#FFE066",
  "#247BA0",
  "#70C1B3"
];

const currencyformatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export const formatCurrency = (value: number): string =>
  currencyformatter.format(value);

export const formatDate = (date: Date | string | null): string => {
  if (date === null) {
    return "";
  }

  return (typeof date === "string" ? new Date(date) : date).toLocaleDateString("en-US");
};

export const sumFlow = (data: Flow[]): number =>
  data.map(item => item.value).reduce((prev, next) => prev + next, 0);
