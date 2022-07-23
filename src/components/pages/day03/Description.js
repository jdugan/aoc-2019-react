import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 3: Crossed Wires ---
      </h3>
      <p>
        The gravity assist was successful, and you're well on your way to the
        Venus refuelling station. During the rush back on Earth, the fuel
        management system wasn't completely installed, so that's next on the
        priority list.
      </p>
      <p>
        Opening the front panel reveals a jumble of wires. Specifically, <strong>two
        wires</strong> are connected to a central port and extend outward on a grid.
        You trace the path each wire takes as it leaves the central port, one wire
        per line of text (your puzzle input).
      </p>
      <p>
        The wires twist and turn, but the two wires occasionally cross paths.
        To fix the circuit, you need to <strong>find the intersection point
        closest to the central port</strong>. Because the wires are on a grid,
        use the <strong className="green">Manhattan distance</strong> for this
        measurement. While the wires do technically cross right at the central
        port where they both start, this point does not count, nor does a wire
        count as crossing with itself.
      </p>
      <p>
        For example, if the first wire's path is R8,U5,L5,D3, then starting
        from the central port (o), it goes right 8, up 5, left 5, and finally
        down 3:
      </p>
      <pre>
        <code>
          ...........<br/>
          ...........<br/>
          ...........<br/>
          ....+----+.<br/>
          ....|....|.<br/>
          ....|....|.<br/>
          ....|....|.<br/>
          .........|.<br/>
          .o-------+.<br/>
          ...........<br/>
        </code>
      </pre>
      <p>
        Then, if the second wire's path is U7,R6,D4,L4, it goes up 7, right 6,
        down 4, and left 4:
      </p>
      <pre>
        <code>
          ...........<br/>
          .+-----+...<br/>
          .|.....|...<br/>
          .|..+--X-+.<br/>
          .|..|..|.|.<br/>
          .|.-X--+.|.<br/>
          .|..|....|.<br/>
          .|.......|.<br/>
          .o-------+.<br/>
          ...........<br/>
        </code>
      </pre>
      <p>
        These wires cross at two locations (marked X), but the lower-left one is
        closer to the central port: its distance is 3 + 3 = 6.
      </p>
      <p>
        Here are a few more examples:
      </p>
      <ul>
        <li>
          R75,D30,R83,U83,L12,D49,R71,U7,L72<br/>
          U62,R66,U55,R34,D71,R55,D58,R83 = distance 159
        </li>
        <li>
          R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51<br/>
          U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = distance 135
        </li>
      </ul>
      <p>
        <strong>What is the Manhattan distance</strong> from the central port
        to the closest intersection?
      </p>
      <p>
        Your puzzle answer was <strong className="green">651</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        It turns out that this circuit is very timing-sensitive; you actually
        need to <strong>minimize the signal delay</strong>.
      </p>
      <p>
        To do this, calculate the <strong>number of steps</strong> each wire
        takes to reach each intersection; choose the intersection where
        the <strong>sum of both wires' steps</strong> is lowest. If a wire
        visits a position on the grid multiple times, use the steps value
        from the <strong>first</strong> time it visits that position when
        calculating the total value of a specific intersection.
      </p>
      <p>
        The number of steps a wire takes is the total number of grid squares
        the wire has entered to get to that location, including the intersection
        being considered. Again consider the example from above:
      </p>
      <pre>
        <code>
          ...........<br/>
          .+-----+...<br/>
          .|.....|...<br/>
          .|..+--X-+.<br/>
          .|..|..|.|.<br/>
          .|.-X--+.|.<br/>
          .|..|....|.<br/>
          .|.......|.<br/>
          .o-------+.<br/>
          ...........<br/>
        </code>
      </pre>
      <p>
        In the above example, the intersection closest to the central port is reached
        after 8+5+5+2 = <strong>20</strong> steps by the first wire and 7+6+4+3
        = <strong>20</strong> steps by the second wire for a total of 20+20
        = <strong>40</strong> steps.
      </p>
      <p>
        However, the top-right intersection is better: the first wire takes only
        8+5+2 = <strong>15</strong> and the second wire takes only 7+6+2
        = <strong>15</strong>, a total of 15+15 = <strong>30</strong> steps.
      </p>
      <p>
        Here are the best steps for the extra examples from above:
      </p>
      <ul>
        <li>
          R75,D30,R83,U83,L12,D49,R71,U7,L72<br/>
          U62,R66,U55,R34,D71,R55,D58,R83 = 610 steps
        </li>
        <li>
          R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51<br/>
          U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = 410 steps
        </li>
      </ul>
      <p>
        <strong>What is the fewest combined steps the wires must take
        to reach an intersection?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">7534</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
