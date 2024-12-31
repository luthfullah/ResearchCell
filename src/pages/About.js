import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4">About Our Agency</h1>
          <p className="text-center lead">
          Maraka Humanitarian Observatory (MHO) is a joint initiative of Crossroads Advisory (CA) and Migration Research Cell (MRC), Department of Political Science, University of Peshawar. Women’s Regional Network has provided seed funding for the Observatory. Maraka is a Pashto word with variations in Dari/Hazargi/Persian and Shina languages, referring to a gathering of diverse people for articulating and discussing issues. The MHO aims to provide a platform for multiple actors to discuss emerging trends in humanitarian governance; it seeks to facilitate collaboration through learning, exchange, strategic thinking and calls for action.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <Image src="/Picture2.png?height=400&width=600" fluid rounded className="shadow-lg" alt="Our team at work" />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">Our Story</h2>
          <p>
            Founded in 2010, our agency has been at the forefront of digital innovation for over a decade. We've grown from a small team of passionate creatives to a full-service agency with a global client base.
          </p>
          <p>
            Our journey has been defined by our commitment to excellence, our adaptability in a rapidly changing digital landscape, and our unwavering focus on delivering results for our clients.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">What Sets Us Apart</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        {[
          { icon: <Award size={40} />, title: 'Excellence', description: 'Award-winning designs and strategies that deliver results.' },
          { icon: <Users size={40} />, title: 'Collaboration', description: 'We work closely with our clients to ensure their vision is realized.' },
          { icon: <Briefcase size={40} />, title: 'Expertise', description: 'A team of specialists across various digital disciplines.' },
          { icon: <TrendingUp size={40} />, title: 'Innovation', description: 'Always at the cutting edge of digital trends and technologies.' },
        ].map((item, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="h-100 text-center shadow-sm hover-shadow">
              <Card.Body>
                <div className="mb-3 text-primary">{item.icon}</div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <h2>Need</h2>
          <p>
          Out of the 4 million registered and non-registered Afghan refugess hosted by Pakistan, 58 % reside in the Khyber Pakhtunkhwa province, where the University of Peshawar is located and where the MHO is hosted. These Afghan refugees, now at the center of the securitization debates in the country have faced forcible deportations, and dehmanization. The huge refugee population, regular conflict displacements, climate catastrophes and proliferating terrorist attacks in Pakistan has made the creation of Humanitarian Observatory long over due.
          </p>
          {/* <p>
            Our process is collaborative and transparent. We keep you involved at every stage, ensuring that the final product not only meets but exceeds your expectations.
          </p> */}
        </Col>
        <Col md={6}>
          <h2>Purpose</h2>
          <p>
          The MHO is envisioned as a hub for meaningful exchange, learning, research and action on local and global humanitarian governance issues. It aims to include among its membership key stakeholders from diverse civil society groups, including academia, media, non-government institutions, public intellectuals , independent researchers and business community representatives and provide them with a platform through monthly meetings at the Department of Political Science’s Migration Research Cell, Peshawar and Crossroads Advisory in Islamabad.          </p>
          {/* <p>
            We foster a culture of continuous learning and innovation, ensuring that our team is always at the forefront of industry trends and best practices.
          </p> */}
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="bg-primary text-white text-center p-4">
            <Card.Body>
              <h2>Ready to Start Your Project?</h2>
              <p>Let's create something amazing together.</p>
              <button className="btn btn-light btn-lg">Contact Us</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

