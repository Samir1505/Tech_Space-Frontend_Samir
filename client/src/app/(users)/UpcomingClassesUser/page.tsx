// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// export default function UpcomingClassesUserPanel() {
//   const [classes, setClasses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showFormFor, setShowFormFor] = useState(null);
//   const [selectedClass, setSelectedClass] = useState(null);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [availableTimes, setAvailableTimes] = useState([]);
//   const [showDateWarning, setShowDateWarning] = useState(false);

//   const fetchClasses = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/classes");
//       setClasses(res.data);
//       setError(null);
//     } catch (err) {
//       setError("Failed to load classes.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchClasses();
//     const interval = setInterval(fetchClasses, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const getScheduleOptions = (cls) => {
//     return [
//       { date: cls.date, time: cls.time },
//       ...(cls.secondSchedules || []).map(s => ({
//         date: s.secondDate,
//         time: s.secondTime
//       }))
//     ];
//   };

//   const handleDateChange = (date, cls) => {
//     setSelectedDate(date);

//     // extract all times from all schedules (primary + secondary)
//     const options = getScheduleOptions(cls);
//     const allTimes = options.map(opt => opt.time); // not filtered by date

//     setAvailableTimes(allTimes);
//   };


//   if (loading) return <div className="text-center my-5">Loading...</div>;
//   if (error) return <div className="text-center text-danger my-5">{error}</div>;

//   return (
//     <div className="container py-4">
//       <h4 className="mb-4">Upcoming Classes ({classes.length})</h4>

//       {selectedClass && showFormFor && (
//         <div className="mb-4 border rounded p-4 bg-light shadow">
//           <h5 className="mb-3 text-uppercase fw-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
//             Register
//           </h5>
//           {/* <form>
//             <div className="mb-3">
//               <label className="form-label">Course Name</label>
//               <input className="form-control" value={selectedClass.title} readOnly />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Select Date</label>
//               <select
//                 className="form-select"
//                 value={selectedDate}
//                 onChange={(e) => handleDateChange(e.target.value, selectedClass)}
//               >
//                 <option value="">-- Select Date --</option>
//                 {[...new Set(getScheduleOptions(selectedClass).map(opt => opt.date))].map((date, idx) => (
//                   <option key={idx} value={date}>
//                     {new Date(date).toLocaleDateString("en-GB", {
//                       day: "2-digit",
//                       month: "short",
//                       year: "numeric",
//                     })}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Select Time</label>
//               <select className="form-select">
//                 <option value="">-- Select Time --</option>
//                 {availableTimes.map((time, idx) => (
//                   <option key={idx} value={time}>{time}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="d-flex gap-2">
//               <button type="submit" className="btn btn-success w-100">Submit</button>
//               <button
//                 type="button"
//                 className="btn btn-outline-danger"
//                 onClick={() => {
//                   setShowFormFor(null);
//                   setSelectedClass(null);
//                   setSelectedDate("");
//                   setAvailableTimes([]);
//                 }}
//               >
//                 Close
//               </button>
//             </div>
//           </form> */}
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Full Name <span className="text-danger">*</span></label>
//               <input type="text" className="form-control" placeholder="Enter your full name" required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Email <span className="text-danger">*</span></label>
//               <input type="email" className="form-control" placeholder="Enter your email" required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Phone <span className="text-danger">*</span></label>
//               <input type="tel" className="form-control" placeholder="Enter your phone" required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Course</label>
//               <input className="form-control" value={selectedClass.title} readOnly />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Select Date</label>
//               <select
//                 className="form-select"
//                 value={selectedDate}
//                 onChange={(e) => handleDateChange(e.target.value, selectedClass)}
//                 required
//               >
//                 <option value="">-- Select Date --</option>
//                 {[...new Set(getScheduleOptions(selectedClass).map(opt => opt.date))].map((date, idx) => (
//                   <option key={idx} value={date}>
//                     {new Date(date).toLocaleDateString("en-GB", {
//                       day: "2-digit",
//                       month: "short",
//                       year: "numeric",
//                     })}
//                   </option>
//                 ))}
//               </select>
//             </div>
         
//             <div className="mb-3">
//               <label className="form-label">Select Time</label>
//               <select
//                 className="form-select"
//                 required
//                 onFocus={() => {
//                   if (!selectedDate) {
//                     setShowDateWarning(true);
//                   } else {
//                     setShowDateWarning(false);
//                   }
//                 }}
//                 onBlur={() => {
//                   setTimeout(() => setShowDateWarning(false), 2000);
//                 }}
//               >
//                 {!selectedDate && showDateWarning ? (
//                   <option value="">Select Date First</option>
//                 ) : (
//                   <>
//                     <option value="">-- Select Time --</option>
//                     {availableTimes.map((time, idx) => (
//                       <option key={idx} value={time}>
//                         {time}
//                       </option>
//                     ))}
//                   </>
//                 )}
//               </select>
//             </div>






//             <div className="d-flex gap-2">
//               <button type="submit" className="btn btn-success w-100">Submit</button>
//               <button
//                 type="button"
//                 className="btn btn-outline-danger"
//                 onClick={() => {
//                   setShowFormFor(null);
//                   setSelectedClass(null);
//                   setSelectedDate("");
//                   setAvailableTimes([]);
//                 }}
//               >
//                 Close
//               </button>
//             </div>
//           </form>

//         </div>
//       )}

//       <div className="row">
//         {classes.map((cls) => (
//           <div className="col-12 col-sm-6 col-md-3 mb-4" key={cls._id}>
//             <div
//               className="card h-100 shadow-sm rounded-2 border border-light-subtle hover-shadow"
//               style={{ minHeight: "414px", transition: "box-shadow 0.7s ease" }}
//             >
//               <img
//                 src={`http://localhost:5000${cls.imageUrl || "/uploads/default.jpg"}`}
//                 alt={cls.title}
//                 className="card-img-top p-3"
//                 style={{
//                   height: "180px",
//                   objectFit: "cover",
//                   borderRadius: '1.3rem',
//                 }}
//               />

//               <div className="card-body d-flex flex-column justify-content-between pt-0">
//                 <div>
//                   <h5
//                     className="card-title fw-bold text-uppercase"
//                     style={{
//                       color: '#00214D',
//                       fontFamily: 'Poppins, sans-serif',
//                       fontSize: '1.2rem',
//                     }}
//                   >
//                     {cls.title}
//                   </h5>
//                   <p
//                     className="text-uppercase fw-semibold small mb-2"
//                     style={{
//                       color: '#6c757d',
//                       fontFamily: 'Poppins, sans-serif',
//                       fontSize: '0.75rem',
//                     }}
//                   >
//                     Upcoming Classes
//                   </p>

//                   <Swiper
//                     modules={[Autoplay, Pagination]}
//                     spaceBetween={10}
//                     slidesPerView={1}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }}
//                     loop={true}
//                     pagination={{ clickable: true }}
//                   >
//                     <SwiperSlide>
//                       <div className="d-flex align-items-center justify-content-between">
//                         <div>
//                           <div>
//                             <i className="bi bi-calendar3 me-2"></i>
//                             {new Date(cls.date).toLocaleDateString("en-GB", {
//                               day: "2-digit",
//                               month: "short",
//                               year: "numeric",
//                             })}
//                           </div>
//                           <div>
//                             <i className="bi bi-clock me-2"></i>
//                             {cls.time}
//                           </div>
//                         </div>
//                         <div className="mt-2 small text-end" style={{ color: '#00214D', fontWeight: 600 }}>
//                           <span className="me-1">Class:</span>
//                           {(cls.secondSchedules?.length ?? 0) + 1}
//                         </div>
//                       </div>
//                     </SwiperSlide>

//                     {cls.secondSchedules?.map((schedule, index) => (
//                       <SwiperSlide key={index}>
//                         <div className="d-flex align-items-center justify-content-between">
//                           <div>
//                             <div>
//                               <i className="bi bi-calendar3 me-2"></i>
//                               {new Date(schedule.secondDate).toLocaleDateString("en-GB", {
//                                 day: "2-digit",
//                                 month: "short",
//                                 year: "numeric",
//                               })}
//                             </div>
//                             <div>
//                               <i className="bi bi-clock me-2"></i>
//                               {schedule.secondTime}
//                             </div>
//                           </div>
//                           <div className="mt-2 small" style={{ color: '#00214D', fontWeight: 600 }}>
//                             <span className="me-1">Class:</span>
//                             {(cls.secondSchedules?.length ?? 0) + 1}
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                     ))}
//                   </Swiper>

//                   <style jsx>{`
//                     :global(.swiper-pagination) {
//                       margin-top: 0.5rem;
//                       position: relative !important;
//                       bottom: 0 !important;
//                       text-align: center;
//                     }
//                     :global(.swiper-pagination-bullet) {
//                       background: #0d6efd;
//                       opacity: 0.5;
//                     }
//                     :global(.swiper-pagination-bullet-active) {
//                       opacity: 1;
//                     }
//                     .hover-shadow:hover {
//                       box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12), 0 0 12px rgba(0, 0, 0, 0.05) !important;
//                       transition: box-shadow 0.3s ease;
//                     }
//                   `}</style>
//                 </div>

//                 {cls.duration && (
//                   <span className="badge bg-danger text-white fw-semibold position-absolute" style={{
//                     top: '1.5rem',
//                     right: '1.5rem',
//                     padding: '0.5rem 1rem',
//                     boxShadow: '0 0 10px rgba(0,0,0,0.07)',
//                     fontSize: '0.8rem',
//                     fontFamily: 'Poppins, sans-serif',
//                     textTransform: 'uppercase',
//                   }}>
//                     {cls.duration}
//                   </span>
//                 )}

//                 <button
//                   className="btn btn-primary w-100 py-2 mt-3 fw-bold text-uppercase"
//                   style={{
//                     fontFamily: 'Poppins, sans-serif',
//                     backgroundColor: '#00214D',
//                     borderColor: '#00214D',
//                   }}
//                   onClick={() => {
//                     setShowFormFor(cls._id);
//                     setSelectedClass(cls);
//                     setSelectedDate("");
//                     setAvailableTimes([]);
//                   }}
//                 >
//                   Register
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function UpcomingClassesUserPanel() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFormFor, setShowFormFor] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [showDateWarning, setShowDateWarning] = useState(false);

  const fetchClasses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/classes");
      setClasses(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to load classes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
    const interval = setInterval(fetchClasses, 10000);
    return () => clearInterval(interval);
  }, []);

  const getScheduleOptions = (cls) => {
    return [
      { date: cls.date, time: cls.time },
      ...(cls.secondSchedules || []).map((s) => ({
        date: s.secondDate,
        time: s.secondTime,
      })),
    ];
  };

  const handleDateChange = (date, cls) => {
    setSelectedDate(date);
    const options = getScheduleOptions(cls);
    const allTimes = options.map((opt) => opt.time); // show all times, not filtered by date
    setAvailableTimes(allTimes);
  };

  if (loading) return <div className="text-center my-5">Loading...</div>;
  if (error) return <div className="text-center text-danger my-5">{error}</div>;

  return (
    <div className="container py-4 position-relative">
      <h4 className="mb-4">Upcoming Classes ({classes.length})</h4>

      {/* 🔶 FORM OPENED ABOVE CARD */}
      {selectedClass && showFormFor && (
        <div
          className="form-overlay"
          style={{
            position: "fixed",
            top: 80,
            left: 0,
            height: "90vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="bg-white shadow animate-form"
            style={{
              width: "95%",
              maxWidth: "500px",
              padding: "2rem",
              borderRadius: "1rem",
              position: "relative",
            }}
          >
            <h5 className="mb-3 text-uppercase fw-bold text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
              Register
            </h5>

            {/* 🔷 FORM BODY */}
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Enter your full name" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone <span className="text-danger">*</span></label>
                <input type="tel" className="form-control" placeholder="Enter your phone" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Course</label>
                <input className="form-control" value={selectedClass.title} readOnly />
              </div>

              {/* 🔸 DATE SELECT */}
              <div className="mb-3">
                <label className="form-label">Select Date</label>
                <select
                  className="form-select"
                  value={selectedDate}
                  onChange={(e) => handleDateChange(e.target.value, selectedClass)}
                  required
                >
                  <option value="">-- Select Date --</option>
                  {[...new Set(getScheduleOptions(selectedClass).map(opt => opt.date))].map((date, idx) => (
                    <option key={idx} value={date}>
                      {new Date(date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </option>
                  ))}
                </select>
              </div>

              {/* 🔸 TIME SELECT */}
              <div className="mb-3">
                <label className="form-label">Select Time</label>
                <select
                  className="form-select"
                  required
                  onFocus={() => {
                    if (!selectedDate) setShowDateWarning(true);
                  }}
                  onBlur={() => setTimeout(() => setShowDateWarning(false), 2000)}
                >
                  {!selectedDate && showDateWarning ? (
                    <option value="">Select Date First</option>
                  ) : (
                    <>
                      <option value="">-- Select Time --</option>
                      {availableTimes.map((time, idx) => (
                        <option key={idx} value={time}>
                          {time}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </div>

              {/* 🔸 BUTTONS */}
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success w-100">Submit</button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    setShowFormFor(null);
                    setSelectedClass(null);
                    setSelectedDate("");
                    setAvailableTimes([]);
                  }}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 🔶 CLASS CARDS */}
      <div className="row">
        {classes.map((cls) => (
          <div className="col-12 col-sm-6 col-md-3 mb-4" key={cls._id}>
            <div
              className="card h-100 shadow-sm rounded-2 border border-light-subtle hover-shadow"
              style={{ minHeight: "414px", transition: "box-shadow 0.7s ease" }}
            >
              <img
                src={`http://localhost:5000${cls.imageUrl || "/uploads/default.jpg"}`}
                alt={cls.title}
                className="card-img-top p-3"
                style={{ height: "180px", objectFit: "cover", borderRadius: "1.3rem" }}
              />
              <div className="card-body d-flex flex-column justify-content-between pt-0">
                <div>
                  <h5 className="card-title fw-bold text-uppercase" style={{ color: "#00214D", fontFamily: "Poppins, sans-serif", fontSize: "1.2rem" }}>{cls.title}</h5>
                  <p className="text-uppercase fw-semibold small mb-2" style={{ color: "#6c757d", fontFamily: "Poppins, sans-serif", fontSize: "0.75rem" }}>Upcoming Classes</p>

                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <div><i className="bi bi-calendar3 me-2"></i>{new Date(cls.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</div>
                          <div><i className="bi bi-clock me-2"></i>{cls.time}</div>
                        </div>
                        <div className="mt-2 small text-end" style={{ color: "#00214D", fontWeight: 600 }}>
                          <span className="me-1">Class:</span>{(cls.secondSchedules?.length ?? 0) + 1}
                        </div>
                      </div>
                    </SwiperSlide>
                    {cls.secondSchedules?.map((schedule, index) => (
                      <SwiperSlide key={index}>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <div><i className="bi bi-calendar3 me-2"></i>{new Date(schedule.secondDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</div>
                            <div><i className="bi bi-clock me-2"></i>{schedule.secondTime}</div>
                          </div>
                          <div className="mt-2 small" style={{ color: "#00214D", fontWeight: 600 }}>
                            <span className="me-1">Class:</span>{(cls.secondSchedules?.length ?? 0) + 1}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Swiper CSS */}
                  <style jsx>{`
                    :global(.swiper-pagination) {
                      margin-top: 0.5rem;
                      position: relative !important;
                      bottom: 0 !important;
                      text-align: center;
                    }
                    :global(.swiper-pagination-bullet) {
                      background: #0d6efd;
                      opacity: 0.5;
                    }
                    :global(.swiper-pagination-bullet-active) {
                      opacity: 1;
                    }
                    .hover-shadow:hover {
                      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12), 0 0 12px rgba(0, 0, 0, 0.05) !important;
                      transition: box-shadow 0.3s ease;
                    }
                    @keyframes slideDown {
                      0% {
                        opacity: 0;
                        transform: translateY(-10px);
                      }
                      100% {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                    .animate-form {
                      animation: slideDown 0.3s ease;
                    }
                  `}</style>
                </div>

                {/* Duration Badge */}
                {cls.duration && (
                  <span className="badge bg-danger text-white fw-semibold position-absolute" style={{
                    top: "1.5rem",
                    right: "1.5rem",
                    padding: "0.5rem 1rem",
                    boxShadow: "0 0 10px rgba(0,0,0,0.07)",
                    fontSize: "0.8rem",
                    fontFamily: "Poppins, sans-serif",
                    textTransform: "uppercase",
                  }}>{cls.duration}</span>
                )}

                {/* 🔘 REGISTER BUTTON */}
                <button
                  className="btn btn-primary w-100 py-2 mt-3 fw-bold text-uppercase"
                  style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#00214D", borderColor: "#00214D" }}
                  onClick={() => {
                    setShowFormFor(cls._id);
                    setSelectedClass(cls);
                    setSelectedDate("");
                    setAvailableTimes([]);
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
