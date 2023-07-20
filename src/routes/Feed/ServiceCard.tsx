import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import styled from "@emotion/styled"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <StyledTitle>🌟 Service</StyledTitle>
      <StyledWrapper>
        <a href={`${CONFIG.projects[0].href}`} rel="noreferrer" target="_blank">
          <AiFillCodeSandboxCircle className="icon" />
          <div className="name">{CONFIG.projects[0].name}</div>
        </a>
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #ffffff;
  > a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: #6b7280;
    cursor: pointer;

    :hover {
      color: #000000;
      background-color: #f3f4f6;
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
