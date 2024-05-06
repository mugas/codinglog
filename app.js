//Create email to be sent
document.getElementById("contact-me").addEventListener("click", function () {
  var emailAddress = "ricardo.d.moreira.rm@gmail.com"; // Your email address
  var subject = "I want to Hire you"; // Email subject
  var body = "Hello!"; // Email body
  var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;
});

// Function to create a new log entry
function addDailyLog(date, text, imageSrc) {
  const logsContainer = document.getElementById("logs-container");

  // Create new log element
  const newLog = document.createElement("div");
  newLog.classList.add("daily-log");

  // Create container for date and content
  const logWrapper = document.createElement("div");

  // Create link element for date (clickable)
  const dateLink = document.createElement("a");
  dateLink.textContent = date;
  dateLink.classList.add("log-date");
  dateLink.href = "#"; // Prevent default link behavior

  // Add event listener to toggle expansion on click
  newLog.addEventListener("click", function () {
    newLog.classList.toggle("expanded");
  });

  logWrapper.appendChild(dateLink);

  // Create container for log content (initially hidden)
  const logContent = document.createElement("div");
  logContent.classList.add("log-content");

  // Create paragraphs for each topic with bullet points
  const topics = text.split("---"); // Split text into topics
  topics.forEach(topicText => {
    const topicParagraph = document.createElement("p");
    topicParagraph.innerHTML = `• ${topicText.trim().replace(/\n+/g, '<br>• ')}`; // Add bullet points
    logContent.appendChild(topicParagraph);
  });

  // Create image element (optional)
  if (imageSrc) {
    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = "Log Image";
    logContent.appendChild(image);
  }

  logWrapper.appendChild(logContent);
  newLog.appendChild(logWrapper);

  // Add new log to container
  logsContainer.appendChild(newLog);
}

// Daily log data (replace with your actual data)
const dailyLogs = [
  {
    date: "2024-05-06",
    text: `Welcome back python
    ---Learn Lambda functions with a expense tracker;
    --Prepare the files for Gscreations and GStravels
    
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1714962496/one_riqbrq.png"
  },
  {
    date: "2024-05-05",
    text: `This part is done
    ---GSTravels also
    
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1714962496/two_bfi9jj.png"
  },
  {
    date: "2024-05-04",
    text: `Don´t stop till is done
    ---GSCreations website done 
    
    
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1714962496/three_zxpkc5.png"
  },
  {
    date: "2024-05-03",
    text: `Webflow continues
    ---GSCreations almost ready;
    ---GSTravels also
    
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1714704589/Picture2_pmrvbi.png"
  },
  {
    date: "2024-05-01",
    text: `Webflow comeback
    ---Change GSCreations webflow to be actual;
    ---Continue working with webflow for the website;
    
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1714704602/Picture1_ud6fld.png"
  },
  {
    date: "2024-04-30",
    text: `Website important part
    ---The Luhn algorithm is done;
    ---Continue working with webflow for the website;
    ---Create videos for the tool typedesk
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1714449368/Picture1_afqiez.png"
  },
  {
    date: "2024-04-29",
    text: `Luhn algorithm
    ---Another project in Python. This is to implement the Luhn algorithm;
    ---Continue working with webflow for the website;
    ---Starting from the first tool reviewed- Toggl
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1714357535/py_uyt0hi.png"
  },
  {
    date: "2024-04-26",
    text: `Cypher is done
    ---First project is done;
    ---Continue working with webflow for the website;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713924571/codinglog_ohtnji.png"
  },
  {
    date: "2024-04-25",
    text: `Starting from the top
    ---First tutorial of python seems more advanced in terms of logic but feels good to "break it"
    ---Finnish website for the business;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713924571/codinglog_ohtnji.png"
  },
  {
    date: "2024-04-24",
    text: `Cypher vigenere continues
    ---Took some time to wrap the code around my head but now is good
    ---Doing my first travel plan for the business and  plan the partnership;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713924571/codinglog_ohtnji.png"
  },
  {
    date: "2024-04-23",
    text: `Cypher
    ---Continue the cipher in python;
    ---Calculations done;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713839351/Picture1_a86iaa.png"
  },
  {
    date: "2024-04-22",
    text: `Cypher
    ---Build a cypher in Python;
    ---Calculation for the business plan on going;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713470336/logdaily_ydjezs.png"
  },
  {
    date: "2024-04-19",
    text: `Many languages
    ---Last months I have been looking to so many languages that the syntax is a challenge to know about which one. But it's a good challenge;
    ---Business plan half way;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713470336/logdaily_ydjezs.png"
  },
  {
    date: "2024-04-18",
    text: `Let Python
    ---I did some exercises some time ago but I ams starting from the start;
    ---Business plan done now cash flow calculations;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713470262/jvs_dpblqy.png"
  },
  {
    date: "2024-04-17",
    text: `Done
    ---Web Design certification done;
    ---Business plan half way
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713322258/certification_yqdxfg.png"
  },
  {
    date: "2024-04-16",
    text: `One at a time
    ---Penguin done. Final project ahead;
    ---Working on a business plan;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713236701/penguin_vw0rcj.png"
  },
  {
    date: "2024-04-14",
    text: `I am starting seeing the end of the line
    ---The penguin on CSS star going good and soon I will start my last project;
    ---This c# app feels great to work on all skills that I have been practicing;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1713236556/Picture1_tu3p1c.png"
  },
  {
    date: "2024-04-12",
    text: `Getting there
    ---Ferris wheel is done. Next a penguin
    ---This c# app feels great to work on all skills that I have been practicing;
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712805033/logic_lg8rhm.png"
  },
  {
    date: "2024-04-11",
    text: `It rains cats and dogs
    ---Started my ferris wheel project to practice css animations
    ---Started the challenge of logic with C#, a app about cats and dogs
    ---CV and resume done, make plan for social media
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712805033/logic_lg8rhm.png"
  },
  {
    date: "2024-04-10",
    text: `4 down, one to go
    ---Last module of web design certification- CSS Animation and Transformations
    ---Fell more confident with loops byt more practice to come
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712720300/bool_ckutjk.png"
  },
  {
    date: "2024-04-09",
    text: `Good and bad days
    ---Another module almost ready from the webdesign certification.
    ---Do more exercised about do... and while. Tomorrow have to practice more to fully understand all steps
    ---Learn a bit more about ASP.net, continuation

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712287535/free_xcbuuq.png"
  },
  {
    date: "2024-04-08",
    text: `One more down
    ---Magazine is done and now is time to finnish another module with a new project test
    ---Working with do...while 
    ---Learn a bit more about ASP.net

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712547403/maganize_xudx4z.png"
  },
  {
    date: "2024-04-07",
    text: `Sunday comes along again

    ---Start adding styles and grid to the magazine. Been some time that I used grid for the last time.
    ---Was for loop time. Did the classic "Fizz Buzz" game;
    ---Trying to learn how to create this game in html;

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712498058/forloop_wjexr3.png"
  },
  {
    date: "2024-04-05",
    text: `More C#

    ---The magazine is stil a bunch of text, no styles added. Also using font awesome this time
    ---Working still with logic in C#. Today about variable scope and code blocks
    ---Finnishing the rest of my profiles and website online;

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712287535/free_xcbuuq.png"
  },
  {
    date: "2024-04-04",
    text: `One more project done

    ---The cityskiline is ready;Next building a magazine using CSS Grid
    ---Start the boolean project and conditionals in C#
    ---Cv and cover letter mostly ready;

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712200611/bulding_hnbgxl.png"
  },
  {
    date: "2024-04-03",
    text: `More organized training program

    ---The cityskiline is getting almost ready.Not the most thrilling project but I get more knowledge of css variables;
    ---Did the project of if-then alone and was able to finish it with the right results.
    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1712116167/c__daily_h65o4p.png"
  },
  {
    date: "2024-03-28",
    text: `CSS variables go

    ---New module of my web design course is about css variable and I am building a city skyline.
    ---More time spending with debuggin Visual Studio Code then with C# but could make half of the challenge;
    ---Went back again to C# in the evening to look again to the code. Make sense now. Tomorrow practice and practice

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711659088/morec_tunq53.png"
  },
  {
    date: "2024-03-27",
    text: `One step more near certification

    ---Another module finished for my web design certification, 2 more to go.
    ---Finished the project for C# about foreach and now I am doing a challenge that test these skills.

    
  `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711595869/c__daily_juzh3d.png"
  },
  {
    date: "2024-03-26",
    text: `More deep in C#

        ---Piano done. Now have another project certification to finnish this module- Do a documentation page
        ---In C#, first mode complete program written.Develop foreach and if-elseif-else structures to process array data in C#.
        
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711426971/piano_v71d53.png"
  },
  {
    date: "2024-03-25",
    text: `javascript helped.

        ---Another module in my web design certification. Starting building a piano with CSS
        ---Did more exercises about arrays and foreach in C# and also about how to write readable code. my previous knowledge of javascript was usefull.
        -- First code steps with Lua. Data variables, multi line string,concatenation, etc
        
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711426972/lua_de4ou1.png"
  },
  {
    date: "2024-03-24",
    text: `A code a day makes it worth the day

        ---Sunday with begin of working with arrays in C#. Syntax not much different then javascript
        ---Continue preparing the open application letters and CV
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711298051/arra_sczyw7.png"
  },
  {
    date: "2024-03-23",
    text: `A short day filled with some exercises

        ---To get more confortable with C#, did more exercises about if statements
        ---Finishing my store on printity and on Etsy to be able to launch the T-shirt business
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711231178/chameleon_rh0iub.png"
  },
  {
    date: "2024-03-22",
    text: `If I do it everyday, then I will learn more.

        ---Finished the cat, made with CSS. Next will be to do a piano and I finish another section on the Web Design Certification
        ---Lesson about if and then statement with C#. Will practice with more exercises tomorrow
        ---My T-shirt store start to get shape. Testing first models
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711147517/cat_x8qmtr.png"
  },
  {
    date: "2024-03-21",
    text: `Back to coding and feels good.

        ---My cat is almost finished.These were some of the skills I was lacking in CSS - creating images from a div
        ---Finished the lesson "Call methods from the .NET. The end was a small exercise about methods in .Net
        ---First line of code with Lua.
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1711057858/c_s5hhkj.png"
  },
  {
    date: "2024-03-17",
    text: `Before a short 2 day trip to go see Idles in Sweden I:

        ---I continued my Web Design Certification in Free Code Camp. Doing a cat with CSS😊
        ---Stateful vs Stateless methods in C#. First lines of code with C# in Visual Studio Code
        ---Installed Lua and add it to Visual Studio Code

      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1710706176/cat_html.png"
  },
  {
    date: "2024-03-16",
    text: `Today I created the log diary using html + css + js.What I am learning and building is:

        ---learning C# with Microsoft and Free Code Camp
        ---Finnish my Web Design certification with Free Code Camp
        ---Planning a T-shirt priting product with no code tools

      
      `,
    imageSrc: "https://res.cloudinary.com/dz35rr9j5/image/upload/v1710624068/Ricardo_moreira_g8ixnr.png"
  },





  // Add entries for future dates here
];

// Function to add all daily logs
function addDailyLogs() {
  const logsContainer = document.getElementById("logs-container");

  for (const logEntry of dailyLogs) {
    addDailyLog(logEntry.date, logEntry.text, logEntry.imageSrc);
  }
}

// Call the function to add logs
addDailyLogs();
