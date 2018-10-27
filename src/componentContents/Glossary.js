import React from "react";
import "../CSS/componentContents.css";

export default function Glossary() {
  return (
    <div>
      <br />
      <br />
      
      <h2>Glossary</h2>
      <div className="glossary">
        <dl>
          <dt>Amortization</dt>
          <dd>
            The gradual extinction of a debt by means of periodic (usually
            monthly) payments. On a fixed rate amortized loan, the (monthly)
            payment covers the (monthly) interest cost and a portion of the
            principle. As the debt balance is reduced, the interest cost
            decreases. The (monthly) payment remaining the same, the portion
            applied to the principle increases, until the debt is extinct. From
            the Latin: <i>admortire</i> = to kill or extinguish.
          </dd>

          <ul className="glossary-sublist1">
            <li>
              <dt>Amortized payment</dt>
              <dd>
                A constant payment amount that covers interest cost and a
                portion of the principle debt. An amortization payment consists
                of the principle &amp; interest (P&amp;I). (Property taxes and
                homeowners insurance are not part of the mortgage payment.)
              </dd>
            </li>
            <li>
              <dt>Amortization schedule</dt>
              <dd>
                A table or chart detailing the periodic payments of a loan.
              </dd>
            </li>
            <li>
              <dt>Negative amortization</dt>
              <dd>
                A circumstance wherein the loan balance increases for lack of
                interest payments. Instead of being paid, the interest is added
                to the principle already owed.
              </dd>
            </li>
            <li>
              <dt>Amortization function</dt>
              <dd>
                Calculation used to find one of the four amortization data by
                means of the other three. There are four basic data used in
                amortization calculations: balance, rate, term, and payment.
                Three of the four data can be used to find the fourth datum.
              </dd>
            </li>
          </ul>

          <dt>Annual percentage rate (APR)</dt>
          <dd>
            The fee or finance charge expressed as the rate for a whole year
            (versus for a month); the <b>APR</b> is supposed to include all
            other fees and associated costs in order to make it easier to
            compare the cost of loans.
          </dd>

          <ul className="glossary-sublist1">
            <li>
              <dt>Nominal APR</dt>
              <dd>
                A simple annual interest rate; that is, the rate multiplied by
                the number of payments per year.
              </dd>
            </li>
            <li>
              <dt>Effective APR</dt>
              <dd> The interest fee plus compound interest.</dd>
            </li>
          </ul>

          <dt>Average Daily Balance (ADB)</dt>
          <dd>
            A method of calculating the interest cost (or the finance charge),
            by taking the sum total of the balance owed each day in the period
            divided by the total number of days in the period (add up the
            balances for each day of the month and divide by 30). The daily
            balance rises and falls as withdrawals and deposits are made.
          </dd>

          <br />
          <dd>
            Thus, deposits made earlier in the cycle reduce the interest cost by
            lowering the average daily balance sooner.
          </dd>

          <br />
          <dd>
            There are two other rarely used methods for calculating finance
            cost:
          </dd>

          <ul className="glossary-sublist1">
            <li>
              <dt>Adjusted balance</dt>
              <dd>
                The balance due last period minus any payments made during the
                current period and excludes purchases from the calculation. This
                method favors the borrower.
              </dd>
            </li>
            <li>
              <dt>Previous balance</dt>
              <dd>
                The prior period's balance excluding both payments and purchases
                from the calculation. This method favors the lender.
              </dd>
            </li>
          </ul>

          <dt>Balance</dt>
          <dd>
            The loan, the debt, or the debt principle that remains to be
            re-paid, and upon which basis interest is charged. Synonymous with
            principle.
          </dd>
          <br />

          <dt>Bi-weekly payment plan</dt>
          <dd>
            In a biweekly payment plan, payments are made every every two weeks
            (instead of every month) with two results (1) in paying down the
            mortage earlier (every two weeks instead of every month), and more
            importantly (2) in making an extra payment every year. (There are 52
            weeks, or 26 two-week periods, in the year. Therefore, if you make a
            ½ mortgage payment every two weeks, then you will make the
            equivalent of 13 monthly payments per year. 26*½ payments = 13 full
            payments.)
          </dd>
          <br />
          <dd>
            Beware: some lenders continue to credit your account on a monthly
            basis instead of biweekly as payments are received; thereby earning
            interest for themselves on the float (see definition of{" "}
            <a href="glossary.html#float">float</a> below). While other biweekly
            programs only make monthly payments and make a 13th payment at the
            end of the year; thereby earning interest for themselves on the
            float.
          </dd>
          <br />
          <dd>
            So, before you sign the papers, verify that your biweekly payments
            are actually being credited to your account every two weeks.
          </dd>

          <dt>Discretionary income or surplus income</dt>
          <dd>
            Money left over after paying all of one's bills; total income minus
            all necessary expenses.
          </dd>
          <br />

          <dt>Debt-to-income ratio</dt>
          <dd>
            Ratio used by lenders to determine how much you can afford to
            borrow, and is the percentage of your monthly income (before taxes)
            used for debt payments. Often two ratio calculations are used, and
            the pair of them expressed in the notation: 28/36.
          </dd>

          <ul className="glossary-sublist1">
            <li>
              <dt>Front (end) ratio</dt>
              <dd>
                The front end ratio (the "28" in the notation example) measures
                the percentage of income used for housing costs; which for
                renters is rent, and which for homeowners is PITI (plus PMI
                payments and homeowner associations dues, if applicable).
              </dd>
            </li>
            <li>
              <dt>Back (end) ratio</dt>
              <dd>
                The back end ratio measures (the "36" in the notation example)
                the percentage of income used for all monthly debt payments;
                which includes child support, alimony, and legal judgements.
                (Auto and life insurance are not considered debts.) A back ratio
                of 0-36% is considered good, 36-43% manageable, 43-50% risky,
                50-plus% untenable.
              </dd>
            </li>

            <br />
            <dd>
              Conventional financing limits (for obtaining a mortgage) are
              typically 28/36. The
              <a href="http://en.wikipedia.org/wiki/Federal_Housing_Administration">
                FHA
              </a>
              limits are 31/43. The
              <a href="http://en.wikipedia.org/wiki/United_States_Department_of_Veterans_Affairs">
                VA{" "}
              </a>{" "}
              uses only a back ratio limit of 41.
            </dd>
          </ul>

          <dt>Equity</dt>
          <dd>
            Ownership, wealth - the monetary value of property beyond any
            mortgage owed; or, the ownership of a property or business, and the
            right to its value or profits. The property value minus the mortgage
            equals the equity.
          </dd>

          <ul className="glossary-sublist1">
            <li>
              Also means: (1) <i>fairness, justice, impartiality, honesty</i>,
              and (2) <i>the application of the natural law </i>, which embodies
              the principles of justice as discerned by conscience and right
              reason, to the settlement of disputes - as in, for example, the
              equity or wisdom of Solomon. Also known as <i>jurisprudence</i>
              and <i>equity law</i> which is distinct from <i>common law</i> and
              <i>statuatory law</i>.
            </li>
          </ul>

          <dt>Fees</dt>
          <dd>
            <dfn>Fees</dfn> are paid to the lender at the time of closing, and
            may include escrow fees, title fees, appraisal fees,
            document/origination/application/processing fees, and fees
            associated with government loan programs. Often fees are not
            necessary and are only added to increase profits and commissions.
          </dd>

          <dt>Float</dt>
          <dd>
            The interest earned (or saved) during the interval between when a
            check, for example, is written and cashed (assuming that the account
            from which the check is written earns interest). The longer the
            check goes un-cashed, the longer the check-writer earns interest on
            that money.
          </dd>

          <br />
          <dd>
            Float can also signify the time delay between when a check is
            written and when it it cashed.
          </dd>
          <dd>
            By analogy (and with respect to "HELOC checking accounts"), floating
            income is income that comes in, sits for a while, and goes out to
            pay bills.
          </dd>

          <br />
          <dt>Home Equity Line of Credit (HELOC)</dt>
          <dd>
            An open line of credit secured by home equity as collateral. Usually
            taken out as a second mortgage, sometimes as a first. A HELOC is not
            a home equity loan, which is a closed line of credit loan - wherein
            a one-time lump-sum conventional loan is borrowed, usually at a
            fixed interest rate with an amortization schedule. See also line of
            credit.
          </dd>

          <br />
          <dd>
            HELOCs have a specified credit limit that can be borrowed up to
            within an agreed period (typically 5 to 20 years), and usually
            operate under a variable interest rate with an amortization schedule
            that fluxuates according to the average daily balance, similar to a
            credit card. HELOCs often offer debit/credit card and check-writing
            features, and usually cost less than credit cards or other lines of
            credit.
          </dd>
          <br />
          <dd>
            Note well, however, that the home is the underlying collateral and
            that failure to repay the HELOC or meet the loan requirements may
            result in foreclosure.
          </dd>

          <dt>Interest</dt>
          <dd>
            The fee or finance charge for the use of borrowed money; also known
            as the <i>interest cost</i> or <i>interest profit</i> (depending on
            one's perspective).
          </dd>

          <ul>
            <li>
              <dt>Interest cost (or profit)</dt>
              <dd>
                <dfn>Interest cost (or profit)</dfn> is usually expressed as a
                simple dollar amount that the borrower pays the lender over and
                above repayment of principle; and can signify partial or total
                cost, depending on whether the principle is repaid in part or in
                full.
              </dd>
            </li>
            <li>
              <dt>Interest rate</dt>
              <dd>
                The interest fee expressed as a percentage of the money borrowed
                over a period a time (as in an annual percentage rate).
              </dd>
            </li>
            <li>
              <dt>Compound interest</dt>
              <dd>
                Compound interest occurs when interest is added to principle so
                that interest itself earns interest.
              </dd>
            </li>
            <li>
              <dt>Simple interest</dt>
              <dd>
                Simple interest, by contrast, occurs when the interest is not
                added to the principle, but instead paid (as a cost) or received
                (as a profit).
              </dd>
            </li>
          </ul>

          <dt>Line of Credit</dt>
          <dd>
            An agreement between a financial institution (typically a bank) and
            a customer whereby the customer may borrow funds up to a specified
            limit, within an agreed period. Also known as a<i>bank line</i> or{" "}
            <i>credit line</i>. There are two kinds:
            <i>closed</i> and <i>open</i>.
          </dd>
          <ul>
            <li>
              <dt>Closed line of credit</dt>
              <dd>
                A <i>closed line of credit</i> is inflexible. Once you make a
                payment, it becomes permanently applied against the loan, and
                you cannot get the money back. Most mortgages are closed lines
                of credit.
              </dd>
            </li>
            <li>
              <dt>Open line of credit, or revolving line of credit</dt>
              <dd>
                An <i>open line of credit</i> is flexible. You can pay in and
                take out money as you need it, such as occurs for example with a
                credit cards or Home Equity Lines of Credit (HELOC).
              </dd>
            </li>
          </ul>

          <dt>Loan-to-value ratio (LTV ratio)</dt>
          <dd>
            The ratio of a mortgage loan to the property value. A loan-to-value
            ratio of 80% or more is considered risky and generally requires PMI
            Insurance.
          </dd>
          <br />

          <dt>Mortgage</dt>
          <dd>
            Real or personal property offered as collateral for a debt,
            especially one incurred in order to purchase the property, on
            condition that the mortgage or collateral be released upon payment
            of the debt within an agreed period. (From the Latin: <i>mort</i> =
            dead, <i>gage</i> = pledge; it means "pledge to repay until the debt
            is dead".)
          </dd>

          <ul>
            <li className="glossary">
              In colloquial speech, mortgage refers to the loan used to buy a
              home, and is understood to consist of: the principal, interest
              rate, term, and sometimes points and fees.
            </li>
            <li className="glossary">
              Mortgage payments are in arrears, that is, you pay the interest
              due (from the previous month) plus a portion of the principle on
              the first (usually) of the next month.
            </li>
            <li className="glossary">
              Some banks offer bi-weekly payment plans (wherein payments are
              deducted from your bank account every two weeks), but you usually
              have to apply for bi-weekly payment plan up front, or re-finance
              the loan to obtain a bi-weekly schedule, so that the principle
              portion of the payment get credited bi-weekly.
            </li>
          </ul>

          <dt>Principle &amp; Interest (P&amp;I) Payment</dt>
          <dd>
            Synonym for <i>mortgage payment</i>. A short-hand way of
            distinguishing the <i>mortgage payment</i> proper from the mortgage
            related costs of <i>taxes</i> and <i>insurance</i>, which are often
            grouped together as the total mortgage expense (see PITI).
          </dd>
          <br />
          <dt>PITI (Principle, Interest, Taxes, and Insurance)</dt>
          <dd>
            An acronym describing all the costs related to a mortgage. Sometimes
            all four are clumped together as the "mortgage payment". But the
            <i>mortgage payment</i> is, properly speaking, only the
            <i>principle</i> and <i>interest</i> (the <i>P&amp;I payment</i>
            ). While <i>P&amp;I payments</i> terminate upon payoff of the
            <i>principle</i>, <i>property taxes</i> and
            <i>homeowners insurance</i> can continue indefinitely.
          </dd>
          <br />

          <dt>PMI (Private Mortgage Insurance)</dt>
          <dd>
            Insures lenders against borrower defaults on risky loans.
            <i>PMI payments</i> are usually required on mortgage loans that
            exceed an 80% <i>loan-to-value</i> ratio; that is, for mortgages
            obtained with less than a 20% down payment.
          </dd>

          <br />
          <dd>
            For the borrower, <i>PMI payments</i> are just additional
            <i>interest costs</i>. Pre-payments can reduce these costs by
            attaining sooner an 80% or less <i>loan-to-value</i> ratio, thereby
            removing sooner the <i>PMI payments</i> requirement.
          </dd>

          <br />
          <dd>
            Home-improvements, which raise property values and lower
            <i>loan-to-value</i> ratios, also help - especially since many
            lenders refuse to remove <i>PMI payments</i> unless the borrower
            provides a new property appraisal proving that the
            <i>loan-to-value</i> ratio is 80% or less.
          </dd>
          <br />
          <dd>
            The <i>loan-to-value</i> ratio is used to determine the
            <i>PMI rate</i>. The <i>PMI rate</i> multiplied by the
            <i>loan amount</i> equals the monthly <i>PMI payments</i>.
            <i>PMI rates</i> may differ per lender. Common <i>PMI rates</i>
            per <i>LTV ratios</i> are:
          </dd>
          <ul>
            <br />
            <li className="glossary-sublist2">
              If the LTV ratio is 95-99%, then the PMI rate is 0.90%.
            </li>
            <li className="glossary-sublist2">
              If the LTV ratio is 90-95%, then the PMI rate is 0.78%.
            </li>
            <li className="glossary-sublist2">
              If the LTV ratio is 85-90%, then the PMI rate is 0.52%.
            </li>
            <li className="glossary-sublist2">
              If the LTV ratio is 80-85%, then the PMI rate is 0.32%.
            </li>
          </ul>

          <dt>Points or discount points</dt>
          <dd>
            <dfn>Points or discount points</dfn> are pre-paid interest costs,
            which effectively increase the yield for the lender. A point is
            equal to one percent of the mortgage loan. For example, two points
            on a $200,000 loan is equal to $4,000. This $4,000 is interest paid
            upfront instead of over the term in exchange for a "discounted"
            interest rate. For each point paid up front, the interest rate is
            typically reduced by 1/8% (0.125). At some point (usually in 10-20
            years) in the amortization schedule the reduced interest cost will
            break even with the pre-paid interest cost of the points, after
            which time the overall interest cost is less - <b>assuming</b> you
            don't make pre-payments, refinance, or sell the property before that
            time.
          </dd>

          <br />
          <dd>
            Also known as <b>origination fees</b> and <b>broker fees</b>; these
            points or fees are just additional fees lenders like to add to the
            cost of a loan to increase their profits, but are marketed to
            borrowers as a way to reduce the interest rate and, consequently,
            monthly payment amount, mainly for the purpose of qualifying for a
            loan. However, the money paid on points can be used instead to
            increase the down payment, and thereby reduce the loan and monthly
            payment amount.
          </dd>
          
          <dt>Principle</dt>
          <dd>
            The loan amount or borrowed money that is to be re-paid and upon
            which basis interest is charged. A similar term is capital from
            which income or profit (or interest) is derived.
          </dd>
          <br />

          <dt>Rate</dt>
          <dd>
            See <b>interest rate</b>.
          </dd>
          <br />
          <dt>Surplus income</dt>
          <dd>
            See <b>discretionary income</b>.
          </dd>
          <br />

          <dt>Term</dt>
          <dd>
            How long it takes to payoff a loan, or the number of payments over a
            period of time.
          </dd>

          <br />
          <dd>Usually measured in months versus quarters, or semiannually.</dd>

          <br />
          <dd>
            <i>Term in years</i> is the number of monthly payments divided by
            twelve. A term of 360 monthly payments is often expressed as a term
            of 30 years.
          </dd>
        </dl>
      </div>
    </div>
  );
}
