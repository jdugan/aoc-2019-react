import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 9: Sensor Boost ---
      </h3>
      <p>
        You've just said goodbye to the rebooted rover and left Mars when
        you receive a faint distress signal coming from the asteroid belt.
        It must be the Ceres monitoring station!
      </p>
      <p>
        In order to lock on to the signal, you'll need to boost your sensors.
        The Elves send up the latest <strong>BOOST</strong> program &mdash; Basic
        Operation Of System Test.
      </p>
      <p>
        While BOOST (your puzzle input) is capable of boosting your sensors,
        for tenuous safety reasons, it refuses to do so until the computer
        it runs on passes some checks to demonstrate it is a <strong>complete
        Intcode computer</strong>.
      </p>
      <p>
        <strong className="green">Your existing Intcode computer</strong> is
        missing one key feature: it needs support for parameters in <strong>relative
        mode</strong>.
      </p>
      <p>
        Parameters in mode 2, <strong>relative mode</strong>, behave very
        similarly to parameters in <strong>position mode</strong>: the
        parameter is interpreted as a position. Like position mode, parameters
        in relative mode can be read from or written to.
      </p>
      <p>
        The important difference is that relative mode parameters don't count from
        address 0. Instead, they count from a value called the <strong>relative
        base</strong>. The <strong>relative base</strong> starts at 0.
      </p>
      <p>
        The address a relative mode parameter refers to is itself <strong>plus</strong> the
        current <strong>relative base</strong>. When the relative base is 0,
        relative mode parameters and position mode parameters with the same
        value refer to the same address.
      </p>
      <p>
        For example, given a relative base of 50, a relative mode parameter of -7
        refers to memory address 50 + -7 = <strong>43</strong>.
      </p>
      <p>
        The relative base is modified with the <strong>relative base
        offset</strong> instruction:
      </p>
      <ul>
        <li>
          Opcode 9 <strong>adjusts the relative base</strong> by the value
          of its only parameter. The relative base increases (or decreases,
          if the value is negative) by the value of the parameter.
        </li>
      </ul>
      <p>
        For example, if the relative base is 2000, then after the instruction
        109,19, the relative base would be 2019. If the next instruction were
        204,-34, then the value at address 1985 would be output.
      </p>
      <p>
        Your Intcode computer will also need a few other capabilities:
      </p>
      <ul>
        <li>
          The computer's available memory should be much larger than the
          initial program. Memory beyond the initial program starts with
          the value 0 and can be read or written like any other memory.
          (It is invalid to try to access memory at a negative address,
          though.)
        </li>
        <li>
          The computer should have support for large numbers. Some instructions
          near the beginning of the BOOST program will verify this capability.
        </li>
      </ul>
      <p>
        Here are some example programs that use these features:
      </p>
      <ul>
        <li>
          109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99 takes
          no input and produces <strong className="green">a copy of
          itself</strong> as output.
        </li>
        <li>
          1102,34915192,34915192,7,4,7,99,0 should output a 16-digit number.
        </li>
        <li>
          104,1125899906842624,99 should output the large number in the
          middle.
        </li>
      </ul>
      <p>
        The BOOST program will ask for a single input; run it in test mode
        by providing it the value 1. It will perform a series of checks on
        each opcode, output any opcodes (and the associated parameter modes)
        that seem to be functioning incorrectly, and finally output a
        BOOST keycode.
      </p>
      <p>
        Once your Intcode computer is fully functional, the BOOST program should
        report no malfunctioning opcodes when run in test mode; it should only
        output a single value, the BOOST keycode. <strong>What BOOST keycode does
        it produce?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">4080871669</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        <strong>You now have a complete Intcode computer.</strong>
      </p>
      <p>
        Finally, you can lock on to the Ceres distress signal! You just need
        to boost your sensors using the BOOST program.
      </p>
      <p>
        The program runs in sensor boost mode by providing the input instruction
        the value 2. Once run, it will boost the sensors automatically, but it
        might take a few seconds to complete the operation on slower hardware.
        In sensor boost mode, the program will output a single value: <strong>the
        coordinates of the distress signal.</strong>
      </p>
      <p>
        Run the BOOST program in sensor boost mode. <strong>What are the coordinates
        of the distress signal?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">????</strong>.
      </p>
    </section>
  )
}

export default Description;
