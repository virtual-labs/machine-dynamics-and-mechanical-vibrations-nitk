// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<a href='../index.html'>click here</a> to go to list of Experiments",
        "level1":  "Excellent! You should try another Experiment.",
        "level2":  "That was nice. May be next time you'll get all of them right! Good Luck!",
        "level3":  "Give another try at the simulator. You should be able to pick up few more things this time.",
        "level4":  "Probably you need to build some more understanding about the topic.",
        "level5":  "May be you should spend some more time with the concepts." // no comma here
    },
    "questions": [
                { // Question 1 - Multiple Choice, Multiple True Answers, Select Any
            "q": " A rod 20 mm diameters and 1.2 m long is simply supported at both end and has a mass of 2kg concentrated at the middle. Ignoring the weight of the rod, calculate the frequency of transverse vibrations. Take E=200 Gpa.?",
            "a": [
                {"option": "5.88Hz",               "correct": false},
                {"option": "23.52Hz",   "correct": true},
                {"option": "47.04Hz",      "correct": false},
                {"option": "11.76Hz",     "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 23.52Hz</p>" // no comma here
        },
       { // Question 2 - Multiple Choice, Multiple True Answers, Select All
            "q": " What is the value of logarithmic decrement if amplitude drops by 2 times between consecutive peaks ?",
            "a": [
                {"option": "0.693",           "correct": true},
                {"option": "0.301",                  "correct": false},
                {"option": "0.602 ",  "correct": false},
                {"option": "0.346",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is : 0.693 </p>" // no comma here
        },
        
  
{ // Question 7
            "q": " The amplitude of a damped system will not change with time.",
            "a": [
                {"option": "false",    "correct": true},
                {"option": "true",     "correct": false}
		


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span></p>"  // no comma here
        },


{ // Question 9
            "q": "For an under damped system ",
            "a": [
                {"option": "&omega;<sub>d</sub>&gt;&omega;<sub>n</sub> ",    "correct": false},
                {"option": "&omega;<sub>d</sub>&lt;&omega;<sub>n</sub>",     "correct": true},
		 {"option": "&omega;<sub>d</sub>=&omega;<sub>n</sub>",    "correct": false},
                {"option": "none of these",     "correct": false}
		
		


// no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span><br>Correct Answer Is: &omega;<sub>d</sub>&lt;&omega;<sub>n</sub></p>"  // no comma here
        },

{ // Question 10
            "q": " The magnification factor is the ratio of maximum amplitude and static deflection.",
            "a": [
                {"option": " true",    "correct": true},
                {"option": "false",     "correct": false}



// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:true</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:true</p>"  // no comma here
        }

    ]
};
