import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 6: Universal Orbit Map ---
      </h3>
      <p>
        You've landed at the Universal Orbit Map facility on Mercury.
        Because navigation in space often involves transferring between
        orbits, the orbit maps here are useful for finding efficient routes
        between, for example, you and Santa. You download a map of the
        local orbits (your puzzle input).
      </p>
      <p>
        Except for the universal Center of Mass (COM), every object
        in space is in orbit around exactly one other object.
        An <strong className="green">orbit</strong> looks roughly
        like this:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |<br/>
          AAA--&gt; o &nbsp; &nbsp; &nbsp; &nbsp;o &lt;--BBB<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /<br/>
        </code>
      </pre>
      <p>
        In this diagram, the object BBB is in orbit around AAA. The
        path that BBB takes around AAA (drawn with lines) is only
        partly shown. In the map data, this orbital relationship is
        written AAA) BBB, which means "BBB is in orbit around AAA".
      </p>
      <p>
        Before you use your map data to plot a course, you need to make sure
        it wasn't corrupted during the download. To verify maps, the Universal
        Orbit Map facility uses orbit count <strong>checksums</strong> &mdash;
        the total number of <strong>direct orbits</strong> (like the one shown
        above) and <strong>indirect orbits</strong>.
      </p>
      <p>
        Whenever A orbits B and B orbits C, then A <strong>indirectly orbits</strong> C.
        This chain can be any number of objects long: if A orbits B, B orbits C, and C
        orbits D, then A indirectly orbits D.
      </p>
      <p>
        For example, suppose you have the following map:
      </p>
      <pre>
        <code>
          COM)B<br/>
          B)C<br/>
          C)D<br/>
          D)E<br/>
          E)F<br/>
          B)G<br/>
          G)H<br/>
          D)I<br/>
          E)J<br/>
          J)K<br/>
          K)L
        </code>
      </pre>
      <p>
        Visually, the above map of orbits looks like this:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; G - H &nbsp; &nbsp; &nbsp; J - K - L<br/>
          &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /<br/>
          COM - B - C - D - E - F<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I<br/>
        </code>
      </pre>
      <p>
        In this visual representation, when two objects are connected by a line, the
        one on the right directly orbits the one on the left.
      </p>
      <p>
        Here, we can count the total number of orbits as follows:
      </p>
      <ul>
        <li>D directly orbits C and indirectly orbits B and COM, a total of 3 orbits.</li>
        <li>L directly orbits K and indirectly orbits J, E, D, C, B, and COM, a total of 7 orbits.</li>
        <li>COM orbits nothing.</li>
      </ul>
      <p>
        The total number of direct and indirect orbits in this example is <strong>42</strong>.
      </p>
      <p>
        <strong>What is the total number of direct and indirect orbits</strong> in
        your map data?
      </p>
      <p>
        Your puzzle answer was <strong className="green">254447</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        Now, you just need to figure out how many <strong>orbital transfers</strong> you
        (YOU) need to take to get to Santa (SAN).
      </p>
      <p>
        You start at the object YOU are orbiting; your destination is the object SAN
        is orbiting. An orbital transfer lets you move from any object to an object
        orbiting or orbited by that object.
      </p>
      <p>
        For example, suppose you have the following map:
      </p>
      <pre>
        <code>
          COM)B<br/>
          B)C<br/>
          C)D<br/>
          D)E<br/>
          E)F<br/>
          B)G<br/>
          G)H<br/>
          D)I<br/>
          E)J<br/>
          J)K<br/>
          K)L<br/>
          K)YOU<br/>
          I)SAN<br/>
        </code>
      </pre>
      <p>
        Visually, the above map of orbits looks like this:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>YOU</strong><br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; G - H &nbsp; &nbsp; &nbsp; J - K - L<br/>
          &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /<br/>
          COM - B - C - D - E - F<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I - <strong>SAN</strong><br/>
        </code>
      </pre>
      <p>
        In this example, YOU are in orbit around K, and SAN is in orbit around I.
        To move from K to I, a minimum of 4 orbital transfers are required:
      </p>
      <ul>
        <li>K to J</li>
        <li>J to E</li>
        <li>E to D</li>
        <li>D to I</li>
      </ul>
      <p>
        Afterward, the map of orbits looks like this:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; G - H &nbsp; &nbsp; &nbsp; J - K - L<br/>
          &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /<br/>
          COM - B - C - D - E - F<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I - <strong>SAN</strong><br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>YOU</strong><br/>
        </code>
      </pre>
      <p>
        <strong>What is the minimum number of orbital transfers
        required</strong> to move from the object YOU are orbiting to
        the object SAN is orbiting? (Between the objects they are
        orbiting - not between YOU and SAN.)
      </p>
      <p>
        Your puzzle answer was <strong className="green">445</strong>.
      </p>
    </section>
  )
}

export default Description;
