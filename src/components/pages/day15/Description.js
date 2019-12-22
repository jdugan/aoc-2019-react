import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 15: Oxygen System ---
      </h3>
      <p>
        Out here in deep space, many things can go wrong. Fortunately,
        many of those things have indicator lights. Unfortunately, one
        of those lights is lit: the oxygen system for part of the ship
        has failed!
      </p>
      <p>
        According to the readouts, the oxygen system must have failed
        days ago after a rupture in oxygen tank two; that section of the
        ship was automatically sealed once oxygen levels went dangerously
        low. A single remotely-operated <strong>repair droid</strong> is
        your only option for fixing the oxygen system.
      </p>
      <p>
        The Elves' care package included an <strong className="green">Intcode</strong> program
        (your puzzle input) that you can use to remotely control the repair
        droid. By running that program, you can direct the repair droid to
        the oxygen system and fix the problem.
      </p>
      <p>
        The remote control program executes the following steps in a loop forever:
      </p>
      <ul>
        <li>Accept a <strong>movement command</strong> via an input instruction.</li>
        <li>Send the movement command to the repair droid.</li>
        <li>Wait for the repair droid to finish the movement operation.</li>
        <li>Report on the <strong>status</strong> of the repair droid via an output instruction.</li>
      </ul>
      <p>
        Only four <strong>movement commands</strong> are understood: north (1), south (2),
        west (3), and east (4). Any other command is invalid. The movements differ in
        direction, but not in distance: in a long enough east-west hallway, a series of
        commands like 4,4,4,4,3,3,3,3 would leave the repair droid back where it started.
      </p>
      <p>
        The repair droid can reply with any of the following <strong>status</strong> codes:
      </p>
      <ul>
        <li>0: The repair droid hit a wall. Its position has not changed.</li>
        <li>1: The repair droid has moved one step in the requested direction.</li>
        <li>
          2: The repair droid has moved one step in the requested direction; its
          new position is the location of the oxygen system.
        </li>
      </ul>
      <p>
        You don't know anything about the area around the repair droid, but you
        can figure it out by watching the status codes.
      </p>
      <p>
        For example, we can draw the area using D for the droid, # for walls, . for
        locations the droid can traverse, and empty space for unexplored locations.
        Then, the initial state looks like this:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp;&nbsp;<br/>
          &nbsp;<br/>
          &nbsp; &nbsp;D<br/>
          &nbsp;<br/>
          &nbsp;<br/>
        </code>
      </pre>
      <p>
        To make the droid go north, send it 1. If it replies with 0, you know that
        location is a wall and that the droid didn't move:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp;&nbsp;<br/>
          &nbsp; &nbsp;#<br/>
          &nbsp; &nbsp;D<br/>
          &nbsp;<br/>
          &nbsp;<br/>
        </code>
      </pre>
      <p>
        To move east, send 4; a reply of 1 means the movement was successful:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp;&nbsp;<br/>
          &nbsp; &nbsp;#<br/>
          &nbsp; &nbsp;.D<br/>
          &nbsp;<br/>
          &nbsp;<br/>
        </code>
      </pre>
      <p>
        Then, perhaps attempts to move north (1), south (2), and east (4) are
        all met with replies of 0:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp;&nbsp;<br/>
          &nbsp; &nbsp;##<br/>
          &nbsp; &nbsp;.D#<br/>
          &nbsp; &nbsp; #<br/>
          &nbsp;<br/>
        </code>
      </pre>
      <p>
        Now, you know the repair droid is in a dead end. Backtrack with 3 (which
        you already know will get a reply of 1 because you already know that
        location is open):
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp;&nbsp;<br/>
          &nbsp; &nbsp;##<br/>
          &nbsp; &nbsp;D.#<br/>
          &nbsp; &nbsp; #<br/>
          &nbsp;<br/>
        </code>
      </pre>
      <p>
        Then, perhaps west (3) gets a reply of 0, south (2) gets a reply
        of 1, south again (2) gets a reply of 0, and then west (3) gets
        a reply of 2:
      </p>
      <pre>
        <code>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
          &nbsp;&nbsp;&nbsp;##<br/>
          &nbsp;&nbsp;#..#<br/>
          &nbsp;&nbsp;D.#<br/>
          &nbsp;&nbsp;&nbsp;#<br/>
        </code>
      </pre>
      <p>
        Now, because of the reply of 2, you know you've found the <strong>oxygen
        system</strong>! In this example, it was only 2 moves away from the repair
        droid's starting position.
      </p>
      <p>
        <strong>What is the fewest number of movement commands</strong> required to
        move the repair droid from its starting position to the location of the
        oxygen system?
      </p>
      <p>
        Your puzzle answer was <strong className="green">282</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        You quickly repair the oxygen system; oxygen gradually fills the area.
      </p>
      <p>
        Oxygen starts in the location containing the repaired oxygen system. It
        takes <strong>one minute</strong> for oxygen to spread to all open locations
        that are adjacent to a location that already contains oxygen. Diagonal
        locations are <strong>not</strong> adjacent.
      </p>
      <p>
        In the example above, suppose you've used the droid to explore the area
        fully and have the following map (where locations that currently contain
        oxygen are marked O):
      </p>
      <pre>
        <code>
          &nbsp;##<br/>
          #..##<br/>
          #.#..#<br/>
          #.O.#<br/>
          &nbsp;###<br/>
        </code>
      </pre>
      <p>
        Initially, the only location which contains oxygen is the location of the
        repaired oxygen system. However, after one minute, the oxygen spreads to
        all open (.) locations that are adjacent to a location containing oxygen:
      </p>
      <pre>
        <code>
          &nbsp;##<br/>
          #..##<br/>
          #.#..#<br/>
          #OOO#<br/>
          &nbsp;###<br/>
        </code>
      </pre>
      <p>
        After a total of two minutes, the map looks like this:
      </p>
      <pre>
        <code>
          &nbsp;##<br/>
          #..##<br/>
          #O#O.#<br/>
          #OOO#<br/>
          &nbsp;###<br/>
        </code>
      </pre>
      <p>
        After a total of three minutes:
      </p>
      <pre>
        <code>
          &nbsp;##<br/>
          #O.##<br/>
          #O#OO#<br/>
          #OOO#<br/>
          &nbsp;###<br/>
        </code>
      </pre>
      <p>
        And finally, the whole region is full of oxygen after a total of
        four minutes:
      </p>
      <pre>
        <code>
          &nbsp;##<br/>
          #OO##<br/>
          #O#OO#<br/>
          #OOO#<br/>
          &nbsp;###<br/>
        </code>
      </pre>
      <p>
        So, in this example, all locations contain oxygen
        after <strong>4</strong> minutes.
      </p>
      <p>
        Use the repair droid to get a complete map of the area. <strong>How
        many minutes will it take to fill with oxygen?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">286</strong>.
      </p>
    </section>
  )
}

export default Description;
