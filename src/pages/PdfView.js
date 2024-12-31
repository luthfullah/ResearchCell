import React, { useState } from 'react';
import PdfCard from '../components/PdfCard';
import PdfModal from '../components/PdfModal';
import { Search } from 'lucide-react';

// Sample data structured with categories
const pdfFiles = {
  books: [
    { id: 1, title: 'Advanced Machine Learning Techniques', author: 'Dr. Jane Smith', date: '2023-05-01', fileUrl: 'pdf1.pdf' },
    { id: 2, title: 'Future of Renewable Energy', author: 'Prof. John Doe', date: '2023-04-15', fileUrl: 'pdf1.pdf' },
    { id: 3, title: 'Machine Learning Techniques', author: 'Dr. Jane Smith', date: '2023-05-01', fileUrl: '/sample1.pdf' },
    { id: 5, title: 'Renewable Energy', author: 'Prof. John Doe', date: '2023-04-15', fileUrl: 'pdf1.pdf' },
    { id: 7, title: 'Learning Techniques', author: 'Dr. Jane Smith', date: '2023-05-01', fileUrl: 'pdf1.pdf' },
    { id: 8, title: 'Energy', author: 'Prof. John Doe', date: '2023-04-15', fileUrl: 'pdf1.pdf' },
  
],
  research: [
    { id: 3, title: 'Quantum Computing: A Comprehensive Guide', author: 'Dr. Alice Johnson', date: '2023-03-22', fileUrl: '/sample3.pdf' },
    { id: 4, title: 'Artificial Intelligence in Healthcare', author: 'Dr. Michael Brown', date: '2023-02-10', fileUrl: '/sample4.pdf' },
    { id: 5, title: 'Artificial Intelligence in Healthcare', author: 'Dr. Michael Brown', date: '2023-02-10', fileUrl: '/sample4.pdf' },
    { id: 6, title: 'Artificial Intelligence in Healthcare', author: 'Dr. Michael Brown', date: '2023-02-10', fileUrl: '/sample4.pdf' },
    { id: 7, title: 'Artificial Intelligence in Healthcare', author: 'Dr. Michael Brown', date: '2023-02-10', fileUrl: '/sample4.pdf' },
  ],
  cybersecurity: [
    { id: 5, title: 'Cybersecurity Best Practices', author: 'Sarah Thompson', date: '2023-01-05', fileUrl: '/sample5.pdf' },
    { id: 6, title: 'Blockchain Technology and Its Applications', author: 'David Wilson', date: '2022-12-20', fileUrl: '/sample6.pdf' },
    { id: 8, title: 'Blockchain Technology and Its Applications', author: 'David Wilson', date: '2022-12-20', fileUrl: '/sample6.pdf' },
    { id: 9, title: 'Blockchain Technology and Its Applications', author: 'David Wilson', date: '2022-12-20', fileUrl: '/sample6.pdf' },
  ]
};

const PdfView = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('books'); // Default category is 'books'

  // Filter PDFs based on selected category and search term
  const filteredPdfs = pdfFiles[selectedCategory].filter(pdf => 
    pdf.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pdf.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("pdff",filteredPdfs)

  return (
    <div className="container my-5">
      <header className="mb-5">
        <h1 className="fs-2">PDF Library</h1>
      </header>
      <main>
        {/* Category Selection */}
        <div className="mb-4">
          <div className="btn-group">
            {Object.keys(pdfFiles).map(category => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Search Box */}
        <div className="mb-4">
          <div className="input-group">
            <span className="input-group-text"><Search /></span>
            <input
              type="text"
              placeholder="Search PDFs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        {/* PDF Files */}
        <div className="row g-4">
          {filteredPdfs.map((pdf) => (
            <div key={pdf.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <PdfCard
                title={pdf.title}
                author={pdf.author}
                date={pdf.date}
                fileUrl={pdf.fileUrl}
                onView={() => setSelectedPdf(pdf)}
              />
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredPdfs.length === 0 && (
          <p className="text-center text-muted">No PDFs found matching your search.</p>
        )}
      </main>

      {/* PDF Modal */}
      {selectedPdf && (
        <PdfModal
          show={!!selectedPdf}
          onHide={() => setSelectedPdf(null)}
          fileUrl={selectedPdf.fileUrl}
          title={selectedPdf.title}
        />
      )}
    </div>
  );
};

export default PdfView;
