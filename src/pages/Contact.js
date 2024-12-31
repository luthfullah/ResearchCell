import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Mail, Phone, MapPin } from 'lucide-react';
import "../components/styles/contact.css"
const Contact=()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
   
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id='contact'  className='bg-light'>
    <div className="container  py-5  shadow-lg disp_eve_bg"
    style={{
      padding: "100px 20px 60px",
      // background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
      // color: "rgba(255, 255, 255, 0.75)",
      marginBottom:"10px",
    }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="mb-4">
            <h2 className="display-5 text-center  font-bold text-dark">Get in Touch</h2>
            <p className="text-center text-muted">
              We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <Mail className="me-2 text-white" />
              <span>mrc@mrc.com</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Phone className="me-2 text-white" />
              <span>+9109999090</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <MapPin className="me-2 text-white" />
              <span>123 Main St, uop, pk 12345</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <input
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="form-control"
                rows="4"
              />
            </div>
            <button type="submit" className="btn  w-100 btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Contact;
