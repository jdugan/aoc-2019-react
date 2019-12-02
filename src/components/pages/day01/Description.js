import React from 'react';

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 1: The Tyranny of the Rocket Equation ---
      </h3>
      <p>
        Santa has become stranded at the edge of the Solar System
        while delivering presents to other planets! To accurately
        calculate his position in space, safely align his warp drive,
        and return to Earth in time to save Christmas, he needs you to
        bring him measurements from <strong className="gold">fifty stars</strong>.
      </p>
      <p>
        Collect stars by solving puzzles. Two puzzles will be made
        available on each day in the Advent calendar; the second puzzle
        is unlocked when you complete the first. Each puzzle
        grants <strong className="gold">one star</strong>.
        Good luck!
      </p>
      <p>
        The Elves quickly load you into a spacecraft and prepare to launch.
      </p>
      <p>
        At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper.
        They haven't determined the amount of fuel required yet.
      </p>
      <p>
        Fuel required to launch a given <strong>module</strong> is based on
        its <strong>mass</strong>. Specifically, to find the fuel required
        for a module, take its mass, divide by three, round down, and subtract 2.
      </p>
      <p>
        For example:
      </p>
      <ul className="description__ul">
        <li className="description__li">
          For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
        </li>
        <li className="description__li">
          For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
        </li>
        <li className="description__li">
          For a mass of 1969, the fuel required is 654.
        </li>
        <li className="description__li">
          For a mass of 100756, the fuel required is 33583.
        </li>
      </ul>
      <p>
        The Fuel Counter-Upper needs to know the total fuel requirement. To find it,
        individually calculate the fuel needed for the mass of each module
        (your puzzle input), then add together all the fuel values.
      </p>
      <p>
        <strong>What is the sum of the fuel requirements</strong> for all of the
        modules on your spacecraft?
      </p>
      <p>
        Your puzzle answer was <strong className="green">3282386</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        During the second Go / No Go poll, the Elf in charge of the Rocket
        Equation Double-Checker stops the launch sequence. Apparently, you
        forgot to include additional fuel for the fuel you just added.
      </p>
      <p>
        Fuel itself requires fuel just like a module - take its mass, divide by
        three, round down, and subtract 2. However, that fuel <strong>also</strong>
        requires fuel, and <strong>that</strong> fuel requires fuel, and so on.
        Any mass that would require <strong>negative fuel</strong> should instead
        be treated as if it requires <strong>zero fuel</strong>; the remaining
        mass, if any, is instead handled by <strong>wishing really hard</strong>,
        which has no mass and is outside the scope of this calculation.
      </p>
      <p>
        So, for each module mass, calculate its fuel and add it to the total.
        Then, treat the fuel amount you just calculated as the input mass and
        repeat the process, continuing until a fuel requirement is zero or
        negative. For example:
      </p>
      <ul className="description__ul">
        <li className="description__li">
          A module of mass 14 requires 2 fuel. This fuel requires no further
          fuel (2 divided by 3 and rounded down is 0, which would call for a
            negative fuel), so the total fuel required is still just 2.
        </li>
        <li className="description__li">
          At first, a module of mass 1969 requires 654 fuel. Then, this fuel
          requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel,
          which requires 21 fuel, which requires 5 fuel, which requires no further
          fuel. So, the total fuel required for a module of mass 1969 is 654 +
          216 + 70 + 21 + 5 = 966.
        </li>
        <li className="description__li">
          The fuel required by a module of mass 100756 and its fuel is:
          33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
        </li>
      </ul>
      <p>
        <strong>What is the sum of the fuel requirements</strong> for all
        of the modules on your spacecraft when also taking into account
        the mass of the added fuel? (Calculate the fuel requirements for
        each module separately, then add them all up at the end.)
      </p>
      <p>
        Your puzzle answer was <strong className="green">4920708</strong>.
      </p>
    </section>
  )
}

export default Description;
