import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { PlayCircle } from 'lucide-react';

const video = {
  id: '1',
  title: 'The Art of Cinematic Storytelling',
  description:
    "Dive into the world of cinematic storytelling. This video explores the techniques used by master filmmakers to create compelling narratives that captivate audiences. From shot composition to color grading, we'll uncover the secrets that make great films truly unforgettable. Learn how directors use visual elements, sound design, and pacing to evoke emotions and convey complex ideas without relying on dialogue. Whether you're an aspiring filmmaker or a movie enthusiast, this video will deepen your appreciation for the craft of storytelling in cinema.",
  thumbnail: '/mrc.png',
  videoUrl: '/videomrc.mp4',
};

export default function VideoPage() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="shadow-lg disp_eve_bg bg-light">
      <Container className="py-2">
        <Row className="bg-white rounded shadow-lg overflow-hidden">
          {/* Video Thumbnail Section */}
          <Col md={6} className="p-4">
            <div className="position-relative overflow-hidden" style={{ height: '100%', aspectRatio: '16 / 9' }}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className=" object-cover"
                style={{width:"100%"}}
              />
              <Button
                variant="primary"
                className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle p-3"
                style={{ width: '60px', height: '60px', backgroundColor: 'rgba(0,123,255,0.8)' }}
                onClick={handleShowModal}
              >
                <PlayCircle size={32} className="text-white" />
              </Button>
            </div>
          </Col>

          {/* Video Details Section */}
          <Col md={6} className="p-4 d-flex flex-column justify-content-center">
            <h1 className="text-dark fw-bold mb-3">{video.title}</h1>
            <p className="text-secondary mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {video.description}
            </p>
            <Button
              variant="outline-primary"
              onClick={handleShowModal}
            >
              Watch Now
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Modal for Video */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe
              src={video.videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-100 h-100"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
