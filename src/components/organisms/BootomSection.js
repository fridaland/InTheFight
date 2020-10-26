import React from "react"
import FirstFooterSection from "../molecules/FirstFooterSection"
import SecondFooterSection from "../molecules/SecondFooterSection"

const BootomSection = ({
  firstContainerContent,
  secondContainerContent,
}) => (
  <div>
    <FirstFooterSection
      {...firstContainerContent}
    />
    <SecondFooterSection
      {...secondContainerContent}
    />
  </div>
)

BootomSection.propTypes = {
}

BootomSection.defaultProps = {
}

export default BootomSection
