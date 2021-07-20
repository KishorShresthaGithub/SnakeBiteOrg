const AddLayout = ({ btnAdd, children }) => {
  return (
    <div>
      <hr />
      <h1 className="font-semibold text-xl p-4">{btnAdd}</h1>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default AddLayout;
