"use client";

import React, { useState } from "react";
import { Card, Button, Tab, Tabs } from "react-bootstrap";
import moment from "moment";
import "../components/styles/EventsDisplay.css"
import { useNavigate } from "react-router-dom";

const upcomingEvents = [
  {
    id: "1",
    title: "Tech Conference 2024",
    date: new Date("2024-06-15"),
    time: "09:00 AM",
    location: "Convention Center",
    description: "Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.",
    imageUrl: "/Picture2.png",
  },
  {
    id: "2",
    title: "Startup Pitch Night",
    date: new Date("2024-07-22"),
    time: "07:00 PM",
    location: "Innovation Hub",
    description:
      "Exciting pitches from emerging startups in the tech industry.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.",
    imageUrl: "/Picture2.png",
  },
  {
    id: "3",
    title: "AI Workshop",
    date: new Date("2024-08-10"),
    time: "10:00 AM",
    location: "Tech Academy",
    description:
      "Hands-on workshop on the latest AI technologies and applications.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.",
    imageUrl: "/Picture2.png",
  },
  {
    id: "4",
    title: "AI Workshop",
    date: new Date("2024-08-10"),
    time: "10:00 AM",
    location: "Tech Academy",
    description:
      "Hands-on workshop on the latest AI technologies and applications.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.",
    imageUrl: "/Picture2.png",
  },
  {
    id: "5",
    title: "AI Workshop",
    date: new Date("2024-08-10"),
    time: "10:00 AM",
    location: "Tech Academy",
    description:
      "Hands-on workshop on the latest AI technologies and applications.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.Annual tech conference featuring the latest innovations.",
    imageUrl: "/Picture2.png",
  },
];

const pastEvents = [
  {
    id: "4",
    title: "Web Dev Meetup",
    date: new Date("2024-02-28"),
    time: "06:30 PM",
    location: "Coworking Space",
    description:
      "Monthly meetup for web developers to network and share knowledge.",
    imageUrl: "/Picture2.png",
  },
  {
    id: "5",
    title: "Data Science Symposium",
    date: new Date("2024-01-15"),
    time: "09:00 AM",
    location: "University Auditorium",
    description:
      "Annual symposium on the latest trends in data science and analytics.",
    imageUrl: "/Picture2.png",
  },
  {
    id: "6",
    title: "Hackathon 2024",
    date: new Date("2024-03-20"),
    time: "08:00 AM",
    location: "Tech Park",
    description: "48-hour coding challenge for developers and designers.",
    imageUrl: "/Picture2.png",
  },
];

function EventsDisplay() {
  const [activeTab, setActiveTab] = useState("upcoming");
 

  return (
    <div className="container shadow-lg disp_eve_bg">
      <h1 className=" font-bold mb-8 text-center text-dark fs-3">Event Calendar</h1>
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3 w-100"
        // style={{ width: "100%" }} 
        variant="underline"
        
      >
        
        <Tab className="w-100 text-light" eventKey="upcoming"  title={<span className="text-black">Upcoming Events</span>}>
          <EventList  events={upcomingEvents} type="upcoming"  />
        </Tab>
        <Tab eventKey="past" title={<span className="text-black" >Past Events</span>}>
          <EventList events={pastEvents} type="past"   />
        </Tab>
      </Tabs>
    </div>
  );
}

function EventList({ events, type }) {
  return (
    <div className="row">
      {events.map((event) => (
        <div key={event.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <EventCard event={event} type={type}  />
        </div>
      ))}
    </div>
  );
}

function EventCard({ event, type ,}) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const handleViewDetails = () => {
            setIsLoading(true); 
            setTimeout(() => {
                setIsLoading(false);
                navigate(`/event/${event.id}`, { state: { event } }); 
              }, 1000);
  
      };
  return (
    <Card className={`border-${type === "upcoming" ? "primary" : "secondary"}`}>
      <div
        className="card-img-top position-relative"
        style={{ height: "200px" }}
      >
        <img
          src={event.imageUrl}
          alt={`Image for ${event.title}`}
          style={{ objectFit: "cover" }}
          height={200}
          layout="fill"
          className="card-img-top"
        
        />
      </div>
      <Card.Body className={`${type === 'upcoming' ? 'bg-primary-50' : 'bg-light-50'}`}>
        <Card.Title className="text-truncate">{event.title}</Card.Title>
        <Card.Text>
          <small className="text-muted">
            <strong>Date:</strong> {moment(event.date).format("MMMM D, YYYY")}{" "}
            <br />
            <strong>Time:</strong> {event.time} <br />
            <strong>Location:</strong> {event.location}
          </small>
        </Card.Text>
        <Card.Text className="text-truncate">{event.description}</Card.Text>
        {/* <Button variant={type === "upcoming" ? "primary" : "secondary"} onClick={handleViewDetails}>
          View Details
        </Button> */}
         <Button
         variant={type === "upcoming" ? "primary" : "secondary"}
          onClick={handleViewDetails}
          className="btn btn-primary"
          disabled={isLoading} // Disable Button while loading
        >
          {isLoading ? (
            <span>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>{' '}
              Loading...
            </span>
          ) : (
            'View Details'
          )}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EventsDisplay;
