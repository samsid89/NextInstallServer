import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};
const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow },
  } = rest;

  return (
    <div className="carousel-button-group div">
      <button
        aria-label="Go to previous slide"
        className={
          currentSlide === 0
            ? "disable"
            : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
        }
        onClick={() => previous()}
      ></button>
      <button
        aria-label="Go to next slide"
        className={
          currentSlide === totalItems - slidesToShow
            ? "disable"
            : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
        }
        onClick={() => next()}
      ></button>
    </div>
  );
};

class MeettheMentors extends React.Component {
  render() {
    return (
      <>
        <section className="MeettheMentors section" id="MeettheMentors">
          <Container fluid>
            <Row>
              <Col md={2}>&nbsp;</Col>
              <Col md={8}>
                <h2
                  className="h2"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="500"
                >
                  Meet the mentors
                </h2>
                <p
                  className="p"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="600"
                >
                  Our team of world-class experts from leading organisations,
                  renowned academicians, team leaders in prominent startups and
                  entrepreneurs running creative businesses. They are here to
                  guide and support you to your destination.
                </p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row className="meetSecondRow">
              <Col md={2}>&nbsp;</Col>
              <Col md={8}>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="900"
                >
                  <Carousel
                    responsive={responsive}
                    arrows={false}
                    renderButtonGroupOutside
                    customButtonGroup={
                      <ButtonGroup
                        next={this.props.next}
                        previous={this.props.previous}
                        rest={this.props.rest}
                      />
                    }
                  >
                    <div className="div">
                      <img
                        className="d-block w-100 img"
                        src="/images/Jitin.jpg"
                        alt=""
                      />

                      <h3 className="h3">Dr. Jitin Chadha</h3>
                      {/*<h4>FOUNDER @LOPEZ DESIGN</h4>*/}
                      <p className="p">
                        An education entrepreneur with over 14+ years of
                        experience in higher education, he is also the Founder
                        and Director of the Indian Institute of Art and Design
                        (IIAD), a leading design school in India. Dr. Chadha has
                        a PhD in Finance from Delhi University, a Master’s in
                        Economics and Finance from Warwick University, UK and
                        has an Executive Education in Entrepreneurship from
                        Stanford University, Graduate School of Business.
                      </p>
                    </div>
                    <div className="div">
                      <img
                        className="d-block w-100 img"
                        src="/images/Shiva.jpg"
                        alt=""
                      />

                      <h3 className="h3">Shiva Viswanathan</h3>
                      <p className="p">
                        Shiva has three decades of experience in design as a
                        business. He was the Founder of Apparatus Media Lab, a
                        brand and user experience studio. He was ECD Digital at
                        Ogilvy and MD, Brand Union. Now, he is the
                        Co-Founder/CMO of Catenate, Design Head at Ogilvy
                        Pennywise, and Director at DesignUp. Shiva has explored
                        design for print, technology, and digital media. He is
                        an alumna of NID, Ahmedabad.
                      </p>
                    </div>
                    <div className="div">
                      <img
                        className="d-block w-100 img"
                        src="/images/Usha.jpg"
                        alt=""
                      />

                      <h3 className="h3">Usha Patel</h3>
                      <p className="p">
                        A seasoned academician, she has taught as well as
                        conceived and led art and design curricula at multiple
                        institutes in India. Her research and publication
                        include: Extending the Frontiers of Visual Learning and
                        Designing an Educational Experience of Relevance to Real
                        World Situations. She has a Master’s degree in Fine Arts
                        & Graphics from MS University, Baroda and also has a PG
                        Certificate in Higher Education from the U.K. and a
                        degree in Fashion and Styling from the Netherlands.
                      </p>
                    </div>
                    <div className="div">
                      <img
                        className="d-block w-100 img"
                        src="/images/Anthony.jpg"
                        alt=""
                      />

                      <h3 className="h3">Anthony Lopez</h3>
                      <p className="p">
                        Anthony is founder and chief creative director of Lopez
                        Design, a leading branding consultancy in Gurgaon, NCR.
                        An alumnus of NID, his experience spans over three
                        decades in shaping several prominent startups to Fortune
                        500 companies. He advocates a collaborative approach in
                        design using cross-disciplinary methodologies, insights
                        drawn from analytics and research to shape relevant
                        long-term strategies to address complex challenges.
                      </p>
                    </div>
                    <div className="div">
                      <img
                        className="d-block w-100 img"
                        src="/images/Prachi.jpg"
                        alt=""
                      />

                      <h3 className="h3">Prachi Mittal</h3>
                      <p className="p">
                        Prachi is a designer, educator and researcher with 20+
                        years of experience in the industry and academia. A
                        graduate from NIFT, New Delhi, she is also armed with a
                        PG Certification in Higher Education from Kingston
                        University, London. Her industry experience spans across
                        product design, social design, publication design and
                        design management. Her expertise lies in curriculum
                        development, strategic use of pedagogy and technology,
                        and academic processes for design education.
                      </p>
                    </div>
                    <div className="div">
                      <img
                        className="d-block w-100 img"
                        src="/images/Shaaz.jpg"
                        alt=""
                      />

                      <h3 className="h3">Shaaz Ahmed</h3>
                      <p className="p">
                        As the Founding Director of Mud n Water Studio, Shaaz
                        has a rich experience of 20+ years of producing
                        Animations, Ad Films, Short Films, Documentaries and
                        Urban Art. He has been associated with eminent
                        institutions and organisations such as FICCI, NID
                        Ahmedabad, Sesame Street, IIT Mumbai, SRFTII. He has won
                        multiple accolades including Promax Gold (Singapore),
                        MIFF 2016, Toonz Flying Elephant and MSIFF. He is an
                        alumna of NID, Ahmedabad.
                      </p>
                    </div>
                    <div className="div">
                      <img
                        className="d-block w-100 img"
                        src="/images/Snehanshu.jpg"
                        alt=""
                      />

                      <h3 className="h3">Snehanshu Mukherjee</h3>
                      <p className="p">
                        With a bachelor’s in architecture from SPA, New Delhi
                        and a post-graduation in Design & Housing from MIT,
                        Cambridge, USA, Snehanshu comes with 38+ years of
                        experience in the field of architecture and design. As
                        the founding partner of T E A M (Team for Engineering
                        Architecture and Management), his major projects have
                        been for Osho World Foundation-Delhi, Embassy of Spain
                        Chancery Building, Laxmi Mittal School of Management
                        Studies, Oxford Bookstores, and The Tollygunge Club
                        Library-Kolkata.
                      </p>
                    </div>

                    <div className="div">
                      <img
                        className="d-block w-100 img"
                        src="/images/Madhu.jpg"
                        alt=""
                      />

                      <h3 className="h3">Madhu Pandit</h3>
                      <p className="p">
                        As a partner at Neeraj Manchanda Architects Madhu has to
                        her name a wide body of architectural work in the
                        institutional, commercial, residential, and industrial
                        domains within India, Nepal and Vietnam. She has worked
                        on museum and exhibition design projects with Indira
                        Gandhi Memorial Trust, Rajiv Gandhi Memorial Trust and
                        on the travelling exhibition for Festival of Japan. A
                        graduate of SPA, New Delhi, Madhu’s passion lies in
                        adaptive reuse of historical buildings and indigenous
                        building methods.
                      </p>
                    </div>
                  </Carousel>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default MeettheMentors;
