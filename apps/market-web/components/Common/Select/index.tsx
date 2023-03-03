interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

const Select = ({ options, ...restProps }: SelectProps) => {
  return (
    <div className="relative inline-block text-left">
      <select
        className="px-2 py-1 text-sm font-medium text-black border rounded-md border-slate-200 hover:bg-slate-100"
        data-testid="select"
        {...restProps}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            data-testid={"option-" + index}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
