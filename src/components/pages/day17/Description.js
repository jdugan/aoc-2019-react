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
      <h3>
        --- Part Two ---
      </h3>
      <p>
        Now for the tricky part: notifying all the other robots about
        the solar flare. The vacuum robot can do this automatically if
        it gets into range of a robot. However, you can't see the other
        robots on the camera, so you need to be thorough instead: you
        need to make the vacuum robot <strong>visit every part of the
        scaffold at least once.</strong>
      </p>
      <p>
        The vacuum robot normally wanders randomly, but there isn't time
        for that today. Instead, you can <strong>override its movement
        logic</strong> with new rules.
      </p>
      <p>
        Force the vacuum robot to wake up by changing the value in your
        ASCII program at address 0 from 1 to 2. When you do this, you
        will be automatically prompted for the new movement rules that
        the vacuum robot should use. The ASCII program will use input
        instructions to receive them, but they need to be provided as
        ASCII code; end each line of logic with a single newline, ASCII
        code 10.
      </p>
      <p>
        First, you will be prompted for the <strong>main movement
        routine</strong>. The main routine may only call the <strong>movement
        functions</strong>: A, B, or C. Supply the movement functions
        to use as ASCII text, separating them with commas (,, ASCII code
        44), and ending the list with a newline (ASCII code 10). For
        example, to call A twice, then alternate between B and C three
        times, provide the string A,A,B,C,B,C,B,C and then a newline.
      </p>
      <p>
        Then, you will be prompted for each <strong>movement function</strong>.
        Movement functions may use L to <strong>turn left</strong>, R
        to <strong>turn right</strong>, or a number to <strong>move
        forward</strong> that many units. Movement functions may not
        call other movement functions. Again, separate the actions with
        commas and end the list with a newline. For example, to move
        forward 10 units, turn left, move forward 8 units, turn right,
        and finally move forward 6 units, provide the string 10,L,8,R,6
        and then a newline.
      </p>
      <p>
        Finally, you will be asked whether you want to see a <strong>continuous
        video feed</strong>; provide either y or n and a newline. Enabling
        the continuous video feed can help you see what's going on, but it
        also requires a significant amount of processing power, and may even
        cause your Intcode computer to overheat.
      </p>
      <p>
        Due to the limited amount of memory in the vacuum robot, the ASCII
        definitions of the main routine and the movement functions may each
        contain <strong>at most 20 characters</strong>, not counting the
        newline.
      </p>
      <p>
        For example, consider the following camera feed:
      </p>
      <pre>
        <code>
          #######...#####<br/>
          #.....#...#...#<br/>
          #.....#...#...#<br/>
          ......#...#...#<br/>
          ......#...###.#<br/>
          ......#.....#.#<br/>
          ^########...#.#<br/>
          ......#.#...#.#<br/>
          ......#########<br/>
          ........#...#..<br/>
          ....#########..<br/>
          ....#...#......<br/>
          ....#...#......<br/>
          ....#...#......<br/>
          ....#####......<br/>
        </code>
      </pre>
      <p>
        In order for the vacuum robot to visit <strong>every part of
        the scaffold at least once</strong>, one path it could take
        is:
      </p>
      <pre>
        <code>
          R,8,R,8,R,4,R,4,R,8,L,6,L,2,R,4,R,4,R,8,R,8,R,8,L,6,L,2
        </code>
      </pre>
      <p>
        Without the memory limit, you could just supply this whole
        string to function A and have the main routine call A once.
        However, you'll need to split it into smaller parts.
      </p>
      <p>
        One approach is:
      </p>
      <ul>
        <li>
          Main routine: A,B,C,B,A,C<br/>
          (ASCII input: 65, 44, 66, 44, 67, 44, 66, 44, 65, 44, 67, 10)
        </li>
        <li>
          Function A:   R,8,R,8<br/>
          (ASCII input: 82, 44, 56, 44, 82, 44, 56, 10)
        </li>
        <li>
          Function B:   R,4,R,4,R,8
          (ASCII input: 82, 44, 52, 44, 82, 44, 52, 44, 82, 44, 56, 10)
        </li>
        <li>
          Function C:   L,6,L,2
          (ASCII input: 76, 44, 54, 44, 76, 44, 50, 10)
        </li>
      </ul>
      <p>
        Visually, this would break the desired path into the
        following parts:
      </p>
      <pre>
        <code>
          A,        B,            C,        B,            A,        C<br/>
          R,8,R,8,  R,4,R,4,R,8,  L,6,L,2,  R,4,R,4,R,8,  R,8,R,8,  L,6,L,2<br/>
          <br/>
          CCCCCCA...BBBBB<br/>
          C.....A...B...B<br/>
          C.....A...B...B<br/>
          ......A...B...B<br/>
          ......A...CCC.B<br/>
          ......A.....C.B<br/>
          ^AAAAAAAA...C.B<br/>
          ......A.A...C.B<br/>
          ......AAAAAA#AB<br/>
          ........A...C..<br/>
          ....BBBB#BBBB..<br/>
          ....B...A......<br/>
          ....B...A......<br/>
          ....B...A......<br/>
          ....BBBBA......<br/>
        </code>
      </pre>
      <p>
        Of course, the scaffolding outside your ship is much more complex.
      </p>
      <p>
        As the vacuum robot finds other robots and notifies them of the
        impending solar flare, it also can't help but leave them squeaky
        clean, collecting any space dust it finds. Once it finishes the
        programmed set of movements, assuming it hasn't drifted off into
        space, the cleaning robot will return to its docking station and
        report the amount of space dust it collected as a large, non-ASCII
        value in a single output instruction.
      </p>
      <p>
        After visiting every part of the scaffold at least once, <strong>how
        much dust does the vacuum robot report it has collected?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">1681189</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
