import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 17: Set and Forget ---
      </h3>
      <p>
        An early warning system detects an incoming <strong className="green">solar
        flare</strong> and automatically activates the ship's electromagnetic shield.
        Unfortunately, this has cut off the Wi-Fi for many small robots that,
        unaware of the impending danger, are now trapped on exterior scaffolding
        on the unsafe side of the shield. To rescue them, you'll have to act
        quickly!
      </p>
      <p>
        The only tools at your disposal are some wired cameras and a small vacuum
        robot currently asleep at its charging station. The video quality is poor,
        but the vacuum robot has a needlessly bright LED that makes it easy to spot
        no matter where it is.
      </p>
      <p>
        An <strong className="green">Intcode</strong> program, the <strong>Aft
        Scaffolding Control and Information Interface</strong> (ASCII, your puzzle
        input), provides access to the cameras and the vacuum robot. Currently,
        because the vacuum robot is asleep, you can only access the cameras.
      </p>
      <p>
        Running the ASCII program on your Intcode computer will provide the current
        view of the scaffolds. This is output, purely coincidentally, as <strong className="green">ASCII
        code</strong>: 35 means #, 46 means ., 10 starts a <strong className="green">new line</strong> of
        output below the current one, and so on. (Within a line, characters are drawn
        left-to-right.)
      </p>
      <p>
        In the camera output, # represents a scaffold and . represents open space.
        The vacuum robot is visible as ^, v, &lt;, or &gt; depending on whether it is
        facing up, down, left, or right respectively. When drawn like this, the
        vacuum robot is <strong>always on a scaffold</strong>; if the vacuum robot
        ever walks off of a scaffold and begins <strong>tumbling through space
        uncontrollably</strong>, it will instead be visible as X.
      </p>
      <p>
        In general, the scaffold forms a path, but it sometimes loops back onto
        itself. For example, suppose you can see the following view from the
        cameras:
      </p>
      <pre>
        <code>
          ..#..........<br/>
          ..#..........<br/>
          #######...###<br/>
          #.#...#...#.#<br/>
          #############<br/>
          ..#...#...#..<br/>
          ..#####...^..<br/>
        </code>
      </pre>
      <p>
        Here, the vacuum robot, ^ is facing up and sitting at one end of the
        scaffold near the bottom-right of the image. The scaffold continues
        up, loops across itself several times, and ends at the top-left of
        the image.
      </p>
      <p>
        The first step is to calibrate the cameras by getting the alignment
        parameters of some well-defined points. Locate all scaffold
        intersections; for each, its alignment parameter is the distance
        between its left edge and the left edge of the view multiplied by
        the distance between its top edge and the top edge of the view.
        Here, the intersections from the above image are marked O:
      </p>
      <pre>
        <code>
          ..#..........<br/>
          ..#..........<br/>
          ##O####...###<br/>
          #.#...#...#.#<br/>
          ##O###O###O##<br/>
          ..#...#...#..<br/>
          ..#####...^..<br/>
        </code>
      </pre>
      <p>
        For these intersections:
      </p>
      <ul>
        <li>The top-left intersection is 2 units from the left of the image
          and 2 units from the top of the image, so its alignment parameter is
          2 * 2 = <strong>4</strong>.
        </li>
        <li>
          The bottom-left intersection is 2 units from the left and 4 units from the
          top, so its alignment parameter is 2 * 4 = <strong>8</strong>.
        </li>
        <li>
          The bottom-middle intersection is 6 from the left and 4 from the top, so
          its alignment parameter is <strong>24</strong>.
        </li>
        <li>
          The bottom-right intersection's alignment parameter is <strong>40</strong>.
        </li>
      </ul>
      <p>
        To calibrate the cameras, you need the <strong>sum of the alignment
        parameters</strong>. In the above example, this is <strong>76</strong>.
      </p>
      <p>
        Run your ASCII program. <strong>What is the sum of the alignment parameters
        for the scaffold intersections?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">7720</strong>.
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
