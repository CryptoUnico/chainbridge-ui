import React from "react";

import { makeStyles, ITheme, createStyles } from "@imploy/common-themes";

const useStyles = makeStyles(
  ({ palette, constants, typography, breakpoints }: ITheme) =>
    createStyles({
      root: {},
    })
);

const TransactionModal = () => {
  const classes = useStyles();

  return <article></article>;
};

export default TransactionModal;