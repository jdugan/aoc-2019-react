import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 4: Secure Container ---
      </h3>
      <p>
        You arrive at the Venus fuel depot only to discover it's
        protected by a password. The Elves had written the password
        on a sticky note, but someone threw it out.
      </p>
      <p>
        However, they do remember a few key facts about the password:
      </p>
      <ul>
        <li>
          It is a six-digit number.
        </li>
        <li>
          The value is within the range given in your puzzle input.
        </li>
        <li>
          Two adjacent digits are the same (like 22 in 122345).
        </li>
        <li>
          Going from left to right, the digits <strong>never decrease</strong>;
          they only ever increase or stay the same (like 111123 or 135679).
        </li>
      </ul>
      <p>
        Other than the range rule, the following are true:
      </p>
      <ul>
        <li>
          111111 meets these criteria (double 11, never decreases).
        </li>
        <li>
          223450 does not meet these criteria (decreasing pair of digits 50).
        </li>
        <li>
          123789 does not meet these criteria (no double).
        </li>
      </ul>
      <p>
        <strong>How many different passwords</strong> within the range given
        in your puzzle input meet these criteria?
      </p>
      <p>
        Your puzzle answer was <strong className="green">1665</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        An Elf just remembered one more important detail: the two adjacent matching
        digits <strong>are not part of a larger group of matching digits</strong>.
      </p>
      <p>
        Given this additional criterion, but still ignoring the range rule, the
        following are now true:
      </p>
      <ul>
        <li>
          112233 meets these criteria because the digits never decrease and
          all repeated digits are exactly two digits long.
        </li>
        <li>
          123444 no longer meets the criteria (the repeated 44 is part of a
          larger group of 444).
        </li>
        <li>
          111122 meets the criteria (even though 1 is repeated more than twice,
          it still contains a double 22).
        </li>
      </ul>
      <p>
        <strong>How many different passwords</strong> within the range given
        in your puzzle input meet all of the criteria?
      </p>
      <p>
        Your puzzle answer was <strong className="green">1131</strong>.
      </p>
    </section>
  )
}

export default Description;
