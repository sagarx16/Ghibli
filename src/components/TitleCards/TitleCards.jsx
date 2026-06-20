import { useRef, useEffect } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";


const TitleCards = ({ title ,category}) => {
  const cardsRef = useRef(null);

  useEffect(() => {
  const slider = cardsRef.current;
  if (!slider) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e) => {
    isDown = true;
    slider.classList.add("dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const onMouseUp = () => {
    isDown = false;
    slider.classList.remove("dragging");
  };

  const onMouseLeave = () => {
    isDown = false;
    slider.classList.remove("dragging");
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  };

  const onWheel = (e) => {
  e.preventDefault();
  // deltaX trackpad ke liye, deltaY mouse wheel ke liye
  slider.scrollLeft += e.deltaX || e.deltaY;
};

  slider.addEventListener("mousedown", onMouseDown);
  slider.addEventListener("mouseup", onMouseUp);
  slider.addEventListener("mouseleave", onMouseLeave);
  slider.addEventListener("mousemove", onMouseMove);
  slider.addEventListener("wheel", onWheel, { passive: false });  // ← passive: false ZARURI HAI

  return () => {
    slider.removeEventListener("mousedown", onMouseDown);
    slider.removeEventListener("mouseup", onMouseUp);
    slider.removeEventListener("mouseleave", onMouseLeave);
    slider.removeEventListener("mousemove", onMouseMove);
    slider.removeEventListener("wheel", onWheel);
  };
}, []);

  return (
    <section className="title-cards">
      <h2>{title?title:'Ghibli Magical World'}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} loading="lazy" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </section>

  );
};

export default TitleCards;