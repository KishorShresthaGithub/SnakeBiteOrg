const ViewLayout = ({ btnView, viewComponent }) => {
  return (
    <div>
      <hr />
      <h1 className="font-semibold text-xl p-4">{btnView}</h1>

      <div className="p-4 w-80 md:w-full overflow-x-scroll">
        {viewComponent}
      </div>
    </div>
  );
};

export default ViewLayout;
