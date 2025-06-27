"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function TeamListPage() {
  const [team, setTeam] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // ✅ show 3 initially
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

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
    setVisibleCount(team.length); // ✅ Show all on click
  };

  const handleCardClick = (id) => {
    router.push(`/team/${id}`);
  };

  const renderCard = (member) => (
    <div
      className={`d-flex ${isMobile ? "me-3" : "col-md-4"}`}
      key={member._id}
      style={
        isMobile
          ? { flex: "0 0 auto", width: "280px", height: "100%" }
          : { height: "100%", cursor: "pointer" }
      }
      onClick={() => handleCardClick(member._id)}
    >
      <div
        className={`card text-center border-0 px-4 pt-4 pb-4 w-100 ${visibleCount > 3 ? "fade-in" : ""
          }`}
        style={{
          borderRadius: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          height: "100%",
        }}
      >
        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#dceeff",
            padding: "4px",
            border: "3px solid #dceeff",
            margin: "0 auto",
          }}
        >
          <img
            src={`http://localhost:5000/uploads/${member.image}`}
            alt={member.name}
            className="rounded-circle"
            width={140}
            height={140}
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              border: "4px solid #fff",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
              backgroundColor: "#fff",
            }}
          />
        </div>

        <div>
          <h5 className="mt-3 mb-1 fw-semibold">{member.name}</h5>
          <p className="text-muted mb-1" style={{ fontSize: "0.95rem" }}>
            {member.role}
          </p>
          <p className="mb-0" style={{ fontSize: "0.9rem", color: "#555" }}>
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Team</h2>

      {isMobile ? (
        <>
          <div
            className="d-flex overflow-auto pb-2"
            style={{
              scrollbarWidth: "thin",
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
            }}
          >
            {team.map((member) => renderCard(member))}
          </div>
          <div className="text-center mt-3">
            <button
              className="btn btn-primary px-4"
              onClick={handleLoadMore}
              disabled={visibleCount >= team.length}
            >
              Load More
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="row g-4">
            {team.slice(0, visibleCount).map((member) => renderCard(member))}
          </div>
          {visibleCount < team.length && (
            <div className="text-center mt-4">
              <button className="btn btn-primary px-4" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </>
      )}
      <style jsx global>{`
  .fade-in {
    animation: fadeIn 0.5s ease-in-out both;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>

    </div>
  );
}
