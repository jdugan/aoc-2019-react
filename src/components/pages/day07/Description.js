import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 7: Amplification Circuit ---
      </h3>
      <p>
        Based on the navigational maps, you're going to need to
        send more power to your ship's thrusters to reach Santa
        in time. To do this, you'll need to configure a series
        of <strong className="green">amplifiers</strong> already
        installed on the ship.
      </p>
      <p>
        There are five amplifiers connected in series; each one
        receives an input signal and produces an output signal. They
        are connected such that the first amplifier's output leads to
        the second amplifier's input, the second amplifier's output
        leads to the third amplifier's input, and so on. The first
        amplifier's input value is 0, and the last amplifier's output
        leads to your ship's thrusters.
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0
          <br/>
          0 -&gt;| Amp A |-&gt;| Amp B |-&gt;| Amp C |-&gt;| Amp D |-&gt;| Amp E |-&gt; (thrusters)
          <br/>
          &nbsp; &nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0
        </code>
      </pre>
      <p>
        The Elves have sent you some <strong>Amplifier Controller
        Software</strong> (your puzzle input), a program that should
        run on your <strong className="green">existing Intcode
        computer</strong>. Each amplifier will need to run a copy
        of the program.
      </p>
      <p>
        When a copy of the program starts running on an amplifier, it
        will first use an input instruction to ask the amplifier for
        its current <strong>phase setting</strong> (an integer from 0
        to 4). Each phase setting is used <strong>exactly once</strong>,
        but the Elves can't remember which amplifier needs which phase
        setting.
      </p>
      <p>
        The program will then call another input instruction to get
        the amplifier's input signal, compute the correct output signal,
        and supply it back to the amplifier with an output instruction.
        (If the amplifier has not yet received an input signal, it waits
        until one arrives.)
      </p>
      <p>
        Your job is to find <strong>the largest output signal that can be
        sent to the thrusters</strong> by trying every possible combination
        of phase settings on the amplifiers. Make sure that memory is not
        shared or reused between copies of the program.
      </p>
      <p>
        For example, suppose you want to try the phase setting sequence
        3,1,2,4,0, which would mean setting amplifier A to phase setting
        3, amplifier B to setting 1, C to 2, D to 4, and E to 0. Then, you
        could determine the output signal that gets sent from amplifier E
        to the thrusters with the following steps:
      </p>
      <ul>
        <li>
          Start the copy of the amplifier controller software that will run
          on amplifier A. At its first input instruction, provide it the
          amplifier's phase setting, 3. At its second input instruction,
          provide it the input signal, 0. After some calculations, it will
          use an output instruction to indicate the amplifier's output signal.
        </li>
        <li>
          Start the software for amplifier B. Provide it the phase setting
          (1) and then whatever output signal was produced from amplifier A.
          It will then produce a new output signal destined for amplifier C.
        </li>
        <li>
          Start the software for amplifier C, provide the phase setting (2)
          and the value from amplifier B, then collect its output signal.
        </li>
        <li>
          Run amplifier D's software, provide the phase setting (4) and input
          value, and collect its output signal.
        </li>
        <li>
          Run amplifier E's software, provide the phase setting (0) and input
          value, and collect its output signal.
        </li>
      </ul>
      <p>
        The final output signal from amplifier E would be sent to the
        thrusters. However, this phase setting sequence may not have been
        the best one; another sequence might have sent a higher signal
        to the thrusters.
      </p>
      <ul>
        <li>
          Max thruster signal <strong>43210</strong> (from phase
          setting sequence 4,3,2,1,0):
          <br/>
          <br/>
          3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0<br/>
          &nbsp;
        </li>
        <li>
          Max thruster signal <strong>54321</strong> (from phase
          setting sequence 0,1,2,3,4):
          <br/>
          <br/>
          3,23,3,24,1002,24,10,24,1002,23,-1,23,<br/>
          101,5,23,23,1,24,23,23,4,23,99,0,0<br/>
          &nbsp;
        </li>
        <li>
          Max thruster signal <strong>65210</strong> (from phase setting
          sequence 1,0,4,3,2):
          <br/>
          <br/>
          3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,<br/>
          1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0<br/>
          &nbsp;
        </li>
      </ul>
      <p>
        Try every combination of phase settings on the amplifiers. <strong>What
        is the highest signal that can be sent to the thrusters?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">422858</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        It's no good &mdash; in this configuration, the amplifiers can't
        generate a large enough output signal to produce the thrust you'll
        need. The Elves quickly talk you through rewiring the amplifiers
        into a <strong>feedback loop</strong>:
      </p>
      <pre>
        <code>
          &nbsp; &nbsp; &nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0
          <br/>
          0 -+-&gt;| Amp A |-&gt;| Amp B |-&gt;| Amp C |-&gt;| Amp D |-&gt;| Amp E |-.
          <br/>
          &nbsp; &nbsp; | 0-------0&nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0&nbsp; 0-------0 |
          <br/>
          &nbsp; &nbsp; '-------------------------------------------------------+
          <br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
          <br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; v
          <br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;(thrusters)
        </code>
      </pre>
      <p>
        Most of the amplifiers are connected as they were before; amplifier A's output is
        connected to amplifier B's input, and so on. <strong>However</strong>, the output
        from amplifier E is now connected into amplifier A's input. This creates the feedback
        loop: the signal will be sent through the amplifiers <strong>many times</strong>.
      </p>
      <p>
        In feedback loop mode, the amplifiers need <strong>totally different phase
        settings</strong>: integers from 5 to 9, again each used exactly once. These
        settings will cause the Amplifier Controller Software to repeatedly take input
        and produce output many times before halting. Provide each amplifier its phase
        setting at its first input instruction; all further input/output instructions
        are for signals.
      </p>
      <p>
        Don't restart the Amplifier Controller Software on any amplifier during this
        process. Each one should continue receiving and sending signals until it halts.
      </p>
      <p>
        All signals sent or received in this process will be between pairs
        of amplifiers except the very first signal and the very last signal.
        To start the process, a 0 signal is sent to amplifier A's
        input <strong>exactly once</strong>.
      </p>
      <p>
        Eventually, the software on the amplifiers will halt after they have
        processed the final loop. When this happens, the last output signal
        from amplifier E is sent to the thrusters. Your job is to <strong>find
        the largest output signal that can be sent to the thrusters</strong> using
        the new phase settings and feedback loop arrangement.
      </p>
      <p>
        Here are some example programs:
      </p>
      <ul>
        <li>
          Max thruster signal <strong>139629729</strong> (from phase
          setting sequence 9,8,7,6,5):
          <br/>
          <br/>
          3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,<br/>
          27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5<br/>
          &nbsp;
        </li>
        <li>
          Max thruster signal <strong>18216</strong> (from phase
          setting sequence 9,7,8,5,6):
          <br/>
          <br/>
          3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,<br/>
          -5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,<br/>
          53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10<br/>
          &nbsp;
        </li>
      </ul>
      <p>
        Try every combination of the new phase settings on the amplifier
        feedback loop. <strong>What is the highest signal that can be sent
        to the thrusters?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">14897241</strong>.
      </p>
    </section>
  )
}

export default Description;
