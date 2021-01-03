import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetGrantInformation } from "_reducers_/grants/grants.async-actions";
import GrantInformationTemplate from "_templates_/GrantInformationTemplate/GrantInformationTemplate";

const GrantDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  useEffect(() => {
    dispatch(asyncGetGrantInformation(id));
  }, [id]);

  return (
    <>
      <GrantInformationTemplate />
    </>
  );
};

export default GrantDetail;
