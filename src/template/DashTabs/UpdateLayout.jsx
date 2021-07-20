import { useContext } from "react";
import { DashCardContext } from "../DashCard";

const UpdateLayout = ({ btnUpdate, children }) => {
  const { updateData } = useContext(DashCardContext);

  return (
    <div>
      <hr />
      <h1 className="font-semibold text-xl p-4">{btnUpdate}</h1>

      <h3 className="font-semibold text-xl p-4"> ID: {updateData.id}</h3>

      <div className="p-4 w-80 md:w-full overflow-x-scroll">{children}</div>
    </div>
  );
};

export default UpdateLayout;
