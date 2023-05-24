import DocumentTemplate from "@components/templates/DocumentTemplate/DocumentTemplate";
import {
    DocumentOrderedList,
    DocumentSubtitle,
    DocumentTitle
} from "@components/templates/DocumentTemplate/DocumentTemplate.styled";

const Terms = () => {
    const companyNameShort = 'kryptonim.com';
    const companyName = 'Kryptonim Spółka z ograniczoną odpowiedzialnością';
    const companyUrl = 'https://kryptonim.com';
    const supportEmail = 'support@kryptonim.com';

    return (
        <DocumentTemplate>
            <DocumentTitle className={"center"}>{companyNameShort} terms & conditions</DocumentTitle>
            <DocumentSubtitle>I. Preliminary provisions</DocumentSubtitle>
            <DocumentOrderedList>
                <li className="list__item">
                    These provisions constitute the rules and regulations (hereinafter referred to as:
                    Terms and Conditions) within the meaning of Article 8 of the Act of 18 July 2002
                    on electronic services (Polish Journal of Laws No. 144, item 1204, as amended).
                </li>
                <li className="list__item">
                    The platform <a href={companyUrl}>{ companyUrl }</a> (hereinafter: Platform) is owned and operated
                    by the is operated by { companyName }, a limited
                    liability company with its registered office in Warsaw (hereinafter: Company).
                </li>
                <li className="list__item">
                    For the purposes of these Terms and Conditions, the following definitions shall be
                    established:
                    <DocumentOrderedList>
                        <li className="list__item">
                            <span className="text--bold">User</span> – a natural person of full legal capacity
                            who has accepted the Terms & Conditions and entered into an agreement for the
                            provision of services (any of them).
                        </li>
                        <li className="list__item">
                            <span className="text--bold">Services</span> – services provided by the Company
                            through the Platform.
                        </li>
                        <li className="list__item">
                            <span className="text--bold">Terms and Conditions</span> – the present document.
                        </li>
                        <li className="list__item">
                            <span className="text--bold">Company</span> - {companyName}, a limited liability company with its registered office in
                            Warsaw (00-844) at Plac Europejski 1/40, entered in the National Business
                            Register kept by the District Court for the Capital City of Warsaw in Warsaw,
                            13th Commercial Division of the National Court Register under KRS No.:
                            0001017630, NIP: 5273040828 (Tax Identification Numberf), REGON:
                            52438515800000.
                        </li>
                        <li className="list__item">
                            <span className="text--bold">Platform</span> - the website operated by the Company
                            at the address <a href={companyUrl}>{companyUrl}</a>.
                        </li>
                        <li className="list__item">
                            <span className="text--bold">Virtual Currency</span> - any form of currency that
                            exists digitally or virtually and uses cryptography to secure transactions.
                            Cryptocurrencies don&apos;t have a central issuing or regulating authority, instead
                            using a decentralized system to record transactions and issue new units.
                        </li>
                    </DocumentOrderedList>
                </li>
                <li className="list__item">
                    Terms and Conditions set out the principles for the provision of electronic
                    services by the Platform and the principles for its use by Users, including the
                    principles for the conclusion of agreements, authorization of transactions, fees
                    for services provided by the Platform.
                </li>
                <li className="list__item">
                    All trademarks, including logos and other designations displayed on the Platform
                    are the property of the Company or its business partners. The User may not
                    distribute or copy the content of the Site without the consent of the Company or
                    its partners.
                </li>
                <li className="list__item">
                    Before using the resources and services provided by the Platform, it is mandatory
                    to read and accept the Terms and Conditions. If you do not agree with all the
                    guidelines, you must immediately refrain from further actions and leave the
                    Platform.
                </li>
                <li className="list__item">
                    The Platform performs its services in the territory of the countries of the
                    European Economic Area and the United Kingdom. Transactions for customers outside
                    this area or located outside this area at the time of ordering and performing the
                    Services are not permitted.
                </li>
                <li className="list__item">
                    The User declares that he/she is aware that there are risks associated with
                    investing in Virtual Currencies, which include, but are not limited to, the
                    possibility of losing all funds so invested, which may result from uncontrolled
                    fluctuations in virtual currency exchange rates.
                </li>
                <li className="list__item">
                    The Platform does not dispose of Users&apos; funds and only undertakes activities aimed
                    at providing the services described in these Terms and Conditions to the User.
                </li>
                <li className="list__item">
                    It is forbidden for Users to provide any unlawful content, including carrying out
                    any actions that would disrupt or harm the functioning of the Platform.
                </li>
                <li className="list__item">
                    Technical requirements for using the services of the Platform:
                    <DocumentOrderedList>
                        <li className="list__item">
                            connection to the Internet,
                        </li>
                        <li className="list__item">
                            correctly configured browser,
                        </li>
                        <li className="list__item">
                            up-to-date, active and correctly configured email account,
                        </li>
                        <li className="list__item">
                            cookies and Java Script enabled,
                        </li>
                        <li className="list__item">
                            software for reading PDF files.
                        </li>
                    </DocumentOrderedList>
                    In the event that the User uses hardware or software which does not meet the
                    technical requirements specified above, the Platform does not guarantee proper
                    functioning and stipulates that this may have a negative impact on the quality and
                    course of the ordered transaction.
                </li>
            </DocumentOrderedList>

            <DocumentSubtitle>II. Company’s Rights and Obligations</DocumentSubtitle>

            <DocumentOrderedList className="list">
                <li className="list__item">
                    The Platform offers electronic services, consisting of mediating and supporting
                    the process of buying and selling cryptocurrency units in distributed ledger
                    systems based on Virtual Currencies cryptography, as well as conducting
                    cryptocurrency transactions directly with the Platform. The expansion of the range
                    of Virtual Currencies available for purchase by the User takes place by updating
                    the offer on the Platform and thus does not constitute and does not require an
                    amendment to the Terms and Conditions.
                </li>
                <li className="list__item">
                    The Company does not offer the service of creating electronic wallets to store
                    Virtual Currencies. The User must own such a wallet in order to carry out
                    transactions using Virtual Currencies. The Platform asks Users to be cautious when
                    storing Virtual Currencies due to the risk of theft (e.g. by a hacker) or loss due
                    to other technical disturbances.
                </li>
                <li className="list__item">
                    The Company is not responsible for a possible loss of Virtual Currency by the User
                    when such a situation results from factors on which the Company has no influence,
                    e.g. equipment failures, errors in the system of exchanging Virtual Currency,
                    negligence of third parties not connected to the Company and Platform and the
                    Users themselves.
                </li>
                <li className="list__item">
                    The Company is not responsible for the consequences of the acquisition and holding
                    of Virtual Currencies by Users, including taxation.
                </li>
                <li className="list__item">
                    The Company does not provide investment advice, including on Virtual Currencies.
                </li>
                <li className="list__item">
                    Through the Platform, the Company shall ensure that Users are matched with offers
                    available on the Virtual Currency market in order for them to conclude
                    transactions of Virtual Currencies in the form of their purchase and sale
                    (intermediation).
                </li>
                <li className="list__item">
                    By ordering a transaction, the User declares that they are aware that there are
                    risks associated with investing in Virtual Currencies, which include, among other
                    things, the possibility of losing all the funds so invested, which may result from
                    uncontrolled fluctuations in the Virtual Currency markets.
                </li>
                <li className="list__item">
                    The provision of services through the Platform is provided for a fee, the
                    intermediation implies the need to pay a commission to the Company, the amount of
                    which is determined depending on the type of service as a percentage and is
                    visible during the transaction on the Platform.
                </li>
                <li className="list__item">
                    Due to the specific nature of the Virtual Currency market, the Platform does not
                    guarantee the execution of sales or purchase transactions at the general exchange
                    rate presented on the Platform. The value of the exchange rate on the Platform is
                    for information purposes only. The exact exchange rate with a time limit for its
                    application will be indicated to the User before the purchase or sale is made.
                </li>
                <li className="list__item">
                    The Company does not guarantee a profit on the change of the exchange rate
                    difference of Virtual Currencies.
                </li>
                <li className="list__item">
                    The Company reserves the right to withhold access to certain functionalities to
                    the User at the moment of the User&apos;s willingness to exceed the limits established
                    (within a single transaction, the User may purchase or sell Virtual Currencies of
                    the equivalent of 1,000.00 (one thousand) euros within 24 hours.
                </li>
                <li className="list__item">
                    In the event that circumstances arise in which the Company is forced to carry out
                    additional verification of a payment received from the User or an order placed for
                    a transaction, the Company reserves the right to withhold the payment of Virtual
                    Currencies or funds to the User until the doubts are clarified, including due to
                    the obligations of the
                </li>
            </DocumentOrderedList>

            <DocumentSubtitle>III. User’s Rights and Obligations</DocumentSubtitle>

            <DocumentOrderedList>
                <li className="list__item">
                    The User of the Platform may be any natural person of full age. The Platform does
                    not allow the provision of services to entities other than natural persons.
                </li>
                <li className="list__item">
                    By using the services of the Platform, the User declares that the data provided by
                    them are true and that they are the sole beneficiary of the transaction being
                    performed. The Platform shall not be held liable in any way for incorrect data
                    provided by the User.
                </li>
                <li className="list__item">
                    The Platform does not require its Users to register an account, but in order to
                    carry out transactions using Virtual Currencies, it is necessary to provide an
                    e-mail address and the address of the cryptocurrency wallet, as well as to read
                    and accept the Terms and Conditions; to consent to the processing of their
                    personal data in order to process the transaction.
                </li>
            </DocumentOrderedList>

            <DocumentSubtitle>IV. Services</DocumentSubtitle>

            <DocumentOrderedList>
                <li className="list__item">
                    Carrying out transactions on the Platform begins with performing the actions
                    specified in section III. point 3 of the Terms and Conditions. Then, using the
                    appropriate form, the User submits an instruction to buy or sell Virtual
                    Currencies of his/her choice (from the offer of the Platform), indicates details
                    of the payment card to be used to pay the purchase price of Virtual Currencies or
                    to receive fiat money from the sale of Virtual Currencies, the User is then
                    presented with a summary of the transaction. As a final step, the User must
                    provide the address of his/her cryptocurrency wallet. If the transaction is
                    approved, it is executed by the Platform in accordance with the parameters
                    indicated. If the time indicated in the summary has elapsed, it is automatically
                    updated to the latest exchange rate. The cash or Virtual Currencies obtained from
                    the transaction are then deposited by the Platform, according to the User&apos;s
                    instructions - to the payment card or cryptocurrency wallet indicated by the User.
                </li>
                <li className="list__item">
                    The Platform, once the transaction has been carried out, will send an email to the
                    User&apos;s address, within which it will inform of the transaction carried out and its
                    exact parameters, in particular the amount of Virtual Currency purchased/sold by
                    the User and the rate approved at the time of the transaction for the User.
                </li>
                <li className="list__item">
                    The Company offers the following services through the Platform:
                    <DocumentOrderedList>
                        <li className="list__item">
                            providing the User with information regarding the price parameter of the offer
                            to buy or sell Virtual Currency for his/her perusal,
                        </li>
                        <li className="list__item">
                            providing the possibility to make transactions for the purchase or sale of
                            Virtual Currencies through the Platform.
                        </li>
                    </DocumentOrderedList>
                </li>
                <li className="list__item">
                    In the case of a reasonable suspicion that the transaction may violate the current
                    anti-money laundering and counter financing of terrorism laws, the Company will
                    suspend the transaction until the matter is clarified.
                </li>
            </DocumentOrderedList>

            <DocumentSubtitle>V. Buying Virtual Currencies</DocumentSubtitle>

            <DocumentOrderedList>
                <li className="list__item">
                    In order to purchase Virtual Currencies, the User selects the option to purchase a
                    particular Virtual Currency in the transaction form on the Platform.
                </li>
                <li className="list__item">
                    The information about the option available for the purchase of Virtual Currencies
                    for and on behalf of the User on the Platform constitutes an invitation to treat,
                    and the Platform acts as an intermediary in the purchase of Virtual Currency for
                    the User or acts as the other party to the transaction (here as a seller).
                </li>
                <li className="list__item">
                    The User, by entering how much money in the currency of their choice they wish to
                    exchange into a given Virtual Currency, makes an invitation to treat. The form
                    automatically converts the number of units of a given Virtual Currency that the
                    User can receive at the exchange rate indicated in the form at the time of
                    ordering. The rate depends on the offers available on the market, is a reflection
                    of the most advantageous market offer that the Company can offer at that moment,
                    and is also limited in time.
                </li>
                <li className="list__item">
                    The user confirms the data entered in the order form by selecting the ‘Confirm;
                    button.
                </li>
                <li className="list__item">
                    In the next step, the Platform’s system checks whether the User has indicated the
                    correct electronic wallet to which Virtual Currencies are to be transferred. If
                    the User has not done so, the Platform will enable them to change it.
                </li>
                <li className="list__item">
                    Once the Platform approves the transaction, the system generates a confirmation of
                    the order, including being sent automatically to the User&apos;s e-mail.
                </li>
                <li className="list__item">
                    The use of the Platform as to services of purchase of Virtual Currencies is
                    subject to a fee. The commission fee for the Company is indicated when placing an
                    order for the purchase of Virtual Currencies and is collected automatically on a
                    deduction basis.
                </li>
                <li className="list__item">
                    Due to the volatility of the value of Virtual Currencies, the User acknowledges
                    that the value of Virtual Currency units indicated on the Platform in exchange for
                    the value of funds provided by the User is current at the time of ordering and
                    limited in time, but the final contractual value of Virtual Currencies results
                    from the exchange rate valid at the time of transfer of funds by the User (time of
                    actual payment). Therefore, the amount of sale/purchase of Virtual Currencies from
                    the order form may differ slightly from the amount actually finalized.
                </li>
                <li className="list__item">
                    The finalization of purchase transactions of Virtual Currencies takes place within
                    1 working day from the submission of an order by the User.
                </li>
                <li className="list__item">
                    Virtual Currencies purchased for and on behalf of the User are transferred to the
                    cryptocurrency wallet indicated by the User.
                </li>
                <li className="list__item">
                    In the event that the service cannot be provided, due to the fault of the
                    Platform, the Platform shall return the funds to the User within 3 working days,
                    previously informing the User of this fact by means of an email indicating the
                    parameters of the failed transaction.
                </li>
            </DocumentOrderedList>

            <DocumentSubtitle>VI. Selling Virtual Currencies</DocumentSubtitle>
            <DocumentOrderedList className="list">
                <li className="list__item">
                    In order to sell Virtual Currencies, the User selects the option to sell a
                    particular Virtual Currency in the transaction form on the Platform.
                </li>
                <li className="list__item">
                    Information about the option available for the sale of Virtual Currencies to and
                    on behalf of the User on the Platform constitutes an invitation to treat and the
                    Platform acts as an intermediary in the purchase of Virtual Currency for the User
                    or as the other party to the transaction (here as a buyer).
                </li>
                <li className="list__item">
                    The User, by entering how many units of Virtual Currencies they wish to exchange
                    into cash in the currency of his/her choice, makes an invitation to conclude a
                    contract. The form automatically converts the amount of cash in a currency chosen
                    by the user that the User can receive at the exchange rate indicated in the form
                    at the time of ordering. The exchange rate depends on the offers available on the
                    market and is a reflection of the most favorable market offer that the Platform
                    can offer at the moment, and is also limited in time.
                </li>
                <li className="list__item">
                    The user confirms the data entered in the order form by selecting the ‘Confirm’
                    button.
                </li>
                <li className="list__item">
                    In the next step, the Platform’s system checks whether the User has connected
                    his/her bank account (payment card) to the Account and has it verified.
                </li>
                <li className="list__item">
                    After confirmation, the system generates an order confirmation, which is
                    automatically sent to the User&apos;s e-mail.
                </li>
                <li className="list__item">
                    The use of the Platform as to services of purchase of Virtual Currencies is
                    subject to a fee. The commission fee for the Company is indicated when placing an
                    order for the sale of Virtual Currencies and is charged automatically on a
                    deduction basis.
                </li>
                <li className="list__item">
                    Due to the volatility of the value of Virtual Values, the User acknowledges that
                    the value of Virtual Currency units indicated on the Platform in exchange for the
                    value of funds provided by the User is current at the time of ordering and limited
                    in time, but the final contractual value of Virtual Values results from the
                    exchange rate in force at the time of transfer of funds by the User (time of
                    actual payment). Therefore, the amount of sale/purchase of Virtual Currencies from
                    the order form may differ slightly from the amount actually finalized.
                </li>
                <li className="list__item">
                    The finalization of the transaction shall take place within 1 working day from the
                    deposit of the units of Virtual Currencies for sale.
                </li>
                <li className="list__item">
                    In the event that the service cannot be completed, due to the fault of the
                    Company, the Company shall return to the User the funds in the currency chosen by
                    the User within 3 working days, previously informing the User of this fact by
                    means of a notification in an email specifying the parameters of the failed
                    transaction.
                </li>
            </DocumentOrderedList>

            <DocumentSubtitle>VII. Personal data protection</DocumentSubtitle>
            <p>
                The rules for the processing of Users&apos; personal data are described in the Privacy
                Policy posted on the Platform, in that the Company processes Users&apos; data in order to
                ensure the proper provision of electronic services.
            </p>
            <DocumentSubtitle>VIII. Complaint procedure</DocumentSubtitle>

            <DocumentOrderedList>
                <li className="list__item">
                    The User may, at any time, lodge a complaint regarding the operation of the
                    Platform.
                </li>
                <li className="list__item">
                    A claim may be submitted electronically to the e-mail address:&nbsp;
                    <a href={`mailto: ${supportEmail}`}>{ supportEmail }</a> or in writing to the Company&apos;s
                address, i.e. Plac Europejski 1/40, 00-844 Warsaw, Poland.
                </li>
            <li className="list__item">
                The complaint claim should include:
                <DocumentOrderedList className="list__inner">
                    <li className="list__item">
                        the email address at which the User made a transaction on the Platform,
                    </li>
                    <li className="list__item">
                        description of the circumstances justifying the complaint and the reasons for
                        its submission,
                    </li>
                    <li className="list__item">
                        presentation of the User&apos;s demand related to the complaint.
                    </li>
                </DocumentOrderedList>
            </li>
            <li className="list__item">
                Claims shall be considered within 14 days from the date of receipt of the
                application devoid of formal defects. The User shall be informed of the way in
                which the claim has been handled by e-mail to the address indicated in the claim
                or in writing, if such contact was indicated as appropriate in the claim.
            </li>
            <li className="list__item">
                In the event of a dispute between the Platform and the User as to the validity of
                a refusal to consider a complaint, the User who is a Consumer has the right to use
                out-of-court ways of dealing with complaints and investigating claims. The User
                may use mediation or an amicable court by providing the institution before which
                the proceedings will take place with an appropriate form - an application for
                mediation or an application for consideration of a case before an amicable court.
                At http://ec.europa.eu/consumers/odr, the consumer has access to resolve consumer
                disputes electronically through the EU online platform (ODR platform).
            </li>
            <li className="list__item">
                Users are advised to find out what out-of-court consumer dispute resolution is
                available in their country and the Company will proceed with such a procedure if
                necessary.
            </li>
        </DocumentOrderedList>

        <DocumentSubtitle>IX. Rescission</DocumentSubtitle>
        <p>
            The User does not have the right to withdraw from an ordered exchange transaction.
            The prices of the exchanged values stated on the Platform depend on price movements
            on the Virtual Currency market, over which the Platform has no control, and these
            may occur before the end of the withdrawal period.
        </p>

        <DocumentSubtitle>X. Final provisions</DocumentSubtitle>

        <DocumentOrderedList>
            <li className="list__item">
                These Terms and Conditions shall govern the terms and conditions of the agreement
                concluded between the Company and the User on the intermediation of transactions
                of purchase or sale of Virtual Currencies in exchange for funds, as well as the
                terms and conditions of the agreement of sale of Virtual Currencies between the
                Company and the User.
            </li>
            <li className="list__item">
                The Company reserves the right to change the Terms and Conditions. The Platform
                shall notify registered Users of any change to the Terms and Conditions by email
                with the right to terminate the agreement within 14 days. Amendments to the Terms
                and Conditions shall become effective 14 days after notification. Transactions
                ordered before the date of entry into force of amendments to these Terms and
                Conditions shall be executed on the basis of the provisions in force on the date
                of ordering the transaction.
            </li>
            <li className="list__item">
                Amendments to the Terms and Conditions may be made in particular for the following
                reasons:
                <DocumentOrderedList>
                    <li className="list__item">
                        the need to adapt the provisions of the Terms and Conditions to the provisions
                        of commonly applicable law,
                    </li>
                    <li className="list__item">
                        issuance of a ruling by a common court of law or issuance of a decision by a
                        state authority resulting in the necessity to amend the Terms and Conditions,
                    </li>
                    <li className="list__item">
                        change of regulations within the scope of activity conducted by the Company,
                    </li>
                    <li className="list__item">
                        change of the market situation in the field of activity of the Company,
                    </li>
                    <li className="list__item">
                        improvement by the Company of the security, functionality or level of
                        protection of personal data,
                    </li>
                    <li className="list__item">
                        extension, improvement of the functionalities of the Platform or
                        discontinuation of certain functionalities within the Platform.
                    </li>
                </DocumentOrderedList>
            </li>
            <li className="list__item">
                Any changes to the provisions of the Terms and Conditions will also be announced
                by the Company in the form of a relevant announcement on the Platform.
            </li>
            <li className="list__item">
                The applicable law is Polish law. Any disputes arising between the User and the
                Company will be settled by the court having jurisdiction over the seat of the
                Site, with the reservation that, with regard to consumers, such disputes will be
                settled by the court having jurisdiction over consumer affairs.
            </li>
            <li className="list__item">
                Terms and Conditions shall be governed by and construed in accordance with the
                laws of Poland.
            </li>
            <li className="list__item">
                These Terms and Conditions do not limit any consumer rights to protection that you
                may be entitled to under mandatory provisions of law in your country of residence.
            </li>
        </DocumentOrderedList>


        </DocumentTemplate>
    )
}

export default Terms;