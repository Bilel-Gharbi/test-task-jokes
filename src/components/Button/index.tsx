import React from "react";

type Props = {
  onClick?: (arg?: any) => void;
  id?: string;
  key?: string | number | undefined;
  label: string;
  name?: string;
  icon?: React.ReactNode;
  className?: string;
  style?: Object;
};

const Button = ({
  name,
  label,
  key,
  icon,
  className,
  style,
  id,
  onClick,
}: Props) => {
  return (
    <>
      <button
        className={className ? className : "btn"}
        id={id}
        key={key}
        onClick={onClick}
        style={style}
      >
        {label.toUpperCase()}
        &nbsp;
        {icon && icon}
      </button>
    </>
  );
};

export default Button;
