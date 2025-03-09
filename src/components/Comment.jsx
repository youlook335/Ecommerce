import React, {useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import "../styles/comment.css";
import Start from "./Start";

const testimonials = [
    {
        name: "David Thompson",
        role: "Building Owner",
        text: "This project exceeded my expectations in quality, aesthetics, and durability. A true investment for the future.",
        image: "https://www.usbank.com/dam/images/wealth_management/ascent/photo-business-owner-planning-470x264.jpg",
    },
    {
        name: "Michael Johnson",
        role: "Co-Owner",
        text: "The planning and execution were flawless. The entire team has done an exceptional job!",
        image: "https://upstartgroup.com/wp-content/uploads/Dec-CP-2-Co-Owners-and-the-challenge-of-exit-plans-to-suit-them-both.jpg",
    },
    {
        name: "Sarah Anderson",
        role: "Lead Architect & Designer",
        text: "The design blends modern aesthetics with functionality. Every corner tells a story of elegance and efficiency.",
        image: "https://www.zippia.com/_next/image/?url=https%3A%2F%2Fmedia.zippia.com%2Fjob-title%2Fimages%2Fhardware-engineer%2Fhardware-engineer-2.webp&w=3840&q=75",
    },
    {
        name: "Christopher White",
        role: "Civil Engineer",
        text: "The foundation and structural design are built for long-term sustainability. No compromises on safety and quality.",
        image: "https://as2.ftcdn.net/v2/jpg/05/52/36/55/1000_F_552365590_V7G1FBA3rvN7bKrlKSbxaezoQMrJegDi.jpg",
    },
    {
        name: "Jessica Carter",
        role: "Electrical Engineer",
        text: "The electrical systems are state-of-the-art, ensuring energy efficiency and reliability throughout the building.",
        image: "https://media.istockphoto.com/id/1409755712/photo/i-need-to-cut-this-cable-here.jpg?s=612x612&w=0&k=20&c=d5ItjKo_0e-ZPoCXDqbX_omyNSeNpLghhuqrduegOOU=",
    },
    {
        name: "Robert Harris",
        role: "Plumbing Engineer",
        text: "The plumbing system is built with high-grade materials and follows international standards for water management.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuy-6wEpBpxfT6GJPryP5ZtyBmQy2oW_5niaxyxEPS01pXRtsTht1D9vVTFmJsGDmUsSs&usqp=CAU",
    },
    {
        name: "Daniel Lewis",
        role: "General Contractor",
        text: "We focused on quality materials and precision execution to bring this building to life exactly as envisioned.",
        image: "https://www.procore.com/library/wp-content/uploads/2023/03/What-Is-a-General-Contractor_-Procore-Blog-Hero.png",
    },
    {
        name: "Emily Watson",
        role: "Interior Designer",
        text: "Our goal was to create a space that feels luxurious yet comfortable. The results speak for themselves.",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
        name: "Ryan Adams",
        role: "Site Supervisor",
        text: "From ground-breaking to the final touches, we ensured the highest construction standards and attention to detail.",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
        name: "Nathan Brooks",
        role: "Leading Engineer",
        text: "A well-coordinated project that combines engineering excellence with modern infrastructure. A milestone in construction!",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
        name: "Sophia Mitchell",
        role: "Structural Engineer",
        text: "The structural integrity of this building is unmatched, ensuring long-term safety and durability.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhHmD7Jt2jT-4LJOZRzcTBv9wAZDfyRd98g&s",
    },
    {
        name: "Henry Evans",
        role: "Electrical Engineer",
        text: "A fully optimized electrical network that balances energy efficiency with power reliability.",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Lucas Green",
        role: "Plumbing Engineer",
        text: "We implemented advanced water conservation methods, ensuring sustainability in the plumbing system.",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
];

const Comment = () => {
    const [index, setIndex] = useState(0);

    const nextTestimonial = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <>
        <div className="testimonial-container mt-5 mb-5">
            <h2 className="testimonial-title">What Experts Say About Our Building</h2>

            <div className="testimonial-card">
                <button onClick={prevTestimonial} className="nav-button left">
                    <FaChevronLeft />
                </button>

                <div className="testimonial-content">
                    <Start />
                    <div className="testimonial-image-container">
                        <img
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                            className="testimonial-image"
                        />
                    </div>

                    <div className="testimonial-text">
                        <p>"{testimonials[index].text}"</p>
                    </div>

                    <div className="testimonial-info">
                        <h3 className="testimonial-name">{testimonials[index].name}</h3>
                        <p className="testimonial-role">{testimonials[index].role}</p>
                    </div>
                </div>

                <button onClick={nextTestimonial} className="nav-button right">
                    <FaChevronRight />
                </button>
            </div>
        </div>
        {/* <hr /> */}
        </>
    );
};

export default Comment;