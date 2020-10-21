import React, { useState, useEffect, useCallback, useRef } from "react";
import produce from "immer";
import generateEmptyGrid from "./functions";
import Rules from "./components/Rules";
import Header from "./components/Header";
import Footer from "./components/Footer";

const directions = [
  [-1, -1],   [0, -1],   [1, -1],
  [-1, 0 ],              [1, 0 ],
  [-1, 1 ],   [0, 1 ],   [1, 1 ]
]

const App = () => {
  const [numRows, setNumRows] = useState(30);
  const [numCols, setNumCols] = useState(30);
  const [speed, setSpeed] = useState(1000);
  const [playing, setPlaying] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid(numRows, numCols);
  });

  const handleSelect = (value) => {
    if (value === "1") {
      setNumCols(30);
      setNumRows(30);
    } else if (value === "2") {
      setNumCols(25);
      setNumRows(25);
    } else if (value === "3") {
      setNumCols(40);
      setNumRows(30);
    } else if (value === "4") {
      setNumCols(50);
      setNumRows(40);
    }
  };

  useEffect(() => {
    setGrid(generateEmptyGrid(numRows, numCols));
  }, [numRows, numCols]);

  const playingRef = useRef(playing);
  playingRef.current = playing;

  const generationRef = useRef(generation);
  generationRef.current = generation;

  const runSimulation = useCallback(() => {
    if (!playingRef.current) {
      return;
    }

    setGrid((grid) => {
      return produce(grid, (gridCopy) => {
        for (let row = 0; row < numRows; row++) {
          for (let col = 0; col < numCols; col++) {
            let adj_cell = 0;
            directions.forEach(([x, y]) => {
              const new_row = row + x;
              const new_col = col + y;
              if (
                new_row >= 0 &&
                new_row < numRows &&
                new_col >= 0 &&
                new_col < numCols
              ) {
                adj_cell += grid[new_row][new_col];
              }
            });

            if (adj_cell < 2 || adj_cell > 3) {
              gridCopy[row][col] = 0;
            } else if (grid[row][col] === 0 && adj_cell === 3) {
              gridCopy[row][col] = 1;
            }
          }
        }
        setGeneration(generationRef.current + 1);
      });
    });

    setTimeout(runSimulation, speed);
  }, [numRows, numCols, speed]);

  return (
    <div className="App">
      <Header />
      <div className="game-rules">
        <section className="game">
          <div>
            <h3>Current Generation: {generation}</h3>
          </div>
          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${numCols}, 15px)`,
            }}
          >
            {grid.map((rows, row_index) =>
              rows.map((col, col_index) => (
                <div
                  className="cell"
                  key={col_index}
                  onClick={() => {
                    const newGrid = produce(grid, (gridCopy) => {
                      gridCopy[row_index][col_index] = grid[row_index][
                        col_index
                      ]
                        ? 0
                        : 1;
                    });
                    if (!playing) {
                      setGrid(newGrid);
                    } else {
                      setGrid(grid);
                    }
                  }}
                  style={{
                    backgroundColor: grid[row_index][col_index]
                      ? "#f093fb"
                      : "white",
                  }}
                />
              ))
            )}
          </div>
          <div className="btn-container">
            
            <button
              onClick={() => {
                setPlaying(true);
                playingRef.current = true;
                runSimulation();
              }}
            >
              Start
            </button>

            <button
              onClick={() => {
                setPlaying(false);
                playingRef.current = false;
              }}
            >
              {" "}
              Stop
            </button>

            <button
              onClick={() => {
                const rows = [];
                for (let i = 0; i < numRows; i++) {
                  rows.push(
                    Array.from(Array(numCols), () =>
                      Math.random() > 0.8 ? 1 : 0
                    )
                  );
                }

                setGrid(rows);
              }}
            >
              Random
            </button>

            <button
              onClick={() => {
                playingRef.current = true;
                console.log();
                setSpeed(100);
                runSimulation();
              }}
            >
              Fast
            </button>

            <button
              onClick={() => {
                playingRef.current = true;
                runSimulation();
              }}
            >
              Step +
            </button>

            <button
              onClick={() => {
                setGrid(generateEmptyGrid(numRows, numCols));
                setGeneration(0);
              }}
            >
              Clear
            </button>

            <select style={{padding:'3px'}}
              onChange={(event) => {
                handleSelect(event.target.value);
              }}
            >
              <option value="1">30x30</option>
              <option value="2">25x25</option>
              <option value="3">40x30</option>
              <option value="4">50x40</option>
            </select>

          </div>
        </section>
        <Rules />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
