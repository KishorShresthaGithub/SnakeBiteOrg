const UpdateLayout = ({ btnUpdate, updateComponent }) => {
  return (
    <div>
      <hr />
      <h1 className="font-semibold text-xl p-4">{btnUpdate}</h1>

      <div className="p-4 w-80 md:w-full overflow-x-scroll">
        {updateComponent}
      </div>
    </div>
  );
};

export default UpdateLayout;
