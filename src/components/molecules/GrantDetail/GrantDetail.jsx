import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Paper, Card, CardHeader, CardContent } from "@material-ui/core";
import { getGrantInformation } from "_reducers_/grants/grants.selectors";

const SinopsiDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const grantInformation = useSelector(getGrantInformation(id));

  let information;

  if (grantInformation) {
    information = grantInformation.isSynopsis
      ? grantInformation.synopsis
      : grantInformation.forecast;
  }

  if (grantInformation) {
    return (
      <>
        <Card variant="outlined">
          <CardHeader title="General Information" />
          <CardContent>
            <Paper elevation={0}>
              <p>
                Funding Opportunity Number:
                {` ${grantInformation.opportunityNumber}`}
              </p>
              <p>
                Funding Opportunity Title
                {` ${grantInformation.opportunityTitle}`}
              </p>
              <p>
                Opportunity Category
                {` ${grantInformation.opportunityCategory.description}`}
              </p>
              <p>
                Funging Instrument Type
                {information.fundingInstruments.map((instrument) => (
                  <p>{`${instrument.description}`}</p>
                ))}
              </p>
              <p>
                Category of Funding Activity
                {information.fundingActivityCategories.map((activity) => (
                  <p>{`${activity.description}`}</p>
                ))}
              </p>
              <p>
                Category Explanation
                {` ${information.fundingActivityCategoryDesc}`}
              </p>
              <p>
                CFDA number(s)
                {grantInformation.cfdas.map((cfda) => (
                  <p>{`${cfda.cfdaNumber} -- ${cfda.programTitle}`}</p>
                ))}
              </p>
              <p>
                Version:
                {` ${information.version}`}
              </p>
              <p>
                Posted Date
                {` ${information.postingDate}`}
              </p>
              <p>
                Last Updated Date
                {` ${information.lastUpdatedDate}`}
              </p>
              <p>
                Original clossing Date for Applications
                {` ${information.originalDueDate}`}
              </p>
              <p>
                Current Closing Date for Applications
                {` ${information.responseDate}`}
              </p>
              <p>
                Archive Date
                {` ${information.archiveDate}`}
              </p>
              <p>
                Estimated Total Program Funding
                {` ${information.estimatedFundingFormatted}`}
              </p>
              <p>
                Award Ceiling
                {` ${information.awardCeilingFormatted}`}
              </p>
              <p>
                Award Floor
                {` ${information.awardFloorFormatted}`}
              </p>
            </Paper>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Eligibility" />
          <CardContent>
            <Paper elevation={0}>
              <p>
                Eligigle Aplication:
                {information.applicantTypes.map((types) => (
                  <p>{`${types.description}`}</p>
                ))}
              </p>
              <p>
                Additional Information on Eligibility:
                {information.applicantEligibilityDesc}
              </p>
            </Paper>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardHeader title="Eligility" />
          <CardContent>
            <Paper elevation={0}>
              <p>
                Additional Information:
                {`${information.agencyContactName}`}
              </p>
              <p>
                Description:
                {grantInformation.isSynopsis
                  ? information.synopsisDesc
                  : information.forecastDesc}
              </p>
              <p>
                Link to Additional Information:
                {`${information.fundingDescLinkUrl}`}
              </p>
              <p>
                Grantor Contact Information:
                {`${information.fundingDescLinkUrl}`}
              </p>
            </Paper>
          </CardContent>
        </Card>
      </>
    );
  }

  return <></>;
};

export default SinopsiDetail;
