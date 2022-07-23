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
        Your puzzle answer was <strong className="green">5964</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        You arrive at the vault only to discover that there is not one vault, but
        four—each with its own entrance.
      </p>
      <p>
        On your map, find the area in the middle that looks like this:
      </p>
      <pre>
        <code>
          ...<br/>
          .@.<br/>
          ...<br/>
        </code>
      </pre>
      <p>
        Update your map to instead use the correct data:
      </p>
      <pre>
        <code>
          @#@<br/>
          ###<br/>
          @#@<br/>
        </code>
      </pre>
      <p>
        This change will split your map into four separate sections, each
        with its own entrance:
      </p>
      <pre>
        <code>
          #######       #######<br/>
          #a.#Cd#       #a.#Cd#<br/>
          ##...##       ##@#@##<br/>
          ##.@.##  -->  #######<br/>
          ##...##       ##@#@##<br/>
          #cB#Ab#       #cB#Ab#<br/>
          #######       #######<br/>
        </code>
      </pre>
      <p>
        Because some of the keys are for doors in other vaults, it would take
        much too long to collect all of the keys by yourself. Instead, you deploy
        four remote-controlled robots. Each starts at one of the entrances (@).
      </p>
      <p>
        Your goal is still to collect all of the keys in the fewest steps, but now,
        each robot has its own position and can move independently. You can only
        remotely control a single robot at a time. Collecting a key instantly
        unlocks any corresponding doors, regardless of the vault in which the key
        or door is found.
      </p>
      <p>
        For example, in the map above, the top-left robot first collects key a,
        unlocking door A in the bottom-right vault:
      </p>
      <pre>
        <code>
          #######<br/>
          #@.#Cd#<br/>
          ##.#@##<br/>
          #######<br/>
          ##@#@##<br/>
          #cB#.b#<br/>
          #######<br/>
        </code>
      </pre>
      <p>
        Then, the bottom-right robot collects key b, unlocking door B in the
        bottom-left vault:
      </p>
      <pre>
        <code>
          #######<br/>
          #@.#Cd#<br/>
          ##.#@##<br/>
          #######<br/>
          ##@#.##<br/>
          #c.#.@#<br/>
          #######<br/>
        </code>
      </pre>
      <p>
        Then, the bottom-left robot collects key c:
      </p>
      <pre>
        <code>
          #######<br/>
          #@.#.d#<br/>
          ##.#@##<br/>
          #######<br/>
          ##.#.##<br/>
          #@.#.@#<br/>
          #######<br/>
        </code>
      </pre>
      <p>
        Finally, the top-right robot collects key d:
      </p>
      <pre>
        <code>
          #######<br/>
          #@.#.@#<br/>
          ##.#.##<br/>
          #######<br/>
          ##.#.##<br/>
          #@.#.@#<br/>
          #######<br/>
        </code>
      </pre>
      <p>
        In this example, it only took <strong>8</strong> steps to collect all of the keys.
      </p>
      <p>
        Sometimes, multiple robots might have keys available, or a robot might
        have to wait for multiple keys to be collected:
      </p>
      <pre>
        <code>
          ###############<br/>
          #d.ABC.#.....a#<br/>
          ######@#@######<br/>
          ###############<br/>
          ######@#@######<br/>
          #b.....#.....c#<br/>
          ###############<br/>
        </code>
      </pre>
      <p>
        First, the top-right, bottom-left, and bottom-right robots take turns
        collecting keys a, b, and c, a total of 6 + 6 + 6 = 18 steps. Then, the top-left
        robot can access key d, spending another 6 steps; collecting all of the keys
        here takes a minimum of <strong>24</strong> steps.
      </p>
      <p>
        Here's a more complex example:
      </p>
      <pre>
        <code>
          #############<br/>
          #DcBa.#.GhKl#<br/>
          #.###@#@#I###<br/>
          #e#d#####j#k#<br/>
          ###C#@#@###J#<br/>
          #fEbA.#.FgHi#<br/>
          #############<br/>
        </code>
      </pre>
      <ul>
        <li>Top-left robot collects key a.</li>
        <li>Bottom-left robot collects key b.</li>
        <li>Top-left robot collects key c.</li>
        <li>Bottom-left robot collects key d.</li>
        <li>Top-left robot collects key e.</li>
        <li>Bottom-left robot collects key f.</li>
        <li>Bottom-right robot collects key g.</li>
        <li>Top-right robot collects key h.</li>
        <li>Bottom-right robot collects key i.</li>
        <li>Top-right robot collects key j.</li>
        <li>Bottom-right robot collects key k.</li>
        <li>Top-right robot collects key l.</li>
      </ul>
      <p>
        In the above example, the fewest steps to collect all of the keys is <strong>32</strong>.
      </p>
      <p>
        Here's an example with more choices:
      </p>
      <pre>
        <code>
          #############<br/>
          #g#f.D#..h#l#<br/>
          #F###e#E###.#<br/>
          #dCba@#@BcIJ#<br/>
          #############<br/>
          #nK.L@#@G...#<br/>
          #M###N#H###.#<br/>
          #o#m..#i#jk.#<br/>
          #############<br/>
        </code>
      </pre>
      <p>
        One solution with the fewest steps is:
      </p>
      <ul>
        <li>Top-left robot collects key e.</li>
        <li>Top-right robot collects key h.</li>
        <li>Bottom-right robot collects key i.</li>
        <li>Top-left robot collects key a.</li>
        <li>Top-left robot collects key b.</li>
        <li>Top-right robot collects key c.</li>
        <li>Top-left robot collects key d.</li>
        <li>Top-left robot collects key f.</li>
        <li>Top-left robot collects key g.</li>
        <li>Bottom-right robot collects key k.</li>
        <li>Bottom-right robot collects key j.</li>
        <li>Top-right robot collects key l.</li>
        <li>Bottom-left robot collects key n.</li>
        <li>Bottom-left robot collects key m.</li>
        <li>Bottom-left robot collects key o.</li>
      </ul>
      <p>
        This example requires at least <strong>72</strong> steps to collect all keys.
      </p>
      <p>
        After updating your map and using the remote-controlled robots, <strong>what is
        the fewest steps necessary to collect all of the keys?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">1996</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
