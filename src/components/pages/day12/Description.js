import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 12:  ---
      </h3>
      <p>
        <strong>What is the total energy in the system</strong> after
        simulating the moons given in your scan for 1000 steps?
      </p>
      <p>
        Your puzzle answer was <strong className="green">8287</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        All this drifting around in space makes you wonder about the
        nature of the universe. Does history really repeat itself? You're
        curious whether the moons will ever return to a previous state.
      </p>
      <p>
        Determine the <strong>number of steps</strong> that must occur before
        all of the moons' <strong>positions and velocities</strong> exactly
        match a previous point in time.
      </p>
      <p>
        For example, the first example above takes 2772 steps before they
        exactly match a previous point in time; it eventually returns to
        the initial state:
      </p>
      <pre>
        <code>
          After 0 steps:<br/>
          pos=&lt;x= -1, y=  0, z=  2&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  2, y=-10, z= -7&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  4, y= -8, z=  8&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  3, y=  5, z= -1&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          <br/>
          After 2770 steps:<br/>
          pos=&lt;x=  2, y= -1, z=  1&gt;, vel=&lt;x= -3, y=  2, z=  2&gt;<br/>
          pos=&lt;x=  3, y= -7, z= -4&gt;, vel=&lt;x=  2, y= -5, z= -6&gt;<br/>
          pos=&lt;x=  1, y= -7, z=  5&gt;, vel=&lt;x=  0, y= -3, z=  6&gt;<br/>
          pos=&lt;x=  2, y=  2, z=  0&gt;, vel=&lt;x=  1, y=  6, z= -2&gt;<br/>
          <br/>
          After 2771 steps:<br/>
          pos=&lt;x= -1, y=  0, z=  2&gt;, vel=&lt;x= -3, y=  1, z=  1&gt;<br/>
          pos=&lt;x=  2, y=-10, z= -7&gt;, vel=&lt;x= -1, y= -3, z= -3&gt;<br/>
          pos=&lt;x=  4, y= -8, z=  8&gt;, vel=&lt;x=  3, y= -1, z=  3&gt;<br/>
          pos=&lt;x=  3, y=  5, z= -1&gt;, vel=&lt;x=  1, y=  3, z= -1&gt;<br/>
          <br/>
          After 2772 steps:<br/>
          pos=&lt;x= -1, y=  0, z=  2&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  2, y=-10, z= -7&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  4, y= -8, z=  8&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  3, y=  5, z= -1&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
        </code>
      </pre>
      <p>
        Of course, the universe might last for a <strong>very long
        time</strong> before repeating. Here's a copy of the second
        example from above:
      </p>
      <pre>
        <code>
          &lt;x=-8, y=-10, z=0&gt;<br/>
          &lt;x=5, y=5, z=10&gt;<br/>
          &lt;x=2, y=-7, z=3&gt;<br/>
          &lt;x=9, y=-8, z=-3&gt;<br/>
        </code>
      </pre>
      <p>
        This set of initial positions takes 4686774924 steps before it
        repeats a previous state! Clearly, you might need to <strong>find
        a more efficient way to simulate the universe.</strong>
      </p>
      <p>
        <strong>How many steps does it take</strong> to reach the first
        state that exactly matches a previous state?
      </p>

      <p>
        Your puzzle answer was <strong className="green">????</strong>.
      </p>
    </section>
  )
}

export default Description;
