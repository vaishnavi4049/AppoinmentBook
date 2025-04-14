import React, { useState } from "react";
import PropTypes from "prop-types";

export const Tabs = ({ defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const context = {
    activeTab,
    setActiveTab,
  };

  return (
    <div className="w-full">
      {React.Children.map(children, child =>
        React.cloneElement(child, { context })
      )}
    </div>
  );
};

export const TabsList = ({ children, context }) => (
  <div className="flex space-x-2 mb-4 border-b pb-2">
    {React.Children.map(children, child =>
      React.cloneElement(child, { context })
    )}
  </div>
);

export const TabsTrigger = ({ value, children, context }) => {
  const isActive = context.activeTab === value;

  return (
    <button
      onClick={() => context.setActiveTab(value)}
      className={`px-4 py-2 rounded-t-md font-medium ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, context }) => {
  if (context.activeTab !== value) return null;

  return <div className="p-4 border rounded-b-md bg-white shadow">{children}</div>;
};

Tabs.propTypes = {
  defaultTab: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TabsList.propTypes = TabsTrigger.propTypes = TabsContent.propTypes = {
  children: PropTypes.node,
  context: PropTypes.object,
  value: PropTypes.string,
};
