import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 16: Flawed Frequency Transmission ---
      </h3>
      <p>
        You're 3/4ths of the way through the <strong className="green">gas
        giants</strong>. Not only do roundtrip signals to Earth take five
        hours, but the signal quality is quite bad as well. You can clean
        up the signal with the Flawed Frequency Transmission algorithm,
        or <strong>FFT</strong>.
      </p>
      <p>
        As input, FFT takes a list of numbers. In the signal you received
        (your puzzle input), each number is a single digit: data like 15243
        represents the sequence 1, 5, 2, 4, 3.
      </p>
      <p>
        FFT operates in repeated <strong>phases</strong>. In each phase, a new
        list is constructed with the same length as the input list. This new
        list is also used as the input for the next phase.
      </p>
      <p>
        Each element in the new list is built by multiplying every value in the
        input list by a value in a repeating <strong>pattern</strong> and then
        adding up the results. So, if the input list were 9, 8, 7, 6, 5 and the
        pattern for a given element were 1, 2, 3, the result would be 9*1 + 8*2 +
        7*3 + 6*1 + 5*2 (with each input element on the left and each value in
          the repeating pattern on the right of each multiplication). Then, only
          the ones digit is kept: 38 becomes 8, -17 becomes 7, and so on.
      </p>
      <p>
        While each element in the output array uses all of the same input
        array elements, the actual repeating pattern to use depends on <strong>which
        output element</strong> is being calculated. The base pattern is 0, 1, 0,
        -1. Then, repeat each value in the pattern a number of times equal to
        the <strong>position in the output list</strong> being considered. Repeat
        once for the first element, twice for the second element, three times
        for the third element, and so on. So, if the third element of the output
        list is being calculated, repeating the values would produce: 0, 0, 0, 1,
        1, 1, 0, 0, 0, -1, -1, -1.
      </p>
      <p>
        When applying the pattern, skip the very first value exactly once.
        (In other words, offset the whole pattern left by one.) So, for the
        second element of the output list, the actual pattern used would be: 0,
        1, 1, 0, 0, -1, -1, 0, 0, 1, 1, 0, 0, -1, -1, ....
      </p>
      <p>
        After using this process to calculate each element of the output list,
        the phase is complete, and the output list of this phase is used as the
        new input list for the next phase, if any.
      </p>
      <p>
        Given the input signal 12345678, below are four phases of FFT. Within
        each phase, each output digit is calculated on a single line with the
        result at the far right; each multiplication operation shows the input
        digit on the left and the pattern value on the right:
      </p>
      <pre>
        <code>
          Input signal: 12345678<br/>
          <br/>
          1*1  + 2*0  + 3*-1 + 4*0  + 5*1  + 6*0  + 7*-1 + 8*0  = 4<br/>
          1*0  + 2*1  + 3*1  + 4*0  + 5*0  + 6*-1 + 7*-1 + 8*0  = 8<br/>
          1*0  + 2*0  + 3*1  + 4*1  + 5*1  + 6*0  + 7*0  + 8*0  = 2<br/>
          1*0  + 2*0  + 3*0  + 4*1  + 5*1  + 6*1  + 7*1  + 8*0  = 2<br/>
          1*0  + 2*0  + 3*0  + 4*0  + 5*1  + 6*1  + 7*1  + 8*1  = 6<br/>
          1*0  + 2*0  + 3*0  + 4*0  + 5*0  + 6*1  + 7*1  + 8*1  = 1<br/>
          1*0  + 2*0  + 3*0  + 4*0  + 5*0  + 6*0  + 7*1  + 8*1  = 5<br/>
          1*0  + 2*0  + 3*0  + 4*0  + 5*0  + 6*0  + 7*0  + 8*1  = 8<br/>
          <br/>
          After 1 phase: 48226158<br/>
          <br/>
          4*1  + 8*0  + 2*-1 + 2*0  + 6*1  + 1*0  + 5*-1 + 8*0  = 3<br/>
          4*0  + 8*1  + 2*1  + 2*0  + 6*0  + 1*-1 + 5*-1 + 8*0  = 4<br/>
          4*0  + 8*0  + 2*1  + 2*1  + 6*1  + 1*0  + 5*0  + 8*0  = 0<br/>
          4*0  + 8*0  + 2*0  + 2*1  + 6*1  + 1*1  + 5*1  + 8*0  = 4<br/>
          4*0  + 8*0  + 2*0  + 2*0  + 6*1  + 1*1  + 5*1  + 8*1  = 0<br/>
          4*0  + 8*0  + 2*0  + 2*0  + 6*0  + 1*1  + 5*1  + 8*1  = 4<br/>
          4*0  + 8*0  + 2*0  + 2*0  + 6*0  + 1*0  + 5*1  + 8*1  = 3<br/>
          4*0  + 8*0  + 2*0  + 2*0  + 6*0  + 1*0  + 5*0  + 8*1  = 8<br/>
          <br/>
          After 2 phases: 34040438<br/>
          <br/>
          3*1  + 4*0  + 0*-1 + 4*0  + 0*1  + 4*0  + 3*-1 + 8*0  = 0<br/>
          3*0  + 4*1  + 0*1  + 4*0  + 0*0  + 4*-1 + 3*-1 + 8*0  = 3<br/>
          3*0  + 4*0  + 0*1  + 4*1  + 0*1  + 4*0  + 3*0  + 8*0  = 4<br/>
          3*0  + 4*0  + 0*0  + 4*1  + 0*1  + 4*1  + 3*1  + 8*0  = 1<br/>
          3*0  + 4*0  + 0*0  + 4*0  + 0*1  + 4*1  + 3*1  + 8*1  = 5<br/>
          3*0  + 4*0  + 0*0  + 4*0  + 0*0  + 4*1  + 3*1  + 8*1  = 5<br/>
          3*0  + 4*0  + 0*0  + 4*0  + 0*0  + 4*0  + 3*1  + 8*1  = 1<br/>
          3*0  + 4*0  + 0*0  + 4*0  + 0*0  + 4*0  + 3*0  + 8*1  = 8<br/>
          <br/>
          After 3 phases: 03415518<br/>
          <br/>
          0*1  + 3*0  + 4*-1 + 1*0  + 5*1  + 5*0  + 1*-1 + 8*0  = 0<br/>
          0*0  + 3*1  + 4*1  + 1*0  + 5*0  + 5*-1 + 1*-1 + 8*0  = 1<br/>
          0*0  + 3*0  + 4*1  + 1*1  + 5*1  + 5*0  + 1*0  + 8*0  = 0<br/>
          0*0  + 3*0  + 4*0  + 1*1  + 5*1  + 5*1  + 1*1  + 8*0  = 2<br/>
          0*0  + 3*0  + 4*0  + 1*0  + 5*1  + 5*1  + 1*1  + 8*1  = 9<br/>
          0*0  + 3*0  + 4*0  + 1*0  + 5*0  + 5*1  + 1*1  + 8*1  = 4<br/>
          0*0  + 3*0  + 4*0  + 1*0  + 5*0  + 5*0  + 1*1  + 8*1  = 9<br/>
          0*0  + 3*0  + 4*0  + 1*0  + 5*0  + 5*0  + 1*0  + 8*1  = 8<br/>
          <br/>
          After 4 phases: 01029498<br/>
        </code>
      </pre>
      <p>
        Here are the first eight digits of the final output list after
        100 phases for some larger inputs:
      </p>
      <ul>
        <li>80871224585914546619083218645595 becomes 24176176.</li>
        <li>19617804207202209144916044189917 becomes 73745418.</li>
        <li>69317163492948606335995924319873 becomes 52432133.</li>
      </ul>
      <p>
        After 100 phases of FFT, <strong>what are the first eight digits
        in the final output list?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">67481260</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        Now that your FFT is working, you can decode the <strong>real signal</strong>.
      </p>
      <p>
        The real signal is your puzzle input <strong>repeated 10000 times</strong>. Treat
        this new signal as a single input list. Patterns are still calculated as before,
        and 100 phases of FFT are still applied.
      </p>
      <p>
        The <strong>first seven digits</strong> of your initial input signal also represent
        the <strong>message offset</strong>. The message offset is the location of the
        eight-digit message in the final output list. Specifically, the message offset
        indicates the <strong>number of digits to skip</strong> before reading the
        eight-digit message. For example, if the first seven digits of your initial
        input signal were 1234567, the eight-digit message would be the eight digits
        after skipping 1,234,567 digits of the final output list. Or, if the message
        offset were 7 and your final output list were 98765432109876543210, the eight-digit
        message would be 21098765. (Of course, your real message offset will be a
        seven-digit number, not a one-digit number like 7.)
      </p>
      <p>
        Here is the eight-digit message in the final output list after 100 phases. The
        message offset given in each input has been highlighted. (Note that the inputs
        given below are repeated 10000 times to find the actual starting input lists.)
      </p>
      <ul>
        <li><strong>0303673</strong>2577212944063491565474664 becomes 84462026.</li>
        <li><strong>0293510</strong>9699940807407585447034323 becomes 78725270.</li>
        <li><strong>0308177</strong>0884921959731165446850517 becomes 53553731.</li>
      </ul>
      <p>
        After repeating your input signal 10000 times and running 100 phases of FFT, <strong>what
        is the eight-digit message embedded in the final output list?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">42178738</strong>.
      </p>
    </section>
  )
}

export default Description;
