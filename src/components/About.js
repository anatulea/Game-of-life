import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <h2 style={{ textAlign: "center" }}>Conway's Game of Life</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
          <p>
            The Game of Life, also known simply as Life, is a cellular automaton
            devised by the British mathematician John Horton Conway in 1970. It
            is a zero-player game, meaning that its evolution is determined by
            its initial state, requiring no further input. One interacts with
            the Game of Life by creating an initial configuration and observing
            how it evolves. It is Turing complete and can simulate a universal
            constructor or any other Turing machine.
          </p>
          <p>
            Conway's Game of Life is played on an infinite two-dimensional
            rectangular grid of cells. Each cell can be either alive or dead.
            The status of each cell changes each turn of the game (also called a
            generation) depending on the statuses of that cell's 8 neighbors.
            Neighbors of a cell are cells that touch that cell, either
            horizontal, vertical, or diagonal from that cell.{" "}
          </p>
        </div>
        <img
          style={{ width: "160px", height: "200px", marginLeft: "20px" }}
          src="https://www.princeton.edu/sites/default/files/styles/half_1x/public/images/2020/04/20090310_ConwayKochen_DJA_066-copy.jpg?itok=hg5rrQvx"
          alt="John Horton Conway "
        />
      </div>
      <p>
        The initial pattern is the first generation. The second generation
        evlives from applying the rules simultaneously to every cell on the game
        board, i.e. births and deaths happen simultaneously. Afterwards, the
        rules are iteratively applied to create future generations. For each
        generation of the game, a cell's status in the next generation is
        determined by a set of rules.{" "}
      </p>
      <h3 style={{ textAlign: "center" }}>Examples of patterns</h3>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            marginLeft: "3%",
          }}
        >
          <p>
            Many different types of patterns occur in the Game of Life, which
            are classified according to their behaviour. Common pattern types
            include: still lifes, which do not change from one generation to the
            next; oscillators, which return to their initial state after a
            finite number of generations; and spaceships, which translate
            themselves across the grid.
          </p>
          <p>
            The earliest interesting patterns in the Game of Life were
            discovered without the use of computers. The simplest still lifes
            and oscillators were discovered while tracking the fates of various
            small starting configurations using graph paper, blackboards, and
            physical game boards, such as those used in go. During this early
            research, Conway discovered that the R-pentomino failed to stabilize
            in a small number of generations. In fact, it takes 1103 generations
            to stabilize, by which time it has a population of 116 and has
            generated six escaping gliders; these were the first spaceships ever
            discovered.
          </p>
        </div>
        <img
          src="https://camo.githubusercontent.com/a710386de69bcb8577875246196c7fb07144ff0c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f3456565a547654717a5252304255774e49482f67697068792e676966"
          alt="Examples of patterns"
        />
      </div>

      <br />
      <Footer />
    </div>
  );
};
export default About;
