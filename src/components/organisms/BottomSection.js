import React from "react"
import FirstFooterSection from "../molecules/FirstFooterSection"
import SecondFooterSection from "../molecules/SecondFooterSection"

const BottomSection = ({
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

BottomSection.propTypes = {
}

BottomSection.defaultProps = {
}

export default BottomSection
