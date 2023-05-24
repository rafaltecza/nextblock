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
            <DocumentTitle className={"center"}>Personal Data Processing Policy</DocumentTitle>
            <DocumentParagraph>
                Pursuant to Regulation (EU) 2016/679 of the European Parliament and of the Council
                of April 27, 2016 on the protection of natural persons with regard to the processing
                of personal data and on the free movement of such data and repealing Directive
                95/46/EC, hereinafter referred to as the &quot;Regulation&quot;, we inform you that:
            </DocumentParagraph>

            <DocumentSubtitle>1. Personal data administrator</DocumentSubtitle>
            <DocumentParagraph>
                The administrator of your personal data is { companyName }, a limited liability company with its registered office in Warsaw
                (00-844) at Plac Europejski 1/40, registered in the National Register of
                Entrepreneurs kept by the District Court for the Capital City of Warsaw in Warsaw,
                XIII Economic Division of the National Court Register under KRS number: 0001017630,
                NIP: 5273040828, REGON: 52438515800000, hereinafter referred to as the &quot;Company&quot;.
            </DocumentParagraph>

            <DocumentSubtitle>2. Contact</DocumentSubtitle>
            <DocumentParagraph>
                In case you would like to contact the us regarding your personal data and how we
                process it, please send an e-mail to&nbsp;
                <a href={`mailto: ${supportEmail}`}>{supportEmail}</a>.
            </DocumentParagraph>

            <DocumentSubtitle>3. Categories of personal data</DocumentSubtitle>
            <DocumentParagraph>
                We process the following categories of your personal data: identification data,
                address data, and contact data, including payment card and cryptocurrency wallet
                numbers used to carry out the process related to operations conducted through the
                Platform located at
                <a href={`mailto: ${supportEmail}`}>{supportEmail}</a>, hereinafter referred to as the &quot;Platform&quot;.
            </DocumentParagraph>

            <DocumentParagraph>
                In terms of social media communication, we process data provided by the User within
                the portal.
            </DocumentParagraph>

            <DocumentParagraph>
                The Company processes both personal data and certain types of information that
                cannot be clearly classified as personal data, as they do not allow for clear
                identification of the User. This kind of information allows us to keep statistics
                and adapt the Platform to the User&apos;s preferences. We analyze the User&apos;s activities
                on the Platform, e.g. the order in which the page is viewed, the device from which
                the User logs in.
            </DocumentParagraph>

            <DocumentParagraph>
                When using the Platform, the User leaves his/her IP address on the server. It is not
                possible for the owner of the Platform to identify a specific person on the basis of
                knowing only the IP address, and the Company does not take such actions.
            </DocumentParagraph>

            <DocumentParagraph>
                When it is necessary to provide the Platform to Users, or it is a legitimate
                interest of the Company or third parties (which is, for example, to ensure the
                security of IT resources or the safety of other Users), the Company is authorized to
                obtain and record data transmitted to the server by Web browsers or Users&apos; devices.
                Such data include: IP address, parameters of software and hardware used by the User,
                pages viewed, mobile device identification number, and other data on devices and use
                of systems. However, the collection of the above information usually does not
                identify the User.
            </DocumentParagraph>

            <DocumentSubtitle>4. Purpose of data processing and legal basis</DocumentSubtitle>

            <DocumentParagraph>
                Personal data may be processed by the Company for the following purposes:
            </DocumentParagraph>

            <DocumentParagraph>
                a) to conclude a contract on the basis of Article 6(1)(b) (GDPR),
                <br />
                b) execution of the concluded contract, or for the purpose of providing services by
                the Company, on the basis of Article 6(1)(b-c) (GDPR),
                <br />
                c) processing of complaints, requests and claims, based on Article 6(1)(b-c) and (f)
                (GDPR),
                <br />
                d) implementation by the Company of activities arising from generally applicable
                laws, on the basis of Article 6(1)(c) (GDPR),
                <br />
                e) marketing, including promotion of products or Platforms offered by the Company,
                communication with the Customer, based on Article 6(1)(f) (GDPR),
                <br />
                f) establishment and investigation of claims by the Company in connection with its
                operations, based on Article 6(1)(f) (GDPR),
                <br />
                g) to detect and limit fraud related to the Company&apos;s operations and for the purpose
                of investigations, pursuant to Article 6(1)(f) (GDPR),
                <br />
                h) for statistical purposes and to improve the operation of the Platform, based on
                Article 6(1)(f) (GDPR).
                <br />
            </DocumentParagraph>

            <DocumentSubtitle>5. Sharing of personal data</DocumentSubtitle>

            <DocumentParagraph>
                Your data may be shared by the Company with:
                <br /> (a) entities and bodies to which the Company is obliged or authorized to make
                personal data available on the basis of generally applicable laws, including
                entities and bodies authorized to receive personal data from the Company or
                authorized to request access to personal data on the basis of generally applicable
                laws, <br />
                b) entities to which the Company has entrusted the performance of agency activities
                on behalf of the Company, <br />
                c) entities with which an entrustment agreement has been concluded or which have
                been authorized to process personal data within the internal structure of the
                Company
            </DocumentParagraph>

            <DocumentSubtitle>6. Transfer of personal data to a third country</DocumentSubtitle>

            <DocumentParagraph>
                Your data may be to countries outside the European Economic Area and the United
                Kingdom in connection with communications with cryptocurrency exchanges or entities
                - custodians of virtual currencies, which may be based outside the EEA.
            </DocumentParagraph>

            <DocumentParagraph>
                The Company uses the Platforms of third parties whose servers are located in the
                United States: Google Analytics (keeping statistics). The operation of Google
                Analytics can be disabled in the settings of your browser or by blocking it by
                selecting the appropriate answer when entering the Platform. On the site there is a
                link to the Google Maps Platform - depending on the settings of your device, the
                Platform may read your location data. All the above-mentioned entities are certified
                and provide the highest level of data protection.
            </DocumentParagraph>

            <DocumentParagraph>
                In order to maintain the security of transactions conducted through the Platform,
                the data processed for this purpose is also transferred to: <br />
                a) Straal Ltd. (company number: 11185551),
                <br />
                b) Sum and Substance Ltd (company number: 09688671),
                <br />
                c) Elliptic Enterprises Limited (company number: 08458210).
            </DocumentParagraph>

            <DocumentParagraph>
                The transfer of data and information is carried out with an appropriate degree of
                protection, such as:
                <br />
                a) cooperation with processors of personal data in countries for which a relevant
                decision of the European Commission has been issued;
                <br />
                b) applying standard contractual clauses issued by the European Commission,
                <br />
                c) application of binding corporate rules approved by the relevant supervisory
                authority.
            </DocumentParagraph>

            <DocumentSubtitle>7. Period of storage of personal data</DocumentSubtitle>

            <DocumentParagraph>
                Your personal data will be stored for the period:
            </DocumentParagraph>

            <DocumentParagraph>
                (a) of the contract concluded with the Company, and after its termination: in
                connection with the Company&apos;s legal obligation under generally applicable laws,
                <br />
                b) necessary for the Company to assert claims in connection with its operations or
                defend itself against claims directed against the Company, based on generally
                applicable laws, taking into account the periods of limitation of claims specified
                in generally applicable laws,
                <br />
                (c) if you object to the processing of your data for statistical and marketing
                purposes
                <br />
                and marketing purposes, they will be deleted immediately,
                <br />
                d) in the case of processing of data on the basis of the consent granted, the data
                will be processed until the consent is withdrawn.
            </DocumentParagraph>

            <DocumentSubtitle>8. Your rights</DocumentSubtitle>

            <DocumentParagraph>
                In connection with the Company&apos;s processing of your personal data, you have:
                <br />
                (a) the right to access your personal data,
                <br />
                (b) the right to rectify your personal data,
                <br />
                (c) the right to erasure of personal data (right to be forgotten),
                <br />
                (d) the right to restrict the processing of personal data,
                <br />
                e) the right to data portability to another controller,
                <br />
                f) the right to object to the processing of data, including profiling, and for the
                purposes of direct marketing, including profiling,
                <br />
                g) the right to withdraw consent where the Company will process your personal data
                based on consent, at any time and in any manner, without affecting the lawfulness of
                processing carried out on the basis of consent before its withdrawal,
                <br />
                h) the right to lodge a complaint with the authority responsible for supervising the
                protection of personal data in the country where the transaction is carried out, if
                you consider that the processing of personal data violates the provisions of the
                Regulation.
            </DocumentParagraph>

            <DocumentSubtitle>9. Source of data - the information applies to personal data obtained by means other
                than from the data subject</DocumentSubtitle>
            <DocumentParagraph>
                Your personal data may originate from your legal representative, principal in the
                case of a power of attorney granted, entrepreneur in relation to whom you remain a
                beneficial owner, employer, party to a contract concluded with the Company, and from
                publicly available sources, in particular, from databases and registers.
            </DocumentParagraph>

            <DocumentSubtitle>10. Requirement to provide data</DocumentSubtitle>
            <DocumentParagraph>
                Provision of your personal data is necessary for the purpose specified in point 4
                above, for:
                <br />
                a) the conclusion and performance of the agreement concluded with the Company, and
                the consequence of not providing your personal data will be the inability to
                conclude and perform the agreement concluded with the Company,
                <br />
                b) provision of Platforms by the Company, and the consequence of not providing your
                personal data will be the lack of provision of Services,
                <br />
                c) processing of complaints, requests or appeals and the consequence of your failure
                to provide your personal data will be the inability to process the complaint,
                request or appeal,
                <br />
                d) to receive offers or marketing of products offered or Services provided by the
                Company, and the consequence of your failure to provide your personal data will be
                the inability to receive such offers or marketing of products or Services.
            </DocumentParagraph>

            <DocumentSubtitle>11. Automated decision-making, including profiling</DocumentSubtitle>
            <DocumentParagraph>
                The Company will not make automated decisions based on your personal data, including
                decisions resulting from profiling. Profiling means any form of automated processing
                of personal data that involves the use of personal data to evaluate certain personal
                factors of an individual, in particular to analyze or forecast aspects of that
                individual&apos;s work, economic situation, health, personal preferences, interests,
                reliability, behavior, location or movement.
            </DocumentParagraph>

            <DocumentSubtitle>12. Additional information</DocumentSubtitle>

            <DocumentParagraph>
                Links to other websites may appear on the Platform. Such websites operate
                independently of the Platform and are not supervised by the Company in any way.
                These websites may have their own privacy policies and regulations, with which we
                recommend that you familiarize yourself.
            </DocumentParagraph>

            <DocumentSubtitle>13. Cookies Policy</DocumentSubtitle>
            <DocumentSubtitle className={"center"}>§1 [GENERAL PROVISIONS]</DocumentSubtitle>
            <DocumentParagraph>
                (1) The Cookies Policy governs the use of cookies, and moreover how information
                about the User is processed through them.
                <br />
                (2) The Site performs functions of obtaining information about the User and his
                behaviour.
                <br />
                (3) Acquisition of information about the User takes place in particular through:
                <br />
                <span className="inner-list">
                    a. saving cookies on the User&apos;s terminal equipment;
                    <br />
                    b. collecting web server logs on the server managed by the Company.
                    <br />
                  </span>
                (4) Personal data collected using cookies may be processed only for the purpose of
                performing certain functions for the User, as described below. Such data shall be
                encrypted in a manner that prevents access by unauthorized persons.
                <br />
                (5) The entity placing cookies on the Platform User&apos;s terminal equipment and
                accessing them is the Company.
                <br />
                (6) Cookies allow, in particular, to recognize the User&apos;s device and appropriately
                display the Platform adapted to his individual preferences, allow the Platform to be
                displayed in the User&apos;s language ‘remembered’ by these files, as well as to use
                other settings of the Platform selected by the User.
                <br />
                (7) Cookies usually contain the name of the Platform from which they originate, the
                time they are stored on the end device and a unique number.
            </DocumentParagraph>

            <DocumentSubtitle className={"center"}>§2 [PURPOSES OF THE COOKIE POLICY]</DocumentSubtitle>
            <DocumentParagraph>
                (1) The purpose of the Cookies Policy is:
                <br />
                <span className="inner-list">
                    a. making the User aware of the extent to which information about him or her is
                    processed through cookies, including his or her personal data, so that the User
                    can make his or her own, free and informed decision on whether to use the
                    Platform;
                    <br />
                    b. generally specifying how and for what purpose the Company collects information
                    about the User and for what purposes it uses this information;
                    <br />
                    c. informing the User to whom and where the Company sends their data.
                    <br />
                  </span>
                (2) With a view to the Users&apos; trust in the Platform, the Company shall exercise due
                diligence to ensure that the data is processed in a safe, reliable, lawful and
                transparent manner for the User.
                <br />
            </DocumentParagraph>

            <DocumentSubtitle className={"center"}>§3 [PURPOSE OF USING COOKIES]</DocumentSubtitle>
            <DocumentParagraph>
                Cookies are used in particular to:
                <br />
                (1) adapt the content of the Platform to the User&apos;s preferences and end device and
                optimizing the use of the Platform. These files allow recording the User&apos;s choices
                as to language, browser, settings of selected elements of the Platform, as well as
                recording information about the User&apos;s location;
                <br />
                (2) create anonymous, aggregated statistics that help to understand how the User
                uses the Platform, which allows to improve their structure and content, excluding
                personal identification of the User. Cookies also help to ensure the refinement and
                smooth operation of the Platform, including testing its performance;
                <br />
                (3) maintain the session of the User of the Platform.
                <br />
            </DocumentParagraph>

            <DocumentSubtitle className={"center"}>§4 [TYPES OF COOKIES]</DocumentSubtitle>
            <DocumentParagraph>
                (1) The Company uses, as a rule, two types of cookies – ‘session’ and ‘permanent’.
                The former are temporary files that remain on the User&apos;s device until the User logs
                out of the Platform or shuts down the software (web browser). ‘Permanent’ files
                remain on the User&apos;s device for the time specified in the parameters of the cookies
                or until they are manually deleted by the User.
                <br />
                (2) The Company uses the following types of cookies:
                <br />
                <span className="inner-list">
        a. in order to provide services through the Platform:
        <br />
        <span className="inner-list">
          i. indispensable - which are absolutely necessary for the proper functioning of
          the Platform or the functionality that the User wants to use;
          <br />
          ii. functional - which are important for the operation of the Platform, as they:
          <br />
          <span className="inner-list">
            1. serve to enrich the functionality of the Platform; without them, the
            Platform will work properly, but it will not be tailored to the User&apos;s
            preferences;
            <br />
            2. serve to ensure a high level of functionality of the Platform; without
            them, the level of functionality of the Platform may decrease, but their
            absence should not prevent the complete use of the Platform;
            <br />
            3. serve the majority of the functionality of the Site; their blocking will
            result in selected functions not working properly.
            <br />
          </span>
        </span>
        b. With regard to the length of time for which cookies will be placed on the
        User&apos;s end device, the Company uses the following types of cookies:
        <br />
        <span className="inner-list">
          i. session cookies - which are placed for the duration of the use of the browser
          (session) and are deleted after closing the browser or logging out of the
          Platform;
          <br />
          ii. persistent cookies - which are not deleted when the browser is closed and
          remain on the User&apos;s device for a specified period of time or without
          expiration, depending on the Platform owner&apos;s settings.
          <br />
        </span>
        c. Due to the origin of the web site administrator who manages cookies, the
        Company uses the following types of cookies:
        <br />
        <span className="inner-list">
          i. own cookies (first-party cookies) - which are placed on Platforms directly by
          the Company;
          <br />
          ii. external cookies (third-party cookies) - which are placed on Platforms by
          entities other than the Company.
          <br />
        </span>
        d. With regard to the purpose for which cookies serve, the Company uses the
        following types of cookies:
        <br />
        <span className="inner-list">
          i. Platform configuration - which enable the setting of features and Platforms
          on the Platform;
          <br />
          ii. Platform security and reliability - which enable verification of
          authenticity and optimization of the performance of the Platform,
          <br />
          iii. session status - which allow you to record information about how you use
          the Platform. These may relate to the most frequently visited Platform or
          possible error messages. Cookies used to record the so-called &quot;session state&quot;
          help to improve the Platform and enhance your browsing experience on the
          Platform;
          <br />
          iv. processes - which enable the smooth operation of the Platform and the
          functions available on them;
          <br />
          v. location - which make it possible to adjust the information displayed to the
          location of the Uses.
          <br />
        </span>
      </span>
            </DocumentParagraph>

            <DocumentSubtitle className={"center"}>§5 [COOKIES VS. PERSONAL DATA]</DocumentSubtitle>
            <DocumentParagraph>
                (1) Cookies, as a rule, do not constitute personal data, but certain information
                stored in such files (e.g. as to preferences), in combination with other information
                about the User, are treated as personal data.
                <br />
                (2) Personal data collected using cookies may be processed only for the purpose of
                performing the specified functions described above for the User. Such data shall be
                encrypted in a manner that prevents access by unauthorized persons.
            </DocumentParagraph>

            <DocumentSubtitle className={"center"}>§6 [DELETION OF COOKIES]</DocumentSubtitle>
            <DocumentParagraph>
                (1) The Company&apos;s authority to store and access cookies is based on the consent
                given by the User. This consent is given by the User when configuring the Internet
                browser or the selected Platform or Platform. The User has the option to return to
                these settings at any time and determine the conditions for storing or accessing
                this information by the Company.
                <br />
                (2) Web browsing software (i.e. web browsers) by default allows cookies to be placed
                on the User&apos;s terminal device. These settings can be changed in such a way as to
                block the automatic handling of cookies in the settings of the web browser or inform
                about their transmission to the User&apos;s device each time.
                <br />
                (3) In order to exercise the right of objection granted by the RODO Regulation, it
                is necessary to log out of all devices and delete cookies from them. The update
                process may take up to 48 hours.
                <br />
                (4) Restricting the use of cookies may affect some of the functionality available
                through the Platform.
            </DocumentParagraph>

            <DocumentSubtitle className={"center"}>§7 [SYSTEM LOGS]</DocumentSubtitle>

            <DocumentParagraph>
                (1) Information about certain behavior of the User is subject to logging in the
                server layer. This data is used solely for the purpose of administering the Platform
                and to ensure the most efficient operation of the hosting Platforms provided to the
                Company.
                <br />
                (2) Viewed resources are identified by URLs. In addition, the record may be subject
                to:
                <br />
                <span className="inner-list">
                    a. time of arrival of the request;
                    <br />
                    b. time of sending the response;
                    <br />
                    c. the name of the User&apos;s station - identification realized by HTTPS protocol;
                    <br />
                    d. information about errors that occurred during the execution of the HTTPS
                    transaction;
                    <br />
                    e. URL of the page previously visited by the User (referer link) - in case the
                    access to the Site was through a link;
                    <br />
                    f. information about the User&apos;s browser;
                    <br />
                    g. IP address information;
                    <br />
                  </span>
                (3) The above data are not associated with specific persons browsing the Platform,
                and are used only for server administration purposes.
            </DocumentParagraph>

        </DocumentTemplate>
    )
};

export default Privacy;


