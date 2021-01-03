import React, { useState } from "react";
import { AppBar, Tabs, Tab, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";
import GrantDetail from "_molecules_/GrantDetail/GrantDetail";
import VersionHistoryDetail from "_molecules_/VersionHistoryDetail/VersionHistory";
import RelatedDocumentsDetail from "_molecules_/RelatedDocumentsDetail/RelatedDocumentsDetail";
import PackageDetails from "_molecules_/PackageDetails/PackageDetails";

const LinkTab = (props) => (
  <Tab component="a" onClick={(e) => e.preventDefault()} {...props} />
);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Paper p={3}>{children}</Paper>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
};

const GrantDetailHeaderTabs = () => {
  const router = useRouter();

  const { id } = router.query;

  const grantInformation = useSelector(getGrantInformation(id));

  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  if (grantInformation) {
    return (
      <>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={activeTab}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab
              label={grantInformation.isSynopsis ? "Synopsis" : "Forecast"}
              href="/drafts"
              {...a11yProps(0)}
            />
            <LinkTab label="Version History" href="/trash" {...a11yProps(1)} />
            <LinkTab label="Related Documents" href="/spam" {...a11yProps(2)} />
            <LinkTab label="Package" href="/spam" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={activeTab} index={0}>
          <GrantDetail />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <VersionHistoryDetail />
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <RelatedDocumentsDetail />
        </TabPanel>
        <TabPanel value={activeTab} index={3}>
          <PackageDetails />
        </TabPanel>
      </>
    );
  }

  return <></>;
};

export default GrantDetailHeaderTabs;
