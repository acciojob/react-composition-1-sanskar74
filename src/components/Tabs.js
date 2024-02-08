import React, { useState } from "react";

const Tabs = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <div>
      <ul>
        {tabData.map((tab) => (
          <li onClick={() => setActiveTab(tab)}>{tab.title}</li>
        ))}
      </ul>
      <div>{activeTab && <p>{activeTab.content}</p>}</div>
    </div>
  );
};

export default Tabs;
