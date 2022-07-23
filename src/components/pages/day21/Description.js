import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 21: Springdroid Adventure ---
      </h3>
      <p>
        You lift off from Pluto and start flying in the direction of Santa.
      </p>
      <p>
        While experimenting further with the tractor beam, you accidentally pull an
        asteroid directly into your ship! It deals significant damage to your hull
        and causes your ship to begin tumbling violently.
      </p>
      <p>
        You can send a droid out to investigate, but the tumbling is causing
        enough <strong className="green">artificial gravity</strong> that one wrong
        step could send the droid through a hole in the hull and flying out
        into space.
      </p>
      <p>
        The clear choice for this mission is a droid that can <strong>jump</strong> over
        the holes in the hull - a <strong>springdroid</strong>.
      </p>
      <p>
        You can use an <strong className="green">Intcode program</strong> (your puzzle
          input) running on an <strong className="green">ASCII-capable</strong> computer
          to <strong className="green">program</strong> the springdroid. However,
          springdroids don't run Intcode; instead, they run a simplified assembly
          language called <strong>springscript</strong>.
      </p>
      <p>
        While a springdroid is certainly capable of navigating the artificial
        gravity and giant holes, it has one downside: it can only remember at
        most <strong>15</strong> springscript instructions.
      </p>
      <p>
        The springdroid will move forward automatically, constantly thinking
        about <strong>whether to jump</strong>. The springscript program defines
        the logic for this decision.
      </p>
      <p>
        Springscript programs only use <strong className="green">Boolean values</strong>, not numbers or strings. Two registers are available: T, the <strong>temporary value</strong> register, and J, the <strong>jump</strong> register. If the jump register is <strong>true</strong> at the end of the springscript program, the springdroid will try to jump. Both of these registers start with the value <strong>false</strong>.
      </p>
      <p>
        Springdroids have a sensor that can detect <strong>whether there is
        ground</strong> at various distances in the direction it is facing;
        these values are provided in <strong>read-only registers</strong>. Your
        springdroid can detect ground at four distances: one tile away (A), two
        tiles away (B), three tiles away (C), and four tiles away (D). If there is
        ground at the given distance, the register will be <strong>true</strong>; if
        there is a hole, the register will be <strong>false</strong>.
      </p>
      <p>
        There are only <strong>three instructions</strong> available in springscript:
      </p>
      <ul>
        <li>
          <code>AND X Y</code> sets Y to <strong>true</strong><br/>
          &nbsp; if both X and Y are <strong>true</strong>; otherwise, it sets Y to <strong>false</strong>.
        </li>
        <li>
          <code>OR X Y</code> sets Y to <strong>true</strong><br/>
          &nbsp; if at least one of X or Y is <strong>true</strong>; otherwise, it sets Y to <strong>false</strong>.
        </li>
        <li>
          <code>NOT X Y</code> sets Y to <strong>true</strong><br/>
          &nbsp; if X is <strong>false</strong>; otherwise, it sets Y to <strong>false</strong>.
        </li>
      </ul>
      <p>
        In all three instructions, the second argument (Y) needs to be
        a <strong>writable register</strong> (either T or J). The first argument
        (X) can be <strong>any register</strong> (including A, B, C, or D).
      </p>
      <p>
        For example, the one-instruction program NOT A J means "if the tile immediately
        in front of me is not ground, jump".
      </p>
      <p>
        Or, here is a program that jumps if a three-tile-wide hole (with ground on the
        other side of the hole) is detected:
      </p>
      <pre>
        <code>
          NOT A J<br/>
          NOT B T<br/>
          AND T J<br/>
          NOT C T<br/>
          AND T J<br/>
          AND D J<br/>
        </code>
      </pre>
      <p>
        The Intcode program expects ASCII inputs and outputs. It will begin by displaying a prompt; then, input the desired instructions one per line. End each line with a newline (ASCII code 10). <strong>When you have finished entering your program</strong>, provide the command WALK followed by a newline to instruct the springdroid to begin surveying the hull.
      </p>
      <p>
        If the springdroid <strong>falls into space</strong>, an ASCII rendering of the last moments of its life will be produced. In these, @ is the springdroid, # is hull, and . is empty space. For example, suppose you program the springdroid like this:
      </p>
      <pre>
        <code>
          NOT D J<br/>
          WALK<br/>
        </code>
      </pre>
      <p>
        This one-instruction program sets J to <strong>true</strong> if and only if
        there is no ground four tiles away. In other words, it attempts to jump into
        any hole it finds:
      </p>
      <pre>
        <code>
          .................<br/>
          .................<br/>
          @................<br/>
          #####.###########<br/>
          <br/>
          .................<br/>
          .................<br/>
          .@...............<br/>
          #####.###########<br/>
          <br/>
          .................<br/>
          ..@..............<br/>
          .................<br/>
          #####.###########<br/>
          <br/>
          ...@.............<br/>
          .................<br/>
          .................<br/>
          #####.###########<br/>
          <br/>
          .................<br/>
          ....@............<br/>
          .................<br/>
          #####.###########<br/>
          <br/>
          .................<br/>
          .................<br/>
          .....@...........<br/>
          #####.###########<br/>
          <br/>
          .................<br/>
          .................<br/>
          .................<br/>
          #####@###########<br/>
        </code>
      </pre>
      <p>
        However, if the springdroid successfully makes it across, it will use
        an output instruction to indicate the <strong>amount of damage</strong> to
        the hull as a single giant integer outside the normal ASCII range.
      </p>
      <p>
        Program the springdroid with logic that allows it to survey the hull
        without falling into space. <strong>What amount of hull damage does
        it report</strong>?
      </p>
      <p>
        Your puzzle answer was <strong className="green">19355790</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        There are many areas the springdroid can't reach. You flip through the manual and
        discover a way to <strong>increase its sensor range</strong>.
      </p>
      <p>
        Instead of ending your springcode program with <code>WALK</code>,
        use <code>RUN</code>. Doing this will enable <strong>extended sensor mode</strong>,
        capable of sensing ground up to <strong>nine tiles away</strong>. This data is
        available in <strong>five new read-only registers</strong>:
      </p>
      <ul>
        <li>Register E indicates whether there is ground <strong>five</strong> tiles away.</li>
        <li>Register F indicates whether there is ground <strong>six</strong> tiles away.</li>
        <li>Register G indicates whether there is ground <strong>seven</strong> tiles away.</li>
        <li>Register H indicates whether there is ground <strong>eight</strong> tiles away.</li>
        <li>Register I indicates whether there is ground <strong>nine</strong> tiles away.</li>
      </ul>
      <p>
        All other functions remain the same.
      </p>
      <p>
        Successfully survey the rest of the hull by ending your program
        with <code>RUN</code>. <strong>What amount of hull damage does
        the springdroid now report</strong>?
      </p>
      <p>
        Your puzzle answer was <strong className="green">1140920822</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
