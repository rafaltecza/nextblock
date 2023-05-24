import {StyledSparkContainer} from "@components/atoms/Spark/Spark.styled";
import CustomImage from "@components/atoms/Image/Image";

export interface SparkProps {
    color?: string;
    size?: string;
    width?: number;
    height?: number;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
}

const Spark = ({ color = 'Blue', size, width = 300, height = 300, ...props }) => {
    return (
        <StyledSparkContainer color={color} size={size} {...props}>
            <CustomImage animate={true} src={`/images/icons/glimmer/Glimmer_${color}.png`} alt={''} width={width} height={height}/>
        </StyledSparkContainer>
    );
}

export default Spark;