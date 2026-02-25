'use client'

import { useState } from 'react'

const recentArticles = [
  { title: 'A blanket ban won\'t solve social media\'s ills \u2013 but it can be an effective temporary tool', pub: 'The Globe and Mail', date: 'February 2, 2026', coauthor: 'Helen A. Hayes', url: 'https://www.theglobeandmail.com/opinion/article-social-media-children-ban-users-platforms/' },
  { title: 'How the Next Government can Protect Canada\'s Information Ecosystem', pub: 'The Globe and Mail', date: 'April 7, 2025', coauthor: 'Helen Hayes', url: 'https://www.taylorowen.com/s/How-the-next-government-can-protect-Canadas-information-ecosystem.pdf' },
  { title: 'In a Changed World Canada Faces an Information War. There is an Answer.', pub: 'The Toronto Star', date: 'March 23, 2025', coauthor: 'Peter Macleod', url: 'https://www.taylorowen.com/s/In-a-changed-world-Canada-faces-an-information-war-There-is-an-answer-1.pdf' },
  { title: 'AI is a Threat to Children\'s Lives. How can we build better safeguards?', pub: 'The Globe and Mail', date: 'January 16, 2025', url: 'https://www.taylorowen.com/s/AI-can-be-a-threat-to-childrens-lives-How-can-we-build-safeguards_.pdf' },
  { title: 'Canada\'s Online Harms Act gets the big things right.', pub: 'The Globe and Mail', date: 'March 1, 2024', coauthor: 'Emily Laidlaw', url: 'https://www.theglobeandmail.com/opinion/article-canadas-online-harms-act-gets-the-big-things-right/' },
]

const books = [
  { title: 'Disruptive Power: The Crisis of the State in the Digital Era', detail: 'March 2015, Oxford University Press, New York.', url: 'https://www.amazon.com/Disruptive-Power-Digital-Studies-Politics/dp/0199363862' },
  { title: 'The World Won\'t Wait: Why Canada Needs to Rethink its Foreign Policies', detail: 'December 2015, (ed., with Roland Paris), University of Toronto Press, Toronto.', url: 'https://www.amazon.ca/The-World-Wont-Wait-International/dp/1442626976' },
  { title: 'Journalism After Snowden', detail: 'Columbia University Press (ed with Emily Bell, Smitha Khorana and Jennifer R. Henrichsen) February 2017.', url: 'https://cup.columbia.edu/book/journalism-after-snowden/9780231176132' },
  { title: 'The New Global Journalism: Foreign Correspondence in Transition', detail: 'Tow Center for Digital Journalism, Columbia University, 2014 (ed with Ann Cooper).', url: 'https://www.cjr.org/tow_center_reports/the_new_global_journalism.php' },
  { title: 'Human Security', detail: 'Sage Major Work, Four-Volume Set. London, UK. 2013.', url: 'https://uk.sagepub.com/en-gb/eur/human-security/book240660' },
  { title: 'The Handbook of Human Security', detail: 'Routledge Press, 2013 (ed., with Mary Martin).', url: 'https://www.routledge.com/Routledge-Handbook-of-Human-Security/Martin-Owen/p/book/9780415581288' },
]

const essays = [
  { text: '\u201cCountering the New Red Tech Scare.\u201d The National Post & CIGI. July 31, 2021.', url: 'https://www.cigionline.org/articles/countering-the-new-red-tech-scare/' },
  { text: '\u201cCanada shouldn\u2019t turn away from the difficult task of regulating online speech.\u201d The Globe and Mail. June 25, 2021.', url: 'https://www.theglobeandmail.com/opinion/article-canada-shouldnt-turn-away-from-the-difficult-task-of-regulating-online/' },
  { text: '\u201cIs Big Tech Ungovernable?\u201d The Globe and Mail. February 26, 2021.', url: 'https://www.taylorowen.com/s/IS-BIG-TECH-UNGOVERNABLE.pdf' },
  { text: '\u201cThe Case for Platform Governance.\u201d Centre for International Governance Innovation. November 4, 2019.', url: 'https://www.taylorowen.com/s/The-Case-for-Platform-Governance.pdf' },
  { text: '\u201cQuantum Leap: China\u2019s Satellite and the New Arms Race.\u201d With Robert Gorwa. Foreign Affairs. September 7, 2016.', url: 'https://www.taylorowen.com/s/Quantum-Leap_-Chinas-Satellite-and-the-New-Arms-Race.pdf' },
  { text: '\u201cCan Journalism Be Virtual?\u201d Columbia Journalism Review. Fall/Winter 2016.', url: 'https://www.cjr.org/the_feature/virtual_reality_facebook_second_life.php' },
  { text: '\u201cTowards a Whole of Government Digital Strategy.\u201d Policy Magazine. July/August 2016, pp. 6-8.', url: 'http://www.policymagazine.ca/pdf/20/PolicyMagazineJulyAugust-2016-Owen.pdf' },
  { text: '\u201cCoin Toss: Will Blockchain undermine or buttress state power?\u201d The Literary Review of Canada. July 2016.', url: 'https://reviewcanada.ca/magazine/2016/07/coin-toss/' },
  { text: '\u201cThe Violence of Algorithms: Why Big Data Is Only as Smart as Those Who Generate It.\u201d Foreign Affairs. May 25, 2015.', url: 'https://www.taylorowen.com/s/The-Violence-of-Algorithms.pdf' },
  { text: '\u201cLiberal Baggage: The national party\u2019s greatest burden may be its past success.\u201d With David Eaves. The Literary Review of Canada. May 2012.', url: 'https://reviewcanada.ca/magazine/2012/05/liberal-baggage/' },
  { text: '\u201cA World Turned Upside Down: To face an age of climate change, Twitter and counterinsurgency, Canada\u2019s foreign policy establishment needs fresh ideas.\u201d The Literary Review of Canada. December 2010.', url: 'https://reviewcanada.ca/magazine/2010/12/a-world-turned-upside-down/' },
  { text: '\u201cProgressivism\u2019s End: In Obama, both Americans and Canadians can see the promise of something new.\u201d With David Eaves. The Literary Review of Canada. September 2008.', url: 'https://www.taylorowen.com/s/Progressivisms-End.pdf' },
  { text: '\u201cRattle and Hum: Hello, Baghdad! A Kurdish singer rocks Iraq.\u201d With Emily Paddon. The Walrus Magazine. January 21, 2009.', url: 'https://thewalrus.ca/2009-01-music-2/' },
  { text: '\u201c3D Vision: Can Canada reconcile its defense, diplomacy and development objectives in Afghanistan?\u201d With Patrick Travers. The Walrus Magazine. July 12, 2007.', url: 'https://thewalrus.ca/2007-07-foreign-affairs/' },
  { text: '\u201cOne Step Closer to an Obama-Ignatieff Continent.\u201d The Prospect Magazine. December 10, 2008.', url: 'https://www.prospectmagazine.co.uk/world/one-step-closer-to-an-obama-ignatieff-continent' },
  { text: '\u201cBombs Over Cambodia: New information reveals that Cambodia was bombed far more heavily than previously believed.\u201d With Ben Kiernan. The Walrus Magazine. October 12, 2006.', url: 'https://thewalrus.ca/2006-10-history/' },
]

const opinion = [
  { text: '\u201cThe Online News Act keep journalism alive while it adapts to a new world.\u201d National Post & The Hub. November 8, 2022.', url: 'https://nationalpost.com/opinion/taylor-owen-the-online-news-act-keeps-journalism-alive-while-it-adapts-to-a-new-world' },
  { text: '\u201cCanada\u2019s Online News Act shows how other countries are learning from Australia\u2019s news bill.\u201d With Supriya Dwivedi. NiemanLab. August 9, 2022.', url: 'https://www.niemanlab.org/2022/08/canadas-online-news-act-shows-how-other-countries-are-learning-from-australias-news-bill/' },
  { text: '\u201cWe have the regulatory tools we need to fix Facebook.\u201d The Globe and Mail. October 13, 2021.', url: 'https://www.theglobeandmail.com/opinion/article-we-have-the-regulatory-tools-we-need-to-fix-facebook/' },
  { text: '\u201cCountering the New Red Tech Scare.\u201d July 31, 2021.', url: 'https://www.cigionline.org/articles/countering-the-new-red-tech-scare/' },
  { text: '\u201cCanada shouldn\u2019t turn away from the difficult task of regulating online speech.\u201d The Globe and Mail. June 25, 2021.', url: 'https://www.theglobeandmail.com/opinion/article-canada-shouldnt-turn-away-from-the-difficult-task-of-regulating-online/' },
  { text: '\u201cTo govern Big Tech, listen to those most harmed by it.\u201d The National Post. March 19, 2021.', url: 'https://nationalpost.com/opinion/taylor-owen-to-govern-big-tech-listen-to-those-most-harmed-by-it' },
  { text: '\u201cTrump\u2019s social-media ban clouds a bigger crisis: the power and systemic failure of Big Tech.\u201d The Globe and Mail. January 14, 2021.', url: 'https://www.taylorowen.com/s/Trumps-social-media-ban-clouds-a-bigger-crisis_-the-power-and-systemic-failure-of-Big-Tech.pdf' },
  { text: '\u201cTo Fix the Internet, Look to How It\u2019s Built.\u201d December 22, 2020.', url: 'https://www.cigionline.org/articles/fix-internet-look-how-its-built/' },
  { text: '\u201cTrust in Vaccines Is the Infodemic Challenge of 2021.\u201d December 14, 2020.', url: 'https://www.cigionline.org/articles/trust-vaccines-infodemic-challenge-2021/' },
  { text: '\u201cDoctorow versus Zuboff.\u201d December 2, 2020.', url: 'https://www.cigionline.org/articles/doctorow-versus-zuboff/' },
  { text: '\u201cHow to Govern the New Digital Domain.\u201d With Oscar Jonsson. Project Syndicate. October 20, 2020.', url: 'https://www.project-syndicate.org/commentary/three-priorities-for-governing-digital-economy-by-oscar-jonsson-and-taylor-owen-2020-10' },
  { text: '\u201cHosting Big Tech in a Year of Pandemic.\u201d August 27, 2020.', url: 'https://www.cigionline.org/articles/hosting-big-tech-year-pandemic/' },
  { text: '\u201cAlgorithm \u2018gatekeepers\u2019 undermine democracy and health.\u201d With Ben Scott. Montreal Gazette. August 6, 2020.', url: 'https://montrealgazette.com/opinion/opinion-algorithm-gatekeepers-undermine-democracy-and-health' },
  { text: '\u201cGoverning Platforms after COVID-19.\u201d With Ben Scott. August 18, 2020.', url: 'https://www.cigionline.org/articles/governing-platforms-after-covid-19/' },
  { text: '\u201cDemocratizing Science or Unleashing the Black Hats?\u201d August 14, 2020.', url: 'https://www.cigionline.org/articles/democratizing-science-or-unleashing-black-hats/' },
  { text: '\u201cUS Antitrust Hearings Are the Start, Not the End, of a Long Game.\u201d July 30, 2020.', url: 'https://www.cigionline.org/articles/us-antitrust-hearings-are-start-not-end-long-game/' },
  { text: '\u201cBackstopping the Civic Function of Journalism.\u201d July 16, 2020.', url: 'https://www.cigionline.org/articles/backstopping-civic-function-journalism/' },
  { text: '\u201cTo fix Facebook, we need democratic governance not self-governance.\u201d The Globe and Mail. July 10, 2020.', url: 'https://www.taylorowen.com/s/To-fix-Facebook-we-need-democratic-governance-not-self-governance.pdf' },
  { text: '\u201cTo Fix Facebook Look to Government, Not the Market.\u201d July 2, 2020.', url: 'https://www.cigionline.org/articles/fix-facebook-look-government-not-market/' },
  { text: '\u201cMaria Ressa and Social Media\u2019s Illiberal Intent.\u201d June 16, 2020.', url: 'https://www.cigionline.org/articles/maria-ressa-and-social-medias-illiberal-intent/' },
  { text: '\u201cShould We Use Digital Contact Tracing at All?\u201d June 4, 2020.', url: 'https://www.cigionline.org/articles/should-we-use-digital-contact-tracing-all/' },
  { text: '\u201cDuring a Pandemic, Big Tech Will Only Get Bigger.\u201d May 21, 2020.', url: 'https://www.cigionline.org/articles/during-pandemic-big-tech-will-only-get-bigger/' },
  { text: '\u201cReform or Collapse: Why Douglas Rushkoff Is Calling for an Internet Renaissance.\u201d May 7, 2020.', url: 'https://www.cigionline.org/articles/reform-or-collapse-why-douglas-rushkoff-calling-internet-renaissance/' },
  { text: '\u201cFact-checking Is Necessary to Stop the Infodemic \u2014 but It\u2019s Not Enough.\u201d April 23, 2020.', url: 'https://www.cigionline.org/articles/fact-checking-necessary-stop-infodemic-its-not-enough/' },
  { text: '\u201cA Post-COVID-19 Digital Bretton Woods.\u201d With Rohinton P. Medhora. April 19, 2020.', url: 'https://www.cigionline.org/articles/post-covid-19-digital-bretton-woods/' },
  { text: '\u201cWithout More Market Pressure, Platforms Won\u2019t Make Structural Changes.\u201d March 12, 2020.', url: 'https://www.cigionline.org/articles/without-more-market-pressure-platforms-wont-make-structural-changes/' },
  { text: '\u201cLet\u2019s face the facts: To ensure our digital rights, we must hit pause on facial-recognition technology.\u201d With Nasma Ahmed. The Globe and Mail. February 14, 2020.', url: 'https://www.theglobeandmail.com/opinion/article-lets-face-the-facts-to-ensure-our-digital-rights-we-must-hit-pause/' },
  { text: '\u201cHow Will Regulators Approach the Third Wave of Technology Policy?\u201d February 13, 2020.', url: 'https://www.cigionline.org/articles/how-will-regulators-approach-third-wave-technology-policy/' },
  { text: '\u201cWhy We Shouldn\u2019t Rely on Silicon Valley\u2019s Philanthropy to Replace the Welfare State.\u201d January 16, 2020.', url: 'https://www.cigionline.org/articles/why-we-shouldnt-rely-silicon-valleys-philanthropy-replace-welfare-state/' },
  { text: '\u201cHow Quantum Tech Could Upend Global Power Structures.\u201d January 2, 2020.', url: 'https://www.cigionline.org/articles/how-quantum-tech-could-upend-global-power-structures/' },
  { text: '\u201cWe can save democracy from destructive digital threats.\u201d With Edward Greenspon. The Globe and Mail. August 20, 2018.', url: 'https://www.taylorowen.com/s/We-can-save-democracy-from-destructive-digital-threats.pdf' },
  { text: '\u201cData governance in the digital age: How Facebook disrupted democracy.\u201d Financial Post. May 25, 2018.', url: 'http://business.financialpost.com/opinion/data-governance-in-the-digital-age-how-facebook-disrupted-democracy' },
  { text: '\u201cThe era of big tech self-governance has come to an end.\u201d The Globe and Mail. April 11, 2018.', url: '#' },
  { text: '\u201cThe new rules for the internet \u2013 And why deleting Facebook isn\u2019t enough.\u201d With Ben Scott. The Globe and Mail. April 2, 2018.', url: '#' },
  { text: '\u201cSo, the liberal order is in freefall? Not so fast.\u201d With Robert Muggah. The Globe and Mail. January 10, 2018.', url: 'https://www.theglobeandmail.com/opinion/article-so-the-liberal-order-is-in-free-fall-not-so-fast.pdf' },
  { text: '\u201cIs Facebook a threat to democracy?\u201d The Globe and Mail. October 19, 2017.', url: 'https://www.taylorowen.com/s/Is-Facebook-a-threat-to-democracy.pdf' },
  { text: '\u201c\u2018Fake news 2.0\u2019: A threat to Canada\u2019s democracy.\u201d With Edward Greenspon. The Globe and Mail. May 28, 2017.', url: 'https://www.taylorowen.com/s/Fake-news-20_-A-threat-to-Canadas-democracy.pdf' },
  { text: '\u201cEthics and governance are getting lost in the AI frenzy.\u201d With Mike Ananny. The Globe and Mail. March 30, 2017.', url: 'https://www.taylorowen.com/s/Ethics-and-governance-are-getting-lost-in-the-AI-frenzy.pdf' },
  { text: '\u201cIt\u2019s time to reform the CBC for the digital age.\u201d With Elizabeth Dubois. Toronto Star. February 1, 2017.', url: 'https://www.thestar.com/opinion/commentary/2017/02/01/its-time-to-reform-the-cbc-for-the-digital-age.html' },
  { text: '\u201cWhy the U.S. should but won\u2019t partner with hactivists Anonymous.\u201d San Francisco Chronicle. May 1, 2015.', url: 'https://www.sfgate.com/news/article/Why-the-U-S-should-but-won-t-partner-with-6235020.php' },
  { text: '\u201cWhy governments must embrace the new global digital reality.\u201d The Globe and Mail. April 10, 2015.', url: 'https://www.taylorowen.com/s/Why-governments-must-embrace-the-new-global-digital-reality.pdf' },
  { text: '\u201cWhat can governments learn from digital disruptors.\u201d World Economic Forum. April 6, 2016.', url: 'https://www.weforum.org/agenda/2016/04/what-can-governments-learn-from-digital-disruptors/' },
  { text: '\u201cThe promise and peril of digital diplomacy.\u201d The Globe and Mail. January 9, 2015.', url: 'https://www.taylorowen.com/s/The-promise-and-peril-of-digital-diplomacy.pdf' },
  { text: '\u201cBitcoin is dead\u2014 Long live bitcoin.\u201d Vice News. March 23, 2014.', url: 'https://news.vice.com/article/bitcoin-is-dead-long-live-bitcoin' },
  { text: '\u201cDecline in Canadian think tanks couldn\u2019t come at a worse time.\u201d With Robert Muggah. Toronto Star. October 9, 2013.', url: 'https://www.thestar.com/opinion/commentary/2013/10/09/decline_in_canadian_think_tanks_couldnt_come_at_worse_time.html' },
  { text: '\u201cDrones don\u2019t just kill. Their psychological effects are creating enemies.\u201d The Globe and Mail. March 13, 2013.', url: 'https://www.taylorowen.com/s/Drones-dont-just-kill-Their-psychological-effects-are-creating-enemies.pdf' },
  { text: '\u201cWith think tanks on the ropes, Canada is losing its bark and bite.\u201d With Robert Muggah. The Globe and Mail. October 10, 2013.', url: 'https://www.taylorowen.com/s/With-think-tanks-on-the-ropes-Canada-is-losing-its-bark-and-bite.pdf' },
  { text: '\u201cLet a commission, not broadcasters, call the shots.\u201d With Rudyard Griffiths. The Globe and Mail. April 1, 2011.', url: 'https://www.taylorowen.com/s/Let-a-commission-not-broadcasters-call-the-shots.pdf' },
  { text: '\u201cAfghan army: If you build it, who will come?\u201d The Globe and Mail. September 6, 2011.', url: 'https://www.taylorowen.com/s/Afghan-army_-If-you-build-it-who-will-come.pdf' },
  { text: '\u201cWhy Wikileaks will lead to more secrecy, not less.\u201d Maclean\u2019s Magazine. November 29, 2010.', url: 'https://www.macleans.ca/general/why-wikileaks-will-lead-to-more-secrecy-not-less/' },
  { text: '\u201cReview: The Canadian Century: Moving out of America\u2019s shadow, by Brian Lee Crowley.\u201d The Globe and Mail. August 10, 2010.', url: 'https://www.taylorowen.com/s/Review_-The-Canadian-Century_-Moving-Out-of-Americas-Shadow-by-Brian-Lee-Crowley.pdf' },
  { text: '\u201cFive reasons British coalition is not a harbinger for Canada.\u201d The Globe and Mail. May 14, 2010.', url: 'https://www.theglobeandmail.com/news/politics/five-reasons-british-coalition-is-not-a-harbinger-for-canada/article4319053/' },
  { text: '\u201cLearning from Britain\u2019s three great debates.\u201d With Rudyard Griffiths. National Post. 1 May 2010.', url: 'http://nationalpost.com/opinion/rudyard-griffiths-and-taylor-owen-learning-from-britains-three-great-debates' },
  { text: '\u201cHow about real Liberal renewal?\u201d With David Eaves. Toronto Star. November 20, 2008.', url: 'https://www.thestar.com/opinion/2008/11/20/how_about_real_liberal_renewal.html' },
  { text: '\u201c2011 is a date, not a goal.\u201d With Patrick Travers. Toronto Star. April 5, 2008.', url: 'https://www.thestar.com/opinion/2008/04/05/2011_is_a_date_not_a_goal.html' },
]

const journalArticlesPeerReviewed = [
  { text: 'Bridgman, A., Merkley, E, Loewen, P., Owen, T., Ruths, D., Zhilin, O. (2021, March 29). \u201cInfodemic Pathways: Evaluating the Role That Traditional and Social Media Play in Cross-National Information Transfer.\u201d Frontiers of Political Science.', url: 'https://doi.org/10.3389/fpos.2021.648646' },
  { text: 'Bridgman, A., Merkley, E, Loewen, P., Owen, T., Ruths, D. (2020, May 29). \u201cAll in this together: deservingness of government aid during the COVID-19 pandemic.\u201d', url: 'https://doi.org/10.31219/osf.io/eyvhj' },
  { text: 'Bridgman, A., Merkley, E., Loewen, P. J., Owen, T., Ruths, D., Teichmann, L., & Zhilin, O. (2020, May 4). \u201cThe Causes and Consequences of COVID-19 Misperceptions: Understanding the Role of News and Social Media.\u201d', url: 'https://doi.org/10.31219/osf.io/6tcdn' },
  { text: 'Merkley, E., Bridgman, A., Loewen, P., Owen, T., Ruths, D., & Zhilin, O. (2020, April 16). \u201cA Rare Moment of Cross-Partisan Consensus: Elite and Public Response to the COVID-19 Pandemic in Canada.\u201d Canadian Journal of Political Science, 1-8.', url: 'https://doi.org/10.1017/S0008423920000311' },
  { text: 'Merkley, E., & Loewen, P. J. (2020, May 21). Prospective Economic Costs Undermine Expectations of Social Distancing.', url: 'https://doi.org/10.31219/osf.io/yht9v' },
  { text: 'Merkley, E., Loewen, P. J., Owen, T., & Ruths, D. (2020, May 14). Anti-intellectualism and Information Preferences during the COVID-19 Pandemic.', url: 'https://doi.org/10.31219/osf.io/agm57' },
  { text: 'Belair-Gagnon, Valerie, Taylor Owen and Avery E. Holton. \u201cUnmanned Aerial Vehicles and Journalistic Disruption: Perspectives of Early Professional Adopters.\u201d Digital Journalism. Vol. 5, no. 10, 2017, pp. 1-14.', url: 'https://doi.org/10.1080/21670811.2017.1279019' },
  { text: 'Owen, Taylor. \u201cThe Networked State and the End of 20th Century Diplomacy.\u201d Global Affairs. Vol. 2, no. 3, 2016, pp. 301-307.', url: 'https://doi.org/10.1080/23340460.2016.1239375' },
  { text: 'Burgess, J Peter, Taylor Owen and Uttam Kumar Sinha. \u201cHuman Securitization of Water? A Case Study of the Indus Water Basin.\u201d Cambridge Review of International Affairs. Vol. 29, no. 2, 2013, pp. 382-407.', url: 'https://doi.org/10.1080/09557571.2013.799739' },
  { text: 'Martin, Mary, and Taylor Owen. \u201cThe Second Generation of Human Security: Lessons from the UN and EU Experience.\u201d International Affairs. Vol. 86, no. 1, 2010, pp. 211-224.', url: 'https://doi.org/10.1111/j.1468-2346.2010.00876.x' },
  { text: 'Travers, Patrick, and Taylor Owen. \u201cBetween Metaphor and Strategy: Canada\u2019s Integrated Approach to Peacebuilding in Afghanistan.\u201d International Journal. Vol. 63, no. 3, 2008, pp. 685-702.', url: 'https://doi.org/10.1177/002070200806300316' },
  { text: 'Owen, Taylor. \u201cThe Critique that Doesn\u2019t Bite: A Response to David Chandler\u2019s \u2018Human Security: The Dog That Didn\u2019t Bark\u2019.\u201d Security Dialogue. Vol. 39, no. 4, 2008, pp. 445-453.', url: 'https://doi.org/10.1177/0967010608094038' },
  { text: 'Benini, Aldo, Taylor Owen and H\u00e5vard Rue. \u201cA Semi-Parametric Spatial Regression Approach to Post-War Human Security: Cambodia 2002-2004.\u201d Asian Journal of Criminology. Vol. 3, no 2, 2008, pp. 139-158.', url: 'https://doi.org/10.1007/s11417-008-9056-1' },
  { text: 'Liotta, P.H., and Taylor Owen. \u201cWhy Human Security?\u201d Whitehead Journal of Diplomacy and International Relations. Vol. 7, no. 1, 2006, pp. 37-54.', url: 'https://www.taylorowen.com/s/Owen-and-Liotta-Why-Human-Security.pdf' },
  { text: 'Liotta, P.H., and Taylor Owen. \u201cSense and Symbolism: Europe Takes On Human Security.\u201d Parameters. Vol. 36, no. 3, 2006, pp. 85-102.', url: 'http://ssi.armywarcollege.edu/pubs/parameters/articles/06autumn/liotta.pdf' },
  { text: 'Gleditsch, Nils Petter, et al. \u201cConflicts over Shared Rivers: Resource Wars or Fuzzy Boundaries?\u201d Political Geography. Vol. 25. no. 4, 2006, pp. 361-382.', url: 'https://doi.org/10.1016/j.polgeo.2006.02.004' },
  { text: 'Owen, Taylor. \u201cA Response to Edward Newman: Conspicuously Absent? Why the Secretary-General Used Human Security in All but Name.\u201d St Antony\u2019s International Review. Vol. 1, no. 2, 2005, pp. 37\u201342.', url: 'http://www.jstor.org/stable/26227009' },
  { text: 'Owen, Taylor, and Olav Slaymaker. \u201cToward modeling regionally specific human security using GIS: case study Cambodia.\u201d AMBIO: A Journal of the Human Environment. vol. 34, no. 6, 2005, pp. 445-449.', url: 'https://doi.org/10.1579/0044-7447-34.6.445' },
  { text: 'Owen, Taylor. \u201cHuman Security \u2013 Conflict, Critique and Consensus: Colloquium Remarks and a Proposal for a Threshold-Based Definition.\u201d Security Dialogue. vol. 35, no. 3, 2004. Pp. 373-387.', url: 'https://doi.org/10.1177/0967010604047555' },
  { text: 'Owen, Taylor. \u201cHuman Security: A New View of Cambodian Vulnerability.\u201d Cambodia Development Review, vol. 7, no. 2, 2003, pp. 9-16.', url: 'https://www.cdri.org.kh/publication-page-old/pub/cdr/2003/cdr03-2.pdf' },
]

const journalArticlesNonPeerReviewed = [
  { text: 'Kiernan, Ben, and Taylor Owen. \u201cMaking More Enemies than We Kill? Calculating U.S. Bomb Tonnages Dropped on Laos and Cambodia, and Weighing Their Implications.\u201d The Asia Pacific Journal. Vol. 13, no. 16, no. 3, 2015, pp. 1-9.', url: 'https://www.researchgate.net/publication/309284611_Making_More_Enemies_Than_We_Kill_Calculating_US_Bomb_Tonnages_Dropped_on_Laos_and_Cambodia_and_Weighing_Their_Implications' },
  { text: 'Owen, Taylor, and Ben Kiernan. \u201cRoots of U.S. Troubles in Afghanistan: Civilian Bombing Casualties and the Cambodian Precedent.\u201d The Asia Pacific Journal. Vol. 8, issue 26, no. 4, 2010.', url: 'https://apjjf.org/-Taylor-Owen/3380/article.html' },
  { text: 'Owen, Taylor, and Ben Kiernan. \u201cBombs over Cambodia: New Light on US Air War.\u201d The Asia Pacific Journal. Vol. 5, issue 5, 2007.', url: 'https://apjjf.org/-Ben-Kiernan/2420/article.pdf' },
  { text: 'Burgess, Peter J., and Taylor Owen. \u201cEditors\u2019 Note.\u201d Introduction to \u201cSpecial Section: What is \u2018Human Security\u2019?\u201d edited by Peter J. Owen and Taylor Owen. Security Dialogue. Vol. 35, no. 3, 2004, pp. 345-346.', url: 'http://journals.sagepub.com/doi/pdf/10.1177/0967010604047569' },
  { text: 'Owen, Taylor. \u201cChallenges and Opportunities for Defining and Measuring Human Security.\u201d Disarmament Forum. No. 3, 2004, pp. 15-24.', url: 'https://www.peacepalacelibrary.nl/ebooks/files/UNIDIR_pdf-art2138.pdf' },
  { text: 'Owen, Taylor. \u201cMeasuring Human Security: Overcoming the Paradox.\u201d Human Security Bulletin. Vol. 2, no. 3, 2003.', url: 'http://www.taylorowen.com/Articles/2003_Paradox.pdf' },
  { text: 'Owen, Taylor. \u201cBody Count: Rationale and Methodologies for Measuring Human Security.\u201d Human Security Bulletin. Vol. 1, no. 3, 2002.', url: 'http://www.taylorowen.com/Articles/2002_%20Body%20Count.pdf' },
]

const reports = [
  { text: '\u201cMis- and disinformation During the 2021 Canadian Federal Election.\u201d Media Ecosystem Observatory. Aengus Bridgman, Mathieu Lavigne, Melissa Baker, Thomas Bergeron, Danielle Bohonos, Anthony Burton, Katharine McCoy, Mackenzie Hart, Robert Hiltz, Rupinder Liddar, Pangying Peng, Christopher Ross, Jaclyn Victor, Taylor Owen, Peter Loewen. March 31, 2022.', url: 'https://www.mediatechdemocracy.com/all-work/mis-and-disinformation-during-the-2021-canadian-federal-election' },
  { text: 'Lessons in Resilience: Canada\u2019s Digital Media Ecosystem and the 2019 Election. Digital Democracy Project. May 2020.', url: 'https://ppforum.ca/articles/lessons-in-resilience-canadas-digital-media-ecosystem-and-the-2019-election/' },
  { text: '\u201cUnderstanding vaccine hesitancy in Canada: attitudes, beliefs, and the information ecosystem.\u201d Media Ecosystem Observatory. December 23, 2020.', url: 'https://files.cargocollective.com/c745315/meo_vaccine_hesistancy.pdf' },
  { text: '\u201cThe causes and consequences of COVID-19 misperceptions: understanding the role of news and social media.\u201d Report, Harvard Kennedy School, Misinformation Review. With Aengus Bridgman, Eric Merkley, Lisa Teichmann, Oleg Zhilin, Derek Ruths, Peter John Loewen. June 18, 2020.', url: 'https://misinforeview.hks.harvard.edu/article/the-causes-and-consequences-of-covid-19-misperceptions-understanding-the-role-of-news-and-social-media/' },
  { text: '\u201cThe New Digital Domain.\u201d Report, IE: Center for the Governance of Change. With Oscar Jonsson, Taylor Owen, Edoardo Campanella. September 16, 2020.', url: 'https://docs.ie.edu/cgc/IE-CGC-The-New-Digital-Domain.pdf' },
  { text: '\u201cFacial Recognition Moratorium Briefing #2: Conditions for Lifting a Moratorium on Public Use of Facial Recognition Technology in Canada.\u201d Taylor Owen, Derek Ruths, Stephanie Cairns, Sara Parker, Charlotte Reboul, Ellen Rowe, and Sonja Solomun. August 18, 2020.', url: '#' },
  { text: '\u201cFacial Recognition Moratorium Briefing #1: Implications of a Moratorium on the Use of Facial Recognition Technology in Canada.\u201d Taylor Owen, Derek Ruths, Stephanie Cairns, Sara Parker, Charlotte Reboul, Ellen Rowe, and Sonja Solomun. August 18, 2020.', url: '#' },
  { text: '\u201cEvaluation Questions to Assess a Digital Contact Tracing/Exposure Notification Application.\u201d Taylor Owen, Derek Ruths, Peter John Loewen, Stephanie Cairns, Sta Kuzviwanza, Sara Parker, Sonja Solomun. June 2020.', url: '#' },
  { text: '\u201cThe Differences Between Contact Tracing and Exposure Notification.\u201d Taylor Owen, Derek Ruths, Peter John Loewen, Stephanie Cairns, Sta Kuzviwanza, Sara Parker, Sonja Solomun. June 2020.', url: '#' },
  { text: 'The Case for Platform Governance. The Centre for International Governance Innovation. November 4, 2019.', url: 'https://www.cigionline.org/publications/case-platform-governance/' },
  { text: 'Bell, Emily and Taylor Owen, with Peter Brown, Codi Hauka and Nushin Rashidian. The Platform Press: How Silicon Valley Reengineered Journalism. The Tow Center for Digital Journalism, Columbia University. 2017.', url: 'http://towcenter.org/wp-content/uploads/2017/04/The_Platform_Press_Tow_Report_2017.pdf' },
  { text: 'The Shattered Mirror: News, Democracy and Trust in the Digital Age. The Public Policy Forum. 2016.', url: 'https://shatteredmirror.ca/wp-content/uploads/theShatteredMirror.pdf' },
  { text: 'Aronson-Rath, Raney, Milward, James, Owen, Taylor and Fergus Pitt. Virtual Reality Journalism. The Tow Centre for Digital Journalism, Columbia University. 2015.', url: 'https://towcenter.gitbooks.io/virtual-reality-journalism/content' },
  { text: 'Cooper, Ann and Taylor Owen, editors. The New Global Journalism: Foreign Correspondence in Transition, The Tow Center for Digital Journalism, Columbia University. 2014.', url: 'http://towcenter.org/wp-content/uploads/2014/09/The-New-Global-Journalism-1.pdf' },
  { text: 'Owen, Taylor. Media, Technology and Intelligence. The Canadian Security and Intelligence Service (CSIS), 2013.', url: '#' },
  { text: 'Owen, Taylor. Disruption: Foreign Policy in a Networked World. Pierre Elliott Trudeau Foundation Position Paper, 2012.', url: 'http://www.trudeaufoundation.ca/sites/default/files/canada_in_the_world%E2%80%93en.pdf' },
  { text: 'Owen, Taylor, and Alexandre Grigsby. In Transit: Gangs and Criminal Networks in Guyana. A Working Paper of the Small Arms Survey, Geneva. 2012.', url: 'http://www.smallarmssurvey.org/fileadmin/docs/F-Working-papers/SAS-WP11-Guyana.pdf' },
  { text: 'Owen, Taylor, and Rudyard Griffiths. The People\u2019s Debates: A Report on Canada\u2019s Televised Election Debates. Aurea Foundation, 2011.', url: '#' },
  { text: 'Owen, Taylor, and Emily Paddon. The Challenges of Integrated Peacebuilding in Afghanistan. Report for the Canada Department of Foreign Affairs and International Trade, 2009.', url: '#' },
  { text: 'Owen, Taylor. The Uncertain Future of Human Security in the UN. UNESCO Working Paper, Oxford. Blackwell Publishing, 2008.', url: 'https://doi.org/10.1111/j.1468-2451.2008.00629' },
  { text: 'Travers, Patrick, and Taylor Owen. Peacebuilding While Peacemaking: The Merits of a 3D Approach in Afghanistan. UBC Centre for International Relations Security and Defense Forum Working Paper, no. 3, 2007.', url: 'https://www.academia.edu/148897/Peacebuilding_While_Peacemaking_The_Merits_of_a_3D_Approach_in_Afghanistan' },
  { text: 'Jackson, Thomas, Marsh, Nicholas, Owen, Taylor and Anne Thurin. Who Takes the Bullet? The Impact of Small Arms Violence. Norwegian Church Aid. 2005.', url: 'https://www.kirkensnodhjelp.no/contentassets/c1403acd5da84d39a120090004899173/2005/who-takes-the-bullet.pdf' },
  { text: 'Owen, Taylor, and Aldo Benini. Human Security in Cambodia: A Statistical Analysis of Large-Sample Sub-National Vulnerability Data. The Centre for the Study of Civil War at the International Peace Research Institute, Oslo, 2004.', url: 'https://www.gichd.org/fileadmin/GICHD-resources/rec-documents/CambodiaOwenBeniniSummaryWithMap040419.pdf' },
  { text: 'Owen, Taylor, Kathryn Furlong, and Nils Petter Gleditsch. Codebook for the shared river basin GIS and database. The Centre for the Study of Civil War at the International Peace Research Institute. Oslo, 2004.', url: 'https://files.prio.org/files/projects/Codebook%20for%20The%20Shared%20River%20Basin%20GIS%20and%20Database.pdf' },
]

const bookChapters = [
  { text: 'Kiernan, Ben and Taylor Owen. \u201cIraq, Another Vietnam? Consider Cambodia.\u201d The United States, Southeast Asia, and Historical Memory, edited by Mark Pavlick. Common Courage Press, July 2018.' },
  { text: 'Owen, Taylor. \u201cGlobal Media Power.\u201d The Sage Handbook of Digital Journalism, edited by Tamara Witschge, C.W. Anderson, David Domingo and Alfred Hermida, London, Sage Publications, 2016, pp. 25-35.' },
  { text: 'Bell, Emily, Taylor Owen and Smitha Khorana. \u201cIntroduction.\u201d Journalism After Snowden: The Future of the Free Press in the Surveillance State, edited by Emily Bell and Taylor Owen, with Smitha Khorana and Jennifer Henrichsen, Columbia University Press, 2016, pp. 1-18.' },
  { text: 'Paris, Roland, and Taylor Owen. \u201cIntroduction: A Transforming World.\u201d The World Won\u2019t Wait: Why Canada Needs to Rethink Its International Policies, edited by Roland Paris and Taylor Owen, University of Toronto Press, 2016, pp. 3\u201319.' },
  { text: 'Paris, Roland, and Taylor Owen. \u201cConclusion: Imagining a More Ambitious Canada.\u201d The World Won\u2019t Wait: Why Canada Needs to Rethink Its International Policies, edited by Roland Paris and Taylor Owen, University of Toronto Press, 2016, pp. 175\u2013188.' },
  { text: 'Martin, Mary, and Taylor Owen. \u201cIntroduction.\u201d Routledge Handbook of Human Security, edited by Mary Martin and Taylor Owen, London, Routledge, 2014, pp. 1-15.' },
  { text: 'Owen, Taylor. \u201cHuman Security Thresholds.\u201d Routledge Handbook of Human Security, edited by Mary Martin and Taylor Owen, London; New York, Routledge, 2014, pp. 58-65.' },
  { text: 'Owen, Taylor. \u201cHuman Security Mapping.\u201d Routledge Handbook of Human Security, edited by Mary Martin and Taylor Owen, London; New York, Routledge, 2014, pp. 308-319.' },
  { text: 'Martin, Mary, and Taylor Owen. \u201cConclusion.\u201d Routledge Handbook of Human Security, edited by Mary Martin and Taylor Owen, London; New York, Routledge, 2014, pp. 331-335.' },
  { text: 'Owen, Taylor. \u201cEditor\u2019s Introduction: Human Security.\u201d Human Security, edited by Taylor Owen, London, Sage Publications, 2013, vol 1, pp. xxiii-xlix.' },
  { text: 'Owen, Taylor, and Emily Paddon. \u201cWhither Humanitarian Space? The Costs of Integrated Peacebuilding in Afghanistan.\u201d Modern Warfare: Armed Groups, Private Militaries, Humanitarian Organizations, and the Law, edited by Benjamin Perrin, Vancouver, UBC Press, 2013, pp. 267-287.' },
  { text: 'Eaves, David, and Taylor Owen. \u201cMissing the Link: How the Internet is Saving Journalism.\u201d The New Journalism: Roles, Skills, and Critical Thinking, edited by Paul Benedetti, Timothy Currie, and Kim Kierans, Toronto, Edmund Montgomery Press, 2010.' },
  { text: 'Operationalizing Human Security: From Local Vulnerability to International Policy, DPhil Thesis, The University of Oxford, July 2010.' },
  { text: 'Owen, Taylor. \u201cIn All but Name: The Uncertain Future of Human Security in the UN.\u201d Rethinking Human Security, edited by Moufida Goucha and John Crowley, Oxford, Wiley-Blackwell Press, 2008, pp. 113-127.' },
  { text: 'Owen, Taylor. \u201cCritical Human Security: A Contested Concept.\u201d The Routledge Handbook of New Security Studies, edited by J. Peter Burgess, Oxford, Routledge, 2010, pp. 39-50.' },
  { text: 'Owen, Taylor. \u201cMeasuring Human Security: Methodological Challenges and the Importance of Geographically-Referenced Determinants.\u201d Environmental Change and Human Security: Recognizing and Acting on Hazard Impacts, edited by Peter Liotta, Springer NATO Science Series, 2008, pp. 35-64.' },
]

const sections = [
  { key: 'books', label: 'Books', count: books.length },
  { key: 'essays', label: 'Essays', count: essays.length },
  { key: 'opinion', label: 'Opinion', count: opinion.length },
  { key: 'journal', label: 'Journal Articles', count: journalArticlesPeerReviewed.length + journalArticlesNonPeerReviewed.length },
  { key: 'reports', label: 'Reports', count: reports.length },
  { key: 'chapters', label: 'Book Chapters', count: bookChapters.length },
] as const

type SectionKey = typeof sections[number]['key']

const itemStyle: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: 1.7,
  color: 'var(--color-text)',
  paddingBottom: '6px',
}

const linkItemStyle: React.CSSProperties = {
  ...itemStyle,
  display: 'block',
  textDecoration: 'none',
}

function renderCitation(text: string) {
  const open = '\u201c'
  const close = '\u201d'
  const start = text.indexOf(open)
  const end = text.indexOf(close, start + 1)
  if (start === -1 || end === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, start)}
      <span className="cite-title">{text.slice(start, end + 1)}</span>
      {text.slice(end + 1)}
    </>
  )
}

export default function WritingPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>('books')

  const chipBase: React.CSSProperties = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'var(--color-border)',
    borderRadius: '24px',
    padding: '8px 18px',
    fontSize: '13px',
    fontFamily: 'var(--font-body)',
    cursor: 'pointer',
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    transition: 'all 0.2s ease',
  }

  const chipActive: React.CSSProperties = {
    ...chipBase,
    background: 'var(--color-accent)',
    color: '#fff',
    borderColor: 'var(--color-accent)',
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'books':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {books.map((book, i) => (
              <div key={i}>
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="cite-title" style={{ fontSize: '16px', fontStyle: 'italic', color: 'var(--color-accent)' }}>{book.title}</a>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>{book.detail}</p>
              </div>
            ))}
          </div>
        )
      case 'essays':
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {essays.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={linkItemStyle}>{renderCitation(item.text)}</a>
            ))}
          </div>
        )
      case 'opinion':
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {opinion.map((item, i) => (
              item.url && item.url !== '#'
                ? <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={linkItemStyle}>{renderCitation(item.text)}</a>
                : <p key={i} style={itemStyle}>{renderCitation(item.text)}</p>
            ))}
          </div>
        )
      case 'journal':
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '8px', marginTop: '8px' }}>Peer Reviewed</h3>
            {journalArticlesPeerReviewed.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={linkItemStyle}>{renderCitation(item.text)}</a>
            ))}
            <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '8px', marginTop: '24px' }}>Non-Peer Reviewed</h3>
            {journalArticlesNonPeerReviewed.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={linkItemStyle}>{renderCitation(item.text)}</a>
            ))}
          </div>
        )
      case 'reports':
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {reports.map((item, i) => (
              item.url && item.url !== '#'
                ? <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={linkItemStyle}>{renderCitation(item.text)}</a>
                : <p key={i} style={itemStyle}>{renderCitation(item.text)}</p>
            ))}
          </div>
        )
      case 'chapters':
        return (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {bookChapters.map((item, i) => (
              <p key={i} style={itemStyle}>{renderCitation(item.text)}</p>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <div className="container">
        {/* Recent */}
        <h2 style={{
          fontSize: '14px',
          fontFamily: 'var(--font-body)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--color-text-secondary)',
          marginBottom: '32px',
        }}>
          Recent
        </h2>
        <div style={{ marginBottom: '60px' }}>
          {recentArticles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                color: 'var(--color-text)',
                textDecoration: 'none',
                fontSize: '15px',
                lineHeight: 1.6,
                paddingBottom: '6px',
              }}
            >
              &ldquo;<span className="cite-title" style={{ color: 'var(--color-accent)' }}>{article.title}</span>&rdquo;
              {article.coauthor && ` With ${article.coauthor},`}
              {' '}<em>{article.pub}</em>. {article.date}.
            </a>
          ))}
        </div>

        {/* Sticky filter chip bar */}
        <div style={{
          position: 'sticky',
          top: '72px',
          background: 'var(--color-bg)',
          zIndex: 10,
          padding: '16px 0',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                style={activeSection === section.key ? chipActive : chipBase}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div style={{ paddingTop: '24px' }}>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
