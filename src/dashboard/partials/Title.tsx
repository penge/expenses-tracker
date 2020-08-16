import React from "react";
import Typography from "@material-ui/core/Typography";

interface MyProps {}

export default function Title(props: React.PropsWithChildren<MyProps>) {
  return (
    <Typography component="h2" variant="h6" gutterBottom>
      {props.children}
    </Typography>
  );
}
