interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

const Select = ({ options, ...restProps }: SelectProps) => {
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <select
            className="px-2 py-1 text-sm font-medium text-black border rounded-md border-slate-200 hover:bg-slate-100"
            {...restProps}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Select;
