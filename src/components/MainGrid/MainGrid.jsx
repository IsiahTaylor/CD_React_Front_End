import React from "react";
import ResponsiveColumns from "../../functions/ResponsiveColumns";
import { SimpleGrid, Center } from "@chakra-ui/react";

const v = ResponsiveColumns();
export const numRows = v.numRows;
export const numCols = v.numCols;

export default function MainGrid({ children }) {
  return (
    <Center
      height={{
        base: v.sm.heightString,
        md: v.md.heightString,
        xl: v.xl.heightString,
      }}
    >
      <SimpleGrid
        fontFamily={"outfit"}
        templateColumns={{
          base: "repeat(" + v.sm.numCols + ",1fr)",
          md: "repeat(" + v.md.numCols + ",1fr)",
          xl: "repeat(" + v.xl.numCols + ",1fr)",
        }}
        templateRows={{
          base: "repeat(" + v.sm.numRows + ",1fr)",
          md: "repeat(" + v.md.numRows + ",1fr)",
          xl: "repeat(" + v.xl.numRows + ",1fr)",
        }}
        width={{
          base: v.sm.widthAsString,
          md: v.md.widthAsString,
          xl: v.xl.widthAsString,
        }}
        height={"100%"}
        spacing={{
          base: v.sm.marginGapsAsString,
          md: v.md.marginGapsAsString,
          xl: v.xl.marginGapsAsString,
        }}
        marginLeft={{
          base: "0px",
          sm: v.sm.marginGapsAsString,
          md: v.md.marginGapsAsString,
          xl: v.xl.marginGapsAsString,
        }} // (base: "0px") This helps prevent the cols from getting smushed
        marginRight={{
          base: "0px",
          sm: v.sm.marginGapsAsString,
          md: v.md.marginGapsAsString,
          xl: v.xl.marginGapsAsString,
        }}
        minChildWidth={v.minChildWidthAsString}
      >
        {children}
      </SimpleGrid>
    </Center>
  );
}
