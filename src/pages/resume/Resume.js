import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import myResumePdf from "../../assets/docs/Mithilesh_Kumar_Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";

// Use standard CDN worker fallback
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version || "2.12.313"}/build/pdf.worker.min.js`;

export default class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageWidth: null,
      numPages: null,
      currentPage: 1,
      isLoading: true,
      error: null,
      useIframeFallback: false,
    };
  }

  componentDidMount() {
    this.setPageWidth();
    window.addEventListener("resize", this.setPageWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setPageWidth);
  }

  setPageWidth = () => {
    const width = window.innerWidth;
    let pageWidth;

    if (width > 1200) {
      pageWidth = 930;
    } else if (width > 768) {
      pageWidth = 700;
    } else {
      pageWidth = width * 0.92;
    }

    this.setState({ pageWidth });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      numPages,
      isLoading: false,
      error: null,
      useIframeFallback: false,
    });
  };

  onDocumentLoadError = (error) => {
    console.warn("React-PDF worker notice, switching to native PDF viewer:", error);
    this.setState({
      useIframeFallback: true,
      isLoading: false,
      error: null,
    });
  };

  goToPreviousPage = () => {
    this.setState((prevState) => ({
      currentPage: Math.max(prevState.currentPage - 1, 1),
    }));
  };

  goToNextPage = () => {
    this.setState((prevState) => ({
      currentPage: Math.min(prevState.currentPage + 1, prevState.numPages),
    }));
  };

  render() {
    const theme = this.props.theme;
    const { pageWidth, numPages, currentPage, isLoading, useIframeFallback } = this.state;

    return (
      <div className="resume-main">
        <Header theme={theme} />
        <div className="resume-view">
          <Fade bottom duration={2000} distance="40px">
            <div>
              {/* Download Button */}
              <div className="download-btn" style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap", marginBottom: "25px" }}>
                <Button
                  text="📥 Download Resume (PDF)"
                  newTab={true}
                  href={myResumePdf}
                  theme={theme}
                />
                <Button
                  text="🔗 Open Fullscreen"
                  newTab={true}
                  href={myResumePdf}
                  theme={theme}
                />
              </div>

              {/* PDF Document Container */}
              <div className="resume-page" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {useIframeFallback ? (
                  <div style={{ width: "100%", maxWidth: pageWidth || 900, minHeight: "850px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
                    <iframe
                      src={`${myResumePdf}#toolbar=1&navpanes=0`}
                      title="Mithilesh Kumar Resume"
                      width="100%"
                      height="900px"
                      style={{ border: "none" }}
                    />
                  </div>
                ) : (
                  <>
                    {isLoading && (
                      <div className="resume-loading">
                        <div className="loading-spinner"></div>
                        <p>Loading resume preview...</p>
                      </div>
                    )}
                    <Document
                      file={myResumePdf}
                      onLoadSuccess={this.onDocumentLoadSuccess}
                      onLoadError={this.onDocumentLoadError}
                      loading={
                        <div className="resume-loading">
                          <div className="loading-spinner"></div>
                          <p>Loading resume preview...</p>
                        </div>
                      }
                    >
                      {pageWidth && (
                        <Page
                          pageNumber={currentPage}
                          width={pageWidth}
                          loading={
                            <div className="page-loading">
                              <div className="loading-spinner"></div>
                            </div>
                          }
                        />
                      )}
                    </Document>

                    {/* Pagination Controls */}
                    {numPages && numPages > 1 && (
                      <div className="pagination-controls" style={{ marginTop: "20px" }}>
                        <button
                          onClick={this.goToPreviousPage}
                          disabled={currentPage === 1}
                          className="pagination-btn"
                          aria-label="Previous page"
                        >
                          ← Previous
                        </button>
                        <span className="page-info" aria-live="polite">
                          Page {currentPage} of {numPages}
                        </span>
                        <button
                          onClick={this.goToNextPage}
                          disabled={currentPage === numPages}
                          className="pagination-btn"
                          aria-label="Next page"
                        >
                          Next →
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
