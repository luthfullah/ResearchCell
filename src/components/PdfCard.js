import React from 'react';
import { File } from 'lucide-react';

const PdfCard = ({ title, author, date, onView, fileUrl }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-center align-items-center bg-light rounded mb-3" style={{ height: '128px' }}>
          <File className="text-muted" style={{ width: '48px', height: '48px' }} />
        </div>
        <h5 className="card-title text-truncate" style={{ maxWidth: '200px' }}>{title}</h5>
        <p className="card-text text-muted small">
          By {author} | {new Date(date).toLocaleDateString()}
        </p>
        <button onClick={onView} className="btn btn-primary w-100">
          View PDF
        </button>
      </div>
    </div>
  );
};

export default PdfCard;
