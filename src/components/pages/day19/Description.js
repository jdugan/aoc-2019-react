import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 19: Tractor Beam ---
      </h3>
      <p>
        Unsure of the state of Santa's ship, you borrowed the tractor beam
        technology from Triton. Time to test it out.
      </p>
      <p>
        When you're safely away from anything else, you activate the tractor
        beam, but nothing happens. It's hard to tell whether it's working
        if there's nothing to use it on. Fortunately, your ship's drone system
        can be configured to deploy a drone to specific coordinates and then
        check whether it's being pulled. There's even an <strong className="green">Intcode
        program</strong> (your puzzle input) that gives you access to the
        drone system.
      </p>
      <p>
        The program uses two input instructions to request the <strong>X and Y
        position</strong> to which the drone should be deployed. Negative numbers
        are invalid and will confuse the drone; all numbers should be <strong>zero
        or positive.</strong>
      </p>
      <p>
        Then, the program will output whether the drone is <strong>stationary</strong> (0)
        or <strong>being pulled by something</strong> (1). For example, the coordinate
        X=0, Y=0 is directly in front of the tractor beam emitter, so the drone
        control program will always report 1 at that location.
      </p>
      <p>
        To better understand the tractor beam, it is important to <strong>get a good
        picture</strong> of the beam itself. For example, suppose you scan the 10x10
        grid of points closest to the emitter:
      </p>
      <pre>
        <code>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X<br/>
          &nbsp;&nbsp;0->      9<br/>
          &nbsp;0#.........<br/>
          &nbsp;|.#........<br/>
          &nbsp;v..##......<br/>
          &nbsp;&nbsp;...###....<br/>
          &nbsp;&nbsp;....###...<br/>
          Y .....####.<br/>
          &nbsp;&nbsp;......####<br/>
          &nbsp;&nbsp;......####<br/>
          &nbsp;&nbsp;.......###<br/>
          &nbsp;9........##<br/>
        </code>
      </pre>
      <p>
        In this example, the <strong>number of points affected by the
        tractor beam</strong> in the 10x10 area closest to the emitter
        is <strong>27</strong>.
      </p>
      <p>
        However, you'll need to scan a larger area to understand the shape of
        the beam. <strong>How many points are affected by the tractor beam in
        the 50x50 area closest to the emitter?</strong> (For each of X and Y,
        this will be 0 through 49.)
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
