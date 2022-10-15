import { FC, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  tooltipString?: string;
}

const ToolTip: FC<Props> = ({ children, tooltipString }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const componentRootRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={componentRootRef}
      onMouseOver={(me) => {
        if (!tooltipRef.current || !componentRootRef.current) return;
        const { left, top } = componentRootRef.current.getBoundingClientRect();
        tooltipRef.current.style.left = me.clientX - left + "px";
        tooltipRef.current.style.top = me.clientY - top + "px";
      }}
      className="relative inline-block group"
    >
      {children}
      {tooltipString ? (
        <span
          ref={tooltipRef}
          className="invisible group-hover:visible opacity-0 group-hover:opacity-80
          transition bg-cyan-800 text-white duration-700 ease-in pl-3 pr-2
          rounded absolute top-full mt-1 ml-1 whitespace-nowrap"
        >
          {tooltipString}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;