import React from "react";

const Index = () => <></>;

Index.getInitialProps = async (ctx) => {
  const { res } = ctx;
  if (res) res.writeHead(303, { Location: "/grants" }).end();
  else window.location.href = "/grants";
};

export default Index;
