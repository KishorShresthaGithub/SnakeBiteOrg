import React, { useState } from "react";

export const DashCardContext = React.createContext();

function DashCard2(props) {
  const [layout, setLayout] = useState(props.options[0].tab_id);
  const [options, setOptions] = useState(props.options);
  const [updateData, setUpdateData] = useState({});

  const renderTabPage = () => {
    const pageObject = options?.find((res) => res.tab_id === layout);

    return React.cloneElement(pageObject.page, {
      option_id: pageObject.tab_id,
    });
  };

  const renderTabs = () => {
    const tabs = options.map((item, index) => {
      let classname = `flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 `;
      classname += `${layout === item.tab_id ? " bg-gray-200 " : " "} `;
      classname += `${
        item.tab_show === true || layout === item.tab_id ? " show " : " hidden "
      }`;

      return (
        <div
          key={index}
          className={classname}
          onClick={() => setLayout(item.tab_id)}
        >
          {item.tab_icon}
          {item.tab_name}
        </div>
      );
    });
    return tabs;
  };

  const contextVars = {
    layout,
    setLayout,
    updateData,
    setUpdateData,
    options,
    setOptions,
  };

  return (
    <DashCardContext.Provider value={contextVars}>
      <div className="bg-gray-100 min-h-screen md:px-6 md:py-8">
        <div className="card shadow-md bg-white">
          {/* top section starts  */}
          <div className="flex items-center">{renderTabs()}</div>
          {/* top section ends  */}

          <hr />
          <h1 className="font-semibold text-xl p-4">
            {options?.find((res) => res.tab_id === layout).tab_name}
          </h1>
          <div className="p-4">{renderTabPage()}</div>
        </div>
      </div>
    </DashCardContext.Provider>
  );
}

export default DashCard2;
