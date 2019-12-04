import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 2: 1202 Program Alarm ---
      </h3>
      <p>
        On the way to your <strong className="green">gravity assist</strong> around
        the Moon, your ship computer beeps angrily about a
        "<strong className="green">1202 program alarm</strong>". On the radio,
        an Elf is already explaining how to handle the situation: "Don't worry, that's
        perfectly norma--" <strong className="green">The ship computer bursts into
        flames.</strong>
      </p>
      <p>
        You notify the Elves that the computer's <strong className="green">magic
        smoke</strong> seems to have escaped. "That computer ran Intcode programs
        like the gravity assist program it was working on; surely there are enough
        spare parts up there to build a new Intcode computer!"
      </p>
      <p>
        An Intcode program is a list of <strong className="green">integers</strong> separated
        by commas (like 1,0,0,3,99). To run one, start by looking at the first integer
        (called position 0). Here, you will find an <strong>opcode</strong> &mdash; either 1,
        2, or 99. The opcode indicates what to do; for example, 99 means that the program is
        finished and should immediately halt. Encountering an unknown opcode means something
        went wrong.
      </p>
      <p>
        Opcode 1 <strong>adds</strong> together numbers read from two positions and
        stores the result in a third position. The three integers <strong>immediately
        after</strong> the opcode tell you these three positions - the first two
        indicate the <strong>positions</strong> from which you should read the input
        values, and the third indicates the <strong>position</strong> at which the
        output should be stored.
      </p>
      <p>
        For example, if your Intcode computer encounters 1,10,20,30, it should read
        the values at positions 10 and 20, add those values, and then overwrite the
        value at position 30 with their sum.
      </p>
      <p>
        Opcode 2 works exactly like opcode 1, except it <strong>multiplies</strong> the
        two inputs instead of adding them. Again, the three integers after the opcode
        indicate <strong>where</strong> the inputs and outputs are, not their values.
      </p>
      <p>
        Once you're done processing an opcode, <strong>move to the next one</strong> by
        stepping forward 4 positions.
      </p>
      <p>
        For example, suppose you have the following program:
      </p>
      <p>
        1,9,10,3,2,3,11,0,99,30,40,50
      </p>
      <p>
        For the purposes of illustration, here is the same program split into
        multiple lines:
      </p>
      <p>
        1,9,10,3,<br/>
        2,3,11,0,<br/>
        99,<br/>
        30,40,50<br/>
      </p>
      <p>
        The first four integers, 1,9,10,3, are at positions 0, 1, 2, and 3.
        Together, they represent the first opcode (1, addition), the positions
        of the two inputs (9 and 10), and the position of the output (3).
        To handle this opcode, you first need to get the values at the input
        positions: position 9 contains 30, and position 10 contains
        40. <strong>Add</strong> these numbers together to get 70. Then, store
        this value <strong>at</strong> the output position; here, the output
        position (3) is at position 3, so it overwrites itself. Afterward,
        the program looks like this:
      </p>
      <p>
        1,9,10,70,<br/>
        2,3,11,0,<br/>
        99,<br/>
        30,40,50<br/>
      </p>
      <p>
        Step forward 4 positions to reach the next opcode, 2. This opcode works
        just like the previous, but it multiplies instead of adding. The inputs
        are at positions 3 and 11; these positions contain 70 and 50 respectively.
        Multiplying these produces 3500; this is stored at position 0:
      </p>
      <p>
        3500,9,10,70,<br/>
        2,3,11,0,<br/>
        99,<br/>
        30,40,50<br/>
      </p>
      <p>
        Stepping forward 4 more positions arrives at opcode 99, halting
        the program.
      </p>
      <p>
        Here are the initial and final states of a few more small programs:
      </p>
      <p>
        1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2).<br/>
        2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6).<br/>
        2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801).<br/>
        1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99.<br/>
      </p>
      <p>
        Once you have a working computer, the first step is to restore the
        gravity assist program (your puzzle input) to the "1202 program alarm"
        state it had just before the last computer caught fire. To do this,
        <strong>before running the program</strong>, replace position 1 with
        the value 12 and replace position 2 with the value 2.
        <strong>What value is left at position 0</strong> after the
        program halts?
      </p>
      <p>
        Your puzzle answer was <strong className="green">3516593</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        "Good, the new computer seems to be working correctly! <strong>Keep it
        nearby</strong> during this mission - you'll probably use it again. Real
        Intcode computers support many more features than your new one, but we'll
        let you know what they are as you need them."
      </p>
      <p>
        "However, your current priority should be to complete your gravity assist
        around the Moon. For this mission to succeed, we should settle on some
        terminology for the parts you've already built."
      </p>
      <p>
        Intcode programs are given as a list of integers; these values are used as
        the initial state for the computer's <strong>memory</strong>. When you run
        an Intcode program, make sure to start by initializing memory to the program's
        values. A position in memory is called an <strong>address</strong> (for example,
        the first value in memory is at "address 0").
      </p>
      <p>
        Opcodes (like 1, 2, or 99) mark the beginning of an <strong>instruction</strong>.
        The values used immediately after an opcode, if any, are called the
        instruction's <strong>parameters</strong>. For example, in the instruction
        1,2,3,4, 1 is the opcode; 2, 3, and 4 are the parameters. The instruction 99
        contains only an opcode and has no parameters.
      </p>
      <p>
        The address of the current instruction is called the <strong>instruction pointer</strong>;
        it starts at 0. After an instruction finishes, the instruction pointer increases
        by <strong>the number of values in the instruction</strong>; until you add more
        instructions to the computer, this is always 4 (1 opcode + 3 parameters) for the add
        and multiply instructions. (The halt instruction would increase the instruction
        pointer by 1, but it halts the program instead.)
      </p>
      <p>
        "With terminology out of the way, we're ready to proceed. To complete the gravity
        assist, <strong>you need to determine what pair of inputs produces the output
        19690720</strong>."
      </p>
      <p>
        The inputs should still be provided to the program by replacing the values at
        addresses 1 and 2, just like before. In this program, the value placed in address 1
        is called the <strong>noun</strong>, and the value placed in address 2 is called
        the <strong>verb</strong>. Each of the two input values will be between 0 and 99,
        inclusive.
      </p>
      <p>
        Once the program has halted, its output is available at address 0, also just like
        before. Each time you try a pair of inputs, make sure you first <strong>reset the
        computer's memory to the values in the program</strong> (your puzzle input) &mdash;
        in other words, don't reuse memory from a previous attempt.
      </p>
      <p>
        Find the input <strong>noun</strong> and <strong>verb</strong> that cause the program
        to produce the output 19690720. <strong>What is 100 * noun + verb?</strong> (For
        example, if noun=12 and verb=2, the answer would be 1202.)
      </p>
      <p>
        Your puzzle answer was <strong className="green">????</strong>.
      </p>
    </section>
  )
}

export default Description;
