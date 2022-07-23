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
          &nbsp; ###########.#####<br/>
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
      <h3>
        --- Part Two ---
      </h3>
      <p>
        Strangely, the exit isn't open when you reach it. Then, you remember:
        the ancient Plutonians were famous for building <strong>recursive
        spaces</strong>.
      </p>
      <p>
        The marked connections in the maze aren't portals: they <strong>physically
        connect</strong> to a larger or smaller copy of the maze. Specifically, the
        labeled tiles around the inside edge actually connect to a <strong>smaller
        copy</strong> of the same maze, and the smaller copy's inner labeled tiles
        connect to yet a smaller copy, and so on.
      </p>
      <p>
        When you enter the maze, you are at the outermost level; when at the outermost
        level, only the outer labels AA and ZZ function (as the start and end,
        respectively); all other outer labeled tiles are effectively walls. At any
        other level, AA and ZZ count as walls, but the other outer labeled tiles bring
        you one level outward.
      </p>
      <p>
        Your goal is to find a path through the maze that brings you back to ZZ
        at the outermost level of the maze.
      </p>
      <p>
        In the first example above, the shortest path is now the loop around the
        right side. If the starting level is 0, then taking the previously-shortest
        path would pass through BC (to level 1), DE (to level 2), and FG (back to
        level 1). Because this is not the outermost level, ZZ is a wall, and the
        only option is to go back around to BC, which would only send you even
        deeper into the recursive maze.
      </p>
      <p>
        In the second example above, there is no path that brings you to ZZ at
        the outermost level.
      </p>
      <p>
        Here is a more interesting example:
      </p>
      <pre>
        <code>
          &nbsp;            Z L X W       C                 <br/>
          &nbsp;            Z P Q B       K                 <br/>
          &nbsp; ###########.#.#.#.#######.###############  <br/>
          &nbsp; #...#.......#.#.......#.#.......#.#.#...#  <br/>
          &nbsp; ###.#.#.#.#.#.#.#.###.#.#.#######.#.#.###  <br/>
          &nbsp; #.#...#.#.#...#.#.#...#...#...#.#.......#  <br/>
          &nbsp; #.###.#######.###.###.#.###.###.#.#######  <br/>
          &nbsp; #...#.......#.#...#...#.............#...#  <br/>
          &nbsp; #.#########.#######.#.#######.#######.###  <br/>
          &nbsp; #...#.#    F       R I       Z    #.#.#.#  <br/>
          &nbsp; #.###.#    D       E C       H    #.#.#.#  <br/>
          &nbsp; #.#...#                           #...#.#  <br/>
          &nbsp; #.###.#                           #.###.#  <br/>
          &nbsp; #.#....OA                       WB..#.#..ZH<br/>
          &nbsp; #.###.#                           #.#.#.#  <br/>
          CJ......#                           #.....#  <br/>
          &nbsp; #######                           #######  <br/>
          &nbsp; #.#....CK                         #......IC<br/>
          &nbsp; #.###.#                           #.###.#  <br/>
          &nbsp; #.....#                           #...#.#  <br/>
          &nbsp; ###.###                           #.#.#.#  <br/>
          XF....#.#                         RF..#.#.#  <br/>
          &nbsp; #####.#                           #######  <br/>
          &nbsp; #......CJ                       NM..#...#  <br/>
          &nbsp; ###.#.#                           #.###.#  <br/>
          RE....#.#                           #......RF<br/>
          &nbsp; ###.###        X   X       L      #.#.#.#  <br/>
          &nbsp; #.....#        F   Q       P      #.#.#.#  <br/>
          &nbsp; ###.###########.###.#######.#########.###  <br/>
          &nbsp; #.....#...#.....#.......#...#.....#.#...#  <br/>
          &nbsp; #####.#.###.#######.#######.###.###.#.#.#  <br/>
          &nbsp; #.......#.......#.#.#.#.#...#...#...#.#.#  <br/>
          &nbsp; #####.###.#####.#.#.#.#.###.###.#.###.###  <br/>
          &nbsp; #.......#.....#.#...#...............#...#  <br/>
          &nbsp; #############.#.#.###.###################  <br/>
          &nbsp;              A O F   N                     <br/>
          &nbsp;              A A D   M                     <br/>
        </code>
      </pre>
      <p>
        One shortest path through the maze is the following:
      </p>
      <ul>
        <li>Walk from AA to XF (16 steps)</li>
        <li>Recurse into level 1 through XF (1 step)</li>
        <li>Walk from XF to CK (10 steps)</li>
        <li>Recurse into level 2 through CK (1 step)</li>
        <li>Walk from CK to ZH (14 steps)</li>
        <li>Recurse into level 3 through ZH (1 step)</li>
        <li>Walk from ZH to WB (10 steps)</li>
        <li>Recurse into level 4 through WB (1 step)</li>
        <li>Walk from WB to IC (10 steps)</li>
        <li>Recurse into level 5 through IC (1 step)</li>
        <li>Walk from IC to RF (10 steps)</li>
        <li>Recurse into level 6 through RF (1 step)</li>
        <li>Walk from RF to NM (8 steps)</li>
        <li>Recurse into level 7 through NM (1 step)</li>
        <li>Walk from NM to LP (12 steps)</li>
        <li>Recurse into level 8 through LP (1 step)</li>
        <li>Walk from LP to FD (24 steps)</li>
        <li>Recurse into level 9 through FD (1 step)</li>
        <li>Walk from FD to XQ (8 steps)</li>
        <li>Recurse into level 10 through XQ (1 step)</li>
        <li>Walk from XQ to WB (4 steps)</li>
        <li>Return to level 9 through WB (1 step)</li>
        <li>Walk from WB to ZH (10 steps)</li>
        <li>Return to level 8 through ZH (1 step)</li>
        <li>Walk from ZH to CK (14 steps)</li>
        <li>Return to level 7 through CK (1 step)</li>
        <li>Walk from CK to XF (10 steps)</li>
        <li>Return to level 6 through XF (1 step)</li>
        <li>Walk from XF to OA (14 steps)</li>
        <li>Return to level 5 through OA (1 step)</li>
        <li>Walk from OA to CJ (8 steps)</li>
        <li>Return to level 4 through CJ (1 step)</li>
        <li>Walk from CJ to RE (8 steps)</li>
        <li>Return to level 3 through RE (1 step)</li>
        <li>Walk from RE to IC (4 steps)</li>
        <li>Recurse into level 4 through IC (1 step)</li>
        <li>Walk from IC to RF (10 steps)</li>
        <li>Recurse into level 5 through RF (1 step)</li>
        <li>Walk from RF to NM (8 steps)</li>
        <li>Recurse into level 6 through NM (1 step)</li>
        <li>Walk from NM to LP (12 steps)</li>
        <li>Recurse into level 7 through LP (1 step)</li>
        <li>Walk from LP to FD (24 steps)</li>
        <li>Recurse into level 8 through FD (1 step)</li>
        <li>Walk from FD to XQ (8 steps)</li>
        <li>Recurse into level 9 through XQ (1 step)</li>
        <li>Walk from XQ to WB (4 steps)</li>
        <li>Return to level 8 through WB (1 step)</li>
        <li>Walk from WB to ZH (10 steps)</li>
        <li>Return to level 7 through ZH (1 step)</li>
        <li>Walk from ZH to CK (14 steps)</li>
        <li>Return to level 6 through CK (1 step)</li>
        <li>Walk from CK to XF (10 steps)</li>
        <li>Return to level 5 through XF (1 step)</li>
        <li>Walk from XF to OA (14 steps)</li>
        <li>Return to level 4 through OA (1 step)</li>
        <li>Walk from OA to CJ (8 steps)</li>
        <li>Return to level 3 through CJ (1 step)</li>
        <li>Walk from CJ to RE (8 steps)</li>
        <li>Return to level 2 through RE (1 step)</li>
        <li>Walk from RE to XQ (14 steps)</li>
        <li>Return to level 1 through XQ (1 step)</li>
        <li>Walk from XQ to FD (8 steps)</li>
        <li>Return to level 0 through FD (1 step)</li>
        <li>Walk from FD to ZZ (18 steps)</li>
      </ul>
      <p>
        This path takes a total of <strong>396</strong> steps to move from AA
        at the outermost layer to ZZ at the outermost layer.
      </p>
      <p>
        In your maze, when accounting for recursion, <strong>how many steps does
        it take to get from the open tile marked AA to the open tile marked ZZ,
        both at the outermost layer?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">5652</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
