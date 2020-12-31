import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getGrants } from "_reducers_/grants/grants.selectors";

const GranstTable = () => {
  const router = useRouter();
  const grants = useSelector(getGrants);
  return (
    <>
      {grants.map((grant) => (
        <>
          <div
            onClick={() =>
              router.push(`/grantDetail${grant.id ? `?id=${grant.id}` : ""}`)
            }
          >
            <p>{grant.number}</p>
            <p>{grant.title}</p>
            <p>{grant.agencyCode}</p>
            <p>{grant.oppStatus}</p>
            <p>{grant.openDate}</p>
            <p>{grant.closeDate}</p>
          </div>
        </>
      ))}
      <h2>Esta es la tabla de grants</h2>
    </>
  );
};

export default GranstTable;
