import styled from "styled-components";
import {SparkProps} from "@components/atoms/Spark/Spark";

export const StyledSparkContainer = styled.div<SparkProps>`
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
  
`