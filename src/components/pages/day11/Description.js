import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 11: Space Police ---
      </h3>
      <p>
        On the way to Jupiter, you're <strong className="green">pulled
        over</strong> by the <strong>Space Police</strong>.
      </p>
      <p>
        "Attention, unmarked spacecraft! You are in violation of Space Law!
        All spacecraft must have a clearly visible <strong>registration
        identifier</strong>! You have 24 hours to comply or be sent
        to <strong className="green">Space Jail</strong>!"
      </p>
      <p>
        Not wanting to be sent to Space Jail, you radio back to the Elves
        on Earth for help. Although it takes almost three hours for their
        reply signal to reach you, they send instructions for how to power
        up the <strong>emergency hull painting robot</strong> and even provide
        a small <strong className="green">Intcode program</strong> (your
        puzzle input) that will cause it to paint your ship appropriately.
      </p>
      <p>
        There's just one problem: you don't have an emergency hull painting
        robot.
      </p>
      <p>
        You'll need to build a new emergency hull painting robot. The robot
        needs to be able to move around on the grid of square panels on the
        side of your ship, detect the color of its current panel, and paint
        its current panel <strong>black</strong> or <strong>white</strong>. (All
        of the panels are currently <strong>black</strong>.)
      </p>
      <p>
        The Intcode program will serve as the brain of the robot. The program
        uses input instructions to access the robot's camera: provide 0 if the
        robot is over a <strong>black</strong> panel or 1 if the robot is over
        a <strong>white</strong> panel. Then, the program will output two values:
      </p>
      <ul>
        <li>
          First, it will output a value indicating the <strong>color
          to paint the panel</strong> the robot is over: 0 means to
          paint the panel <strong>black</strong>, and 1 means to paint
          the panel <strong>white</strong>.
        </li>
        <li>
          Second, it will output a value indicating the <strong>direction
          the robot should turn</strong>: 0 means it should turn <strong>left
          90 degrees</strong>, and 1 means it should turn <strong>right 90
          degrees</strong>.
        </li>
      </ul>
      <p>
        After the robot turns, it should always move <strong>forward exactly one
        panel</strong>. The robot starts facing <strong>up</strong>.
      </p>
      <p>
        The robot will continue running for a while like this and halt when it
        is finished drawing. Do not restart the Intcode computer inside the
        robot during this process.
      </p>
      <p>
        For example, suppose the robot is about to start running. Drawing black
        panels as ., white panels as #, and the robot pointing the direction it
        is facing (&lt; ^ &gt; v), the initial state and region near the robot
        looks like this:
      </p>
      <pre>
        <code>
          .....<br/>
          .....<br/>
          ..^..<br/>
          .....<br/>
          .....<br/>
        </code>
      </pre>
      <p>
        The panel under the robot (not visible here because a ^ is shown instead)
        is also black, and so any input instructions at this point should be
        provided 0. Suppose the robot eventually outputs 1 (paint white) and
        then 0 (turn left). After taking these actions and moving forward one
        panel, the region now looks like this:
      </p>
      <pre>
        <code>
          .....<br/>
          .....<br/>
          .&lt;#..<br/>
          .....<br/>
          .....<br/>
        </code>
      </pre>
      <p>
        Input instructions should still be provided 0. Next, the robot might
        output 0 (paint black) and then 0 (turn left):
      </p>
      <pre>
        <code>
          .....<br/>
          .....<br/>
          ..#..<br/>
          .v...<br/>
          .....<br/>
        </code>
      </pre>
      <p>
        After more outputs (1,0, 1,0):
      </p>
      <pre>
        <code>
          .....<br/>
          .....<br/>
          ..^..<br/>
          .##..<br/>
          .....<br/>
        </code>
      </pre>
      <p>
        The robot is now back where it started, but because it is now on
        a white panel, input instructions should be provided 1. After
        several more outputs (0,1, 1,0, 1,0), the area looks like this:
      </p>
      <pre>
        <code>
          .....<br/>
          ..&lt;#.<br/>
          ...#.<br/>
          .##..<br/>
          .....<br/>
        </code>
      </pre>
      <p>
        Before you deploy the robot, you should probably have an estimate
        of the area it will cover: specifically, you need to know <strong>the
        number of panels it paints at least once</strong>, regardless of color.
        In the example above, the robot painted <strong>6 panels</strong> at
        least once. (It painted its starting panel twice, but that panel is
        still <strong className="green">only counted once</strong>; it also
        never painted the panel it ended on.)
      </p>
      <p>
        Build a new emergency hull painting robot and run the Intcode program
        on it. <strong>How many panels does it paint at least once?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">2478</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        You're not sure what it's trying to paint, but it's definitely
        not a <strong>registration identifier</strong>. The Space Police
        are getting impatient.
      </p>
      <p>
        Checking your external ship cameras again, you notice a white
        panel marked "emergency hull painting robot starting panel". The
        rest of the panels are <strong>still black</strong>, but it looks
        like the robot was expecting to <strong>start on a white
        panel</strong>, not a black one.
      </p>
      <p>
        Based on the Space Law Space Brochure that the Space Police attached
        to one of your windows, a valid registration identifier is always <strong>eight
        capital letters</strong>. After starting the robot on a single white
        panel instead, <strong>what registration identifier does it paint on
        your hull?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">HCZRUGAZ</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
