import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/componentContents.css'; 

export default function About () {
  return (
    <div className="about">
    
      <h3>About Equity Elephant</h3>
      
      <blockquote id='pliny-quote'>
        The elephant is the largest land animal and approaches in intelligence nearest to man. It understands language, obeys commands, and remembers duties it has been taught. It knows alike the pleasures of love and glory, and, to a degree rare even among men, possesses notions of honesty, prudence, and equity.
      </blockquote>

      <div id='pliny'>
        ~ Pliny the Elder, In Praise of Elephants, 77 A.D.
      </div>
      <br />

      <p> The concept for Equity Elephant calculator actually began when I stumbled upon a program called the "Money Merge Account" from United First Financial (you can find the 
        <a href="../articles/interestcost.html">
        youtube video here
        </a>
      ). I was intrigued by the concept behind the Money Merge Account but thought the $3,500 price tag too much. So I hit the internet and discovered a bunch of companies offering similar products at similar high prices.</p>

      <p>Put off by the $2,000 to $3,500 price tags but convinced there was a gem behind all the hype, I decided to create my own mortgage acceleration calculator and, after many months, produced a basic prototype. I then started plugging in numbers and found, to my surprise, that the real reason people can achieve enormous savings and become debt-free years sooner was their discretionary income.</p>

      <p>I discovered that the gem behind all these expensive programs was the power of pre-payments and discretionary income. The actual savings to be attained by shuffling debt from a mortgage account to a HELOC account was actually very small even under optimum conditions; and in fact detrimental under realistic conditions. See 
        <a href="../articles/beware.html">
          <i>Beware of Debt Shuffle Programs.</i>
        </a>
      </p>

      <p>And I realized that what you need is a sophisticated calculator to provide the projections of using discretionary income one way versus another, and the <i>motivation</i> that comes from knowing how much you can save and how soon you can be debt free if you use your discretionary income for prepayments.</p>

      <p>The Equity Elephant calculator provides the knowledge and motivation you need to make better financial decisions. It is a tool everyone should have in their financial tool box.</p>

      <Link to="/about/contact" className="links">Contact</Link>

    </div>   
  )
}
