const NotesIcon = ({ size = 24, color = "currentColor", ...props }) => {
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
        d="M15.75 4.5h3.75c0.3978 0 0.7794 0.15804 1.0607 0.43934S21 5.60218 21 6v15.75c0 0.3978 -0.158 0.7794 -0.4393 1.0607s-0.6629 0.4393 -1.0607 0.4393h-15c-0.39782 0 -0.77936 -0.158 -1.06066 -0.4393C3.15804 22.5294 3 22.1478 3 21.75V6c0 -0.39782 0.15804 -0.77936 0.43934 -1.06066C3.72064 4.65804 4.10218 4.5 4.5 4.5h3.75c0 -0.99456 0.39509 -1.94839 1.09835 -2.65165C10.0516 1.14509 11.0054 0.75 12 0.75c0.9946 0 1.9484 0.39509 2.6517 1.09835C15.3549 2.55161 15.75 3.50544 15.75 4.5Z"
      />
      <path
        stroke={color}
        strokeWidth="1.5"
        d="M12 4.5c-0.2071 0 -0.375 -0.16789 -0.375 -0.375s0.1679 -0.375 0.375 -0.375"
      />
      <path
        stroke={color}
        strokeWidth="1.5"
        d="M12 4.5c0.2071 0 0.375 -0.16789 0.375 -0.375S12.2071 3.75 12 3.75"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 10.5H12"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 10.5h2.25"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.25 14.25H12"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 14.25H6.75"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 18H12"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 18h2.25"
      />
    </svg>
  );
};

export default NotesIcon;