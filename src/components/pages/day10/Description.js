import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 10: Monitoring Station ---
      </h3>
      <p>
        You fly into the asteroid belt and reach the Ceres monitoring
        station. The Elves here have an emergency: they're having trouble
        tracking all of the asteroids and can't be sure they're safe.
      </p>
      <p>
        The Elves would like to build a new monitoring station in a nearby
        area of space; they hand you a map of all of the asteroids in
        that region (your puzzle input).
      </p>
      <p>
        The map indicates whether each position is empty (.) or contains
        an asteroid (#). The asteroids are much smaller than they appear
        on the map, and every asteroid is exactly in the center of its
        marked position. The asteroids can be described with X,Y coordinates
        where X is the distance from the left edge and Y is the distance
        from the top edge (so the top-left corner is 0,0 and the position
        immediately to its right is 1,0).
      </p>
      <p>
        Your job is to figure out which asteroid would be the best place
        to build <strong>a new monitoring station</strong>. A monitoring
        station can <strong>detect</strong> any asteroid to which it
        has <strong>direct line of sight</strong> &mdash; that is, there
        cannot be another asteroid <strong>exactly</strong> between them.
        This line of sight can be at any angle, not just lines aligned to
        the grid or diagonally. The <strong>best</strong> location is the
        asteroid that can <strong>detect</strong> the largest number of
        other asteroids.
      </p>
      <p>
        For example, consider the following map:
      </p>
      <pre>
        <code>
          .#..#<br/>
          .....<br/>
          #####<br/>
          ....#<br/>
          ...<strong>#</strong>#<br/>
        </code>
      </pre>
      <p>
        The best location for a new monitoring station on this map is the
        highlighted asteroid at 3,4 because it can detect 8 asteroids, more
        than any other location. (The only asteroid it cannot detect is the
        one at 1,0; its view of this asteroid is blocked by the asteroid at
        2,2.) All other asteroids are worse locations; they can detect 7 or
        fewer other asteroids. Here is the number of other asteroids a monitoring
        station on each asteroid could detect:
      </p>
      <pre>
        <code>
          .7..7<br/>
          .....<br/>
          67775<br/>
          ....7<br/>
          ...87<br/>
        </code>
      </pre>
      <p>
        Here is an asteroid (#) and some examples of the ways its line of sight
        might be blocked. If there were another asteroid at the location of a
        capital letter, the locations marked with the corresponding lowercase
        letter would be blocked and could not be detected:
      </p>
      <pre>
        <code>
          #.........<br/>
          ...A......<br/>
          ...B..a...<br/>
          .EDCG....a<br/>
          ..F.c.b...<br/>
          .....c....<br/>
          ..efd.c.gb<br/>
          .......c..<br/>
          ....f...c.<br/>
          ...e..d..c<br/>
        </code>
      </pre>
      <p>
        Here are some larger examples:
      </p>
      <ul>
        <li>
          Best is 5,8 with 33 other asteroids detected:<br/>
          <pre>
            <code>
              ......#.#.<br/>
              #..#.#....<br/>
              ..#######.<br/>
              .#.#.###..<br/>
              .#..#.....<br/>
              ..#....#.#<br/>
              #..#....#.<br/>
              .##.#..###<br/>
              ##...<strong>#</strong>..#.<br/>
              .#....####<br/>
            </code>
          </pre>
        </li>
        <li>
          Best is 1,2 with 35 other asteroids detected:<br/>
          <pre>
            <code>
              #.#...#.#.<br/>
              .###....#.<br/>
              .<strong>#</strong>....#...<br/>
              ##.#.#.#.#<br/>
              ....#.#.#.<br/>
              .##..###.#<br/>
              ..#...##..<br/>
              ..##....##<br/>
              ......#...<br/>
              .####.###.<br/>
            </code>
          </pre>
        </li>
        <li>
          Best is 6,3 with 41 other asteroids detected:<br/>
          <pre>
            <code>
              .#..#..###<br/>
              ####.###.#<br/>
              ....###.#.<br/>
              ..###.<strong>#</strong>#.#<br/>
              ##.##.#.#.<br/>
              ....###..#<br/>
              ..#.#..#.#<br/>
              #..#.#.###<br/>
              .##...##.#<br/>
              .....#.#..<br/>
            </code>
          </pre>
        </li>
        <li>
          Best is 11,13 with 210 other asteroids detected:<br/>
          <pre>
            <code>
              .#..##.###...#######<br/>
              ##.############..##.<br/>
              .#.######.########.#<br/>
              .###.#######.####.#.<br/>
              #####.##.#.##.###.##<br/>
              ..#####..#.#########<br/>
              ####################<br/>
              #.####....###.#.#.##<br/>
              ##.#################<br/>
              #####.##.###..####..<br/>
              ..######..##.#######<br/>
              ####.##.####...##..#<br/>
              .#####..#.######.###<br/>
              ##...#.####<strong>#</strong>#####...<br/>
              #.##########.#######<br/>
              .####.#.###.###.#.##<br/>
              ....##.##.###..#####<br/>
              .#.#.###########.###<br/>
              #.#.#.#####.####.###<br/>
              ###.##.####.##.#..##<br/>
            </code>
          </pre>
        </li>
      </ul>
      <p>
        Find the best location for a new monitoring station. <strong>How
        many other asteroids can be detected from that location?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">274</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        Once you give them the coordinates, the Elves quickly deploy an
        Instant Monitoring Station to the location and discover the worst:
        there are simply too many asteroids.
      </p>
      <p>
        The only solution is <strong>complete vaporization by giant
        laser</strong>.
      </p>
      <p>
        Fortunately, in addition to an asteroid scanner, the new monitoring
        station also comes equipped with a giant rotating laser perfect for
        vaporizing asteroids. The laser starts by pointing up and always
        rotates <strong>clockwise</strong>, vaporizing any asteroid it hits.
      </p>
      <p>
        If multiple asteroids are <strong>exactly</strong> in line with the station,
        the laser only has enough power to vaporize <strong>one</strong> of them
        before continuing its rotation. In other words, the same asteroids that
        can be <strong>detected</strong> can be vaporized, but if vaporizing one
        asteroid makes another one detectable, the newly-detected asteroid won't
        be vaporized until the laser has returned to the same position by rotating
        a full 360 degrees.
      </p>
      <p>
        For example, consider the following map, where the asteroid with the
        new monitoring station (and laser) is marked X:
      </p>
      <pre>
        <code>
          .#....#####...#..<br/>
          ##...##.#####..##<br/>
          ##...#...#.#####.<br/>
          ..#.....X...###..<br/>
          ..#.#.....#....##<br/>
        </code>
      </pre>
      <p>
        The first nine asteroids to get vaporized, in order, would be:
      </p>
      <pre>
        <code>
          .#....###<strong>24</strong>...#..<br/>
          ##...##.<strong>13</strong>#<strong>67</strong>..<strong>9</strong>#<br/>
          ##...#...<strong>5</strong>.<strong>8</strong>####.<br/>
          ..#.....X...###..<br/>
          ..#.#.....#....##<br/>
        </code>
      </pre>
      <p>
        Note that some asteroids (the ones behind the asteroids marked 1, 5, and 7) won't have a chance to be vaporized until the next full rotation. The laser continues rotating; the next nine to be vaporized are:
      </p>
      <pre>
        <code>
          .#....###.....#..<br/>
          ##...##...#.....#<br/>
          ##...#......<strong>1234</strong>.<br/>
          ..#.....X...<strong>5</strong>##..<br/>
          ..#.<strong>9</strong>.....<strong>8</strong>....<strong>76</strong><br/>
        </code>
      </pre>
      <p>
        The next nine to be vaporized are then:
      </p>
      <pre>
        <code>
          .<strong>8</strong>....###.....#..<br/>
          <strong>56</strong>...<strong>9</strong>#...#.....#<br/>
          <strong>34</strong>...<strong>7</strong>...........<br/>
          ..<strong>2</strong>.....X....##..<br/>
          ..<strong>1</strong>..............<br/>
        </code>
      </pre>
      <p>
        Finally, the laser completes its first full rotation (1 through 3),
        a second rotation (4 through 8), and vaporizes the last asteroid
        (9) partway through its third rotation:
      </p>
      <pre>
        <code>
          ......<strong>234</strong>.....<strong>6</strong>..<br/>
          ......<strong>1</strong>...<strong>5</strong>.....<strong>7</strong><br/>
          .................<br/>
          ........X....<strong>89</strong>..<br/>
          .................<br/>
        </code>
      </pre>
      <p>
        In the large example above (the one with the best monitoring
        station location at 11,13):
      </p>
      <ul>
        <li>The 1st asteroid to be vaporized is at 11,12.</li>
        <li>The 2nd asteroid to be vaporized is at 12,1.</li>
        <li>The 3rd asteroid to be vaporized is at 12,2.</li>
        <li>The 10th asteroid to be vaporized is at 12,8.</li>
        <li>The 20th asteroid to be vaporized is at 16,0.</li>
        <li>The 50th asteroid to be vaporized is at 16,9.</li>
        <li>The 100th asteroid to be vaporized is at 10,16.</li>
        <li>The 199th asteroid to be vaporized is at 9,6.</li>
        <li><strong>The 200th asteroid to be vaporized is at 8,2.</strong></li>
        <li>The 201st asteroid to be vaporized is at 10,9.</li>
        <li>The 299th and final asteroid to be vaporized is at 11,1.</li>
      </ul>
      <p>
        The Elves are placing bets on which will be the <strong>200th</strong> asteroid
        to be vaporized. Win the bet by determining which asteroid that will
        be; <strong>what do you get if you multiply its X coordinate by 100 and then
        add its Y coordinate?</strong> (For example, 8,2 becomes <strong>802</strong>.)
      </p>
      <p>
        Your puzzle answer was <strong className="green">305</strong>.
      </p>
    </section>
  )
}

export default Description;
