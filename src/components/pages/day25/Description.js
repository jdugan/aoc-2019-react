import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 25: Cryostasis ---
      </h3>
      <p>
        As you approach Santa's ship, your sensors report two important details:
      </p>
      <p>
        First, that you might be too late: the internal temperature is <code>-40</code> degrees.
      </p>
      <p>
        Second, that one faint life signature is somewhere on the ship.
      </p>
      <p>
        The airlock door is locked with a code; your best option is to send in a small
        droid to investigate the situation. You attach your ship to Santa's, break a small
        hole in the hull, and let the droid run in before you seal it up again. Before
        your ship starts freezing, you detach your ship and set it to automatically stay
        within range of Santa's ship.
      </p>
      <p>
        This droid can follow basic instructions and report on its surroundings; you can communicate
        with it through an <strong className="green">Intcode</strong> program (your puzzle input)
        running on an <strong className="green">ASCII-capable</strong> computer.
      </p>
      <p>
        As the droid moves through its environment, it will describe what it encounters. When
        it says <code>Command?</code>, you can give it a single instruction terminated with a
        newline (ASCII code 10). Possible instructions are:
      </p>
      <ul>
        <li>
          <strong>Movement</strong> via <code>north</code>, <code>south</code>,
          <code>east</code>, or <code>west</code>.
        </li>
        <li>
          To <strong>take</strong> an item the droid sees in the environment, use the
          command <code>take &lt;name of item&gt;</code>. For example, if the droid
          reports seeing a red ball, you can pick it up with <code>take red ball</code>.
        </li>
        <li>
          To <strong>drop</strong> an item the droid is carrying, use the
          command <code>drop &lt;name of item&gt;</code>. For example, if the droid is
          carrying a green ball, you can drop it with <code>drop green ball</code>.
        </li>
        <li>
          To get a <strong>list of all of the items</strong> the droid is currently carrying,
          use the command <code>inv</code> (for "inventory").
        </li>
      </ul>
      <p>
        Extra spaces or other characters aren't allowed—instructions must be provided
        precisely.
      </p>
      <p>
        Santa's ship is a <strong>Reindeer-class starship</strong>; these ships use
        pressure-sensitive floors to determine the identity of droids and crew members.
        The standard configuration for these starships is for all droids to weigh exactly
        the same amount to make them easier to detect. If you need to get past such a
        sensor, you might be able to reach the correct weight by carrying items from
        the environment.
      </p>
      <p>
        Look around the ship and see if you can find the <strong>password for the main airlock</strong>.
      </p>
      <p>
        Your puzzle answer was <strong className="green">????</strong>.
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
