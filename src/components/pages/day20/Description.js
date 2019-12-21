import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 20: Donut Maze ---
      </h3>
      <p>
        You notice a strange pattern on the surface of Pluto and land nearby
        to get a closer look. Upon closer inspection, you realize you've come
        across one of the famous space-warping mazes of the long-lost Pluto
        civilization!
      </p>
      <p>
        Because there isn't much space on Pluto, the civilization that used
        to live here thrived by inventing a method for folding spacetime.
        Although the technology is no longer understood, mazes like this one
        provide a small glimpse into the daily life of an ancient Pluto
        citizen.
      </p>
      <p>
        This maze is shaped like a <strong className="green">donut</strong>.
        Portals along the inner and outer edge of the donut can instantly
        teleport you from one side to the other. For example:
      </p>
      <pre>
        <code>
          &nbsp;        A<br/>
          &nbsp;        A<br/>
          &nbsp; #######.#########<br/>
          &nbsp; #######.........#<br/>
          &nbsp; #######.#######.#<br/>
          &nbsp; #######.#######.#<br/>
          &nbsp; #######.#######.#<br/>
          &nbsp; #####  B    ###.#<br/>
          BC...##  C    ###.#<br/>
          &nbsp; ##.##       ###.#<br/>
          &nbsp; ##...DE  F  ###.#<br/>
          &nbsp; #####    G  ###.#<br/>
          &nbsp; #########.#####.#<br/>
          DE..#######...###.#<br/>
          &nbsp; #.#########.###.#<br/>
          FG..#########.....#<br/>
          &nbsp;###########.#####<br/>
          &nbsp;           Z<br/>
          &nbsp;           Z<br/>
        </code>
      </pre>
      <p>
        This map of the maze shows solid walls (#) and open passages
        (.). Every maze on Pluto has a start (the open tile next to
        AA) and an end (the open tile next to ZZ). Mazes on Pluto
        also have portals; this maze has three pairs of portals: BC,
        DE, and FG. When on an open tile next to one of these labels,
        a single step can take you to the other tile with the same
        label. (You can only walk on . tiles; labels and empty space
        are not traversable.)
      </p>
      <p>
        One path through the maze doesn't require any portals. Starting
        at AA, you could go down 1, right 8, down 12, left 4, and down
        1 to reach ZZ, a total of 26 steps.
      </p>
      <p>
        However, there is a shorter path: You could walk from AA to the
        inner BC portal (4 steps), warp to the outer BC portal (1 step),
        walk to the inner DE (6 steps), warp to the outer DE (1 step),
        walk to the outer FG (4 steps), warp to the inner FG (1 step),
        and finally walk to ZZ (6 steps). In total, this is
        only <strong>23</strong> steps.
      </p>
      <p>
        Here is a larger example:
      </p>
      <pre>
        <code>
&nbsp;                  A<br/>
&nbsp;                  A<br/>
&nbsp; #################.#############<br/>
&nbsp; #.#...#...................#.#.#<br/>
&nbsp; #.#.#.###.###.###.#########.#.#<br/>
&nbsp; #.#.#.......#...#.....#.#.#...#<br/>
&nbsp; #.#########.###.#####.#.#.###.#<br/>
&nbsp; #.............#.#.....#.......#<br/>
&nbsp; ###.###########.###.#####.#.#.#<br/>
&nbsp; #.....#        A   C    #.#.#.#<br/>
&nbsp; #######        S   P    #####.#<br/>
&nbsp; #.#...#                 #......VT<br/>
&nbsp; #.#.#.#                 #.#####<br/>
&nbsp; #...#.#               YN....#.#<br/>
&nbsp; #.###.#                 #####.#<br/>
DI....#.#                 #.....#<br/>
&nbsp; #####.#                 #.###.#<br/>
ZZ......#               QG....#..AS<br/>
&nbsp; ###.###                 #######<br/>
JO..#.#.#                 #.....#<br/>
&nbsp; #.#.#.#                 ###.#.#<br/>
&nbsp; #...#..DI             BU....#..LF<br/>
&nbsp; #####.#                 #.#####<br/>
YN......#               VT..#....QG<br/>
&nbsp; #.###.#                 #.###.#<br/>
&nbsp; #.#...#                 #.....#<br/>
&nbsp; ###.###    J L     J    #.#.###<br/>
&nbsp; #.....#    O F     P    #.#...#<br/>
&nbsp; #.###.#####.#.#####.#####.###.#<br/>
&nbsp; #...#.#.#...#.....#.....#.#...#<br/>
&nbsp; #.#####.###.###.#.#.#########.#<br/>
&nbsp; #...#.#.....#...#.#.#.#.....#.#<br/>
&nbsp; #.###.#####.###.###.#.#.#######<br/>
&nbsp; #.#.........#...#.............#<br/>
&nbsp; #########.###.###.#############<br/>
&nbsp;          B   J   C<br/>
&nbsp;          U   P   P<br/>
        </code>
      </pre>
      <p>
        Here, AA has no direct path to ZZ, but it does connect to AS and
        CP. By passing through AS, QG, BU, and JO, you can reach ZZ
        in <strong>58</strong> steps.
      </p>
      <p>
        In your maze, <strong>how many steps does it take to get from the
        open tile marked AA to the open tile marked ZZ?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">510</strong>.
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
