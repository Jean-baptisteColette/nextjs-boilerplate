import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { FontAwesomeSvgIconProps } from "@components/icons/FontAwesomeSvgIcon/definitions";

function FontAwesomeSvgIcon(
  props: FontAwesomeSvgIconProps,
  ref: React.Ref<SVGSVGElement>
) {
  const { icon, sx, onClick } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon
      onClick={onClick}
      sx={sx}
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
    >
      {typeof svgPathData === "string" ? (
        <path d={svgPathData} />
      ) : (
        svgPathData.map((d: string, i: number) => (
          <path
            key={`${d}${i.toString()}`}
            style={{ opacity: i === 0 ? 0.4 : 1 }}
            d={d}
          />
        ))
      )}
    </SvgIcon>
  );
}

export default React.forwardRef(FontAwesomeSvgIcon);
