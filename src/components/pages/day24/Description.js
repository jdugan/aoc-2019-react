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
      <h3>
        --- Part Two ---
      </h3>
      <p>
        After careful analysis, one thing is certain: <strong>you have no idea
        where all these bugs are coming from.</strong>
      </p>
      <p>
        Then, you remember: Eris is an old <strong className="green">Plutonian</strong> settlement!
        Clearly, the bugs are coming from recursively-folded space.
      </p>
      <p>
        This 5x5 grid is <strong>only one</strong> level in an <strong>infinite</strong> number
        of recursion levels. The tile in the middle of the grid is actually another 5x5 grid,
        the grid in your scan is contained as the middle tile of a larger 5x5 grid, and so on.
        Two levels of grids look like this:
      </p>
      <pre>
        <code>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;    |     |         |     |     <br/>
          -----+-----+---------+-----+-----<br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;    |     |         |     |     <br/>
          -----+-----+---------+-----+-----<br/>
          &nbsp;    |     | | | | | |     |     <br/>
          &nbsp;    |     |-+-+-+-+-|     |     <br/>
          &nbsp;    |     | | | | | |     |     <br/>
          &nbsp;    |     |-+-+-+-+-|     |     <br/>
          &nbsp;    |     | | |?| | |     |     <br/>
          &nbsp;    |     |-+-+-+-+-|     |     <br/>
          &nbsp;    |     | | | | | |     |     <br/>
          &nbsp;    |     |-+-+-+-+-|     |     <br/>
          &nbsp;    |     | | | | | |     |     <br/>
          -----+-----+---------+-----+-----<br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;    |     |         |     |     <br/>
          -----+-----+---------+-----+-----<br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;    |     |         |     |     <br/>
        </code>
      </pre>
      <p>
        (To save space, some of the tiles are not drawn to scale.) Remember, this is only a
        small part of the infinitely recursive grid; there is a 5x5 grid that contains this
        diagram, and a 5x5 grid that contains that one, and so on. Also, the ? in the diagram
        contains another 5x5 grid, which itself contains another 5x5 grid, and so on.
      </p>
      <p>
        The scan you took (your puzzle input) shows where the bugs are <strong>on a single
        level</strong> of this structure. The middle tile of your scan is empty to accommodate
        the recursive grids within it. Initially, no other levels contain bugs.
      </p>
      <p>
        Tiles still count as <strong>adjacent</strong> if they are directly <strong>up</strong>,
        <strong>down</strong>, <strong>left</strong>, or <strong>right</strong> of a given tile.
        Some tiles have adjacent tiles at a recursion level above or below its own level. For
        example:
      </p>
      <pre>
        <code>
          &nbsp;    |     |         |     |     <br/>
          &nbsp; 1  |  2  |    3    |  4  |  5  <br/>
          &nbsp;    |     |         |     |     <br/>
          -----+-----+---------+-----+-----<br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp; 6  |  7  |    8    |  9  |  10 <br/>
          &nbsp;    |     |         |     |     <br/>
          -----+-----+---------+-----+-----<br/>
          &nbsp;    |     |A|B|C|D|E|     |     <br/>
          &nbsp;    |     |-+-+-+-+-|     |     <br/>
          &nbsp;    |     |F|G|H|I|J|     |     <br/>
          &nbsp;    |     |-+-+-+-+-|     |     <br/>
          &nbsp;11  | 12  |K|L|?|N|O|  14 |  15 <br/>
          &nbsp;    |     |-+-+-+-+-|     |     <br/>
          &nbsp;    |     |P|Q|R|S|T|     |     <br/>
          &nbsp;    |     |-+-+-+-+-|     |     <br/>
          &nbsp;    |     |U|V|W|X|Y|     |     <br/>
          -----+-----+---------+-----+-----<br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;16  | 17  |    18   |  19 |  20 <br/>
          &nbsp;    |     |         |     |     <br/>
          -----+-----+---------+-----+-----<br/>
          &nbsp;    |     |         |     |     <br/>
          &nbsp;21  | 22  |    23   |  24 |  25 <br/>
          &nbsp;    |     |         |     |     <br/>
        </code>
      </pre>
      <ul>
        <li>Tile 19 has four adjacent tiles: 14, 18, 20, and 24.</li>
        <li>Tile G has four adjacent tiles: B, F, H, and L.</li>
        <li>Tile D has four adjacent tiles: 8, C, E, and I.</li>
        <li>Tile E has four adjacent tiles: 8, D, 14, and J.</li>
        <li>Tile 14 has <strong>eight</strong> adjacent tiles: 9, E, J, O, T, Y, 15, and 19.</li>
        <li>Tile N has <strong>eight</strong> adjacent tiles: I, O, S, and five tiles within the sub-grid marked ?.</li>
      </ul>
      <p>
        The rules about bugs living and dying are the same as before.
      </p>
      <p>
        For example, consider the same initial state as above:
      </p>
      <pre>
        <code>
          ....#<br/>
          #..#.<br/>
          #.?##<br/>
          ..#..<br/>
          #....<br/>
        </code>
      </pre>
      <p>
        The center tile is drawn as ? to indicate the next recursive grid. Call
        this level 0; the grid within this one is level 1, and the grid that contains
        this one is level -1. Then, after <strong>ten</strong> minutes, the grid at
        each level would look like this:
      </p>
      <pre>
        <code>
          Depth -5:<br/>
          ..#..<br/>
          .#.#.<br/>
          ..?.#<br/>
          .#.#.<br/>
          ..#..<br/>
          <br/>
          Depth -4:<br/>
          ...#.<br/>
          ...##<br/>
          ..?..<br/>
          ...##<br/>
          ...#.<br/>
          <br/>
          Depth -3:<br/>
          #.#..<br/>
          .#...<br/>
          ..?..<br/>
          .#...<br/>
          #.#..<br/>
          <br/>
          Depth -2:<br/>
          .#.##<br/>
          ....#<br/>
          ..?.#<br/>
          ...##<br/>
          .###.<br/>
          <br/>
          Depth -1:<br/>
          #..##<br/>
          ...##<br/>
          ..?..<br/>
          ...#.<br/>
          .####<br/>
          <br/>
          Depth 0:<br/>
          .#...<br/>
          .#.##<br/>
          .#?..<br/>
          .....<br/>
          .....<br/>
          <br/>
          Depth 1:<br/>
          .##..<br/>
          #..##<br/>
          ..?.#<br/>
          ##.##<br/>
          #####<br/>
          <br/>
          Depth 2:<br/>
          ###..<br/>
          ##.#.<br/>
          #.?..<br/>
          .#.##<br/>
          #.#..<br/>
          <br/>
          Depth 3:<br/>
          ..###<br/>
          .....<br/>
          #.?..<br/>
          #....<br/>
          #...#<br/>
          <br/>
          Depth 4:<br/>
          .###.<br/>
          #..#.<br/>
          #.?..<br/>
          ##.#.<br/>
          .....<br/>
          <br/>
          Depth 5:<br/>
          ####.<br/>
          #..#.<br/>
          #.?#.<br/>
          ####.<br/>
          .....<br/>
        </code>
      </pre>
      <p>
        In this example, after 10 minutes, a total of <strong>99</strong> bugs are present.
      </p>
      <p>
        Starting with your scan, <strong>how many bugs are present after 200 minutes</strong>?
      </p>
      <p>
        Your puzzle answer was <strong className="green">????</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
