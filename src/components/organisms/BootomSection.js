import React from "react"
import FirstBootomSection from "../molecules/FirstBootomSection"
import SecondBootomSection from "../molecules/SecondBootomSection"

const BootomSection = ({
  firstContainerContent,
  secondContainerContent,
}) => (
  <div>
    <FirstBootomSection
      {...firstContainerContent}
    />
    <SecondBootomSection
      {...secondContainerContent}
    />
  </div>
)

BootomSection.propTypes = {
}

BootomSection.defaultProps = {
}

export default BootomSection
