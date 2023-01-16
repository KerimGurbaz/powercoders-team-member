import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);


  const handlePrevClick = () => {
    setDirection("left");
  }

  const handleNextClick = () => {
    setDirection("right");
  }

  useEffect(() => {
    if (direction === "center") {
      setX(0);
      setY(0);
    } else if (direction === "left") {
      setX(x - 100);
      setY(y);
    } else if (direction === "right") {
      setX(x + 100);
      setY(y);
    }
  }, [direction])



  const nextSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % people.length;
      return result;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex - 1 + people.length) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        const result = (oldIndex + 1) % people.length;
        return result;
      });
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
     <section className="section">
    <div className="title">
      <h2>
        <span>&#123;</span>POWER<span>.</span>CODERS<span>&#125;</span>
      </h2>

      </div>
      <div style={{ width: "100vw", height: "100%", position: "relative" , marginTop:"10rem", maxWidth:'35rem' ,background:"yellow"}}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            margin: "-10px 20px",
            border:"red 3px solid"
          }}
        >
          <div
            style={{
              width: "240px",
              height: "120px",
              borderRadius: "50%",
              background: "white",
              position: "relative",
              border:"orange 3px solid"

            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgb(0, 153, 255)",
                position: "absolute",
                left: Math.min(Math.max(x - 20, 20), 200) + "px",
                top: Math.min(Math.max(y - 20, 20), 80) + "px",
                borderRadius: "50%",
                border: "15px solid rgb(0, 153, 255)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  background: "black",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: "240px",
              height: "120px",
              borderRadius: "50%",
              background: "white",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "rgb(0, 153, 255)",
                position: "absolute",
                  left: Math.min(Math.max(x - 20,20), 220) + "px",
                  top: Math.min(Math.max(y - 20, 20), 80) + "px",
                  borderRadius: "50%",
                  border: "15px solid rgb(0, 153, 255)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    background: "black",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>

  );
}

export default App;
