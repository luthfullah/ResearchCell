import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import "../components/styles/Header.css"
import { Card, Button, Tab, Tabs } from "react-bootstrap";
import { useEffect } from "react";
import Footer from "./Footer";
function EventDetailPage() {
  const { state } = useLocation();
  const event = state?.event;
  const navigate=useNavigate()
   // Redirect to home page if no event data is available
   useEffect(() => {
    if (!event) {
      navigate('/');
    }
  }, [event, navigate]);

  if (!event) {
    return null; // Return null while redirecting
  }

  return (
    <div  style={{backgroundColor:"#eee" }}>
    <nav id="nav_Bar" className="text-lg-start text-center"><h1 className="text-white px-5" >MRC</h1></nav>
    <div className="container  " style={{ color: "rgba(255, 255, 255, 0.75)",width:"100%",objectFit:"cover"}}>
  <main className="w-100">
    <h1 className="text-center text-dark bg-white shadow p-2 rounded w-100">{event.title}</h1>
  </main>
  
  <div className="justify-content-center shadow  mb-4 bg-body rounded">
    <div className="col-md-12">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + event.imageUrl}
          alt={event.title}
          className="card-img-top"
          style={{ width: "100%", height: "500px", objectFit: "cover", border: "none" }}
        />
        <div className="card-body">
          <p className="text-muted">
            <strong>Date:</strong> {moment(event.date).format("MMMM D, YYYY")} <br />
            <strong>Time:</strong> {event.time} <br />
            <strong>Location:</strong> {event.location}
          </p>
          <p className="card-text">{event.description}</p>
        </div>
      </div>
    </div>
  </div>
  
</div>
<Footer/>
</div>
  );
}

export default EventDetailPage;
