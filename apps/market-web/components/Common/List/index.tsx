interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-t border-slate-200 last:border-b">
      {children}
    </div>
  );
};

export default List;
