import React from 'react';
import { Link } from 'react-router-dom';

export default function Articles () {
  return (
    <div className="articles">
      
      <h3> Articles </h3> 

      <div className="articles-list">

        <Link to="/articles/bewareofdebtshuffleprograms" className="links">
        Beware of Debt Shuffle Programs</Link> 
        <br /><br />

        <Link to="/articles/taxwriteoffmyth" className="links"> 
        Tax Write Off Myth</Link>
        <br /><br />
        
        <Link to="/articles/interestcostsandprepayment" className="links">
        Interest Costs and Pre-Payments</Link>
        <br /><br />

        <Link to="/articles/investorprepaymortgage" className="links">
        Invest or Pre-pay Mortgage?</Link>
        <br /><br />
      
        <Link to="/articles/imagine" className="links">
        Imagine ...</Link>
        <br /><br />

      </div>
    </div> 
  )
}
