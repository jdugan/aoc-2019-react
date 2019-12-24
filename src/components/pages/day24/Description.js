import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 24: Planet of Discord ---
      </h3>
      <p>
        You land on <strong className="green">Eris</strong>, your last
        stop before reaching Santa. As soon as you do, your sensors start
        picking up strange life forms moving around: Eris is infested
        with <strong className="green">bugs</strong>! With an over 24-hour
        roundtrip for messages between you and Earth, you'll have to deal
        with this problem on your own.
      </p>
      <p>
        Eris isn't a very large place; a scan of the entire area fits into
        a 5x5 grid (your puzzle input). The scan shows <strong>bugs</strong> (#)
        and <strong>empty spaces</strong> (.).
      </p>
      <p>
        Each <strong>minute</strong>, The bugs live and die based on the number
        of bugs in the <strong>four adjacent tiles</strong>:
      </p>
      <ul>
        <li>
          A bug <strong>dies</strong> (becoming an empty space) unless there
          is <strong>exactly one</strong> bug adjacent to it.
        </li>
        <li>
          An empty space <strong>becomes infested</strong> with a bug
          if <strong>exactly one or two</strong> bugs are adjacent to
          it.
        </li>
      </ul>
      <p>
        Otherwise, a bug or empty space remains the same. (Tiles on
        the edges of the grid have fewer than four adjacent tiles; the
        missing tiles count as empty space.) This process happens in every
        location <strong>simultaneously</strong>; that is, within the same
        minute, the number of adjacent bugs is counted for every tile
        first, and then the tiles are updated.
      </p>
      <p>
        Here are the first few minutes of an example scenario:
      </p>
      <pre>
        <code>
          Initial state:<br/>
          ....#<br/>
          #..#.<br/>
          #..##<br/>
          ..#..<br/>
          #....<br/>
          <br/>
          After 1 minute:<br/>
          #..#.<br/>
          ####.<br/>
          ###.#<br/>
          ##.##<br/>
          .##..<br/>
          <br/>
          After 2 minutes:<br/>
          #####<br/>
          ....#<br/>
          ....#<br/>
          ...#.<br/>
          #.###<br/>
          <br/>
          After 3 minutes:<br/>
          #....<br/>
          ####.<br/>
          ...##<br/>
          #.##.<br/>
          .##.#<br/>
          <br/>
          After 4 minutes:<br/>
          ####.<br/>
          ....#<br/>
          ##..#<br/>
          .....<br/>
          ##...<br/>
        </code>
      </pre>
      <p>
        To understand the nature of the bugs, watch for the first time a layout
        of bugs and empty spaces matches any previous layout. In the example
        above, the first layout to appear twice is:
      </p>
      <pre>
        <code>
          .....<br/>
          .....<br/>
          .....<br/>
          #....<br/>
          .#...<br/>
        </code>
      </pre>
      <p>
        To calculate the <strong>biodiversity rating</strong> for this layout,
        consider each tile left-to-right in the top row, then left-to-right
        in the second row, and so on. Each of these tiles is worth biodiversity
        points equal to <strong>increasing powers of two</strong>: 1, 2, 4, 8,
        16, 32, and so on. Add up the biodiversity points for tiles with bugs;
        in this example, the 16th tile (32768 points) and 22nd tile (2097152 points)
        have bugs, a total biodiversity rating of 2129920.
      </p>
      <p>
        <strong>What is the biodiversity rating for the first layout that
        appears twice?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">3186366</strong>.
      </p>
      <br />
      {/* <h3>
        --- Part Two ---
      </h3>
      <p>
        Description starts here.
      </p>
      <p>
        Your puzzle answer was <strong className="green">????</strong>.
      </p> */}
    </section>
  )
}

export default Description;
