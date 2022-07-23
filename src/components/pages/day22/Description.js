import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 22: Slam Shuffle ---
      </h3>
      <p>
        There isn't much to do while you wait for the droids to
        repair your ship. At least you're drifting in the right
        direction. You decide to practice a new <strong className="green">card
        shuffle</strong> you've been working on.
      </p>
      <p>
        Digging through the ship's storage, you find a deck of <strong>space
        cards</strong>! Just like any deck of space cards, there are 10007
        cards in the deck numbered 0 through 10006. The deck must be new &mdash; they're
        still in <strong>factory order</strong>, with 0 on the top, then 1,
        then 2, and so on, all the way through to 10006 on the bottom.
      </p>
      <p>
        You've been practicing three different <strong>techniques</strong> that
        you use while shuffling. Suppose you have a deck of only 10 cards
        (numbered 0 through 9):
      </p>
      <p>
        <strong>To deal into new stack</strong>, create a new stack of cards by
        dealing the top card of the deck onto the top of the new stack repeatedly
        until you run out of cards:
      </p>
      <pre>
        <code>
          Top          Bottom<br/>
          0 1 2 3 4 5 6 7 8 9   Your deck<br/>
          &nbsp;                     New stack<br/>
          <br/>
          &nbsp; 1 2 3 4 5 6 7 8 9   Your deck<br/>
          &nbsp;                 0   New stack<br/>
          <br/>
          &nbsp;   2 3 4 5 6 7 8 9   Your deck<br/>
          &nbsp;               1 0   New stack<br/>
          <br/>
          &nbsp;     3 4 5 6 7 8 9   Your deck<br/>
          &nbsp;             2 1 0   New stack<br/>
          <br/>
          Several steps later...<br/>
          <br/>
          &nbsp;                 9   Your deck<br/>
          &nbsp; 8 7 6 5 4 3 2 1 0   New stack<br/>
          <br/>
          &nbsp;                     Your deck<br/>
          &nbsp; 8 7 6 5 4 3 2 1 0   New stack<br/>
        </code>
      </pre>
      <p>
        Finally, pick up the new stack you've just created and use it
        as the deck for the next technique.
      </p>
      <p>
        <strong>To cut N cards</strong>, take the top N cards off the top
        of the deck and move them as a single unit to the bottom of the
        deck, retaining their order. For example, to cut 3:
      </p>
      <pre>
        <code>
          Top          Bottom<br/>
          0 1 2 3 4 5 6 7 8 9   Your deck<br/>
          <br/>
          &nbsp;     3 4 5 6 7 8 9   Your deck<br/>
          0 1 2                 Cut cards<br/>
          <br/>
          3 4 5 6 7 8 9         Your deck<br/>
          &nbsp;             0 1 2   Cut cards<br/>
          <br/>
          3 4 5 6 7 8 9 0 1 2   Your deck<br/>
        </code>
      </pre>
      <p>
        You've also been getting pretty good at a version of this
        technique where N is negative! In that case, cut (the absolute
        value of) N cards from the bottom of the deck onto the top.
        For example, to cut -4:
      </p>
      <pre>
        <code>
          Top          Bottom<br/>
          0 1 2 3 4 5 6 7 8 9   Your deck<br/>
          <br/>
          0 1 2 3 4 5           Your deck<br/>
          &nbsp;           6 7 8 9   Cut cards<br/>
          <br/>
          &nbsp;       0 1 2 3 4 5   Your deck<br/>
          6 7 8 9               Cut cards<br/>
          <br/>
          6 7 8 9 0 1 2 3 4 5   Your deck<br/>
        </code>
      </pre>
      <p>
        <strong>To deal with increment N</strong>, start by clearing
        enough space on your table to lay out all of the cards
        individually in a long line. Deal the top card into the
        leftmost position. Then, move N positions to the right and
        deal the next card there. If you would move into a position
        past the end of the space on your table, wrap around and keep
        counting from the leftmost card again. Continue this process
        until you run out of cards.
      </p>
      <p>
        For example, to deal with increment 3:
      </p>
      <pre>
        <code>
          0 1 2 3 4 5 6 7 8 9   Your deck<br/>
          . . . . . . . . . .   Space on table<br/>
          ^                     Current position<br/>
          <br/>
          Deal the top card to the current position:<br/>
          <br/>
          &nbsp; 1 2 3 4 5 6 7 8 9   Your deck<br/>
          0 . . . . . . . . .   Space on table<br/>
          ^                     Current position<br/>
          <br/>
          Move the current position right 3:<br/>
          <br/>
          &nbsp; 1 2 3 4 5 6 7 8 9   Your deck<br/>
          0 . . . . . . . . .   Space on table<br/>
          &nbsp;     ^               Current position<br/>
          <br/>
          Deal the top card:<br/>
          <br/>
          &nbsp;   2 3 4 5 6 7 8 9   Your deck<br/>
          0 . . 1 . . . . . .   Space on table<br/>
          &nbsp;     ^               Current position<br/>
          <br/>
          Move right 3 and deal:<br/>
          <br/>
          &nbsp;    3 4 5 6 7 8 9   Your deck<br/>
          0 . . 1 . . 2 . . .   Space on table<br/>
          &nbsp;           ^         Current position<br/>
          <br/>
          Move right 3 and deal:<br/>
          <br/>
          &nbsp;       4 5 6 7 8 9   Your deck<br/>
          0 . . 1 . . 2 . . 3   Space on table<br/>
          &nbsp;                 ^   Current position<br/>
          <br/>
          Move right 3, wrapping around, and deal:<br/>
          <br/>
          &nbsp;         5 6 7 8 9   Your deck<br/>
          0 . 4 1 . . 2 . . 3   Space on table<br/>
          &nbsp;   ^                 Current position<br/>
          <br/>
          And so on:<br/>
          <br/>
          0 7 4 1 8 5 2 9 6 3   Space on table<br/>
        </code>
      </pre>
      <p>
        Positions on the table which already contain cards are
        still counted; they're not skipped. Of course, this technique
        is carefully designed so it will never put two cards in the
        same position or leave a position empty.
      </p>
      <p>
        Finally, collect the cards on the table so that the leftmost
        card ends up at the top of your deck, the card to its right
        ends up just below the top card, and so on, until the rightmost
        card ends up at the bottom of the deck.
      </p>
      <p>
        The complete shuffle process (your puzzle input) consists of
        applying many of these techniques. Here are some examples
        that combine techniques; they all start with a <strong>factory
        order</strong> deck of 10 cards:
      </p>
      <pre>
        <code>
          deal with increment 7<br/>
          deal into new stack<br/>
          deal into new stack<br/>
          Result: 0 3 6 9 2 5 8 1 4 7<br/>
        </code>
      </pre>
      <pre>
        <code>
          cut 6<br/>
          deal with increment 7<br/>
          deal into new stack<br/>
          Result: 3 0 7 4 1 8 5 2 9 6<br/>
        </code>
      </pre>
      <pre>
        <code>
          deal with increment 7<br/>
          deal with increment 9<br/>
          cut -2<br/>
          Result: 6 3 0 7 4 1 8 5 2 9<br/>
        </code>
      </pre>
      <pre>
        <code>
          deal into new stack<br/>
          cut -2<br/>
          deal with increment 7<br/>
          cut 8<br/>
          cut -4<br/>
          deal with increment 7<br/>
          cut 3<br/>
          deal with increment 9<br/>
          deal with increment 3<br/>
          cut -1<br/>
          Result: 9 2 5 8 1 4 7 0 3 6<br/>
        </code>
      </pre>
      <p>
        Positions within the deck count from 0 at the top, then 1
        for the card immediately below the top card, and so on to
        the bottom. (That is, cards start in the position matching
        their number.)
      </p>
      <p>
        After shuffling your <strong>factory order</strong> deck of
        10007 cards, <strong>what is the position of card 2019?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">2480</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        After a while, you realize your shuffling skill won't improve much
        more with merely a single deck of cards. You ask every 3D printer
        on the ship to make you some more cards while you check on the ship
        repairs. While reviewing the work the droids have finished so far,
        you think you see <strong className="green">Halley's Comet</strong> fly
        past!
      </p>
      <p>
        When you get back, you discover that the 3D printers have combined
        their power to create for you a single, giant, brand new, <strong>factory
        order</strong> deck of <strong>119315717514047 space cards</strong>.
      </p>
      <p>
        Finally, a deck of cards worthy of shuffling!
      </p>
      <p>
        You decide to apply your complete shuffle process (your puzzle input)
        to the deck <strong>101741582076661 times in a row</strong>.
      </p>
      <p>
        You'll need to be careful, though &mdash; one wrong move with this
        many cards and you might <strong>overflow</strong> your entire ship!
      </p>
      <p>
        After shuffling your new, giant, <strong>factory order</strong> deck
        that many times, <strong>what number is on the card that ends up in
        position 2020?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">62416301438548</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
