import classNames from "classnames";

interface BodyCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  className?: string;
  children: React.ReactNode;
}

const BodyCell = ({ className, children, ...restProps }: BodyCellProps) => {
  return (
    <td
      className={classNames("p-5 border-t border-slate-200", className)}
      {...restProps}
    >
      {children}
    </td>
  );
};

export default BodyCell;
