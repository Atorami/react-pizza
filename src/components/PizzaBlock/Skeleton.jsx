import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="140" r="125" />
    <rect x="0" y="294" rx="11" ry="11" width="280" height="37" />
    <rect x="89" y="254" rx="0" ry="0" width="0" height="2" />
    <rect x="0" y="345" rx="11" ry="11" width="280" height="88" />
    <rect x="122" y="439" rx="20" ry="20" width="152" height="45" />
    <rect x="20" y="439" rx="10" ry="10" width="73" height="38" />
  </ContentLoader>
);

export default Skeleton;
