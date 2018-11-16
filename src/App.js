import React from 'react'
import './reset.css'
import './bootstrap.css'
import './style.css'

export const App = () => {
  return (
    <div className="App">
      <header class="header">
			<div class="container">
				<div class="row">
					<div class= "col-md-12"><img class="logo" src='news.jpg'>Logo here</img></div>
					<div class="col-md-12">
						<ul class="menu">
							<li><a href=''>Home Page</a></li>
							<li><a href=''>Bussiness</a>
								<ul class="submenu">  
	        	                    <li><a href=''>Economy</a></li>
	                                <li><a href=''>Trade</a></li>
	                                <li><a href=''>Insurance</a></li>
	                                <li><a href=''>Agriculture</a></li>
	                                <li ><a class="special" href=''>Scandal</a></li>
	                            </ul>
							</li>
							<li><a href=''>Politics</a>
								<ul class="submenu">  
	        	                    <li><a href=''>Election</a></li>
	                                <li><a href=''>Missions</a></li>
	                                <li><a href=''>Conflicts</a></li>
	                                <li><a href=''>EU</a></li>
	                                <li><a class="special" href=''>Scandal</a></li>
	                            </ul>
							</li>
							<li><a href=''>Sport</a>
								<ul class="submenu">  
	        	                    <li><a href=''>Football</a></li>
	                                <li><a href=''>Basketball</a></li>
	                                <li><a href=''>Swimming</a></li>
	                                <li><a href=''>Olympiad</a></li>
	                                <li><a class="special" href=''>Scandal</a></li>
	                            </ul>
							</li>
							<li><a href=''>Fashion</a></li>
							<li><a href=''>Art</a>
								<ul class="submenu">  
	        	                    <li><a href=''>Music</a></li>
	                                <li><a href=''>Artistic Art</a></li>
	                                <li><a href=''>Writings</a></li>
	                                <li><a href=''>Sculpture</a></li>
	                                <li><a class="special" href=''>Scandal</a></li>
	                            </ul>
							</li>
							<li><a href=''>Health</a></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<main class="main">
			<div class="container">			
				<div class="row">
					<div class="search col-md-4">
						<form>
							<input type="text" placeholder="Search here...">
							  <button type="submit"></button>
              </input>
						</form>
					</div>
					<div class="search col-md-4"></div>
					<div class="search col-md-4">
						<ul class="register">
							<li><a href=''>Sign in</a></li>
							<li><a href=''>Register</a></li>
						</ul>
					</div>
				</div>
					<div class= "left col-md-3">
						<div class="teme"><a href=''>H o t</a>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='top.jpg'></img></a></div>
								<div class="text"><a href=''>12 dead in California bar shooting</a></div>
							</div>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='center.jpg'></img></a></div>
								<div class="text"><a href=''>69-year-old Dutchman starts legal bid to become 20 years younger</a></div>
							</div>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='foot.jpg'></img></a></div>
								<div class="text"><a href=''>Brazilian Grand Prix: Reliving Lewis Hamilton's first world title 10 years on</a></div>
							</div>
						</div>
						<div class="teme"><a href=''>C e l e b r e t i e s</a>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='celeb-top.jpg'></img></a></div>
								<div class="text"><a href=''>Having surrendered her royal status, what will Princess Ayako wear to her wedding?</a></div>
							</div>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='celeb-center.jpg'></img></a></div>
								<div class="text"><a href=''>US report: Kate Middleton pregnant with baby number four</a></div>
							</div>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='celeb-foot.png'></img></a></div>
								<div class="text"><a href=''>Bella Hadid seemingly responds to skinny-shamers on Instagram: 'All body types are different'</a></div>
							</div>
						</div>
					</div>
					<div class= "main-content col-md-6">
						<div class="row">
							<div class="teme-main"><a href=''>B r e a k i n g N e w s</a>
								<iframe width="500" height="370" src="https://www.youtube.com/embed/PQJvQjC2ptE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								<div class="text-main"><a href=''>Democrats regain the House as record number of women elected to Congress</a></div>
								<div class="row">
									<div class="col-md-6">
										<div class="top">
											<div class="picture-right"><a href=''><img class="picture-top" src='main-first.jpg'></img></a></div>
											<div class="text"><a href=''>Michelle Obama: I'll never forgive Trump</a></div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="top">
											<div class="picture-right"><a href=''><img class="picture-top" src='main-second.jpg'></img></a></div>
											<div class="text"><a href=''>London as you've never seen it</a></div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="top">
											<iframe width="210" height="165" src="https://www.youtube.com/embed/55vAmEL8nrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											<div class="text"><a href=''>Man pleads guilty to killing pregnant wife, daughters</a></div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="top">
											<iframe width="210" height="165" src="https://www.youtube.com/embed/D4rT90ESIjg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											<div class="text"><a href=''>Daylight saving time, marijuana legalization among ballot initiatives</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
							
					<div class= "right col-md-3">
						<div class="teme"><a href=''>P o p u l a r</a>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='right-top.jpg'></img></a></div>
								<div class="text"><a href=''>Bombardier cutting 5,000 jobs</a></div>
							</div>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='right-center.jpg'></img></a></div>
								<div class="text"><a href=''>World's largest underwater restaurant nears completion</a></div>
							</div>
							<div class="top">
								<div class="picture-right"><a href=''><img class="picture-top" src='right-foot.jpg'></img></a></div>
								<div class="text"><a href=''>Your Grandma may be old, but that doesn't mean you will be, researchers say</a></div>
							</div>
						</div>
						<div class="teme"><a href=''>W a t c h</a>
							<iframe width="210" height="165" src="https://www.youtube.com/embed/8AOjbUzYfgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							<div class="text"><a href=''>"Appreciate every moment": MakSim first told about the incurable illness of the father you will be, researchers say</a></div>
							<iframe width="210" height="165" src="https://www.youtube.com/embed/D0CfjoBfXlI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							<div class="text"><a href=''>More than 27K evacuated as fire destroys town</a></div>
							<iframe width="210" height="165" src="https://www.youtube.com/embed/P4wwoVxp9ZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							<div class="text"><a href=''>Teen describes surviving great white shark bite</a></div>

					</div>
				</div>
			</div>
		</main>
		<footer class="footer">	
			<div class="container">			
				<div class="row">
					<div class="links col-md-12">
						<ul class="links">
							<li><a href=''><img  class="picture" src="facebook.png">Facebook</img></a></li>
							<li><a href=''><img  class="picture" src="twitter.png">Twitter</img></a></li>
							<li><a href=''><img  class="picture" src="google.png">Google</img></a></li>
							<li><a href=''><img  class="picture" src="instagram.png">Instagram</img></a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
    </div>
  )
}

export default App;
