import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 8: Space Image Format ---
      </h3>
      <p>
        The Elves' spirits are lifted when they realize you have an opportunity to
        reboot one of their Mars rovers, and so they are curious if you would spend
        a brief sojourn on Mars. You land your ship near the rover.
      </p>
      <p>
        When you reach the rover, you discover that it's already in the
        process of rebooting! It's just waiting for someone to enter
        a <strong className="green">BIOS</strong> password. The Elf responsible
        for the rover takes a picture of the password (your puzzle input) and sends
        it to you via the Digital Sending Network.
      </p>
      <p>
        Unfortunately, images sent via the Digital Sending Network aren't encoded
        with any normal encoding; instead, they're encoded in a special Space
        Image Format. None of the Elves seem to remember why this is the case. They
        send you the instructions to decode it.
      </p>
      <p>
        Images are sent as a series of digits that each represent the color of a
        single pixel. The digits fill each row of the image left-to-right, then
        move downward to the next row, filling rows top-to-bottom until every pixel
        of the image is filled.
      </p>
      <p>
        Each image actually consists of a series of identically-sized <strong>layers</strong> that
        are filled in this way. So, the first digit corresponds to the top-left pixel of
        the first layer, the second digit corresponds to the pixel to the right of that
        on the same layer, and so on until the last digit, which corresponds to the
        bottom-right pixel of the last layer.
      </p>
      <p>
        For example, given an image 3 pixels wide and 2 pixels tall, the image
        data 123456789012 corresponds to the following image layers:
      </p>
      <pre>
        <code>
          Layer 1: 123<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;456<br />
          <br/>
          Layer 2: 789<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;012<br />
       </code>
      </pre>
      <p>
        The image you received is <strong>25 pixels wide and 6 pixels tall</strong>.
      </p>
      <p>
        To make sure the image wasn't corrupted during transmission,
        the Elves would like you to find the layer that contains
        the <strong>fewest 0 digits</strong>. On that layer, what
        is <strong>the number of 1 digits multiplied by the number
        of 2 digits?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">2480</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        Now you're ready to decode the image. The image is rendered by stacking
        the layers and aligning the pixels with the same positions in each
        layer. The digits indicate the color of the corresponding pixel: 0 is
        black, 1 is white, and 2 is transparent.
      </p>
      <p>
        The layers are rendered with the first layer in front and the last
        layer in back. So, if a given position has a transparent pixel in
        the first and second layers, a black pixel in the third layer, and
        a white pixel in the fourth layer, the final image would have
        a <strong>black</strong> pixel at that position.
      </p>
      <p>
        For example, given an image 2 pixels wide and 2 pixels tall, the image
        data 0222112222120000 corresponds to the following image layers:
      </p>
      <pre>
        <code>
          Layer 1: <strong>0</strong>2<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;22<br/>
          <br/>
          Layer 2: 1<strong>1</strong><br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;22<br/>
          <br/>
          Layer 3: 22<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong>1</strong>2<br/>
          <br/>
          Layer 4: 00<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;0<strong>0</strong><br/>
        </code>
      </pre>
      <p>
        Then, the full image can be found by determining the top visible
        pixel in each position:
      </p>
      <ul>
        <li>
          The top-left pixel is <strong>black</strong> because the
          top layer is 0.
        </li>
        <li>
          The top-right pixel is <strong>white</strong> because the
          top layer is 2 (transparent), but the second layer is 1.
        </li>
        <li>
          The bottom-left pixel is <strong>white</strong> because the
          top two layers are 2, but the third layer is 1.
        </li>
        <li>
          The bottom-right pixel is <strong>black</strong> because the
          only visible pixel in that position is 0 (from layer 4).
        </li>
      </ul>
      <p>
        So, the final image looks like this:
      </p>
      <pre>
        <code>
          01<br/>
          10<br/>
        </code>
      </pre>
      <p>
        <strong>What message is produced after decoding your image?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">ZYBLH</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
