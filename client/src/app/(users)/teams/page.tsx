"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TeamListPage() {
  const [team, setTeam] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetchTeam();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchTeam = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/team");
      setTeam(data);
    } catch (error) {
      console.error("Failed to load team data", error);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  const renderCard = (member) => (
    <div
      key={member._id}
      className={`${isMobile ? "" : "col-md-4"} d-flex`}
      style={
        isMobile
          ? {
            flex: "0 0 100%",
            maxWidth: "100%",
            scrollSnapAlign: "start",
          }
          : { height: "100%" }
      }
    >
      <div
        className="card border-3 px-4 pt-4 pb-4 w-100"
        style={{
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          border: "1px solid #ced4da", // ✅ Updated to show the border properly
          transition: "transform 0.3s ease",
          height: "100%",
          margin: "0 auto",
        }}
      >

        <div className="d-flex flex-row align-items-center gap-3 text-start">
          <div
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "130px",
              height: "130px",
              backgroundColor: "#00bcd4",
              padding: "4px",
              border: "3px solid #00bcd4",
            }}
          >
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
              className="rounded-circle"
              width={120}
              height={120}
              style={{
                objectFit: "cover",
                objectPosition: "top center",
                border: "3px solid #fff",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                backgroundColor: "#ffffff",
              }}
            />
          </div>
          <div>
            <h5
              className="mb-1"
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#0d1b2a",
                fontFamily: "Poppins, sans-serif",
                textTransform: "capitalize",
              }}
            >
              {member.name}
            </h5>
            <p
              className="mb-1"
              style={{
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#007bff",
                fontFamily: "Poppins, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.6px",
              }}
            >
              {member.role}
            </p>

            {/* 🔽 Social Media Icons — FRONTEND ONLY (hardcoded) */}
            <div className="d-flex gap-3 mt-1">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                title="GitHub"
                style={{ fontSize: "1.25rem" }}
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                title="LinkedIn"
                style={{ fontSize: "1.25rem" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                title="Facebook"
                style={{ fontSize: "1.25rem" }}
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-5">
      <h2
        className="text-center mb-4"
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          fontFamily: "Poppins, sans-serif",
          color: "#0d1b2a",
          textTransform: "uppercase",
          letterSpacing: "1.2px",
        }}
      >
        Our Team
      </h2>

      {isMobile ? (
        <>
          <div
            className="d-flex pb-2 custom-scroll-x"
            style={{
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              gap: "1rem",
            }}
          >
            {team.slice(0, visibleCount).map((member) => renderCard(member))}
          </div>
          {visibleCount < team.length && (
            <div className="text-center mt-3">
              <button
                onClick={handleLoadMore}
                className="btn btn-primary px-4 rounded"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  borderRadius: "30px",
                  boxShadow: "0 4px 12px rgba(13, 110, 253, 0.2)",
                }}
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="row g-4">
            {team.slice(0, visibleCount).map((member) => renderCard(member))}
          </div>
          {visibleCount < team.length && (
            <div className="text-center mt-4">
              <button
                onClick={handleLoadMore}
                className="btn btn-primary px-4 rounded"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "14px",
                  letterSpacing: "0.5px",
                  borderRadius: "30px",
                  boxShadow: "0 4px 12px rgba(13, 110, 253, 0.2)",
                }}
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
