import AddLinks from "@components/Dashboard/Links/AddLinks";
import ViewLinks from "@components/Dashboard/Links/ViewLinks";
import NavWrapper from "@provider/NavProvider";


import UpdateLinks from "@components/Dashboard/Links/UpdateLinks";
import LinkPage from "@components/Dashboard/Links/LinkPage";
import { IoMdAdd } from "react-icons/io";
import { GrFormAttachment, GrFormView } from "react-icons/gr";
import DashCard2 from "@template/DashCard2";

const options = [
  {
    tab_id: "view_links",
    tab_show: true,
    tab_name: "View Links",
    tab_icon: <IoMdAdd />,
    page: <ViewLinks />,
  },
  {
    tab_id: "add_links",
    tab_show: true,
    tab_name: "Add Links",
    tab_icon: <GrFormView className="text-2xl" />,
    page: <AddLinks />,
  },
  {
    tab_id: "update_links",
    tab_name: "Update Links",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <UpdateLinks />,
  },
  {
    tab_id: "page_links",
    tab_name: "Update Links",
    tab_show: false,
    tab_icon: <GrFormAttachment className="text-2xl" />,
    page: <LinkPage />,
  },
];

function DLinks() {
  return (
    <NavWrapper>
      <DashCard2 options={options} />
    </NavWrapper>
  );
}

export default DLinks;
