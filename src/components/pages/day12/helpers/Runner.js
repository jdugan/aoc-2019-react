import IntegerUtil from "../../../../util/Integers"
import OrbitGroup  from "./OrbitGroup"

class Runner {
  constructor(data) {
    this.data  = data
  }

  compute(part, env) {
    if (part === "1") {
      const steps = (env === 'test') ? 100 : 1000
      return this.totalEnergyForSteps(steps)
    }
    return this.stepsToOrbit()
  }

  // ========== RUNNERS ===================================

  stepsToOrbit() {
    const group   = new OrbitGroup([...this.data])
    const periods = Object.values(group.periods())
    const orbits  = periods.reduce(IntegerUtil.lowestCommonMultiple, 1)
    return orbits
  }

  totalEnergyForSteps(n = 1000) {
    const group = new OrbitGroup([...this.data])
    for (let i = 1; i <= n; i++) {
      group.applyNewton()
    }
    return group.calculateTotalEnergy()
  }
}

export default Runner
