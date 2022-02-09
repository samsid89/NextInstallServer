import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Col, Modal, Button, Container, Row, Form } from "react-bootstrap";
import { Consumer } from "./Context";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function ModalPopup(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow();
  };
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [experience, setExperience] = useState("");
  const [code, setCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [selecteCourse, setselecteCourse] = useState(null);
  const [selecteExperience, setselecteExperience] = useState(null);
  const [selecteCode, setselecteCode] = useState("+91");
  const [error, setError] = useState({
    name: "",
    email: "",
    course: "",
    experience: "",
    mobile: "",
  });
  const [msg, setMsg] = useState("");
  const [verified, setVerified] = useState(false);
  const [errorcls, setErrorcls] = useState("");
  const [showImg, setImg] = useState(false);

  const styles = {
    fontSize: 14,
    color: "blue",
  };
  const options = [
    {
      value: "Communication Design : PG Diploma",
      label: "Communication Design : PG Diploma",
    },
    { value: "Motion Graphics", label: "Motion Graphics" },
    { value: "User Experience", label: "User Experience" },
    {
      value: "Digital Brand Communication",
      label: "Digital Brand Communication",
    },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Interior Design", label: "Interior Design" },
  ];

  const options1 = [
    { value: "UG Student", label: "UG Student" },
    { value: "UG Student (Final Year)", label: "UG Student (Final Year)" },
    { value: "PG Student", label: "PG Student" },
    { value: "0 Year Work Experience", label: "0 Year Work Experience" },
    { value: "1-2 Years Work Experience", label: "1-2 Years Work Experience" },
    { value: "2-4 Years Work Experience", label: "2-4 Years Work Experience" },
    { value: "4+ Years Work Experience", label: "4+ Years Work Experience" },
  ];
  /* const options2 = [
     
     { value: '+90', label: '+90' },
     { value: '00', label: '00' },
     { value: '02', label: '02' },
     { value: '03', label: '03' },
     { value: '+91', label: '+91' },
     { value: '04', label: '04' },
   
   ];*/

  const selectedValue = { value: "+91", label: "+91" };

  const [colors, setColor] = useState("");

  function handleChange(e) {
    setColor(e.target.value);
  }

  function getData() {
    axios
      .get("https://www.andacademy.com/and-academy-api/country_list.php")
      .then(function (response) {
        if (response.data.success == 1) {
          setData(response.data.countries);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  var options2 = [];
  var len = data.length;
  for (var i = 0; i < len; i++) {
    options2.push({
      value: "+" + data[i].phonecode,
      label: "+" + data[i].phonecode,
    });
  }

  function checkCaptcha(value) {
    setVerified(true);
    console.log(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //console.log({name:name,email:email,course:selecteCourse.value,experience:selecteExperience.value,mobile:mobile,code:code})
    var isValid = true;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var numbers = /^[0-9]+$/;
    if (name == "") {
      setError({ ...name, name: "Enter your name" });
      setMsg("Error: Enter your name");
      setErrorcls("alert alert-danger");
      isValid = false;
      return false;
    } else {
      isValid = true;
      setErrorcls("");
    }

    if (email == "") {
      setError({ ...email, email: "Enter your email" });
      setMsg("Error: Enter your email");
      setErrorcls("alert alert-danger");
      isValid = false;
      return false;
    } else if (!regex.test(email)) {
      setError({ ...email, email: "This is not a valid email format" });
      setMsg("Error: This is not a valid email format");
      setErrorcls("alert alert-danger");
      isValid = false;
      return false;
    } else {
      isValid = true;
      setErrorcls("");
    }

    if (selecteCourse == null) {
      setError({ ...course, course: "Select Course" });
      setMsg("Error: Select Course");
      setErrorcls("alert alert-danger");
      isValid = false;
      return false;
    } else {
      isValid = true;
      setErrorcls("");
    }

    if (selecteExperience == null) {
      setError({ ...experience, experience: "Select Experience" });
      setMsg("Error: Select Experience");
      setErrorcls("alert alert-danger");
      isValid = false;
      return false;
    } else {
      isValid = true;
      setErrorcls("");
    }

    if (mobile == "") {
      setError({ ...mobile, mobile: "Enter your mobile number" });
      setMsg("Error: Enter your mobile number");
      setErrorcls("alert alert-danger");
      isValid = false;
      return false;
    } else if (!mobile.match(numbers)) {
      setError({ ...mobile, mobile: "Mobile number is invalid format" });
      setMsg("Error: Mobile number is invalid format");
      setErrorcls("alert alert-danger");
      isValid = false;
      return false;
    } else if (selecteCode == "+91") {
      if (mobile.length < 10 || mobile.length > 10) {
        setError({ ...mobile, mobile: "mobile number should be 10 digits" });
        setMsg("Error: mobile number should be 10 digits");
        setErrorcls("alert alert-danger");
        isValid = false;
        return false;
      } else {
        setError({ ...mobile, mobile: "" });
        isValid = true;
        setErrorcls("");
      }
    } else {
      setError({ ...mobile, mobile: "" });
      isValid = true;
      setErrorcls("");
    }

    if (isValid) {
      setErrorcls("");
      if (verified) {
        setMsg("");
        setErrorcls("");
        const data = {
          name: name,
          email: email,
          course: selecteCourse.value,
          experience: selecteExperience.value,
          mobile: mobile,
        };

        axios
          .post(
            "https://www.andacademy.com/and-academy-api/submitForm.php",
            data
          )
          .then(function (response) {
            // console.log(response.data.error_msg);
            if (response.data.error_msg == "Success") {
              setMsg("Success: Thankyou for submitting the form");
              setErrorcls("alert alert-success");
              //  setTimeout(()=>{window.location.reload();},1500)
              setImg(true);
            } else {
              setMsg("Error: Form could not submit, try again");
              setErrorcls("alert alert-success");
              setImg(false);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        setMsg("Select Captcha");
        setErrorcls("alert alert-danger");
      }
    }
  }

  return (
    <>
      <Consumer>
        {({ handlecheck }) => (
          <Modal
            className="brochure_box"
            show={props.data}
            size="sm"
            onHide={() => {
              handlecheck(false);
            }}
          >
            <Modal.Body>
              <Button
                className="btn_Close"
                onClick={() => {
                  handlecheck(false);
                }}
              >
                <img
                  className="img"
                  src="/images/cross_popup.svg"
                  alt="cross"
                />
              </Button>

              {showImg == false ? (
                <Container fluid>
                  <Row>
                    <Col md={2}>
                      <img className="img" src="/images/logo-vertical.svg" />
                    </Col>
                    <Col md={10}>
                      <p
                        className={`${"error_head"} ${errorcls}`}
                        style={{ marginTop: "100px" }}
                      >
                        {msg}
                      </p>
                    </Col>
                    <Col className="bord_bottom_broch" md={2}></Col>
                    <Col className="bord_bottom_broch" md={10}>
                      <Form onSubmit={handleSubmit}>
                        <Form.Control
                          className="input"
                          type="text"
                          placeholder="NAME"
                          name="name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />

                        <Form.Control
                          className="input"
                          type="email"
                          placeholder="E-MAIL"
                          name={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />

                        <Select
                          name="course"
                          options={options}
                          placeholder={"SELECT COURSE"}
                          clearable={false}
                          style={styles.select}
                          isSearchable={false}
                          value={selecteCourse}
                          onChange={setselecteCourse}
                          className="select"
                          required
                        />

                        <Select
                          name="experience"
                          options={options1}
                          placeholder={"SELECT EXPERIENCE"}
                          clearable={false}
                          style={styles.select}
                          isSearchable={false}
                          value={selecteExperience}
                          onChange={setselecteExperience}
                          className="select"
                        />

                        <div className="phone_div div">
                          <div className="phone_code div">
                            <Select
                              name="code"
                              options={options2}
                              defaultValue={selectedValue}
                              clearable={false}
                              style={styles.select}
                              isSearchable={false}
                              className="select"
                              onChange={setselecteCode}
                            />
                          </div>

                          <Form.Control
                            name="mobile"
                            className="telephone_inp input"
                            type="tel"
                            placeholder="ENTER MOBILE NO."
                            onChange={(e) => {
                              setMobile(e.target.value);
                            }}
                            maxLength={15}
                          />
                        </div>
                        <ReCAPTCHA
                          sitekey="6Lf3eikeAAAAAOcp2jEzNz4EIijQTNuGytqwtwPD"
                          onChange={checkCaptcha}
                        />
                        <Button className="submit_button" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              ) : (
                <Container fluid>
                  <img
                    className="img"
                    src="/images/hello_confirmation_img.png"
                    style={{ width: "100%" }}
                  />
                </Container>
              )}
            </Modal.Body>
          </Modal>
        )}
      </Consumer>
    </>
  );
}

export default ModalPopup;
