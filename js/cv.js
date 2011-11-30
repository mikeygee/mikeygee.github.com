$(document).ready(function() {
	var container = $("#isotope");
	container.imagesLoaded(function() {
		container.isotope({
			itemSelector : ".item",
			layoutMode : "masonry",
			masonry: { columnWidth: 50 }
		});
		container.isotope("shuffle");
	});

	$("#filters a").click(function() {
		$("#filters a:link").css("text-decoration", "none");
		$(this).css("text-decoration", "underline");
		var selector = $(this).attr("filter");
		container.isotope({ filter: selector });
		container.isotope("shuffle");
	});

	var items = {
		"ucla" : {
			"title" : "UCLA",
			"subtitle" : ["University of California, Los Angeles", "Go Bruins!"],
			"link" : "http://www.ucla.edu",
			"dates" : "Sept 2002 - June 2006",
			"items" : ["B.S. Computer Science", "Technical Minor in Economics", "GPA : 3.28"]
		},
		"lab" : {
			"title" : "LA Baptist",
			"subtitle" : ["Los Angeles Baptist Jr/Sr High School"],
			"link" : "http://www.labaptist.org",
			"dates" : "Sept 1997 - June 2002",
			"items" : ["GPA : 4.25", "Class of 2002 Valedictorian", "Varsity cross country, track & field, and basketball"]
		},
		"amgen" : {
			"title" : "Amgen Inc.",
			"subtitle" : ["Sr. Associate IS Analyst", "Enterprise Business Intelligence", "Thousand Oaks, CA"],
			"link" : "http://www.amgen.com",
			"dates" : "July 2006 - Jan 2011",
			"items" : ["In my first full time position at Amgen, I took on various roles within the data integration team and learned a lot about databases and IT at a large company.", "As an application developer, I designed and implemented data marts for several business areas. I worked with several data sources and targets (e.g. Oracle, Teradata, SQL Server, XML) and used Informatica PowerCenter for ETL. I also worked on improving existing ETL processes, in many cases significantly improving run times.", "As system owner of the PowerCenter environment, I handled admin tasks such as installation, configuration, system maintenance, account management, change and release control, monitoring, and support for 100+ users. I also defined and documented standard procedures for the regulated environments and led an offshore support team to ensure a consistent operating environment."]
		},
		"cis" : {
			"title" : "UCLA College Information Services",
			"subtitle" : ["Student Assistant / Technician", "Los Angeles, CA"],
			"link" : "http://www.cis.ucla.edu",
			"dates" : "May 2003 - June 2006",
			"items" : ["During my college years at UCLA, I worked part time at CIS, which provides various technical support for primarily administrative staff. The job had several responsibilities, and I learned a lot about technical and customer support.", "As a technician, I provided first level support for Windows workstations. Common tasks included swapping out defective hardware, requesting replacement hardware, reimaging workstations, installing software, and general user assistance with Microsoft Windows and Office.", "As a support representative for the <a href='http://my.ucla.edu' target='_blank'>MyUCLA</a> web portal, I answered phone and email questions from users regarding use of the site. I also served as a forums moderator to enforce policies and respond to user feedback.", "As the front desk receptionist, I greeted visitors, answered / directed phone calls, and provided general assistance to full time staff."]
		},
		"wdi" : {
			"title" : "Walt Disney Imagineering",
			"subtitle" : ["Undergraduate Intern - Audio/Video", "Scientific Systems", "Anaheim, CA"],
			"link" : "http://corporate.disney.go.com/careers/who_imagineering.html",
			"dates" : "June 2004 - Sept 2004",
			"items" : ["In the summer of 2004, I had the opportunity to do an internship at the happiest place on earth. I worked with an audio/video engineer and learned a lot about the backstage operations of Disneyland.", "My primary task was to gather information and video clips for all CCTV surveillance cameras in Disneyland attractions and create a Microsoft Access database application to store and display the information. To obtain the data, I examined cameras in several attractions and captured video from each one. The application allowed for easy data entry, search, and display of camera information (specs, location, etc) and enabled the user to see sample images and a video clip from each camera.", "I also assisted with a regulatory audio safety check, by recording and analyzing audio from Disneyland attractions, ensuring volumes were at safe levels."]
		},
		"ou" : {
			"title" : "OmniUpdate, Inc.",
			"subtitle" : ["Software Development", "Front End Web Developer", "Camarillo, CA"],
			"link" : "http://omniupdate.com",
			"dates" : "Nov 2011 - present",
			"items" : ["Custom web development", "UI/UX"]
		},
		"blinktag" : {
			"title" : "Blinktag, Inc.",
			"subtitle" : ["Consultant", "San Francisco, CA"],
			"link" : "http://blinktag.com",
			"dates" : "Oct 2011 - present",
			"items" : ["Custom web development", "General programming"]
		},
		"robotag" : {
			"title" : "RoboTag",
			"subtitle" : ["Web application"],
			"link" : "https://github.com/mikeygee/RoboTag",
			"dates" : "Mar 2011 - present",
			"items" : ["RoboTag is a head to head AI strategy game for Javascript programmers. You compete by programming a virtual robot to play a game of tag. The idea behind this personal project is to create a simple, but challenging and competitive game for programmers of any skill level. Check out the <a href='https://github.com/mikeygee/RoboTag' target='_blank'>github page</a> for more details.", "RoboTag was my first web app and greatly improved my proficiency with web development. I gained valuable experience using HTML/CSS including HTML5 canvas, Javascript, jquery/jquery-ui, jquery templates, node.js / express, and mongodb."]
		},
		"nflive" : {
			"title" : "nflive",
			"subtitle" : ["Web application"],
			"link" : "http://www.nflive.net",
			"dates" : "Aug 2011",
			"items" : ["nflive is a web app that implements the popular survivor / knockout / suicide game for NFL football. Each week, you pick one team to win, but you can only pick each team once. Whoever lasts the longest without an incorrect pick wins.", "The app was primarily written by two of my friends using LAMP with the Code Igniter framework. I contributed a <a href='https://github.com/mikeygee/miscellaneous/blob/master/nfl_scrape.php' target='_blank'>php script</a> to scrape scores and odds from the web and write them to the database, so results could be determined automatically."]
		},
		"mikeygeecom" : {
			"title" : "mikeygee.com",
			"subtitle" : ["Web site"],
			"link" : "http://mikeygee.com",
			"dates" : "Aug 2011 - present",
			"items" : ["mikeygee.com is my personal web site / portfolio that you are looking at right now. It is hosted on <a href='http://pages.github.com'>github pages</a> and generated by <a href='https://github.com/mojombo/jekyll' target='_blank'>Jekyll</a>. This CV uses the <a href='http://isotope.metafizzy.co/'>isotope</a> jquery plugin."]
		},
		"informatica" : {
			"title" : "Informatica",
			"subtitle" : ["PowerCenter developer and administrator"],
			"link" : "http://www.informatica.com",
			"dates" : "July 2006 - Jan 2011",
			"items" : ["During my time at Amgen, I primarily worked with the Informatica PowerCenter data integration software, both as a developer and administrator. I had formal training and extensive hands on experience.", "As a developer, I created hundreds of mappings and workflows to do automated ETL (extract, transform, load) jobs. Some of the jobs were for loading data marts, and others were for data quality checking, monitoring, and alerts.", "As an administrator, I managed and configured the environment to support 100+ users. This involved things like setting up application servers and databases, user accounts and LDAP integration, user/group permissions, domains and repositories, logging and monitoring, daily backups, software updates, and troubleshooting with vendor support."]
		},
		"sql" : {
			"title" : "SQL",
			"subtitle" : ["Databases"],
			"dates" : "July 2006 - present",
			"items" : ["I have extensive experience with relational databases. As an ETL developer at Amgen, I designed and implemented data marts using Ralph Kimball's dimensional modeling techniques. I worked with several source and target databases, primarily Oracle, and also Teradata and SQL Server. I wrote many complex queries to pull required data and verify results. I wrote DDL scripts for creating tables, views, and indexes in our target data marts. I also occasionally used PL/SQL for functions or stored procedures, and ran explain plans for tuning and optimization.", "For the nflive project, I worked with a simple MySQL database, and wrote a couple of PHP functions to update scores and odds.", "For my internship with Disney, I developed a Microsoft Access application for storing and accessing information about surveillance cameras.", "Finally, I have been exploring NoSQL databases for my own projects, primarily mongodb for simpler storage of JSON-style objects."]
		},
		"php" : {
			"title" : "PHP",
			"subtitle" : ["Programming Language"],
			"link" : "http://www.php.net",
			"dates" : "Aug 2011",
			"items" : ["To help with the nflive project, I learned PHP by doing a quick crash course on the official documentation. I wrote a couple of functions to scrape football scores and odds from a web page (with the help of an <a href='http://simplehtmldom.sourceforge.net' target='_blank'>HTML parser</a>), and write it to a MySQL database. It was a fun <a href='https://github.com/mikeygee/miscellaneous/blob/master/nfl_scrape.php' target='_blank'>mini project</a>, and gave me a good overview of PHP."]
		},
		"javascript" : {
			"title" : "Javascript",
			"subtitle" : ["Programming Language"],
			"dates" : "2010 - present",
			"items" : ["Javascript is currently my favorite programming language. I learned it in conjunction with HTML/CSS by reading books and building my own web sites. My RoboTag project is primarily Javascript and the source of most of my experience. I'm familiar with many of the libraries including jquery, backbone, and google maps, and I use Firebug extensively for debugging. I'm a big fan of the end-to-end Javascript stack using node.js with backbone and jquery."]
		},
		"java" : {
			"title" : "Java",
			"subtitle" : ["Programming Language"],
			"dates" : "2005 - 2006",
			"items" : ["I learned Java during my 3rd year of college, and used it for several school projects.", "For my software engineering class, my team worked with MatchCraft, a search engine marketing company, to write a Java servlet application that scans any web page and determines what keywords and phrases should be bought and how much to bid based on the company's research data.", "For my compiler class, we wrote a compiler in Java to convert a subset of Java into an assembly language. I also did something similar for a hardware design class, converting a higher level language to a lower level one." ]
		},
		"c" : {
			"title" : "C/C++/Objective-C",
			"subtitle" : ["Programming Language"],
			"dates" : "2002 - 2006, 2011",
			"items" : ["I wrote my first program in C++ during my senior year of high school. This is what inspired me to major in computer science and pursue a career in programming. The final assignment for the class was to write a casino program, which you can download <a href='casino.zip'>here</a> (Windows only).", "I continued to use C and C++ throughout college courses. Assignments included writing a command line shell, a file system, a web server, and a udp client / server.", "In 2011, I started exploring Cocoa / Objective-C programming for Mac OSX and iOS. So far, I've browsed a book and gone through some basic exercises."]
		},
		"html" : {
			"title" : "HTML/CSS",
			"subtitle" : ["Markup/Style Language"],
			"dates" : "2010 - present",
			"items" : ["I learned HTML/CSS from reading books and hand coding web sites.", "I gained a lot of experience building RoboTag, as well as this personal web site. I use Firebug extensively to help with adjusting layout and style, and also to learn how other web sites accomplish their look and feel." ]
		},
		"apple" : {
			"title" : "Apple",
			"subtitle" : ["Operating System, Platforms"],
			"dates" : "2009 - present",
			"items" : ["I switched to Mac as my primary computer in 2009. My essential apps are Firefox + Firebug, MacVim, Terminal, Dropbox, github, VirtualBox, iTunes, and VLC. I also have an iPhone and iPad. In other words, I am a recently converted Apple fanboy.", "I have a lot of interest in developing for Mac and iOS, and have started to explore Cocoa programming."]
		},
		"linux" : {
			"title" : "Unix / Linux",
			"subtitle" : ["Operating System"],
			"dates" : "2005 - present",
			"items" : ["My first experience with Unix and Linux was in college courses at UCLA. The lab computers had Fedora, and we used gcc to build C programs in operating systems and networking classes.", "At Amgen, most of the Informatica infrastructure ran on Solaris servers, and I interacted with these fairly often.", "For personal use, I primarily use Mac OSX and have also used Ubuntu Linux."]
		},
		"windows" : {
			"title" : "Microsoft Windows",
			"subtitle" : ["Operating System"],
			"dates" : "1990's - present",
			"items" : ["I have been using Windows as long as I can remember, starting with 3.1 as a child, up to the current Windows 7. Before recently switching to Mac, I mostly used Windows on custom built computers.","I have a lot of work experience with both clients and servers. At my job with UCLA CIS, I supported Windows XP workstations, both hardware and software. With WDI, I built an Access database application. And at Amgen, part of our Informatica infrastructure ran on Windows 2003 servers."],
		},
		"cloud" : {
			"title" : "Cloud",
			"subtitle" : ["Application Hosting"],
			"dates" : "2011",
			"items" : ["With my recent web projects, I've gained some experience with deployment and hosting. I am using github pages for this web site, and node.js on Heroku + mongohq for my RoboTag project. I also have experience using Amazon EC2 for server hosting."]
		}
	};

	var prevId;
	$("#isotope div").mouseenter(function() {
		var id = $(this).attr("id");
		if(items[id] && id != prevId) {
			$("#details").remove();
			$("#details-template").tmpl(items[id]).prependTo("#content-cv").hide().fadeIn();
			prevId = id;
		}
	});

});
