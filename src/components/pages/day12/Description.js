import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 12:  ---
      </h3>
      <p>
        The space near Jupiter is not a very safe place; you need to be careful
        of a <strong className="green">big distracting red spot</strong>,
        extreme <strong className="green">radiation</strong>, and
        a <strong className="green">whole lot of moons</strong> swirling
        around. You decide to start by tracking the four largest
        moons: <strong>Io</strong>, <strong>Europa</strong>, <strong>Ganymede</strong>, and <strong>Callisto</strong>.
      </p>
      <p>
        After a brief scan, you calculate the <strong>position of each
        moon</strong> (your puzzle input). You just need to <strong>simulate
        their motion</strong> so you can avoid them.
      </p>
      <p>
        Each moon has a 3-dimensional position (x, y, and z) and a 3-dimensional
        velocity. The position of each moon is given in your scan; the x, y, and
        z velocity of each moon starts at 0.
      </p>
      <p>
        Simulate the motion of the moons in <strong>time steps</strong>.
        Within each time step, first update the velocity of every moon by
        applying <strong>gravity</strong>. Then, once all moons' velocities
        have been updated, update the position of every moon by
        applying <strong>velocity</strong>. Time progresses by one step
        once all of the positions are updated.
      </p>
      <p>
        To apply <strong>gravity</strong>, consider every pair
        of <strong>moons</strong>. On each axis (x, y, and z), the velocity
        of each moon changes by <strong>exactly +1 or -1</strong> to pull
        the moons together. For example, if Ganymede has an x position of 3,
        and Callisto has a x position of 5, then Ganymede's x velocity <strong>changes
        by +1</strong> (because 5 &gt; 3) and Callisto's x velocity <strong>changes
        by -1</strong> (because 3 &lt; 5). However, if the positions on a given axis
        are the same, the velocity on that axis <strong>does not change</strong> for
        that pair of moons.
      </p>
      <p>
        Once all gravity has been applied, apply <strong>velocity</strong>: simply add
        the velocity of each moon to its own position. For example, if Europa has a
        position of x=1, y=2, z=3 and a velocity of x=-2, y=0,z=3, then its new position
        would be x=-1, y=2, z=6. This process does not modify the velocity of any moon.
      </p>
      <p>
        For example, suppose your scan reveals the following positions:
      </p>
      <pre>
        <code>
          &lt;x=-1, y=0, z=2&gt;<br/>
          &lt;x=2, y=-10, z=-7&gt;<br/>
          &lt;x=4, y=-8, z=8&gt;<br/>
          &lt;x=3, y=5, z=-1&gt;<br/>
        </code>
      </pre>
      <p>
        Simulating the motion of these moons would produce the following:
      </p>
      <pre>
        <code>
          After 0 steps:<br/>
          pos=&lt;x=-1, y=  0, z= 2&gt;, vel=&lt;x= 0, y= 0, z= 0&gt;<br/>
          pos=&lt;x= 2, y=-10, z=-7&gt;, vel=&lt;x= 0, y= 0, z= 0&gt;<br/>
          pos=&lt;x= 4, y= -8, z= 8&gt;, vel=&lt;x= 0, y= 0, z= 0&gt;<br/>
          pos=&lt;x= 3, y=  5, z=-1&gt;, vel=&lt;x= 0, y= 0, z= 0&gt;<br/>
          <br/>
          After 1 step:<br/>
          pos=&lt;x= 2, y=-1, z= 1&gt;, vel=&lt;x= 3, y=-1, z=-1&gt;<br/>
          pos=&lt;x= 3, y=-7, z=-4&gt;, vel=&lt;x= 1, y= 3, z= 3&gt;<br/>
          pos=&lt;x= 1, y=-7, z= 5&gt;, vel=&lt;x=-3, y= 1, z=-3&gt;<br/>
          pos=&lt;x= 2, y= 2, z= 0&gt;, vel=&lt;x=-1, y=-3, z= 1&gt;<br/>
          <br/>
          After 2 steps:<br/>
          pos=&lt;x= 5, y=-3, z=-1&gt;, vel=&lt;x= 3, y=-2, z=-2&gt;<br/>
          pos=&lt;x= 1, y=-2, z= 2&gt;, vel=&lt;x=-2, y= 5, z= 6&gt;<br/>
          pos=&lt;x= 1, y=-4, z=-1&gt;, vel=&lt;x= 0, y= 3, z=-6&gt;<br/>
          pos=&lt;x= 1, y=-4, z= 2&gt;, vel=&lt;x=-1, y=-6, z= 2&gt;<br/>
          <br/>
          After 3 steps:<br/>
          pos=&lt;x= 5, y=-6, z=-1&gt;, vel=&lt;x= 0, y=-3, z= 0&gt;<br/>
          pos=&lt;x= 0, y= 0, z= 6&gt;, vel=&lt;x=-1, y= 2, z= 4&gt;<br/>
          pos=&lt;x= 2, y= 1, z=-5&gt;, vel=&lt;x= 1, y= 5, z=-4&gt;<br/>
          pos=&lt;x= 1, y=-8, z= 2&gt;, vel=&lt;x= 0, y=-4, z= 0&gt;<br/>
          <br/>
          After 4 steps:<br/>
          pos=&lt;x= 2, y=-8, z= 0&gt;, vel=&lt;x=-3, y=-2, z= 1&gt;<br/>
          pos=&lt;x= 2, y= 1, z= 7&gt;, vel=&lt;x= 2, y= 1, z= 1&gt;<br/>
          pos=&lt;x= 2, y= 3, z=-6&gt;, vel=&lt;x= 0, y= 2, z=-1&gt;<br/>
          pos=&lt;x= 2, y=-9, z= 1&gt;, vel=&lt;x= 1, y=-1, z=-1&gt;<br/>
          <br/>
          After 5 steps:<br/>
          pos=&lt;x=-1, y=-9, z= 2&gt;, vel=&lt;x=-3, y=-1, z= 2&gt;<br/>
          pos=&lt;x= 4, y= 1, z= 5&gt;, vel=&lt;x= 2, y= 0, z=-2&gt;<br/>
          pos=&lt;x= 2, y= 2, z=-4&gt;, vel=&lt;x= 0, y=-1, z= 2&gt;<br/>
          pos=&lt;x= 3, y=-7, z=-1&gt;, vel=&lt;x= 1, y= 2, z=-2&gt;<br/>
          <br/>
          After 6 steps:<br/>
          pos=&lt;x=-1, y=-7, z= 3&gt;, vel=&lt;x= 0, y= 2, z= 1&gt;<br/>
          pos=&lt;x= 3, y= 0, z= 0&gt;, vel=&lt;x=-1, y=-1, z=-5&gt;<br/>
          pos=&lt;x= 3, y=-2, z= 1&gt;, vel=&lt;x= 1, y=-4, z= 5&gt;<br/>
          pos=&lt;x= 3, y=-4, z=-2&gt;, vel=&lt;x= 0, y= 3, z=-1&gt;<br/>
          <br/>
          After 7 steps:<br/>
          pos=&lt;x= 2, y=-2, z= 1&gt;, vel=&lt;x= 3, y= 5, z=-2&gt;<br/>
          pos=&lt;x= 1, y=-4, z=-4&gt;, vel=&lt;x=-2, y=-4, z=-4&gt;<br/>
          pos=&lt;x= 3, y=-7, z= 5&gt;, vel=&lt;x= 0, y=-5, z= 4&gt;<br/>
          pos=&lt;x= 2, y= 0, z= 0&gt;, vel=&lt;x=-1, y= 4, z= 2&gt;<br/>
          <br/>
          After 8 steps:<br/>
          pos=&lt;x= 5, y= 2, z=-2&gt;, vel=&lt;x= 3, y= 4, z=-3&gt;<br/>
          pos=&lt;x= 2, y=-7, z=-5&gt;, vel=&lt;x= 1, y=-3, z=-1&gt;<br/>
          pos=&lt;x= 0, y=-9, z= 6&gt;, vel=&lt;x=-3, y=-2, z= 1&gt;<br/>
          pos=&lt;x= 1, y= 1, z= 3&gt;, vel=&lt;x=-1, y= 1, z= 3&gt;<br/>
          <br/>
          After 9 steps:<br/>
          pos=&lt;x= 5, y= 3, z=-4&gt;, vel=&lt;x= 0, y= 1, z=-2&gt;<br/>
          pos=&lt;x= 2, y=-9, z=-3&gt;, vel=&lt;x= 0, y=-2, z= 2&gt;<br/>
          pos=&lt;x= 0, y=-8, z= 4&gt;, vel=&lt;x= 0, y= 1, z=-2&gt;<br/>
          pos=&lt;x= 1, y= 1, z= 5&gt;, vel=&lt;x= 0, y= 0, z= 2&gt;<br/>
          <br/>
          After 10 steps:<br/>
          pos=&lt;x= 2, y= 1, z=-3&gt;, vel=&lt;x=-3, y=-2, z= 1&gt;<br/>
          pos=&lt;x= 1, y=-8, z= 0&gt;, vel=&lt;x=-1, y= 1, z= 3&gt;<br/>
          pos=&lt;x= 3, y=-6, z= 1&gt;, vel=&lt;x= 3, y= 2, z=-3&gt;<br/>
          pos=&lt;x= 2, y= 0, z= 4&gt;, vel=&lt;x= 1, y=-1, z=-1&gt;<br/>
        </code>
      </pre>
      <p>
        Then, it might help to calculate the <strong>total energy in the
        system</strong>. The total energy for a single moon is its <strong>potential
        energy</strong> multiplied by its <strong>kinetic energy</strong>. A
        moon's <strong>potential energy</strong> is the sum of the <strong className="green">absolute
        values</strong> of its x, y, and z position coordinates. A moon's <strong>kinetic
        energy</strong> is the sum of the absolute values of its velocity
        coordinates. Below, each line shows the calculations for a moon's
        potential energy (pot), kinetic energy (kin), and total energy:
      </p>
      <pre>
        <code>
          Energy after 10 steps:<br/>
          pot: 2 + 1 + 3 =  6;   kin: 3 + 2 + 1 = 6;   total:  6 * 6 = 36<br/>
          pot: 1 + 8 + 0 =  9;   kin: 1 + 1 + 3 = 5;   total:  9 * 5 = 45<br/>
          pot: 3 + 6 + 1 = 10;   kin: 3 + 2 + 3 = 8;   total: 10 * 8 = 80<br/>
          pot: 2 + 0 + 4 =  6;   kin: 1 + 1 + 1 = 3;   total:  6 * 3 = 18<br/>
          Sum of total energy: 36 + 45 + 80 + 18 = <strong>179</strong><br/>
        </code>
      </pre>
      <p>
        In the above example, adding together the total energy for all moons
        after 10 steps produces the total energy in the system, <strong>179</strong>.
      </p>
      <p>
        Here's a second example:
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
        Every ten steps of simulation for 100 steps produces:
      </p>
      <pre>
        <code>
          After 0 steps:<br/>
          pos=&lt;x= -8, y=-10, z=  0&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  5, y=  5, z= 10&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  2, y= -7, z=  3&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          pos=&lt;x=  9, y= -8, z= -3&gt;, vel=&lt;x=  0, y=  0, z=  0&gt;<br/>
          <br/>
          After 10 steps:<br/>
          pos=&lt;x= -9, y=-10, z=  1&gt;, vel=&lt;x= -2, y= -2, z= -1&gt;<br/>
          pos=&lt;x=  4, y= 10, z=  9&gt;, vel=&lt;x= -3, y=  7, z= -2&gt;<br/>
          pos=&lt;x=  8, y=-10, z= -3&gt;, vel=&lt;x=  5, y= -1, z= -2&gt;<br/>
          pos=&lt;x=  5, y=-10, z=  3&gt;, vel=&lt;x=  0, y= -4, z=  5&gt;<br/>
          <br/>
          After 20 steps:<br/>
          pos=&lt;x=-10, y=  3, z= -4&gt;, vel=&lt;x= -5, y=  2, z=  0&gt;<br/>
          pos=&lt;x=  5, y=-25, z=  6&gt;, vel=&lt;x=  1, y=  1, z= -4&gt;<br/>
          pos=&lt;x= 13, y=  1, z=  1&gt;, vel=&lt;x=  5, y= -2, z=  2&gt;<br/>
          pos=&lt;x=  0, y=  1, z=  7&gt;, vel=&lt;x= -1, y= -1, z=  2&gt;<br/>
          <br/>
          After 30 steps:<br/>
          pos=&lt;x= 15, y= -6, z= -9&gt;, vel=&lt;x= -5, y=  4, z=  0&gt;<br/>
          pos=&lt;x= -4, y=-11, z=  3&gt;, vel=&lt;x= -3, y=-10, z=  0&gt;<br/>
          pos=&lt;x=  0, y= -1, z= 11&gt;, vel=&lt;x=  7, y=  4, z=  3&gt;<br/>
          pos=&lt;x= -3, y= -2, z=  5&gt;, vel=&lt;x=  1, y=  2, z= -3&gt;<br/>
          <br/>
          After 40 steps:<br/>
          pos=&lt;x= 14, y=-12, z= -4&gt;, vel=&lt;x= 11, y=  3, z=  0&gt;<br/>
          pos=&lt;x= -1, y= 18, z=  8&gt;, vel=&lt;x= -5, y=  2, z=  3&gt;<br/>
          pos=&lt;x= -5, y=-14, z=  8&gt;, vel=&lt;x=  1, y= -2, z=  0&gt;<br/>
          pos=&lt;x=  0, y=-12, z= -2&gt;, vel=&lt;x= -7, y= -3, z= -3&gt;<br/>
          <br/>
          After 50 steps:<br/>
          pos=&lt;x=-23, y=  4, z=  1&gt;, vel=&lt;x= -7, y= -1, z=  2&gt;<br/>
          pos=&lt;x= 20, y=-31, z= 13&gt;, vel=&lt;x=  5, y=  3, z=  4&gt;<br/>
          pos=&lt;x= -4, y=  6, z=  1&gt;, vel=&lt;x= -1, y=  1, z= -3&gt;<br/>
          pos=&lt;x= 15, y=  1, z= -5&gt;, vel=&lt;x=  3, y= -3, z= -3&gt;<br/>
          <br/>
          After 60 steps:<br/>
          pos=&lt;x= 36, y=-10, z=  6&gt;, vel=&lt;x=  5, y=  0, z=  3&gt;<br/>
          pos=&lt;x=-18, y= 10, z=  9&gt;, vel=&lt;x= -3, y= -7, z=  5&gt;<br/>
          pos=&lt;x=  8, y=-12, z= -3&gt;, vel=&lt;x= -2, y=  1, z= -7&gt;<br/>
          pos=&lt;x=-18, y= -8, z= -2&gt;, vel=&lt;x=  0, y=  6, z= -1&gt;<br/>
          <br/>
          After 70 steps:<br/>
          pos=&lt;x=-33, y= -6, z=  5&gt;, vel=&lt;x= -5, y= -4, z=  7&gt;<br/>
          pos=&lt;x= 13, y= -9, z=  2&gt;, vel=&lt;x= -2, y= 11, z=  3&gt;<br/>
          pos=&lt;x= 11, y= -8, z=  2&gt;, vel=&lt;x=  8, y= -6, z= -7&gt;<br/>
          pos=&lt;x= 17, y=  3, z=  1&gt;, vel=&lt;x= -1, y= -1, z= -3&gt;<br/>
          <br/>
          After 80 steps:<br/>
          pos=&lt;x= 30, y= -8, z=  3&gt;, vel=&lt;x=  3, y=  3, z=  0&gt;<br/>
          pos=&lt;x= -2, y= -4, z=  0&gt;, vel=&lt;x=  4, y=-13, z=  2&gt;<br/>
          pos=&lt;x=-18, y= -7, z= 15&gt;, vel=&lt;x= -8, y=  2, z= -2&gt;<br/>
          pos=&lt;x= -2, y= -1, z= -8&gt;, vel=&lt;x=  1, y=  8, z=  0&gt;<br/>
          <br/>
          After 90 steps:<br/>
          pos=&lt;x=-25, y= -1, z=  4&gt;, vel=&lt;x=  1, y= -3, z=  4&gt;<br/>
          pos=&lt;x=  2, y= -9, z=  0&gt;, vel=&lt;x= -3, y= 13, z= -1&gt;<br/>
          pos=&lt;x= 32, y= -8, z= 14&gt;, vel=&lt;x=  5, y= -4, z=  6&gt;<br/>
          pos=&lt;x= -1, y= -2, z= -8&gt;, vel=&lt;x= -3, y= -6, z= -9&gt;<br/>
          <br/>
          After 100 steps:<br/>
          pos=&lt;x=  8, y=-12, z= -9&gt;, vel=&lt;x= -7, y=  3, z=  0&gt;<br/>
          pos=&lt;x= 13, y= 16, z= -3&gt;, vel=&lt;x=  3, y=-11, z= -5&gt;<br/>
          pos=&lt;x=-29, y=-11, z= -1&gt;, vel=&lt;x= -3, y=  7, z=  4&gt;<br/>
          pos=&lt;x= 16, y=-13, z= 23&gt;, vel=&lt;x=  7, y=  1, z=  1&gt;<br/>
          <br/>
          Energy after 100 steps:<br/>
          pot:  8 + 12 +  9 = 29;   kin: 7 +  3 + 0 = 10;   total: 29 * 10 = 290<br/>
          pot: 13 + 16 +  3 = 32;   kin: 3 + 11 + 5 = 19;   total: 32 * 19 = 608<br/>
          pot: 29 + 11 +  1 = 41;   kin: 3 +  7 + 4 = 14;   total: 41 * 14 = 574<br/>
          pot: 16 + 13 + 23 = 52;   kin: 7 +  1 + 1 =  9;   total: 52 *  9 = 468<br/>
          Sum of total energy: 290 + 608 + 574 + 468 = <strong>1940</strong><br/>
        </code>
      </pre>
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
        Your puzzle answer was <strong className="green">528250271633772</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
