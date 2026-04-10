import type { SVGProps } from "react";

type CustomIconProps = {
  size?: number;
  color?: string;
} & SVGProps<SVGSVGElement>;

const PenIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}: CustomIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22.588 4.59101c0.422 -0.42196 0.659 -0.99426 0.659 -1.591 0 -0.59674 -0.237 -1.16904 -0.659 -1.591C22.166 0.987054 21.5937 0.75 20.997 0.75s-1.169 0.237054 -1.591 0.65901L8.14 12.675l3.182 3.182L22.588 4.59101Z"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m8.14 12.6751 -1.393 4.575 4.575 -1.393m6.959 -13.32304 3.182 3.182M3.747 18.7501H3c-0.59674 0 -1.16903 0.237 -1.59099 0.659C0.987053 19.831 0.75 20.4033 0.75 21.0001c0 0.5967 0.237053 1.169 0.65901 1.5909 0.42196 0.422 0.99425 0.6591 1.59099 0.6591h15.75"
      />
    </svg>
  );
};

export default PenIcon;