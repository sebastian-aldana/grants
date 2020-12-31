import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncGetGrants } from "_reducers_/grants/grants.async-actions";
import GrantsGeneralInfomationTemplate from "_templates_/GrantsGeneralInfomationTemplate/GrantsGeneralInformationTemplate";

const Grants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetGrants());
  }, []);

  return (
    <>
      <GrantsGeneralInfomationTemplate />
    </>
  );
};

export default Grants;
