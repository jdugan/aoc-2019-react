import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 18: Many-Worlds Interpretation ---
      </h3>
      <p>
        As you approach Neptune, a planetary security system detects you and
        activates a giant <strong className="green">tractor beam</strong> on&nbsp;
        <strong className="green">Triton</strong>! You have no choice
        but to land.
      </p>
      <p>
        A scan of the local area reveals only one interesting feature: a massive
        underground vault. You generate a map of the tunnels (your puzzle input).
        The tunnels are too narrow to move diagonally.
      </p>
      <p>
        Only one <strong>entrance</strong> (marked @) is present among the <strong>open
        passages</strong> (marked .) and <strong>stone walls</strong> (#), but you also
        detect an assortment of <strong>keys</strong> (shown as lowercase letters) and
        doors (shown as uppercase letters). Keys of a given letter open the door of the
        same letter: a opens A, b opens B, and so on. You aren't sure which key you need
        to disable the tractor beam, so you'll need to <strong>collect all of them</strong>.
      </p>
      <p>
        For example, suppose you have the following map:
      </p>
      <pre>
        <code>
          #########<br/>
          #b.A.@.a#<br/>
          #########<br/>
        </code>
      </pre>
      <p>
        Starting from the entrance (@), you can only access a large door (A)
        and a key (a). Moving toward the door doesn't help you, but you can
        move 2 steps to collect the key, unlocking A in the process:
      </p>
      <pre>
        <code>
          #########<br/>
          #b.....@#<br/>
          #########<br/>
        </code>
      </pre>
      <p>
        Then, you can move 6 steps to collect the only other key, b:
      </p>
      <pre>
        <code>
          #########<br/>
          #@......#<br/>
          #########<br/>
        </code>
      </pre>
      <p>
        So, collecting every key took a total of 8 steps.
      </p>
      <p>
        Here is a larger example:
      </p>
      <pre>
        <code>
          ########################<br/>
          #f.D.E.e.C.b.A.@.a.B.c.#<br/>
          ######################.#<br/>
          #d.....................#<br/>
          ########################<br/>
        </code>
      </pre>
      <p>
        The only reasonable move is to take key a and unlock door A:
      </p>
      <pre>
        <code>
          ########################<br/>
          #f.D.E.e.C.b.....@.B.c.#<br/>
          ######################.#<br/>
          #d.....................#<br/>
          ########################<br/>
        </code>
      </pre>
      <p>
        Then, do the same with key b:
      </p>
      <pre>
        <code>
          ########################<br/>
          #f.D.E.e.C.@.........c.#<br/>
          ######################.#<br/>
          #d.....................#<br/>
          ########################<br/>
        </code>
      </pre>
      <p>
        ...and the same with key c:
      </p>
      <pre>
        <code>
          ########################<br/>
          #f.D.E.e.............@.#<br/>
          ######################.#<br/>
          #d.....................#<br/>
          ########################<br/>
        </code>
      </pre>
      <p>
        Now, you have a choice between keys d and e. While key
        e is closer, collecting it now would be slower in the long
        run than collecting key d first, so that's the best choice:
      </p>
      <pre>
        <code>
          ########################<br/>
          #f...E.e...............#<br/>
          ######################.#<br/>
          #@.....................#<br/>
          ########################<br/>
        </code>
      </pre>
      <p>
        Finally, collect key e to unlock door E, then collect key f,
        taking a grand total of <strong>86</strong> steps.
      </p>
      <p>
        Here are a few more examples:
      </p>
      <ul>
        <li>
          <pre>
            <code>
              ########################<br/>
              #...............b.C.D.f#<br/>
              #.######################<br/>
              #.....@.a.B.c.d.A.e.F.g#<br/>
              ########################<br/>
            </code>
          </pre>
          <p>
            Shortest path is 132 steps: b, a, c, d, f, e, g
          </p>
        </li>
        <li>
          <pre>
            <code>
              #################<br/>
              #i.G..c...e..H.p#<br/>
              ########.########<br/>
              #j.A..b...f..D.o#<br/>
              ########@########<br/>
              #k.E..a...g..B.n#<br/>
              ########.########<br/>
              #l.F..d...h..C.m#<br/>
              #################<br/>
            </code>
          </pre>
          <p>
            Shortest paths are 136 steps;<br/>
            one is: a, f, b, j, g, n, h, d, l, o, e, p, c, i, k, m
          </p>
        </li>
        <li>
          <pre>
            <code>
              ########################<br/>
              #@..............ac.GI.b#<br/>
              ###d#e#f################<br/>
              ###A#B#C################<br/>
              ###g#h#i################<br/>
              ########################<br/>
            </code>
          </pre>
          <p>
            Shortest paths are 81 steps; one is: a, c, f, i, d, g, b, e, h
          </p>
        </li>
      </ul>
      <p>
        <strong>How many steps is the shortest path that collects
        all of the keys?</strong>
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
