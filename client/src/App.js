import React, { Component } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
// import "bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import StepWizard from "react-step-wizard";
import S1ZipCode from "./components/S1ZipCode";
import S2VehicleYear from "./components/S2VehicleYear";
import S3VehicleName from "./components/S3VehicleName";
import S4VehicleModel from "./components/S4VehicleModel";
import S5PrimaryUse from "./components/S5PrimaryUse";
import S6AnnualMileage from "./components/S6AnnualMileage";
import S7CoverageLevel from "./components/S7CoverageLevel";
import S8Ownership from "./components/S8Ownership";
import S9AddAnother from "./components/S9AddAnother";
import S10CurrentAutoInsurance from "./components/S10CurrentAutoInsurance";
import S11DrivingHistory from "./components/S11DrivingHistory";
import S12DriverData from "./components/S12DriverData";
import S13Education from "./components/S13Education";
import S14DateOfBirth from "./components/S14DateOfBirth";
import S15YourName from "./components/S15YourName";
import S16YourAddress from "./components/S16YourAddress";
import S17Media from "./components/S17Media";
import { Grid, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  state = {
    postData: {
      // extra entries
      lp_campaign_id: "60184895300f1",
      lp_campaign_key: "HLrBJGjTQP7NC3fmv6k4",
      IP_Address: "",
      lp_s1: '',
      lp_s2: 13,
      trusted_form_cert_id: "",
      gclid: '',
      User_Agent: navigator.userAgent,
      Landing_Page: "auto.quantumassurance.com",
      TCPA_Consent: "Yes",
      TCPA_Language:
        "By hitting submit below, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates  or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site; and I acknowledge that I may revoke my consent at any time by Calling 1 888-316-1350 or emailing “STOP” to  optout@quantumassurance.com.  I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE",
      Format: "JSON",
      jornaya_lead_id: "",
      Vehicle_1_Average_One_Way_Mileage: 0,
      Vehicle_1_Parking: "unknown",
      Vehicle_1_Average_Days_Per_Week_Used: 0,
      Vehicle_1_Desired_Collision_Coverage: "No Coverage",
      Vehicle_1_Desired_Comprehensive_Coverage: "No Coverage",
      Driver_1_License_Status: "unknown",
      Driver_1_Age_When_First_Licensed: 0,
      Driver_1_Occupation: "Student",
      Driver_1_Current_Residence: "Other",
      tickets_or_claims_in_last_three_years: "unknown",
      Driver_1_Insured_Past_30_Days: "unknown",
      Driver_1_Continuously_Insured_Years: 1,
      Driver_1_Additional_Drivers: "No",
      Driver_1_Additional_Vehicles: "No",
      Driver_1_Bankruptcy_In_Past_5_Years: "unknown",
      Driver_1_DUI_DWI_In_The_Past_5_Years: "unknown",
      Driver_1_Reposessions_In_The_Past_5_Years: "unknown",
      gclid: "",
      // S1
      zip_code: "",
      city: "",
      state: "",
      active_license: "",
      // S2
      vehicle_year: 0,
      // S3
      vehicle_make: "",
      // S4
      vehicle_model: "",
      // S5
      vehicle_primary_use: "Pleasure",
      // S6
      annual_mileage: 0,
      // S7
      desired_coverage_level: "",
      // S8
      vehicle_ownership: "",
      // S9

      // S10
      // Current Insurance Carrier
      // Continuous Coverage
      // S11
      // Active Licence?
      // Ticket/Claim in Last 3 years?
      Driver_1_Filing_Required: "None",
      // S12
      // Homeowner
      married: "Single",
      homeowner: "",
      gender: "",
      // S13
      education_level: "",
      credit_score: "unknown",
      // S14
      dob: "",
      // S15
      first_name: "",
      last_name: "",
      // S16
      address: "",
      email_address: "",
      phone_home: "",
    },
    postData2: {
      email: "",
      phone: "",
      address: "",
      zip: "",
      home_ownership: 0,
      vehicles: [
        // {
        // 	year: "",
        // 	model: "",
        // 	primary_purpose: "",
        // 	annual_mileage: "",
        // 	ownership: "",
        // },
      ],
      drivers: [
        {
          driver: "",
          gender: "",
          marital_status: "",
          birth_date: "",
          education: "",
          credit_rating: "",
          sr_22: "No",
        },
      ],
      current_company: "",
      continuous_coverage: "",
      //coverage_type: "",
    },
    year: 0,
    name: "Ford",
    zipCodeCity: "",
    username: "",
    table: [],
    home_ownership: 0,
    sr_22: "No",
    current_company: "",
    continuous_coverage: "",
  };

  maintainTable = () => {
    this.setState({
      table: [
        ...this.state.table,
        {
          name: this.state.name,
          model: this.state.postData.vehicle_model,
          year: this.state.year,
        },
      ],
    });
  };

  deleteTableItem = (value) => {
    this.setState({ table: value });
  };

  vehicleForPostData2 = (ownershipValue) => {
    const tempData = this.state.postData2;
    tempData.vehicles.push({
      year: this.state.postData.vehicle_year,
      model: this.state.postData.vehicle_model,
      primary_purpose: this.state.postData.vehicle_primary_use,
      annual_mileage: this.state.postData.annual_mileage,
      ownership: ownershipValue,
    });

    this.setState({ postData2: tempData });
  };

  deleteVehicleForPostData2 = (value) => {
    this.setState({ postData2: value });
  };

  copyValuesToPostData2 = () => {
    var tempArray = {
      email: this.state.postData.email_address,
      phone: this.state.postData.phone_home,
      address: this.state.postData.address,
      zip: this.state.postData.zip_code,
      home_ownership: this.state.home_ownership,
      vehicles: this.state.postData2.vehicles,
      drivers: [
        {
          driver:
            this.state.postData.first_name +
            " " +
            this.state.postData.last_name,
          gender: this.state.postData.gender,
          marital_status: this.state.postData.married,
          birth_date: this.state.postData.dob,
          education: this.state.postData.education_level,
          credit_rating: this.state.postData.credit_score,
          sr_22: this.state.sr_22,
        },
      ],
      current_company: this.state.current_company,
      continuous_coverage: this.state.continuous_coverage,
      coverage_type: this.state.postData.desired_coverage_level,
    };
    this.setState({ postData2: tempArray });
    window.MediaAlphaExchange = {
      placement_id: "1WNbWprsUtu4bb-7VkTVgf2l57oZew",
      version: "17",
      type: "ad_unit",
      ua_class: "auto",
      data: tempArray,
    };
    window.MediaAlphaExchange__load("target");
    return this.state.postData2;
  };
  componentDidUpdate = () => {
    console.log(this.state);
  };

  componentDidMount = () => {
    const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		const utmCampaign = urlParams.get('utm_campaign');
		this.setState({
			postData: {
				...this.state.postData,
				campaign: utmCampaign
			}
			
		})

		const utmMed = urlParams.get('utm_medium');

		if (utmMed == 'adwords'){
			this.setState({
				postData: {
					...this.state.postData,
					lp_s1: '101'
				},
			});
		}
		if (utmMed == 'facebook'){
			this.setState({
				postData: {
					...this.state.postData,
					lp_s1: '103'
				},
			});
		}
		if (utmMed == 'bing'){
			this.setState({
				postData: {
					...this.state.postData,
					lp_s1: '108'
				},
			});
		}
		else{
			this.setState({
				postData: {
					...this.state.postData,
					lp_s1: '12'
				},
			});
		}

  };

  zipCodeCity = (value) => {
    this.setState({ zipCodeCity: value });
  };

  username = (value) => {
    this.setState({ username: value });
  };

  yearForVehicleName = (value) => {
    this.setState({ year: value });
  };

  nameForVehicalModel = (value) => {
    this.setState({ name: value });
  };

  homeOwnershipForPostData2 = (value) => {
    this.setState({ homeowner: value });
  };
  sr22ForPostData2 = (value) => {
    this.setState({ sr_22: value });
  };
  currentCompanyForPostData2 = (value) => {
    this.setState({ current_company: value });
  };
  continuousCoverageForPostData2 = (value) => {
    this.setState({ continuous_coverage: value });
  };

  render() {
    return (
      <div
        className="container-fluid m-0"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f7f7f7",
          overflow: "hidden",
        }}
      >
        <header className="navbar navbar-expand flex-column flex-md-row bd-navbar">
          <div className="container">
            <img
              src={require("./Assets/logoQ.png")}
              className="m-4"
              width="200px"
              alt=""
            />
            <ul className="nav nav-fill ">
              <li className="nav-item">
                <Button
                  type="primary"
                  size="large"
                  icon={
                    <PhoneOutlined
                      rotate="90"
                      style={{ verticalAlign: "initial" }}
                    />
                  }
                  href="(855) 434-4762"
                >
                      (855) 434-4762
                </Button>
              </li>
            </ul>
          </div>
        </header>
        {/* <StepWizard initialStep={1}> */}
        <Router>
          <Switch>
            <Route exact path="/">
              <S1ZipCode
                zipCodeCity={this.zipCodeCity}
                zip_code={(value) => {
                  console.log(document.getElementById("leadid_token").value);
                  console.log(document.getElementsByTagName("script")[0].src);
                  console.log('value through value', value)
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      zip_code: value,
                      gclid: document.getElementById("gclid_field").value,
                      jornaya_lead_id: document.getElementById("leadid_token").value,
                      trusted_form_cert_id: document.getElementById(
                        "trusted_form_cert_id_0"
                      ).value,
                    },
                  }
                  );
                  console.log(document.getElementById("trusted_form_cert_id_0"));
                }}
                city={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, city: value },
                  })
                }
                state={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, state: value },
                  })
                }
                active_license={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      active_license: value,
                    },
                  })
                }
              />
            </Route>
            <Route path="/step2">
              <S2VehicleYear
                yearForVehicleName={this.yearForVehicleName}
                zipCodeCity={this.state.zipCodeCity}
                vehicle_year={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, vehicle_year: value },
                  })
                }
              />
            </Route>
            <Route path="/step3">
              <S3VehicleName
                year={this.state.year}
                nameForVehicalModel={this.nameForVehicalModel}
                vehicle_make={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, vehicle_make: value },
                  })
                }
              />
            </Route>
            <Route path="/step4">
              <S4VehicleModel
                searchModel={{ year: this.state.year, make: this.state.name }}
                vehicle_model={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, vehicle_model: value },
                  })
                }
              />
            </Route>
            <Route path="/step5">
              <S5PrimaryUse
                name={this.state.name}
                vehicle_primary_use={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      vehicle_primary_use: value,
                    },
                  })
                }
              />
            </Route>
            <Route path="/step6">
              <S6AnnualMileage
                annual_mileage={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      annual_mileage: value,
                    },
                  })
                }
              />
            </Route>
            <Route path="/step7">
              <S7CoverageLevel
                desired_coverage_level={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      desired_coverage_level: value,
                    },
                  })
                }
              />
            </Route>
            <Route path="/step8">
              <S8Ownership
                name={this.state.name}
                maintainTable={this.maintainTable}
                vehicleForPostData2={this.vehicleForPostData2}
                vehicle_ownership={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      vehicle_ownership: value,
                    },
                  })
                }
              />
            </Route>
            <Route exact path="/step9">
              <S9AddAnother
                table={this.state.table}
                deleteTableItem={this.deleteTableItem}
                postData2={this.state.postData2}
                deleteVehicleForPostData2={this.deleteVehicleForPostData2}
              />
            </Route>
            <Route path="/step10">
              <S10CurrentAutoInsurance
                currentCompanyForPostData2={this.currentCompanyForPostData2}
                continuousCoverageForPostData2={this.continuousCoverageForPostData2}
              />
            </Route>
            <Route path="/step11">
              <S11DrivingHistory
                sr22ForPostData2={this.sr22ForPostData2}
                Driver_1_Filing_Required={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      Driver_1_Filing_Required: value,
                    },
                  })
                }
              />
            </Route>
            <Route path="/step12">
              <S12DriverData
                homeOwnershipForPostData2={this.homeOwnershipForPostData2}
                gender={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, gender: value },
                  })
                }
                married={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      married: value,
                    },
                  })
                }
              />
            </Route>
            <Route path="/step13">
              <S13Education
                education_level={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, education_level: value },
                  })
                }
                credit_score={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      credit_score: value,
                    },
                  })
                }
              />
            </Route>
            <Route path="/step14">
              <S14DateOfBirth
                dob={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, dob: value },
                  })
                }
              />
            </Route>
            <Route path="/step15">
              <S15YourName
                username={this.username}
                first_name={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      first_name: value,
                    },
                  })
                }
                last_name={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, last_name: value },
                  })
                }
              />
            </Route>
            <Route path="/step16">
              <S16YourAddress
                username={this.state.username}
                postData={this.state.postData}
                copyValuesToPostData2={this.copyValuesToPostData2}
                address={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, address: value },
                  })
                }
                email_address={(value) =>
                  this.setState({
                    postData: { ...this.state.postData, email_address: value },
                  })
                }
                phone_home={(value) =>
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      phone_home: value,
                    },
                  })
                }
              />
            </Route>

            <Route path="/thank-you-auto">
              <S17Media />
            </Route>

          </Switch>
        </Router>
        {/* </StepWizard> */}
        <Grid container xs={12} style={{ paddingLeft: '10vw', paddingRight: '10vw' }}>
          <Grid item md={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: '370px', borderRadius: '20px' }} src={require("./man.png")} alt="Free Insurance Quote" />
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid item xs={12}>
              <p className="footerText1" >Free Car Insurance Quotes</p>
            </Grid>
            <Grid item xs={12}>
              <p className="footerText2" style={{ textAlign: "center" }}>
                Most people don’t enjoy having someone try to sell them something—that’s just human nature. But what’s even more frustrating is having someone try to sell you something when you kind of think you might need it, but you’re not sure. So, the first thing you need to do when it comes to choosing a <strong>car insurance</strong> company is figure out exactly what you need. That way, you can have much more control over the purchasing experience, because you’ll know what you are shopping for—and what you’re not interested in buying. Get your <strong>free auto quote</strong> with Quantum Assurance today start saving!
                  </p>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          xs={12}
          align="center"
          style={{ justifyContent: "center" }}
        >
          <Grid container xs={8} style={{ justifyContent: "center" }}>
            <Grid item xs={12}>
              <Typography style={{ fontWeight: 700, lineHeight: 1.5 }}>
                Providers Include:
              </Typography>
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                src={require("./Assets/1.png")}
                alt=''

              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                src={require("./Assets/2.png")}
                alt=''
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                src={require("./Assets/3.png")}
                alt=''
              />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "0rem" }}>
              <img width="80%" height="auto" src={require("./Assets/4.png")} alt='' />
            </Grid>
            <Grid item lg={2} xs={12} style={{ marginTop: "1rem" }}>
              <img
                width="80%"
                height="auto"
                object-fit="fit"
                src={require("./Assets/5.png")}
                alt=''
              />
            </Grid>
          </Grid>
          <Grid
            container
            xs={10}
            style={{ paddingBottom: "1rem", marginTop: "1rem" }}
          >
            <Grid item lg={3} xs={12} style={{ alignSelf: "center" }}>
              <Typography
                style={{ fontSize: "12px", color: "rgb(166, 166, 166)" }}
              >
                @ 2020 Quantum Assurance
              </Typography>
            </Grid>
            <Grid item lg={6} xs={0} />
            <Grid container lg={3} xs={12}>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{
                    fontSize: "12px",
                    color: "rgb(166, 166, 166)",
                    fontWeight: 600,
                  }}
                >
                  <a
                    href="https://quantumassurance.com/"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    {" "}
                    Visit Us{" "}
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{ fontSize: "12px", color: "rgb(166, 166, 166)" }}
                >
                  <a
                    href="https://quantumassurance.com/privacy-policy"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Privacy Policy
                  </a>
                </Typography>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                style={{ alignSelf: "center", marginTop: "1rem" }}
              >
                <Typography
                  style={{
                    fontSize: "12px",
                    color: "rgb(166, 166, 166)",
                    fontWeight: 600,
                  }}
                >
                  <a
                    href="https://quantumassurance.com/terms-conditions"
                    style={{ color: "rgb(166,166,166)", fontWeight: "400" }}
                  >
                    Terms & Conditions
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;