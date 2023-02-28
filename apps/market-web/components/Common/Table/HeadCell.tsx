import classNames from "classnames";

interface HeadCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  className?: string;
  children: React.ReactNode;
}

const HeadCell = ({ className, children, ...restProps }: HeadCellProps) => {
  return (
    <th
      className={classNames("p-5 text-gray font-semibold", className)}
      {...restProps}
    >
      {children}
    </th>
  );
};

export default HeadCell;
