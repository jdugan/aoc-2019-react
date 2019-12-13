import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 13: Care Package ---
      </h3>
      <p>
        As you ponder the solitude of space and the ever-increasing
        three-hour roundtrip for messages between you and Earth, you
        notice that the Space Mail Indicator Light is blinking. To
        help keep you sane, the Elves have sent you a care package.
      </p>
      <p>
        It's a new game for the ship's <strong className="green">arcade
        cabinet!</strong> Unfortunately, the arcade is <strong>all the
        way</strong> on the other end of the ship. Surely, it won't be
        hard to build your own - the care package even comes with
        schematics.
      </p>
      <p>
        The arcade cabinet runs <strong className="green">Intcode</strong> software
        like the game the Elves sent (your puzzle input). It has a primitive screen
        capable of drawing square <strong>tiles</strong> on a grid. The software
        draws tiles to the screen with output instructions: every three output
        instructions specify the x position (distance from the left), y position
        (distance from the top), and tile id. The tile id is interpreted as
        follows:
      </p>
      <ul>
        <li>0 is an <strong>empty</strong> tile. No game object appears in this tile.</li>
        <li>1 is a <strong>wall</strong> tile. Walls are indestructible barriers.</li>
        <li>2 is a <strong>block</strong> tile. Blocks can be broken by the ball.</li>
        <li>3 is a <strong>horizontal paddle</strong> tile. The paddle is indestructible.</li>
        <li>4 is a <strong>ball</strong> tile. The ball moves diagonally and bounces off objects.</li>
      </ul>
      <p>
        For example, a sequence of output values like 1,2,3,6,5,4 would draw
        a <strong>horizontal paddle</strong> tile (1 tile from the left and
        2 tiles from the top) and a <strong>ball</strong> tile (6 tiles from
        the left and 5 tiles from the top).
      </p>
      <p>
        Start the game. <strong>How many block tiles are on the screen
        when the game exits?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">260</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        The game didn't run because you didn't put in any quarters. Unfortunately,
        you did not bring any quarters. Memory address 0 represents the number
        of quarters that have been inserted; set it to 2 to play for free.
      </p>
      <p>
        The arcade cabinet has a <strong className="green">joystick</strong> that
        can move left and right. The software reads the position of the joystick
        with input instructions:
      </p>
      <ul>
        <li>If the joystick is in the <strong>neutral position</strong>, provide 0.</li>
        <li>If the joystick is <strong>tilted to the left</strong>, provide -1.</li>
        <li>If the joystick is <strong>tilted to the right</strong>, provide 1.</li>
      </ul>
      <p>
        The arcade cabinet also has a <strong className="green">segment
        display</strong> capable of showing a single number that represents
        the player's current score. When three output instructions specify X=-1,
        Y=0, the third output instruction is not a tile; the value instead
        specifies the new score to show in the segment display. For example,
        a sequence of output values like -1,0,12345 would show 12345 as the
        player's current score.
      </p>
      <p>
        Beat the game by breaking all the blocks. <strong>What is your score after
        the last block is broken?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">????</strong>.
      </p>
    </section>
  )
}

export default Description;
