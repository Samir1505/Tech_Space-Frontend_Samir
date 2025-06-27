'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses').then(r => setCourses(r.data));
  }, []);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      if (selectedCategory === 'All') setFilteredCourses(courses);
      else setFilteredCourses(courses.filter(c => c.category === selectedCategory));
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedCategory, courses]);

  const categories = ['All', ...new Set(courses.map(c => c.category))];

  return (
    <div className="container my-5">
      {/* Category Filter Buttons */}
      <div
        className="mb-5 d-flex flex-nowrap justify-content-start gap-3 overflow-auto px-2 border-bottom pb-2"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        }}
      >
        <style jsx>{`
    div::-webkit-scrollbar {
      display: none;
    }
  `}</style>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="bg-transparent border-0 fw-semibold px-3 py-2 text-nowrap"
            style={{
              color: selectedCategory === cat ? '#0d6efd' : '#333',
              fontSize: '1rem',
              transition: 'color 0.3s ease',
              whiteSpace: 'nowrap',
              fontWeight: selectedCategory === cat ? '600' : '500',
              letterSpacing: '0.5px',
              textTransform: 'capitalize',
            }}
          >
            <span style={{ position: 'relative', display: 'inline-block' }}>
              {cat}
              {selectedCategory === cat && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: -2,
                    height: '2px',
                    width: '100%',
                    backgroundColor: '#0d6efd',
                    borderRadius: '1px',
                    transition: 'width 0.3s ease',
                  }}
                />
              )}
            </span>
          </button>
        ))}

      </div>


      {/* Courses Grid */}
      <div className="row g-4">
        {filteredCourses.length === 0 && (
          <p className="text-center w-100 text-muted">No courses found.</p>
        )}

        {filteredCourses.map((c, idx) => (
          <div
            key={c._id}
            className={`col-12 col-sm-6 col-md-4 col-lg-3 course-col ${animate ? 'fade-slide-in' : ''
              }`}
            style={{ '--delay': `${idx * 100}ms` } as React.CSSProperties}
          >
            <div
              className="card h-100 rounded-2 overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.08)', // 👈 clean, visible border
              }}
            >


              {/* image */}
              <div className="position-relative overflow-hidden">
                <img
                  src={`http://localhost:5000${c.image}`}
                  alt={c.title}
                  className="card-img-top p-3"
                  style={{
                    height: 200,
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    borderRadius: '1.3rem',
                  }}
                />
                <span
                  className="badge bg-danger text-white fw-semibold position-absolute"
                  style={{
                    top: '1.5rem',
                    right: '1.5rem',
                    padding: '0.5rem 1rem',
                    // borderRadius: '2rem',
                    boxShadow: '0 0 10px rgba(0,0,0,0.07)',
                    fontSize: '0.8rem',
                  }}
                >
                  {c.duration}
                </span>
              </div>

              {/* content */}
              <div className="card-body d-flex flex-column pt-0">
                <h5
                  className="card-title mb-2"
                  style={{
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#1a1a1a',
                    textTransform: 'capitalize',
                  }}
                >
                  {c.title}
                </h5>

                <div
                  className="d-flex align-items-center gap-2"
                  style={{
                    fontWeight: 500,
                    fontSize: '0.82rem',
                    color: '#5c636a', // muted blue-gray
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px',
                  }}
                >
                  <i className="bi bi-clock-history text-primary" style={{ fontSize: '1rem' }}></i>
                  <span className='text-primary'>{c.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}




      </div>



    </div>
  );
}
