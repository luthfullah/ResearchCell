import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PdfModal = ({ show, onHide, fileUrl, title }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);

  if (!show) return null;

  return (
    <div className="modal d-block bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <iframe src={`${fileUrl}#page=${pageNumber}`} className="w-100" style={{ height: '70vh' }} title={title} />
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              className="btn btn-secondary"
              disabled={pageNumber === 1}
            >
              <ChevronLeft className="me-2" />
              Previous
            </button>
            <span>
              Page {pageNumber} of {numPages}
            </span>
            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              className="btn btn-secondary"
              disabled={pageNumber === numPages}
            >
              Next
              <ChevronRight className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
