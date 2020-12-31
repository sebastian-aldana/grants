import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetGrantInformation } from "_reducers_/grants/grants.async-actions";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";

const GrantDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const grantInformation = useSelector(getGrantInformation(id));

  useEffect(() => {
    dispatch(asyncGetGrantInformation(id));
  }, []);

  return (
    <>
      <h2>Hola soy el {id} grandt</h2>
    </>
  );
};

export default GrantDetail;
