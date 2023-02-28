import classNames from "classnames";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string;
  children: React.ReactNode;
}

const Table = ({ className, children, ...restProps }: TableProps) => {
  return (
    <table
      className={classNames(
        "w-full border border-slate-200 border-separate border-spacing-0 rounded-lg",
        className
      )}
      {...restProps}
    >
      {children}
    </table>
  );
};

export default Table;
