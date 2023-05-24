import DocumentTemplate from "@components/templates/DocumentTemplate/DocumentTemplate";
import {
    DocumentParagraph,
    DocumentSubtitle,
    DocumentTitle
} from "@components/templates/DocumentTemplate/DocumentTemplate.styled";

const Privacy = () => {
    const companyNameShort = 'kryptonim.com';
    const companyName = 'Kryptonim Spółka z ograniczoną odpowiedzialnością';
    const companyUrl = 'https://kryptonim.com';
    const supportEmail = 'support@kryptonim.com';

    return (
        <DocumentTemplate>
            <DocumentTitle className={"center"}>AML/KYC policy</DocumentTitle>
            <DocumentSubtitle>Introduction:</DocumentSubtitle>
            <DocumentParagraph>
                Our company operates a cryptocurrency exchange platform that allows customers to
                buy, sell, and exchange cryptocurrency. As an obliged entity, within the meaning of
                the Directive (EU) 2015/849 of the European Parliament and of the Council of 20 May
                2015 on the prevention of the use of the financial system for the purposes of money
                laundering or terrorist financing, amending Regulation (EU) No 648/2012 of the
                European Parliament and of the Council, and repealing Directive 2005/60/EC of the
                European Parliament and of the Council and Commission Directive 2006/70/EC,
                therefore we are obliged to apply financial security measures.
            </DocumentParagraph>

            <DocumentSubtitle>Introduction:</DocumentSubtitle>
            <DocumentParagraph>
                Our company operates a cryptocurrency exchange platform that allows customers to
                buy, sell, and exchange cryptocurrency. As an obliged entity, within the meaning of
                the Directive (EU) 2015/849 of the European Parliament and of the Council of 20 May
                2015 on the prevention of the use of the financial system for the purposes of money
                laundering or terrorist financing, amending Regulation (EU) No 648/2012 of the
                European Parliament and of the Council, and repealing Directive 2005/60/EC of the
                European Parliament and of the Council and Commission Directive 2006/70/EC,
                therefore we are obliged to apply financial security measures.
            </DocumentParagraph>

            <DocumentParagraph>
                We are registered in the Register of activities in the field of virtual currencies,
                authorized by the relevant supervisory units acting on behalf of the Polish
                Financial Supervision Authority (Komisja Nadzoru Finansowego). Our entry number is
                RDWW-649.
            </DocumentParagraph>

            <DocumentParagraph>
                As part of our commitment to ensuring the integrity of our platform and preventing
                it from being used for money laundering, terrorist financing, or other illegal
                activities, we have implemented a comprehensive Anti-Money Laundering (AML) and
                Know-Your-Customer (KYC) policy. Kryptonim has introduced an AML Policy and the
                present document is a legal note for users which outlines our approach to AML/KYC
                compliance and the measures we have put in place to detect and prevent illicit
            </DocumentParagraph>

            <DocumentSubtitle>Customer Due Diligence (CDD):</DocumentSubtitle>

            <DocumentParagraph>
                We will conduct customer due diligence procedures for all our customers before they
                can use our services. This includes verifying their identity, address, and source of
                funds. To do this, we will ask customers to provide us with personal information,
                such as their name, address, date of birth, and government-issued identification
                documents, such as a passport or driver&apos;s license. We might ask our customers to
                provide proof of their address, such as a utility bill or bank statement, and to
                explain the source of their funds. We may use third-party verification services to
                verify customer information, and we reserve the right to refuse service to anyone
                who fails to provide the requested information.
            </DocumentParagraph>

            <DocumentSubtitle>Risk-Based Approach:</DocumentSubtitle>

            <DocumentParagraph>
                We will adopt a risk-based approach to our AML/KYC compliance measures. This means
                that we will assess the risk posed by each customer based on factors such as their
                transaction history, country of origin, etc. Customers who are deemed to be higher
                risk, such as those conducting large transactions or those from high-risk countries,
                will be subject to enhanced due diligence procedures. This may include additional
                identity verification measures, such as face-to-face interviews, and more frequent
                monitoring of their transactions and activities on our platform. If we decide that
                the risk associated with a particular transaction is too high, we might have to
                decide to not go through with the transaction.
            </DocumentParagraph>

            <DocumentSubtitle>Ongoing Monitoring:</DocumentSubtitle>

            <DocumentParagraph>
                We will monitor customer transactions and activities on an ongoing basis to identify
                suspicious or potentially illegal activities. This includes monitoring for unusual
                transaction patterns, such as multiple transactions of similar amounts, and
                monitoring for transactions that are inconsistent with a customer&apos;s profile or usual
                behavior. We will also monitor for transactions that involve high-risk countries,
                politically exposed persons, or other individuals or entities that are subject to
                sanctions or other regulatory measures. If we identify any suspicious activities or
                transactions, we will promptly report them to the relevant authorities.
            </DocumentParagraph>

            <DocumentSubtitle>Record Keeping:</DocumentSubtitle>
            <DocumentParagraph>
                We will maintain proper records of all customer transactions and identity
                verification documents as required by law. These records will be securely stored and
                made available to regulatory authorities upon request. We will also maintain records
                of any suspicious activities or transactions that we report to the authorities.
            </DocumentParagraph>

            <DocumentSubtitle>Training and Awareness:</DocumentSubtitle>
            <DocumentParagraph>
                We will train our employees on AML/KYC compliance procedures and ensure that they
                are aware of their responsibilities in detecting and reporting suspicious
                activities. This includes providing regular training and updates on regulatory
                developments and new risks and threats.
            </DocumentParagraph>

            <DocumentSubtitle>Reporting:</DocumentSubtitle>
            <DocumentParagraph>
                We will promptly report any suspicious activities or transactions to the relevant
                authorities as required by law. This includes filing suspicious activity reports
                with the appropriate financial crimes enforcement and other relevant authorities in
                other jurisdictions. We will also cooperate with law enforcement and regulatory
                authorities in their investigations of any suspicious activities or transactions
                that are reported to them.
            </DocumentParagraph>

            <DocumentSubtitle>Conclusion:</DocumentSubtitle>
            <DocumentParagraph>
                We are committed to complying with all AML/KYC regulations and will take appropriate
                measures to prevent our platform from being used for money laundering or other
                illegal activities. Our AML/KYC policy is designed to detect and prevent illicit
                activities on our platform and to ensure the integrity of our services. We will
                continue to monitor regulatory developments and update our policies and procedures
                as necessary to ensure compliance with changing requirements.
            </DocumentParagraph>

            <DocumentSubtitle>Contact:</DocumentSubtitle>
            <DocumentParagraph>
                If you want to find out more about our AML/KYC policies, do not hesitate to contact
                us by sending us an email to the following address:&nbsp;
                <a href={`mailto: ${supportEmail}`}>{supportEmail}</a>.
            </DocumentParagraph>

        </DocumentTemplate>
    )
};

export default Privacy;


