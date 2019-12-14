import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 14: Space Stoichiometry ---
      </h3>
      <p>
        As you approach the rings of Saturn, your ship's <strong>low
        fuel</strong> indicator turns on. There isn't any fuel here,
        but the rings have plenty of raw material. Perhaps your ship's
        Inter-Stellar Refinery Union brand <strong>nanofactory</strong> can
        turn these raw materials into fuel.
      </p>
      <p>
        You ask the nanofactory to produce a list of the <strong>reactions</strong> it
        can perform that are relevant to this process (your puzzle input). Every
        reaction turns some quantities of specific <strong>input chemicals</strong> into
        some quantity of an <strong>output chemical</strong>. Almost every chemical is
        produced by exactly one reaction; the only exception, ORE, is the raw material
        input to the entire process and is not produced by a reaction.
      </p>
      <p>
        You just need to know how much <strong>ORE</strong> you'll need to
        collect before you can produce one unit of <strong>FUEL</strong>.
      </p>
      <p>
        Each reaction gives specific quantities for its inputs and output;
        reactions cannot be partially run, so only whole integer multiples
        of these quantities can be used. (It's okay to have leftover
        chemicals when you're done, though.) For example, the reaction
        1 A, 2 B, 3 C => 2 D means that exactly 2 units of chemical D can
        be produced by consuming exactly 1 A, 2 B and 3 C. You can run the
        full reaction as many times as necessary; for example, you could
        produce 10 D by consuming 5 A, 10 B, and 15 C.
      </p>
      <p>
        Suppose your nanofactory produces the following list of reactions:
      </p>
      <pre>
        <code>
          10 ORE => 10 A<br/>
          1 ORE => 1 B<br/>
          7 A, 1 B => 1 C<br/>
          7 A, 1 C => 1 D<br/>
          7 A, 1 D => 1 E<br/>
          7 A, 1 E => 1 FUEL<br/>
        </code>
      </pre>
      <p>
        The first two reactions use only ORE as inputs; they indicate that
        you can produce as much of chemical A as you want (in increments of
        10 units, each 10 costing 10 ORE) and as much of chemical B as you
        want (each costing 1 ORE). To produce 1 FUEL, a total of 31 ORE is
        required: 1 ORE to produce 1 B, then 30 more ORE to produce the 7 +
        7 + 7 + 7 = 28 A (with 2 extra A wasted) required in the reactions
        to convert the B into C, C into D, D into E, and finally E into FUEL.
        (30 A is produced because its reaction requires that it is created
        in increments of 10.)
      </p>
      <p>
        Or, suppose you have the following list of reactions:
      </p>
      <pre>
        <code>
          9 ORE => 2 A<br/>
          8 ORE => 3 B<br/>
          7 ORE => 5 C<br/>
          3 A, 4 B => 1 AB<br/>
          5 B, 7 C => 1 BC<br/>
          4 C, 1 A => 1 CA<br/>
          2 AB, 3 BC, 4 CA => 1 FUEL<br/>
        </code>
      </pre>
      <p>
        The above list of reactions requires 165 ORE to produce 1 FUEL:
      </p>
      <ul>
        <li>Consume 45 ORE to produce 10 A.</li>
        <li>Consume 64 ORE to produce 24 B.</li>
        <li>Consume 56 ORE to produce 40 C.</li>
        <li>Consume 6 A, 8 B to produce 2 AB.</li>
        <li>Consume 15 B, 21 C to produce 3 BC.</li>
        <li>Consume 16 C, 4 A to produce 4 CA.</li>
        <li>Consume 2 AB, 3 BC, 4 CA to produce 1 FUEL.</li>
      </ul>
      <p>
        Here are some larger examples:
      </p>
      <ul>
        <li>
          <strong>13312</strong> ORE for 1 FUEL:
          <pre>
            <code>
              157 ORE => 5 NZVS<br/>
              165 ORE => 6 DCFZ<br/>
              44 XJWVT, 5 KHKGT, 1 QDVJ, 29 NZVS, 9 GPVTF, 48 HKGWZ => 1 FUEL<br/>
              12 HKGWZ, 1 GPVTF, 8 PSHF => 9 QDVJ<br/>
              179 ORE => 7 PSHF<br/>
              177 ORE => 5 HKGWZ<br/>
              7 DCFZ, 7 PSHF => 2 XJWVT<br/>
              165 ORE => 2 GPVTF<br/>
              3 DCFZ, 7 NZVS, 5 HKGWZ, 10 PSHF => 8 KHKGT<br/>
            </code>
          </pre>
        </li>
        <li>
          <strong>180697</strong> ORE for 1 FUEL:
          <pre>
            <code>
              2 VPVL, 7 FWMGM, 2 CXFTF, 11 MNCFX => 1 STKFG<br/>
              17 NVRVD, 3 JNWZP => 8 VPVL<br/>
              53 STKFG, 6 MNCFX, 46 VJHF, 81 HVMC, 68 CXFTF, 25 GNMV => 1 FUEL<br/>
              22 VJHF, 37 MNCFX => 5 FWMGM<br/>
              139 ORE => 4 NVRVD<br/>
              144 ORE => 7 JNWZP<br/>
              5 MNCFX, 7 RFSQX, 2 FWMGM, 2 VPVL, 19 CXFTF => 3 HVMC<br/>
              5 VJHF, 7 MNCFX, 9 VPVL, 37 CXFTF => 6 GNMV<br/>
              145 ORE => 6 MNCFX<br/>
              1 NVRVD => 8 CXFTF<br/>
              1 VJHF, 6 MNCFX => 4 RFSQX<br/>
              176 ORE => 6 VJHF<br/>
            </code>
          </pre>
        </li>
        <li>
          <strong>2210736</strong> ORE for 1 FUEL:
          <pre>
            <code>
              171 ORE => 8 CNZTR<br/>
              7 ZLQW, 3 BMBT, 9 XCVML, 26 XMNCP, 1 WPTQ, 2 MZWV, 1 RJRHP => 4 PLWSL<br/>
              114 ORE => 4 BHXH<br/>
              14 VRPVC => 6 BMBT<br/>
              6 BHXH, 18 KTJDG, 12 WPTQ, 7 PLWSL, 31 FHTLT, 37 ZDVW => 1 FUEL<br/>
              6 WPTQ, 2 BMBT, 8 ZLQW, 18 KTJDG, 1 XMNCP, 6 MZWV, 1 RJRHP => 6 FHTLT<br/>
              15 XDBXC, 2 LTCX, 1 VRPVC => 6 ZLQW<br/>
              13 WPTQ, 10 LTCX, 3 RJRHP, 14 XMNCP, 2 MZWV, 1 ZLQW => 1 ZDVW<br/>
              5 BMBT => 4 WPTQ<br/>
              189 ORE => 9 KTJDG<br/>
              1 MZWV, 17 XDBXC, 3 XCVML => 2 XMNCP<br/>
              12 VRPVC, 27 CNZTR => 2 XDBXC<br/>
              15 KTJDG, 12 BHXH => 5 XCVML<br/>
              3 BHXH, 2 VRPVC => 7 MZWV<br/>
              121 ORE => 7 VRPVC<br/>
              7 XCVML => 6 RJRHP<br/>
              5 BHXH, 4 VRPVC => 5 LTCX<br/>
            </code>
          </pre>
        </li>
      </ul>
      <p>
        Given the list of reactions in your puzzle input, <strong>what is
        the minimum amount of ORE required to produce exactly 1 FUEL?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">97422</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        After collecting ORE for a while, you check your cargo
        hold: <strong>1 trillion (1000000000000)</strong> units
        of ORE.
      </p>
      <p>
        <strong>With that much ore</strong>, given the examples
        above:
      </p>
      <ul>
        <li>The 13312 ORE-per-FUEL example could produce <strong>82892753</strong> FUEL.</li>
        <li>The 180697 ORE-per-FUEL example could produce <strong>5586022</strong> FUEL.</li>
        <li>The 2210736 ORE-per-FUEL example could produce <strong>460664</strong> FUEL.</li>
      </ul>
      <p>
        Given 1 trillion ORE, <strong>what is the maximum amount of
        FUEL you can produce?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">13108426</strong>.
      </p>
    </section>
  )
}

export default Description;
