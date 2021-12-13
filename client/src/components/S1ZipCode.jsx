import React, { Component, useState } from "react";
import { Input, Button, message, Form, Progress } from "antd";
// import ProgressBar from 'react-bootstrap/ProgressBar';
import ZipCodeData from "../Assets/zipcode-data.json";
import "./S1ZipCode.css";
import { data } from "jquery";
import axios from "axios";
import zipcodeList from "../Assets/zipCodes";
import LoadingLottie from "./LoadingLottie";
import {Link,withRouter} from "react-router-dom"; 


class S1ZipCode extends Component {
  state = {
    zipcodes: [],
    getZip: "",
    loading: true,
  };
  onFinish = (value) => {
    // this.props.nextStep();
    // var check = false;

    // console.log("values is " + value.zipcode.number)

    // axios
    //   .post("https://qhautoformreact.herokuapp.com/returnzip", { zipCode: value.zipcode })
    //   .then((res) => {
    //     this.setState({ getZip: res.data }, () => {
    //       console.log(this.state.getZip);
    //     });
        console.log(this.state.getZip);
        console.log(this.props.city);
        this.props.zipCodeCity(this.state.getZip.city);
        this.props.zip_code(value.zipcode);
        this.props.city(this.state.getZip.city);
        this.props.state(this.state.getZip.state_id);
        this.props.active_license(this.state.getZip.state_id);
        this.props.history.push("/step2")
        // this.props.nextStep();
      // })
      // .catch((err) => message.error("Please Enter A Valid Zipcode!"));
  };

  // checkZipCode = (rule, value) => {
  //   var check = false;
  //   this.state.zipcodes.map(
  //     (data) =>
  //       (data === value.number || data === Number(value.number)) &&
  //       (check = true)
  //   );

  //   if (check === true) {
  //     return Promise.resolve();
  //   }
  //   return Promise.reject("Please Enter A Valid Zipcode!");
  // };

  componentDidMount = () => {
    console.log(zipcodeList.zipcodes);
    console.log("that was zipcodes");
    // axios.get("/getzip").then((res) => {
    //   this.setState({ zipcodes: res.data }, () =>
    //     console.log(this.state.zipcodes)
    //   );
    //   console.log(res.data);
    // });
    this.setState({ zipcodes: zipcodeList.zipcodes });
  //   axios
  //     .get("https://qhautoformreact.herokuapp.com/getzip")
  //     .then((res) => {
  //       this.setState(
  //         {
  //           ...this.state,
  //           zipcodes: res.data,
  //           loading: false
  //         },
  //         () => {
  //           console.log(this.state.zipcodes);
  //         }
  //       );
  //     })
  //     .catch((err) => {
  //       if (err) throw err;
  //     });
  //   console.log(this.state.zipcodes);
   };

  render() {
    const list = this.state.zipcodes;
    return (
      <div className="container p-0">
          <h1 className="text-center main-heading">
          Start Saving With Quantum Assurance
        </h1>
        <div className="main-content-inner-container mb-5">
          <div className="right-number">1/16</div>
          <div className="text-center box-width">
                        <i className="fa fa-map-marker" style={{ fontSize: "36px" }}></i>
            <br />
            <h1 className="heading">Enter Your Zip Code</h1>
            <Form name="customized_form_controls" id="form"  onFinish={this.onFinish}>
              <Form.Item
                name="zipcode"
                style={{ width: "100%" }}
                rules={[
                  {
                    //validator: this.checkZipCode,
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if ( 
                         !value.null && list.includes(value)  
                         ) 
                        return Promise.resolve();
                      
                      return Promise.reject(
                        "Please enter valid Zip code"
                      );
                    },
                  }),
                ]}
              >
                {/* {this.state.loading  ? (
                  <LoadingLottie />
                ) : ( */}
                    <Input
                      className="text-center"
                      type="text"
                      maxLength="5"
                      size="large"
                      id="zipcode"
                      placeholder="Zip Code"
                      style={{
                        width: "100%",
                      }}
                    />
            {/* )}  */}
              </Form.Item>
              <Form.Item style={{ width: "100%" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  size={"large"}
                >
                  <h4
                    style={{
                      display: "inline",
                      color: "white",
                      fontWeight: "400",
                    }}
                  >
                    Start Saving Today!
                  </h4>
                  &nbsp;&nbsp;&nbsp;
                  <i
                    className="fa fa-arrow-right"
                    style={{ fontSize: "24px" }}
                  ></i>
                </Button>
              </Form.Item>
            </Form>
          </div>
         
        </div>
      </div>
    );
  }
}

export default withRouter(S1ZipCode);

const ZipCodeInput = ({ value = {}, onChange }) => {
  const [number] = useState();

  const triggerChange = (changedValue) => {
    if (onChange) {
      onChange({
        number,
        ...value,
        ...changedValue,
      });
    }
  };

  const onNumberChange = (e) => {
    const newNumber = e.target.value;
    // if (Number.isNaN(number)) {
    // 	return;
    // }
    // if (!("number" in value)) {
    // 	setNumber(newNumber);
    // }
    triggerChange({
      number: newNumber,
    });
  };

  return (
    <Input
      className="text-center"
      type="text"
      maxLength="5"
      size="large"
      placeholder="Zip Code"
      value={value.number}
      onChange={onNumberChange}
      style={{
        width: "100%",
      }}
    />
  );
};
