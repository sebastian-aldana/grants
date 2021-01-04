import React from "react";
import GrantDetailHeaderTabs from "_organisms_/GrantDetailHeaderTabs/GrantDetailHeaderTabs";
import GrantOpportunity from "_organisms_/GrantOpportunity/GrantOpportunity";

const GrantInformationTemplate = () => {
  return (
    <>
      <GrantOpportunity />
      <GrantDetailHeaderTabs />
    </>
  );
};

export default GrantInformationTemplate;
