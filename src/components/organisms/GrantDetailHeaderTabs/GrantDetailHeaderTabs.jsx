import React, { useState } from "react";
import { AppBar, Tabs, Tab, Paper, Box } from "@material-ui/core";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";
import GrantDetail from "_organisms_/GrantDetail/GrantDetail";
import VersionHistoryDetail from "_organisms_/VersionHistoryDetail/VersionHistory";
import RelatedDocumentsDetail from "_organisms_/RelatedDocumentsDetail/RelatedDocumentsDetail";
import useStyles from "./GrantDetailHeaderTabs.styles";

const LinkTab = (props) => (
  <Tab component="a" onClick={(e) => e.preventDefault()} {...props} />
);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const styles = useStyles();
  return (
    <Box
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper className={styles.tabPanel} p={3}>
          {children}
        </Paper>
      )}
    </Box>
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

  const styles = useStyles();

  if (grantInformation) {
    return (
      <Box className={styles.container}>
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
          </Tabs>
        </AppBar>
        <Box className={styles.tabsContainer}>
          <TabPanel value={activeTab} index={0}>
            <GrantDetail />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <>
              <VersionHistoryDetail />
              <GrantDetail />
            </>
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <RelatedDocumentsDetail />
            <GrantDetail />
          </TabPanel>
        </Box>
      </Box>
    );
  }

  return <></>;
};

export default GrantDetailHeaderTabs;
