interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return (
    <div className="flex justify-between p-4 border-t border-slate-200">
      {children}
    </div>
  );
};

export default List;
