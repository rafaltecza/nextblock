import Link from "next/link";
import * as S from "./Footer.styled";

const Footer = () => {
    return (
        <footer>
            <S.FooterContainer>
                <Link href={'/terms'}>Terms</Link>
                <Link href={'/privacy'}>Privacy</Link>
                <Link href={'/aml-kyc'}>AML/KYC</Link>
            </S.FooterContainer>

        </footer>
    );
}

export default Footer;