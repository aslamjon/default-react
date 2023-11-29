import React, { forwardRef, useMemo } from "react";

const Flex = forwardRef(({ align, justify, gap, direction, mb, mt, ml, mr, style, className = "", ...rest }, ref) => {
  const styled = useMemo(
    () => ({
      display: "flex",
      justifyContent: justify || "flex-start",
      alignItems: align || "start",
      flexDirection: direction || "row",
      gap: gap || "0",
      marginBottom: mb ? mb : "unset",
      marginTop: mt ? mt : "unset",
      marginLeft: ml ? ml : "unset",
      marginRight: mr ? mr : "unset",
    }),
    [align, justify, gap, direction, mb, mt, ml, mr]
  );
  return <div className={className} style={{ ...styled, ...style }} ref={ref} {...rest} />;
});

export default Flex;
