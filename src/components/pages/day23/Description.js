import React from "react";

const Description = (props) => {
  return (
    <section className="description">
      <h3>
        --- Day 23: Category Six ---
      </h3>
      <p>
        The droids have finished repairing as much of the ship as they can. Their report indicates
        that this was a <strong>Category 6</strong> disaster—not because it was that bad, but
        because it destroyed the stockpile of <strong className="green">Category 6</strong> network
        cables as well as most of the ship's network infrastructure.
      </p>
      <p>
        You'll need to <strong>rebuild the network from scratch</strong>.
      </p>
      <p>
        The computers on the network are standard <strong className="green">Intcode</strong> computers
        that communicate by sending <strong>packets</strong> to each other. There are 50 of them
        in total, each running a copy of the same <strong>Network Interface Controller</strong> (NIC)
        software (your puzzle input). The computers have <strong>network addresses</strong> 0
        through 49; when each computer boots up, it will request its network address via a
        single input instruction. Be sure to give each computer a unique network address.
      </p>
      <p>
        Once a computer has received its network address, it will begin doing work and
        communicating over the network by sending and receiving <strong>packets</strong>. All
        packets contain <strong>two values</strong> named X and Y. Packets sent to a computer
        are queued by the recipient and read in the order they are received.
      </p>
      <p>
        To <strong>send</strong> a packet to another computer, the NIC will use <strong>three
        output instructions</strong> that provide the <strong>destination address</strong> of
        the packet followed by its X and Y values. For example, three output instructions that
        provide the values 10, 20, 30 would send a packet with X=20 and Y=30 to the computer
        with address 10.
      </p>
      <p>
        To <strong>receive</strong> a packet from another computer, the NIC will use
        an <strong>input instruction</strong>. If the incoming packet queue
        is <strong>empty</strong>, provide -1. Otherwise, provide the X value of the
        next packet; the computer will then use a second input instruction to receive
        the Y value for the same packet. Once both values of the packet are read in
        this way, the packet is removed from the queue.
      </p>
      <p>
        Note that these input and output instructions never <strong className="green">block</strong>. Specifically,
        output instructions do not wait for the sent packet to be received—the computer
        might send multiple packets before receiving any. Similarly, input instructions
        do not wait for a packet to arrive—if no packet is waiting, input instructions
        should receive -1.
      </p>
      <p>
        Boot up all 50 computers and attach them to your network. <strong>What is the
        Y value of the first packet sent to address 255</strong>?
      </p>
      <p>
        Your puzzle answer was <strong className="green">17949</strong>.
      </p>
      <br />
      <h3>
        --- Part Two ---
      </h3>
      <p>
        Packets sent to address 255 are handled by a device called a NAT (Not
        Always Transmitting). The NAT is responsible for managing power consumption of the
        network by blocking certain packets and watching for idle periods in the computers.
      </p>
      <p>
        If a packet would be sent to address 255, the NAT receives it instead.
        The NAT remembers only the <strong>last</strong> packet it receives; that is, the
        data in each packet it receives overwrites the NAT's packet memory with the new
        packet's X and Y values.
      </p>
      <p>
        The NAT also monitors all computers on the network. If all computers have <strong>empty
        incoming packet queues</strong> and are continuously trying to receive packets
        without sending packets, the network is considered <strong>idle</strong>.
      </p>
      <p>
        Once the network is idle, the NAT sends only the <strong>last packet it
        received</strong> to address 0; this will cause the computers
        on the network to resume activity. In this way, the NAT can throttle
        power consumption of the network when the ship needs power in other areas.
      </p>
      <p>
        Monitor packets released to the computer at address 0 by the
        NAT. <strong>What is the first Y value delivered by the NAT to the computer
        at address 0 twice in a row?</strong>
      </p>
      <p>
        Your puzzle answer was <strong className="green">12326</strong>.
      </p>
      <p>
        <strong className="gold">Both parts of this puzzle are complete! They
        provide two gold stars: **</strong>
      </p>
    </section>
  )
}

export default Description;
